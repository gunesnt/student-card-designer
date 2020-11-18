const fixStyleNumbers = (styles) => {
  const newStyles = {};

  Object.keys(styles).forEach((key) => {
    const newStyle = { ...styles[key] };

    Object.keys(newStyle).forEach((k) => {
      const value = newStyle[k];
      if (typeof value === "number") newStyle[k] = `${value}pt`;
    });

    newStyles[key] = newStyle;
  });

  return newStyles;
};

export default fixStyleNumbers;
