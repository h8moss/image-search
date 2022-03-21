import { ImageModel } from "../types";

const imageFetch = async (max: number): Promise<ImageModel[]> => {
  let result = [];

  // while result.length < max, but keep a counter called i
  for (let i = 0; result.length < max; i++) {
    const response = await fetch(
      `https://wallhaven.cc/api/v1/search?sorting=random&page=${i}`
    );

    // if we get timed out for example
    if (response.status >= 400) {
      break;
    }

    const body = JSON.parse(await response.text());
    result.push({
      url: body.url,
      uploader: body.uploader,
      tags: body.tags.map((t: any) => t.name),
    });
  }

  return result;
};

export default imageFetch;
