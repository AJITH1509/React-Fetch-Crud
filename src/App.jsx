import "./App.css";
import { AddStudents } from "./AddStudents";
import { Routes, Route, useNavigate } from "react-router-dom";
import { StudentList } from "./StudentList";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { EditStudents } from "./EditStudent";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="success" position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <div id="instituite-name">Guvi Instuite of Tehnology</div>
            </Typography>
            <Button onClick={() => navigate("/")} color="inherit">
              Home
            </Button>
            <Button onClick={() => navigate("/students")} color="inherit">
              Students
            </Button>
            <Button onClick={() => navigate("/addstudents")} color="inherit">
              Add Students
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/addstudents" element={<AddStudents />} />
        <Route path="/addstudents/edit/:id" element={<EditStudents />} />
      </Routes>
    </div>
  );
}
const Home = () => {
  return (
    <div className="home-image">
      <img src="https://media.istockphoto.com/id/1283536918/vector/welcome-concept-flat-vector-foe-website-happy-tiny-people-are-near-huge-text-cartoon-office.jpg?s=612x612&w=0&k=20&c=FnUDYa-hy_gskwzy0B9K7HWhOB9U-CSGV1Lx6zyO8io=" />
    </div>
  );
};
export default App;
