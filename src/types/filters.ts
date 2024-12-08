import { Ordering } from "./ordering";

export interface GameFilters {
  search?: string;
  parent_platforms?: string;
  genres?: string;
  ordering?: Ordering;
  metacritic?: string;
}
