import { useContext } from "react";
import previewStyles from "./previewStyles";
import DocTemplateContext from "../../contexts/DocTemplateContext";

const Document = ({ children }) => <div style={previewStyles.document}>{children}</div>;

const Page = ({ style = {}, children }) => {
  const { template } = useContext(DocTemplateContext) || {};

  return (
    <div
      style={{
        width: `${template.width}pt`,
        height: `${template.height}pt`,
        ...previewStyles.page,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const View = (props) => <div {...props} />;

const Text = (props) => <div {...props} />;

const Image = ({ src, style, alt = "" }) => <img {...{ src: src.uri, style, alt }} />;

const DesignPreview = {
  Document,
  Page,
  View,
  Text,
  Image,
};

export default DesignPreview;
