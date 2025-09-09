import { BASE_IMAGE_INFO_URL } from "./constants/api";
import type { Image } from "./types/Image";

export const getImageInfo = async (id: string): Promise<Image> => {
  const response = await fetch(BASE_IMAGE_INFO_URL.replace("{id}", id));
  if (!response.ok) {
    throw new Error("Failed to fetch image info");
  }
  return response.json();
};

