import { createContext, useState } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";
import getRandomProfilePhotos from "../utils/getRandomProfilePhoto";
import idGenerator from "../utils/idGenerator";

const StudentsContext = createContext(null);

export const StudentsProvider = ({ children }) => {
  const [students, _setStudents] = useLocalStorageState("students", []);
  const [selectedStudent, setSelectedStudent] = useState();

  const setStudents = async (school, _students) => {
    const ids = idGenerator(school.abbreviation, _students.length, 9, 100);

    const photos = await getRandomProfilePhotos(_students.length).then(({ results }) => {
      return results.map(({ picture }) => picture);
    });

    const newStudents = _students.map((student, index) => {
      return { ...student, id: ids[index], photo: photos[index] };
    });

    _setStudents(newStudents);
  };

  return (
    <StudentsContext.Provider
      value={{ students, setStudents, selectedStudent, setSelectedStudent }}
    >
      {children}
    </StudentsContext.Provider>
  );
};

export default StudentsContext;
