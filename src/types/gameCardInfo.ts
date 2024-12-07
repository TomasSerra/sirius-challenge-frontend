import { Platform } from "./platforms";

export interface GameCardInfo {
    id: number;
    name: string;
    platforms: Platform[];
    imageUrl: string;
    metacritic: number;
    released: string;
    genres: string[];
    description: string;
}