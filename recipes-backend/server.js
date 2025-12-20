import express from "express";
import multer from "multer";
import mysql from "mysql2";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL");
});

// Get all recipes
app.get("/api/recipes", (req, res) => {
  const sql = "SELECT * FROM recipes";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Add recipe
app.post("/api/recipes", (req, res) => {
  const sql =
    "INSERT INTO recipes (name, category, ingredients, instructions, image) VALUES (?)";

  const values = [
    req.body.name,
    req.body.category,
    req.body.ingredients,
    req.body.instructions,
    req.body.image,
  ];

  db.query(sql, [values], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Recipe added!", result });
  });
});

// Multer storage
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Upload route
app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json("No file uploaded");

  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({ url: fileUrl });
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
