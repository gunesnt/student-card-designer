import PDFRenderer from "./PDFRenderer";
import PreviewRenderer from "./PreviewRenderer";
import fixStyleNumbers from "../../utils/fixStyleNumbers";

export const Font = PDFRenderer.Font;

export const StyleSheet = {
  ...PDFRenderer.StyleSheet,
  create: (styles) => PDFRenderer.StyleSheet.create(fixStyleNumbers(styles)),
};

const SwitchRenderer = ({ compKey, preview, ...props }) => {
  const Comp = preview ? PreviewRenderer[compKey] : PDFRenderer[compKey];
  return <Comp {...props} />;
};

export const Document = (props) => <SwitchRenderer compKey="Document" {...props} />;
export const Page = (props) => <SwitchRenderer compKey="Page" {...props} />;
export const View = (props) => <SwitchRenderer compKey="View" {...props} />;
export const Text = (props) => <SwitchRenderer compKey="Text" {...props} />;
export const Image = (props) => <SwitchRenderer compKey="Image" {...props} />;

const PDF = {
  Font,
  StyleSheet,
  Document,
  Page,
  View,
  Text,
  Image,
};

export default PDF;
