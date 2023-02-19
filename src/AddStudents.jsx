import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export function AddStudents() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [standard, setStandard] = useState("");
  const [address, setAddress] = useState("");

  function addStudents() {
    const newStudents = {
      name: name,
      email: email,
      standard: standard,
      address: address,
    };
    fetch("https://63ea61c93363c87003683178.mockapi.io/student", {
      method: "POST",
      body: JSON.stringify(newStudents),
      headers: {
        "content-type": "application/json",
      },
    });
    navigate("/students");
  }

  return (
    <div>
      <h2 className="addstud-heading">Add New Studdents !!</h2>
      <div id="text-field">
        <TextField
          onChange={(event) => setName(event.target.value)}
          label="Name"
          variant="filled"
        />
        <TextField
          onChange={(event) => setEmail(event.target.value)}
          label="Email"
          variant="filled"
        />
        <TextField
          onChange={(event) => setStandard(event.target.value)}
          label="Standard"
          variant="filled"
        />
        <TextField
          onChange={(event) => setAddress(event.target.value)}
          label="Address"
          variant="filled"
        />
        <Button onClick={() => addStudents()} variant="contained">
          Add Students
        </Button>
      </div>
    </div>
  );
}
