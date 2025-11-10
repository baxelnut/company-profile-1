import { createContext, useContext } from "react";
// Custom hook
import useCompanyData from "../hooks/useCompanyData";

const CompanyContext = createContext();

export function CompanyProvider({ children }) {
  const { company, status } = useCompanyData();

  return (
    <CompanyContext.Provider value={{ company, status }}>
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompany() {
  return useContext(CompanyContext);
}
