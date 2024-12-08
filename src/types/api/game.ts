import { ApiDeveloper } from "./developer";
import { ApiGenre } from "./genre";
import { ApiPlatform } from "./platform";
import { ApiRating } from "./rating";
import { ApiStore } from "./store";

export type ApiGame = {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  released: string;
  genres: ApiGenre[];
  parent_platforms: ApiPlatform[];
  description_raw: string;
  developers: ApiDeveloper[];
  platforms: ApiPlatform[];
  ratings: ApiRating[];
  stores: ApiStore[];
  website: string;
};
