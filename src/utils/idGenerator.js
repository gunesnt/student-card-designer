const fillSpace = (num, space) => {
  const fill = new Array(space).fill("0").join("");
  return `${fill}${num}`.substr(-space);
};

const idGenerator = (prefix, count, length, startNum) => {
  const numSpace = length - prefix.length;
  const ids = new Array(count)
    .fill()
    .map((_, index) => prefix + fillSpace(startNum + index, numSpace));
  return ids;
};

export default idGenerator;
