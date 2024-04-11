import "./App.css";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCase from "./pages/AddCase";
import ViewEmployees from "./pages/ViewEmployees";

function App() {
  return (
    <div className="App">
      <Box sx={{ display: "flex", minHeight: "100vh", width: "100%" }}>
        <Sidebar />
        <Box sx={{ flex: 1 }}>
          <Box height="100%" backgroundColor="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/addcase" element={<AddCase />} />
              <Route path="/viewall" element={<ViewEmployees />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
