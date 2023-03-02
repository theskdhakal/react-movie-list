import axios from "axios";

export const fetchMovies = async (str) => {
  //call api and get the movie details
  //   fetch("https://www.omdbapi.com/?apikey=dad41545&t-avatar")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));

  const { data } = await axios.get(
    "https://www.omdbapi.com/?apikey=dad41545&t=" + str
  );
  return data;
};
