const db = require("../config/db");

// Get all announcements
exports.getAnnouncements = (req, res) => {
  db.query("SELECT * FROM announcements ORDER BY created_at DESC", (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json(results);
  });
};

// Add a new announcement (Admin only)
exports.addAnnouncement = (req, res) => {
  const { title, message } = req.body;
  if (!title || !message) return res.status(400).json({ message: "All fields required" });

  const sql = "INSERT INTO announcements (title, message) VALUES (?, ?)";
  db.query(sql, [title, message], (err, result) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json({ message: "Announcement added successfully" });
  });
};

// Delete announcement (Admin)
exports.deleteAnnouncement = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM announcements WHERE id = ?";
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json({ message: "Announcement deleted successfully" });
  });
};
