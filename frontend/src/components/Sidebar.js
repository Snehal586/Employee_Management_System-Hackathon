import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Users,
  ClipboardList,
  Megaphone,
  User,
  LogOut,
} from "lucide-react";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Automatically detect logged-in user's role
  const storedUser = localStorage.getItem("loggedUser");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const role = user?.role || "employee"; // default to employee if missing

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/");
  };

  const navLinks =
    role === "admin"
      ? [
          { name: "Dashboard", path: "/admin-dashboard", icon: <Home size={18} /> },
          { name: "Announcements", path: "/admin-announcements", icon: <Megaphone size={18} /> },
          { name: "Leaves", path: "/admin-leaves", icon: <ClipboardList size={18} /> },
          { name: "Employees", path: "/employee-management", icon: <Users size={18} /> },
          

        ]
      : [
          { name: "Dashboard", path: "/employee-dashboard", icon: <Home size={18} /> },
          { name: "My Profile", path: "/my-profile", icon: <User size={18} /> },
          { name: "Leaves", path: "/employee-leaves", icon: <ClipboardList size={18} /> },
          { name: "Announcements", path: "/employee-announcements", icon: <Megaphone size={18} /> },

        ];

  return (
    <div
      style={{
        width: "230px",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        background: "rgba(255, 255, 255, 0.12)",
        backdropFilter: "blur(25px)",
        borderRight: "2px solid rgba(255,255,255,0.2)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "30px 0",
        boxShadow: "0 0 30px rgba(255,255,255,0.15)",
      }}
    >
      <div>
        <h2
          style={{
            color: "#fff",
            textAlign: "center",
            marginBottom: "40px",
            background: "linear-gradient(45deg, #ff9966, #ff5e62)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {role === "admin" ? "Admin Panel" : "Employee Panel"}
        </h2>

        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              width: "170px",
              padding: "10px 15px",
              margin: "8px auto",
              borderRadius: "10px",
              textDecoration: "none",
              color:
                location.pathname === link.path ? "#fff" : "rgba(255,255,255,0.7)",
              background:
                location.pathname === link.path
                  ? "linear-gradient(45deg, #ff9966, #ff5e62)"
                  : "transparent",
              transition: "0.3s ease",
              fontWeight: "bold",
            }}
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        style={{
          width: "170px",
          margin: "0 auto 20px",
          padding: "10px",
          borderRadius: "10px",
          border: "none",
          background: "linear-gradient(45deg, #6a82fb, #a777e3)",
          color: "#fff",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "0.3s",
        }}
        onMouseEnter={(e) =>
          (e.target.style.background = "linear-gradient(45deg, #ff9966, #ff5e62)")
        }
        onMouseLeave={(e) =>
          (e.target.style.background = "linear-gradient(45deg, #6a82fb, #a777e3)")
        }
      >
        <LogOut size={16} style={{ marginRight: "8px" }} />
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
