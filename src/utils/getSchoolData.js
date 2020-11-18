const getSchoolData = () =>
  new Promise((resolve, reject) => {
    fetch(`/school/data.json`)
      .then((response) => response.json())
      .then(resolve)
      .catch(reject);
  });

export default getSchoolData;
