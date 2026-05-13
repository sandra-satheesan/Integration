const express = require('express');
//const cors = require('cors');

const app = express();

//app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "backend running"
    });
});

app.get("/api/data", (req, res) => {
    res.json({
        message: "Hello from backend"
    });
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
})