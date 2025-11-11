import { createContext, useContext } from "react";
// Custom hook
import useCompanyData from "../hooks/useCompanyData";

const CompanyContext = createContext();

export function CompanyProvider({ children }) {
  const { company, status, errorMsg } = useCompanyData();

  return (
    <CompanyContext.Provider value={{ company, status, errorMsg }}>
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompany() {
  return useContext(CompanyContext);
}
