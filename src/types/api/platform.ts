import { Platform } from "../platforms";

export type ApiPlatform = {
  platform: {
    name: string;
    slug: Platform;
  };
  requirements: {
    minimum: string;
    recommended: string;
  };
};
