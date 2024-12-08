import { AxiosApiResponse } from "@/types/api/axiosInterface";
import { ApiGame } from "@/types/api/game";
import { ApiGenre } from "@/types/api/genre";
import { ApiPaginatedGames } from "@/types/api/paginatedGames";
import { GameFilters } from "@/types/filters";
import axios from "axios";

const apiKey: string = import.meta.env.VITE_API_KEY;

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { 
    key: apiKey,
    search_precise: true
   },
});

const getGenres = async (): Promise<ApiGenre[]> => {
  try {
    return (await axiosCreate.get("/genres")).data.results;
  } catch (error) {
    console.error("Error fetching genres:", error);
    throw error;
  }
};



const getGames = async (page: number, filters: GameFilters = {}, pageSize: number): Promise<AxiosApiResponse<ApiPaginatedGames>> => {
  try {
    return await axiosCreate.get("/games", {
      params: {
        page,
        page_size: pageSize,
        ...filters,
      },
    });
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
};

const getGameInfo = async (id: number): Promise<AxiosApiResponse<ApiGame>> => {
  try {
    return await axiosCreate.get(`/games/${id}`);
  } catch (error) {
    console.error("Error fetching game info:", error);
    throw error;
  }
}

export { getGenres, getGames, getGameInfo };
