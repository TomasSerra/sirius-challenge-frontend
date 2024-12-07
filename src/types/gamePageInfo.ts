import { ApiRating } from "./api/rating";
import { ApiStore } from "./api/store";
import { Platform } from "./platforms";

export interface GamePageInfo {
    id: number;
    name: string;
    imageUrl: string;
    metacritic: number;
    released: string;
    genres: string[];
    platforms: Platform[];
    description: string;
    developers: string[];
    min_requirements: string;
    recommended_requirements: string;
    ratings: ApiRating[];
    stores: ApiStore[];
}