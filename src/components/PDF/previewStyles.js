import shadows from "../../style/shadows";

const defaultStyles = {
  document: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  page: {
    backgroundColor: "white",
    color: "black",
    fontSize: "12pt",
    padding: "20pt",
    boxShadow: shadows.smooth,
    transition: "width .5s, height .5s",
  },
  printSafeArea: {
    width: "100%",
    height: "100%",
    border: "1pt dashed red",
    overflow: "hidden",
  },
};

export default defaultStyles;
