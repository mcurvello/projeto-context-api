import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function InfoProvider({ children }) {
  const valor = 150;
  const [nome, setNome] = useState("Marcio");
  return (
    <GlobalContext.Provider
      value={{
        valor,
        nome,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
