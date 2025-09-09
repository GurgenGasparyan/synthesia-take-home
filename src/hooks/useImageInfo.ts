import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getImageInfo } from "../api";
import { type Image } from "../types/Image";

export const useImageInfo = () => {
  const [data, setData] = useState<Image | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams();

  useEffect(() => {
    if(!id) {
      setError("Image ID is required");
      setIsLoading(false);
      return;
    }

    if (id) {
      getImageInfo(id).then(setData).catch(e => setError(e.message)).finally(() => setIsLoading(false));
    }
  }, [id]);

  return { data, isLoading, error };
};  
