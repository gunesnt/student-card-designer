import { Font, StyleSheet, Document, Page, View, Text, Image } from "@react-pdf/renderer";

export const _Image = ({ src, style }) => {
  if (src && src.uri) src.uri = src.uri.replace("https://randomuser.me", "");
  return <Image {...{ src, style }} />;
};

const PDFRenderer = {
  Font,
  StyleSheet,
  Document,
  Page,
  View,
  Text,
  Image: _Image,
};

export default PDFRenderer;
