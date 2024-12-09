import {
  getGameInfo,
  getGames,
  getGenres as getApiGenres,
} from "@/services/GlobalApi";
import { ApiDeveloper } from "@/types/api/developer";
import { ApiGenre } from "@/types/api/genre";
import { ApiPlatform } from "@/types/api/platform";
import { GameFilters } from "@/types/filters";
import { GamePageInfo } from "@/types/gamePageInfo";
import { GenreInfo } from "@/types/genresInfo";
import { PaginatedGames } from "@/types/paginatedGames";

export const getGameCardsInfo = async (
  page: number,
  filters?: GameFilters
): Promise<PaginatedGames> => {
  const pageSize = 20;
  return getGames(page, filters, pageSize)
    .then(async (response) => {
      const games = response.data.results;
      return {
        total: response.data.count,
        games: games.map((game: any) => ({
          id: game.id,
          name: game.name,
          imageUrl: game.background_image,
          metacritic: game.metacritic,
          platforms: game.parent_platforms.map(
            (platform: ApiPlatform) => platform.platform.slug
          ),
          genres: game.genres.map((genre: ApiGenre) => genre.name),
          released: game.released,
          description: game.description_raw,
        })),
      };
    })
    .catch((error) => {
      console.error("Error fetching game card info:", error);
      throw error;
    });
};

const createBannerObject = (game: any, description: string | null): any => {
  return {
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
  };
};

export const getGamesBannerInfo = async (): Promise<PaginatedGames> => {
  return getGames(1, {}, 5)
    .then(async (response) => {
      const games = response.data.results;
      const gamesWithDescription = await Promise.all(
        games.map(async (game: any) => {
          try {
            const gamePageInfo = await getGamePageInfo(game.id);
            return createBannerObject(game, gamePageInfo?.description);
          } catch (error) {
            console.error(
              `Error fetching description for game ${game.id}:`,
              error
            );
            return createBannerObject(game, null);
          }
        })
      );
      return {
        total: response.data.count,
        games: gamesWithDescription,
      };
    })
    .catch((error) => {
      console.error("Error fetching game banner info:", error);
      throw error;
    });
};

export const getGamePageInfo = async (
  gameId: number
): Promise<GamePageInfo> => {
  return getGameInfo(gameId)
    .then((response) => {
      const gameInfo = response.data;
      const minRequirements = gameInfo.platforms.filter(
        (platform: ApiPlatform) => platform.platform.slug === "pc"
      )[0]?.requirements.minimum;
      const recommendedRequirements = gameInfo.platforms.filter(
        (platform: ApiPlatform) => platform.platform.slug === "pc"
      )[0]?.requirements.recommended;
      return {
        id: gameInfo.id,
        name: gameInfo.name,
        imageUrl: gameInfo.background_image,
        metacritic: gameInfo.metacritic,
        released: gameInfo.released,
        genres: gameInfo.genres.map((genre: ApiGenre) => genre.name),
        platforms: gameInfo.parent_platforms.map(
          (platform: ApiPlatform) => platform.platform.slug
        ),
        description: gameInfo.description_raw,
        developers: gameInfo.developers.map(
          (developer: ApiDeveloper) => developer.name
        ),
        min_requirements: minRequirements,
        recommended_requirements: recommendedRequirements,
        stores: gameInfo.stores,
        metrics: {
          exceptional: gameInfo.ratings.filter(
            (rating) => rating.title === "exceptional"
          )[0]?.count,
          recommended: gameInfo.ratings.filter(
            (rating) => rating.title === "recommended"
          )[0]?.count,
          meh: gameInfo.ratings.filter((rating) => rating.title === "meh")[0]
            ?.count,
          skip: gameInfo.ratings.filter((rating) => rating.title === "skip")[0]
            ?.count,
        },
      };
    })
    .catch((error) => {
      console.error("Error fetching game info:", error);
      throw error;
    });
};

export const getGenres = (): Promise<GenreInfo[]> => {
  return getApiGenres()
    .then((response) => {
      return response.map((genre: ApiGenre) => ({
        imageUrl: genre.image_background,
        text: genre.name,
        id: genre.slug,
      }));
    })
    .catch((error) => {
      console.error("Error fetching genres:", error);
      throw error;
    });
};
