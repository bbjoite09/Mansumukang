import React, {useState, createContext, useContext} from 'react';

const SearchContext = createContext(null);

export function SearchContextProvider({children}) {
  const [keyword, onChangeText] = useState('');

  return (
    <SearchContext.Provider value={{keyword, onChangeText}}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === null) {
    throw new Error('useSearch must be used within a SearchContextProvider');
  }
  return context;
}

export default SearchContext;
