import {
  getGameInfo,
  getGames,
  getGenres as getApiGenres,
} from "@/services/GlobalApi";
import { ApiDeveloper } from "@/types/api/developer";
import { ApiGame } from "@/types/api/game";
import { ApiGenre } from "@/types/api/genre";
import { ApiPlatform } from "@/types/api/platform";
import { GameFilters } from "@/types/filters";
import { GameCardInfo } from "@/types/gameCardInfo";
import { GamePageInfo } from "@/types/gamePageInfo";
import { GenreInfo } from "@/types/genresInfo";
import { PaginatedGames } from "@/types/paginatedGames";

const DEFAULT_PAGE_SIZE = 20;
const BANNER_PAGE_SIZE = 5;

const createGameCard = (
  game: ApiGame,
  description: string | null = null
): GameCardInfo => ({
  id: game.id,
  name: game.name,
  imageUrl: game.background_image,
  metacritic: game.metacritic,
  platforms: game.parent_platforms.map(
    (platform: ApiPlatform) => platform.platform.slug
  ),
  genres: game.genres.map((genre: ApiGenre) => genre.name),
  released: game.released,
  description: description || "",
});

export const getGameCardsInfo = async (
  page: number,
  filters?: GameFilters
): Promise<PaginatedGames> => {
  try {
    const response = await getGames(page, filters, DEFAULT_PAGE_SIZE);
    const games = response.data.results;

    return {
      total: response.data.count,
      games: games.map((game: ApiGame) => createGameCard(game)),
    };
  } catch (error) {
    console.error("Error fetching game cards info:", error);
    throw error;
  }
};

export const getGamesBannerInfo = async (): Promise<PaginatedGames> => {
  try {
    const response = await getGames(1, {}, BANNER_PAGE_SIZE);
    const games = response.data.results;

    const gamesWithDescription = await Promise.all(
      games.map(async (game: ApiGame) => {
        try {
          const gamePageInfo = await getGamePageInfo(game.id);
          return createGameCard(game, gamePageInfo?.description);
        } catch (error) {
          console.error(
            `Error fetching description for game ${game.id}:`,
            error
          );
          return createGameCard(game);
        }
      })
    );

    return {
      total: response.data.count,
      games: gamesWithDescription,
    };
  } catch (error) {
    console.error("Error fetching game banner info:", error);
    throw error;
  }
};

export const getGamePageInfo = async (
  gameId: number
): Promise<GamePageInfo> => {
  try {
    const response = await getGameInfo(gameId);
    const gameInfo = response.data;

    const {
      id,
      name,
      background_image: imageUrl,
      metacritic,
      released,
      genres,
      parent_platforms,
      description_raw: description,
      developers,
      platforms,
      ratings,
      stores,
    } = gameInfo;

    const platformRequirements: {
      minimum: string;
      recommended: string;
    } = platforms.find(
      (platform: ApiPlatform) => platform.platform.slug === "pc"
    )?.requirements || { minimum: "", recommended: "" };

    return {
      id,
      name,
      imageUrl,
      metacritic,
      released,
      genres: genres.map((genre: ApiGenre) => genre.name),
      platforms: parent_platforms.map(
        (platform: ApiPlatform) => platform.platform.slug
      ),
      description,
      developers: developers.map((developer: ApiDeveloper) => developer.name),
      min_requirements: platformRequirements.minimum,
      recommended_requirements: platformRequirements.recommended,
      stores,
      metrics: {
        exceptional:
          ratings.find((rating) => rating.title === "exceptional")?.count ?? 0,
        recommended:
          ratings.find((rating) => rating.title === "recommended")?.count ?? 0,
        meh: ratings.find((rating) => rating.title === "meh")?.count ?? 0,
        skip: ratings.find((rating) => rating.title === "skip")?.count ?? 0,
      },
    };
  } catch (error) {
    console.error(`Error fetching game info for ID ${gameId}:`, error);
    throw error;
  }
};

export const getGenres = async (): Promise<GenreInfo[]> => {
  try {
    const genres = await getApiGenres();
    return genres.map((genre: ApiGenre) => ({
      id: genre.slug,
      text: genre.name,
      imageUrl: genre.image_background,
    }));
  } catch (error) {
    console.error("Error fetching genres:", error);
    throw error;
  }
};
