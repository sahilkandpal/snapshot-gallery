import React, { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const imageContext = createContext({
  data: null,
  loading: false,
  error: false,
  fetchData: () => {},
});
export const ImageContextProvider = ({ children }) => {
  const [url, setUrl] = useState(
    "https://api.pexels.com/v1/curated?page=1&per_page=15"
  );
  const auth = "563492ad6f91700001000001a6302b3004b54911be85dfca7876986b";
  const { data, loading, error } = useFetch(url, auth);
  const [imgData, setImgData] = useState({
    data: null,
    loading: false,
    error: false,
  });
  useEffect(() => {
    setImgData({ data, loading, error });
  }, [data, loading, error]);

  const fetchData = (query) => {
    const searchUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`;
    setUrl(searchUrl);
  };
  return (
    <imageContext.Provider value={{ imgData, fetchData }}>
      {children}
    </imageContext.Provider>
  );
};

export const useImageContext = () => {
  const { imgData, fetchData } = useContext(imageContext);
  return { imgData, fetchData };
};

export default ImageContextProvider;
