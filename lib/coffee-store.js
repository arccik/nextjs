import { createApi } from "unsplash-js";

const unsplashApi = createApi({
  accessKey: process.env.UNSPLASH_API_ACCESS_KEY,
  //...other fetch options
});

const getUrlForCoffeeStores = (location, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&near=${location}&limit=${limit}`;
};

const getListOfCoffeePhotos = async () => {
  const photos = await unsplashApi.search.getPhotos({
    query: "coffee shop",
    perPage: 10,
    orientation: "squarish",
  });
  const unsplashResults = photos.response.results;

  return unsplashResults.map((result) => result.urls["small"]);
};

export const fetchCoffeeStores = async () => {
  const photos = await getListOfCoffeePhotos();
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: process.env.FOURSQUARE_API_KEY,
    },
  };
  const response = await fetch(
    getUrlForCoffeeStores("london", "coffee", 6),
    options
  );
  const data = await response.json();
  return data.results.map((venue, index) => {
    return {
      ...venue,
      imgUrl: photos[index],
    };
  });
};
