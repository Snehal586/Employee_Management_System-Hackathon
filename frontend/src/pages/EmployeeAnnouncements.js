import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function EmployeeAnnouncements() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/api/announcements");
      setAnnouncements(res.data);
    };
    fetchData();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "260px", padding: "40px", color: "#fff", flex: 1 }}>
        <h2>📢 Company Announcements</h2>
        {announcements.map((a) => (
          <div
            key={a.id}
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "15px",
              borderRadius: "10px",
              margin: "10px 0",
            }}
          >
            <h4>{a.title}</h4>
            <p>{a.message}</p>
            <small>{new Date(a.created_at).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeAnnouncements;
