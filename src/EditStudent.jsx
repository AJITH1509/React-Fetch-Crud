import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const EditStudents = () => {
  const [student, setStudent] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://63ea61c93363c87003683178.mockapi.io/student/${id}`)
      .then((data) => data.json())
      .then((data) => setStudent(data));
  }, [id]);
  return student ? <EditStudentForm data={student} /> : <h1>loading...</h1>;
};

const EditStudentForm = ({ data }) => {
  const navigate = useNavigate();
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [standard, setStandard] = useState(data.standard);
  const [address, setAddress] = useState(data.address);

  function updateStudent() {
    const newStudents = {
      name: name,
      email: email,
      standard: standard,
      address: address,
    };
    fetch(`https://63ea61c93363c87003683178.mockapi.io/student/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(newStudents),
      headers: {
        "content-type": "application/json",
      },
    });
    navigate("/students");
  }

  return (
    <div id="text-field">
      <TextField
        onChange={(event) => setName(event.target.value)}
        value={name}
        label="Name"
        variant="filled"
      />
      <TextField
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        label="Email"
        variant="filled"
      />
      <TextField
        onChange={(event) => setStandard(event.target.value)}
        value={standard}
        label="Standard"
        variant="filled"
      />
      <TextField
        onChange={(event) => setAddress(event.target.value)}
        value={address}
        label="Address"
        variant="filled"
      />
      <Button
        onClick={() => updateStudent()}
        color="secondary"
        variant="contained"
      >
        Update
      </Button>
    </div>
  );
};
