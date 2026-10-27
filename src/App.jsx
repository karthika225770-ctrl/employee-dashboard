import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import EmployeeForm from "./pages/EmployeeForm.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/employee-form">Employee Form</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-form" element={<EmployeeForm />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;