import { useEffect, useState } from "react";

export default function useCompanyData() {
  const [company, setCompany] = useState(null);
  const [status, setStatus] = useState("loading"); // 'loading' | 'error' | 'ready'
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    fetch("/data/company.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch company.json");
        return res.json();
      })
      .then((data) => {
        setCompany(data);
        setStatus("ready");
      })
      .catch((err) => {
        setStatus("error");
        setErrorMsg(err.message);
      });
  }, []);

  return { company, status, errorMsg };
}
