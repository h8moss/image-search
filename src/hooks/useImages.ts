import { useEffect, useState } from "react";
import imageFetch from "../services/imageFetch";
import { ImageModel } from "../types";

const useImages = () => {
  let [allImages, setAllImages] = useState<ImageModel[] | null>(null);
  let [images, setImages] = useState<ImageModel[] | null>(null);
  let [search, setSearch] = useState("");

  useEffect(() => {
    imageFetch(100).then((v) => setAllImages(v));
  });

  useEffect(() => {
    setImages(allImages);
  }, [allImages, search]);

  return {
    images,
    setSearch,
    getSearch: () => search,
  };
};

export default useImages;
