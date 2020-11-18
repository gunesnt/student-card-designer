import { createContext, useState, useEffect } from "react";
import getSchoolData from "../utils/getSchoolData";

const SchoolContext = createContext(null);

export const SchoolProvider = ({ children }) => {
  const [school, setSchool] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSchoolData().then((result) => {
      setSchool(result);
      setLoading(false);
    });
  }, []); // eslint-disable-line

  return <SchoolContext.Provider value={{ school, loading }}>{children}</SchoolContext.Provider>;
};

export default SchoolContext;
