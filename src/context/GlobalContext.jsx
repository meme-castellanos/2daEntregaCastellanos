import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  //const [alert, setAlert]= useState (false);

return (
    <GlobalContext.Provider
      value={{ loading, setLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
}