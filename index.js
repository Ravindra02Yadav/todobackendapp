const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes/Route");

const app = express();
const connection = mongoose.connect(process.env.mongo_url)
app.use(express.json());
app.use(cors());


app.use(routes);
app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("connected")

    }
    catch (error) {
        console.log("error")
        console.log(error)
    }
    console.log(`listening ${process.env.port}`)
})
