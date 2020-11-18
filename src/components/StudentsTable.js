import React, { useContext } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";

import StudentsContext from "../contexts/StudentsContext";

const BasicTable = ({ maxHeight = 440 }) => {
  const { students } = useContext(StudentsContext);

  return (
    <TableContainer style={{ maxHeight }} elevation={0}>
      <Table stickyHeader aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Full Name</TableCell>
            <TableCell>Date Of Birth</TableCell>
            <TableCell>Gender</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {students.map((student, index) => {
            const fullName = `${student.firstName} ${student.lastName}`;
            return (
              <TableRow key={index}>
                <TableCell>
                  <Avatar src={student.photo.thumbnail} alt={fullName} />
                </TableCell>
                <TableCell>{student.id}</TableCell>
                <TableCell>{fullName}</TableCell>
                <TableCell>{student.dateOfBirth}</TableCell>
                <TableCell>{student.gender}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
