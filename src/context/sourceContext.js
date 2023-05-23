import { useContext, createContext, useState } from 'react';

export const SourceContext = createContext();

export const SourceProvider = ({ children }) => {
  const [source, setSource] = useState(0);

  function changeSourceType(typeValue) {
    setSource(typeValue);
  }

  return (
    <SourceContext.Provider value={{ source, setSource, changeSourceType }}>
      {children}
    </SourceContext.Provider>
  );
};

export const useSource = () => useContext(SourceContext);
