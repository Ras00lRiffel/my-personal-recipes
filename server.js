import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

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
    const sql = 'INSERT INTO recipes (name, category, ingredients, method, image) VALUES (?)';
    const values = [
        req.body.name,
        req.body.category,
        req.body.ingredients,
        req.body.method,
        req.body.image
    ];
    db.query(sql, [values], (err, result) => {
        if (err) {
            return res.json(err);
        }
        return res.json({ message: 'Game added!' });
    });
});


app.listen(8800, () => {
  console.log('Server is running on port 8800!');
});