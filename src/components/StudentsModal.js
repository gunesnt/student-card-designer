import { useContext } from "react";
import ModalsContext from "../contexts/ModalsContext";
import ResponsiveModal from "./ResponsiveModal";
import StudentTable from "./StudentsTable";

const StudentsModal = () => {
  const { studentsOpen, closeStudentsModal } = useContext(ModalsContext);
  return (
    <ResponsiveModal
      id="students-review"
      open={studentsOpen}
      onClose={closeStudentsModal}
      maxWidth="sm"
      title="Students Review"
    >
      <StudentTable />
    </ResponsiveModal>
  );
};

export default StudentsModal;
