const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// SQLite DB
const db = new sqlite3.Database("./emails.db");

// Create table
db.run(`
  CREATE TABLE IF NOT EXISTS notify_emails (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

app.post("/notify", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  db.run(
    "INSERT INTO notify_emails (email) VALUES (?)",
    [email],
    (err) => {
      if (err) {
        return res.json({ message: "Email already registered" });
      }
      res.json({ message: "You’ll be notified 🚀" });
    }
  );
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
