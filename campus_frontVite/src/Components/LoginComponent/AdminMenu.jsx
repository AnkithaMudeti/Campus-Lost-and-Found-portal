import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (name) => setOpenDropdown(openDropdown === name ? null : name);

  return (
    <div className="mx-auto px-4">
      {/* Header */}
      <div className="text-center bg-green-200 py-4">
        <h1 className="text-4xl font-bold text-green-500 underline italic">
          Lost Found Admin Menu
        </h1>
      </div>

      {/* Navbar */}
      <nav className="bg-yellow-400 py-2">
        <div className="flex items-center justify-between px-4">
          
          {/* Students Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("students")}
              className="flex items-center px-3 py-2 text-black font-bold hover:bg-yellow-500 rounded"
            >
              Students <ChevronDown className={`w-4 h-4 ml-1 ${openDropdown === "students" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "students" && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded shadow-lg z-50 border border-gray-200">
                <div className="py-2">
                  <Link to="/Students" className="block px-4 py-2 hover:bg-gray-100">
                    Student List
                  </Link>
                  <Link to="/DeleteStudent" className="block px-4 py-2 hover:bg-gray-100">
                    Remove Student
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Lost Items Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("lostItems")}
              className="flex items-center px-3 py-2 text-black font-bold hover:bg-yellow-500 rounded"
            >
              Lost Items <ChevronDown className={`w-4 h-4 ml-1 ${openDropdown === "lostItems" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "lostItems" && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded shadow-lg z-50 border border-gray-200">
                <div className="py-2">
                  <Link to="/LostReport" className="block px-4 py-2 hover:bg-gray-100">
                    Lost Item List
                  </Link>
                  <Link to=" " className="block px-4 py-2 hover:bg-gray-100">
                    Lost Item Track
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Found Items Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("foundItems")}
              className="flex items-center px-3 py-2 text-black font-bold hover:bg-yellow-500 rounded"
            >
              Found Items <ChevronDown className={`w-4 h-4 ml-1 ${openDropdown === "foundItems" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "foundItems" && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded shadow-lg z-50 border border-gray-200">
                <div className="py-2">
                  <Link to="/FoundReport" className="block px-4 py-2 hover:bg-gray-100">
                    Found Item List
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Reports Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("reports")}
              className="flex items-center px-3 py-2 text-black font-bold hover:bg-yellow-500 rounded"
            >
              Reports <ChevronDown className={`w-4 h-4 ml-1 ${openDropdown === "reports" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "reports" && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded shadow-lg z-50 border border-gray-200">
                <div className="py-2">
                  <Link to="/FoundReport" className="block px-4 py-2 hover:bg-gray-100">
                    Found Item Report
                  </Link>
                  <Link to="/LostReport" className="block px-4 py-2 hover:bg-gray-100">
                    Lost Item Report
                  </Link>
                  <Link to="/Analysis" className="block px-4 py-2 hover:bg-gray-100">
                    Lost & Found Analysis
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Logout */}
          <Link
            to="/"
            className="px-3 py-2 bg-red-500 text-white font-bold hover:bg-red-600 rounded"
          >
            Logout
          </Link>
        </div>
      </nav>

      {/* Dashboard Cards removed until real counts are wired */}

      {/* Welcome Card */}
      <div className="bg-green-100 p-6 rounded shadow mt-6 text-center">
        <h3 className="text-xl font-bold">Welcome to Admin Dashboard</h3>
        <p>Manage students, track lost and found items, and generate reports.</p>
      </div>
    </div>
  );
};

export default AdminMenu;
