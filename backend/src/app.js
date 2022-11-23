const express = require("express")

const filesRoutes = require("./routes/files.routes")

const app = express();

app.use(express.json());

app.use("/files", filesRoutes);
app.use("/test", (req,res)=> res.send("hola"));


module.exports = app
