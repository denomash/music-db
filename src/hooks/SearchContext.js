/**
 * @prettier
 */

import React, { useContext, useState } from "react";

const SearchContext = React.createContext([]);

const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(`useSearch must be used within a SearchProvider`);
  }
  return context;
};

const SearchProvider = (props) => {
  const [search, setSearch] = useState({});
  return <SearchContext.Provider value={[search, setSearch]} {...props} />;
};

export { useSearch, SearchProvider };
