import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function AdminAnnouncements() {
  const [announcements, setAnnouncements] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const fetchAnnouncements = async () => {
    const res = await axios.get("http://localhost:5000/api/announcements");
    setAnnouncements(res.data);
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/announcements", { title, message });
    setTitle("");
    setMessage("");
    fetchAnnouncements();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/announcements/${id}`);
    fetchAnnouncements();
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "260px", padding: "40px", color: "#fff", flex: 1 }}>
        <h2>📢 Manage Announcements</h2>
        <form onSubmit={handleAdd} style={{ marginBottom: "30px" }}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              margin: "10px 0",
            }}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              margin: "10px 0",
            }}
          />
          <button
            type="submit"
            style={{
              background: "linear-gradient(45deg, #6a82fb, #a777e3)",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            ➕ Add Announcement
          </button>
        </form>

        <h3>All Announcements</h3>
        <div>
          {announcements.map((a) => (
            <div
              key={a.id}
              style={{
                background: "rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "10px",
                margin: "10px 0",
                position: "relative",
              }}
            >
              <h4>{a.title}</h4>
              <p>{a.message}</p>
              <small>{new Date(a.created_at).toLocaleString()}</small>
              <button
                onClick={() => handleDelete(a.id)}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: "linear-gradient(45deg, #ff9966, #ff5e62)",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminAnnouncements;
