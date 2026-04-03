import { createContext, useState } from "react";
import { transactionsData } from "../data/mockData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [transactions, setTransactions] = useState(transactionsData);
  const [role, setRole] = useState("viewer");

  return (
    <AppContext.Provider value={{
      transactions,
      setTransactions,
      role,
      setRole
    }}>
      {children}
    </AppContext.Provider>
  );
};