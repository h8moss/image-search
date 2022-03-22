import { ImageModel } from "../types";

const imageFetch = async (max: number): Promise<ImageModel[]> => {
  const response = await fetch("/img_info.json");
  const info = await response.json();

  return [...info].map((v) => ({
    url: v.url,
    tags: v.tags,
    uploader: v.uploader,
  }));
};

export default imageFetch;
