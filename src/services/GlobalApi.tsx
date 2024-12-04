import axios from "axios";

const apiKey: string = import.meta.env.VITE_API_KEY;

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: apiKey },
});

const getGenres = async () => {
  try {
    return await axiosCreate.get("/genres");
  } catch (error) {
    console.error("Error fetching genres:", error);
    throw error;
  }
};

const getGames = async (page: number) => {
  const pageSize: number = 4;
  try {
    return await axiosCreate.get("/games", {
      params: { page: page, page_size: pageSize }, 
    });
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
};

const getGameInfo = async (id: number) => {
  try {
    return await axiosCreate.get(`/games/${id}`);
  } catch (error) {
    console.error("Error fetching game info:", error);
    throw error;
  }
}

export { getGenres, getGames, getGameInfo };
