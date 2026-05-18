const express = require('express');
const cors = require('cors');
const { Pool } = require("pg")
const bcrypt = require('bcrypt');

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

        const passwordRegex = /^(?=(?:.*[a-z]){3,})(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

        if (!passwordRegex.test(password)) {
            return res.json({
                message: "Password must contain 1 uppercase, 3 lowercase, 1 number and 1 special character"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await pool.query(
            "INSERT INTO users (name,email,password) VALUES ($1, $2, $3) RETURNING *",
            [name, email, hashedPassword]
        );

        res.json(newUser.rows[0]);
    } catch (err) {
        console.log(err.message)
        if (err.code = "23505") {
            return res.json({
                message: "Email already exists."
            })
        }
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await pool.query(
            "SELECT * FROM users WHERE email=$1", [email]
        );

        if (user.rows.length === 0) {
            return res.json({
                message: "User doesnt exist"
            });
        }

        const isMatch = await bcrypt.compare(password, user.rows[0].password);

        if (!isMatch) {
            return res.json({
                message: "Wrong Password"
            });
        } else {
            return res.json({
                message: "Login Success"
            })
        }

    } catch (err) {
        console.log(err);
    }
})


app.listen(5000, () => {
    console.log("Server started on port 5000");
})