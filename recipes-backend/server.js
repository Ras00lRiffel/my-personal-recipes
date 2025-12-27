import express from "express";
import multer from "multer";
import mysql from "mysql2";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8800;

// Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// --- MySQL connection ---
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

// --- API routes ---

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
    "INSERT INTO recipes (name, category, ingredients, instructions, image, prep_time, cook_time, serving_size, author) VALUES (?,?,?,?,?,?,?,?,?,?)";

  const values = [
    req.body.name,
    req.body.category,
    JSON.stringify(req.body.ingredients),
    JSON.stringify(req.body.instructions),
    req.body.image,
    req.body.prep_time,
    req.body.cook_time,
    req.body.serving_size,
    req.body.author,
  ];
  console.log("Received recipe data:", values);
  debugger;  
  db.query(sql, [values], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Recipe added!", result });
  });
});

// Upload route (multer)
const storage = multer.diskStorage({
  destination: path.join(__dirname, "uploads"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json("No file uploaded");
  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({ url: fileUrl });
});

// --- Serve frontend ---
const frontendPath = path.join(__dirname, "../recipes-frontend/dist");
app.use(express.static(frontendPath));

// Catch-all route to serve index.html for frontend routing
app.get('/:catchall', (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// --- Start server ---
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
