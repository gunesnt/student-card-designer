const getRandomProfilePhotos = (count) =>
  new Promise((resolve, reject) => {
    fetch(`https://randomuser.me/api/?inc=picture&results=${count}`)
      .then((response) => response.json())
      .then(resolve)
      .catch(reject);
  });

export default getRandomProfilePhotos;
