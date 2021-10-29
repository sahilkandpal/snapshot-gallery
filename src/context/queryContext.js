import React, { useState, createContext, useContext } from "react";

export const queryContext = createContext({
  query: "",
  changeQuery: () => {},
});
export const QueryContextProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const changeQuery = (value) => {
    setQuery(value);
  };
  return (
    <queryContext.Provider value={{ query, changeQuery }}>
      {children}
    </queryContext.Provider>
  );
};

export const useQueryContext = () => {
  const { query, changeQuery } = useContext(queryContext);
  return { query, changeQuery };
};
