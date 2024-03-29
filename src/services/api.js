const getDataFromApi = () => {
  return fetch('https://hp-api.onrender.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
      const dataFromApi = data.map((character) => {
        return {
          id: character.id,
          image: character.image,
          name: character.name,
          house: character.house,
          species: character.species,
          alive: character.alive,
          gender: character.gender,
          ancestry: character.ancestry
        };
      });
      return dataFromApi;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};
export default getDataFromApi;
