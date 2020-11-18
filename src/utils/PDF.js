import { PAGE_SIZES } from "../constants/PDF";

// Copied from @react-pdf/renderer
const _getPageSize = (size, orientation = "portrait") => {
  let result;

  if (typeof size === "string") {
    result = PAGE_SIZES[size.toUpperCase()];
  } else if (Array.isArray(size)) {
    result = size;
  } else if (typeof size === "number") {
    result = [size];
  } else if (typeof size === "object" && size.width) {
    result = [size.width, size.height];
  } else {
    throw new Error(`Invalid Page size: ${size}`);
  }

  return orientation === "portrait"
    ? {
        width: result[0],
        height: result[1],
      }
    : {
        width: result[1],
        height: result[0],
      };
};

export const getPageSize = (...props) => {
  const { width, height } = _getPageSize(...props);
  return { width: `${width}pt`, height: `${height}pt` };
};
