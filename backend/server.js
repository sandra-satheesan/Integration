const express = require('express');
const cors = require('cors');
const { Pool } = require("pg")

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "integration",
    password: "Sandra@11092002",
    port: 5432,
});

app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const newUser = await pool.query(
            "INSERT INTO users (name,email,password) VALUES ($1, $2, $3) RETURNING *",
            [name, email, password]
        );

        res.json(newUser.rows[0]);
    } catch (err) {
        console.log(err.message)
    }
});


app.listen(5000, () => {
    console.log("Server started on port 5000");
})