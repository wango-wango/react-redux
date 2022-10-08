const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/", __dirname + "routes/index");

app.listen(3001, () => {
    console.log("running in port 3001!");
});
