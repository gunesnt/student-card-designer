const isJson = (item) => {
  const str = typeof item !== "string" ? JSON.stringify(item) : item;

  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export default isJson;
