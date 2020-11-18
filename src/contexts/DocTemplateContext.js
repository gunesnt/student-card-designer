import { createContext } from "react";
import { PAGE_SIZES } from "../constants/PDF";
import useLocalStorageState from "../hooks/useLocalStorageState";
import onLocalStorage from "../utils/onLocalStorage";

const DocTemplateContext = createContext(null);

const LOCAL_STORAGE_KEY = "doc-template-settings";
const DEFAULT_TEMPLATE = {
  sizeName: "A6",
  orientation: "portrait",
  width: PAGE_SIZES["A6"][0],
  height: PAGE_SIZES["A6"][1],
  color: { hex: "#03a9f4" },
  fontFamily: "Open Sans",
};

export const DocTemplateProvider = ({ children }) => {
  const [template, setTemplate] = useLocalStorageState(LOCAL_STORAGE_KEY, DEFAULT_TEMPLATE);

  const updateTemplate = (props) => setTemplate({ ...template, ...props });

  const setSizeName = (newSizeName) => {
    const [newWidth, newHeight] = PAGE_SIZES[newSizeName];
    const isPortrait = Number(template.width) <= Number(template.height);

    updateTemplate({
      sizeName: newSizeName,
      width: isPortrait ? newWidth : newHeight,
      height: isPortrait ? newHeight : newWidth,
    });
  };

  const setDimensions = (newWidth = template.width, newHeight = template.height) => {
    const isPortrait = Number(newWidth) <= Number(newHeight);

    updateTemplate({
      width: newWidth,
      height: newHeight,
      orientation: isPortrait ? "portrait" : "landscape",
    });
  };

  const setOrientation = (newOrientation) => {
    const minDim = Math.min(template.width, template.height).toString();
    const maxDim = Math.max(template.width, template.height).toString();

    updateTemplate({
      width: newOrientation === "portrait" ? minDim : maxDim,
      height: newOrientation === "portrait" ? maxDim : minDim,
      orientation: newOrientation,
    });
  };

  const setTemplateProp = (props) => {
    if (props.sizeName) {
      setSizeName(props.sizeName);
    } else if (props.width || props.height) {
      setDimensions(props.width, props.height);
    } else if (props.orientation) {
      setOrientation(props.orientation);
    } else {
      updateTemplate(props);
    }
  };

  return (
    <DocTemplateContext.Provider value={{ template, setTemplate, setTemplateProp }}>
      {children}
    </DocTemplateContext.Provider>
  );
};

export const getDocTemplateData = () => onLocalStorage.getItem(LOCAL_STORAGE_KEY);

export default DocTemplateContext;
