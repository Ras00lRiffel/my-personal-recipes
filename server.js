import express from 'express';
import multer from "multer";
import mysql from 'mysql';
import cors from 'cors';
import path from "path";


const app = express();
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'recipes'
});

app.use(express.json());
app.use(cors());

//Getting all the recipes
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM recipes';
    db.query(sql, (err, results) => {
        if (err) {
            return res.json(err);
        }
        return res.json(results);
    });
});

//Adding a new recipe
app.post('/add', (req, res) => {
    console.log(req.body);
    const sql = 'INSERT INTO recipes (name, category, ingredients, instructions, image) VALUES (?)';
    const values = [
        req.body.name,
        req.body.category,
        req.body.ingredients,
        req.body.instructions,
        req.body.image
    ];
    db.query(sql, [values], (err, result) => {
        if (err) {
            return res.json(err);
        }
        return res.json({ message: 'Recipe added!', Result: result  });
    });
});

// Uploading an image to my directory
// Storing the image path in the database
// Displaying the image in the frontend using the stored path

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).send("No file uploaded.");

  const fileUrl = `/uploads/${req.file.filename}`;
  // TODO: Save fileUrl into your database here

  res.json({ url: fileUrl });
});


app.listen(8800, () => {
  console.log('Server is running on port 8800!');
});