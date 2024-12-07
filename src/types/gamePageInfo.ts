import { ApiStore } from "./api/store";
import { Platform } from "./platforms";

export interface GamePageInfo {
    id: number;
    name: string;
    metacritic: number;
    platforms: Platform[];
    genres: string[];
    released: string;
    description: string;
    imageUrl: string;
    developers: string[];
    min_requirements: string,
    recommended_requirements: string,
    metrics: {
        exceptional: number;
        recommended: number;
        meh: number;
        skip: number;
    }
    stores: ApiStore[];
}