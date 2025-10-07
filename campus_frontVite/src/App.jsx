import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginComponent/LoginPage";
import AdminMenu from "./Components/LoginComponent/AdminMenu";
import StudentMenu from "./Components/LoginComponent/StudentMenu";
import SignUpPage from "./Components/LoginComponent/SignUpPage";
import DeleteStudent from "./Components/LoginComponent/DeleteStudent";
import LostItemSubmit from "./Components/ItemComponent/LostItemSubmit";
import LostItemReport from "./Components/ItemComponent/LostItemReport";
import AdminLostItemReport from "./Components/ItemComponent/AdminLostItemReport";
import FoundItemSubmit from "./Components/ItemComponent/FoundItemSubmit";
import FoundItemRedirected from "./Components/ItemComponent/FoundItemRedirected";
import FoundItemReport from "./Components/ItemComponent/FoundItemReport";
import Personal from "./Components/LoginComponent/Personal";
import StudentList from "./Components/LoginComponent/StudentList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Authentication & Registration */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/Register" element={<SignUpPage />} />

          {/* Admin & Student Menus */}
          <Route path="/AdminMenu" element={<AdminMenu />} />
          <Route path="/StudentMenu" element={<StudentMenu />} />

          {/* Student Details */}
          <Route path="/DeleteStudent" element={<DeleteStudent />} />
          <Route path="/Students" element={<StudentList />} />

          {/* Lost Item Routes */}
          <Route path="/LostSubmit" element={<LostItemSubmit />} />
          <Route path="/LostReport" element={<LostItemReport />} />
          <Route path="/AdminLostReport" element={<AdminLostItemReport />} />

          {/* Found Item Routes */}
          <Route path="/FoundSubmit" element={<FoundItemSubmit />} />
          <Route path="/Found-Redirected/:id" element={<FoundItemRedirected />} />
          <Route path="/FoundReport" element={<FoundItemReport />} />
          <Route path="/Personal" element={<Personal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;