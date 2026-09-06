const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = 3000;

app.use(cors());

app.get("/states", (req, res) => {
    try {

        const filePath = path.join(
            __dirname,
            "statesWiseCities.json"
        );

        const data = fs.readFileSync(filePath, "utf8");

        const states = JSON.parse(data);

        res.json(states);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            status: false,
            message: "Failed to load states data"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});