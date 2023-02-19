import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StudentDetails } from "./StudentDetails";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const StudentList = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState([]);

  const getStudents = () => {
    fetch("https://63ea61c93363c87003683178.mockapi.io/student")
      .then((response) => response.json())
      .then((data) => setStudent(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getStudents();
  }, []);

  const deleteStudent = async (id) => {
    await fetch(`https://63ea61c93363c87003683178.mockapi.io/student/${id}`, {
      method: "DELETE",
    });
    getStudents();
  };

  return (
    <div>
      <h2 style={{ textDecoration: "underline" }}>Students List</h2>
      <div className="student-details-container">
        {student.map((data) => (
          <StudentDetails
            key={data.id}
            data={data}
            deleteIcon={
              <IconButton
                onClick={() => deleteStudent(data.id)}
                aria-label="delete"
                color="error"
              >
                <DeleteIcon />
              </IconButton>
            }
            editIcon={
              <IconButton
                onClick={() => navigate(`/addstudents/edit/${data.id}`)}
                aria-label="edit"
                color="secondary"
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
};
