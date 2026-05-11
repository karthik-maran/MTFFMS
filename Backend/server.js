const dotenv = require("dotenv");


const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const routes = require("./routes/routes");

const app = express();
dotenv.config({path:"./.env"});

app.use(express.json());
app.use(cors());

console.log(process.env.PORT);
console.log(process.env.MONGO_URI);

connectDB();
app.use("/api/org", routes);
const port = process.env.PORT ||3000;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});