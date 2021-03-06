import React, { useState, createContext, useContext } from "react";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [search, setSearch] = useState("");   // useState({ query : "", date : new Date().getTime() })
  return (
    <SearchContext.Provider
      value={[search, setSearch]}
      {...props}
    ></SearchContext.Provider>
  );
};

export const useSearchStore = () => useContext(SearchContext);
