// Require statements
const express = require("express");
const env = require("dotenv").config()
const path = require("path");

// Declare env variables
const port = process.env.PORT;


const app = express();

// Serve Static Files
app.use(express.static(path.join(__dirname, "frontend")));

// Routes
const routes = require("./backend/routes/routes");
routes(app);

// Listen to port
app.listen(port, () => {
    console.log("App online and listening on port " + port);
});