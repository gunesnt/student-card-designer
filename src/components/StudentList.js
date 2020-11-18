import { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

import StudentsContext from "../contexts/StudentsContext";
import getRandomProfilePhotos from "../utils/getRandomProfilePhoto";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

const StudentList = () => {
  const classes = useStyles();
  const { students, selectedStudent, setSelectedStudent } = useContext(StudentsContext);
  const [studentPhotos, setStudentPhotos] = useState([]);

  useEffect(() => {
    if (students.length)
      getRandomProfilePhotos(students.length).then(({ results }) => {
        const photos = results.map(({ picture }) => picture);
        setStudentPhotos(photos);
      });
  }, [students]);

  return !students ? null : (
    <List
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Students ({students.length})
        </ListSubheader>
      }
    >
      {students.map((student, index) => {
        const fullName = `${student.firstName} ${student.lastName}`;
        return (
          <ListItem
            key={index}
            selected={index === selectedStudent}
            onClick={() => setSelectedStudent(index)}
            button
          >
            <ListItemAvatar>
              <Avatar
                className={classes.avatar}
                alt={fullName}
                src={studentPhotos.length ? studentPhotos[index].thumbnail : null}
              />
            </ListItemAvatar>
            <ListItemText primary={fullName} secondary={student.dateOfBirth} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default StudentList;
