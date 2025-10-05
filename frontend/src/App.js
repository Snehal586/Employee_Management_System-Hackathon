import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import EmployeeLeaves from "./pages/EmployeeLeaves";
import MyProfile from "./pages/MyProfile";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAnnouncements from "./pages/AdminAnnouncements";
import AdminLeaves from "./pages/AdminLeaves";
import EmployeeManagement from "./pages/EmployeeManagement";
import ForgotPass from "./pages/ForgotPass";
import ReasetPass from "./pages/ReasetPass";
import EmployeeAnnouncements from "./pages/EmployeeAnnouncements";








function ProtectedRoute({ children, role }) {
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  if (!user) return <Navigate to="/" replace />;
  if (role && user.role !== role)
    return <Navigate to="/" replace />;

  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/employee-announcements" element={<EmployeeAnnouncements />} />


        <Route path="/reset-password/:token" element={<ReasetPass />} />

        {/* Employee Routes */}
        <Route
          path="/employee-dashboard"
          element={
            <ProtectedRoute role="employee">
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee-leaves"
          element={
            <ProtectedRoute role="employee">
              <EmployeeLeaves />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-profile"
          element={
            <ProtectedRoute role="employee">
              <MyProfile />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-announcements"
          element={
            <ProtectedRoute role="admin">
              <AdminAnnouncements />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-leaves"
          element={
            <ProtectedRoute role="admin">
              <AdminLeaves />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee-management"
          element={
            <ProtectedRoute role="admin">
              <EmployeeManagement />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
