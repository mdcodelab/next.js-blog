const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors=require("cors");
const helmet = require("helmet");

//configuration
dotenv.config();
const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

const router = require("./routes");

app.use("/api/v1", router);


app.get("/", (req, res) => {
  res.send("Home page");
})

//server
const port = process.env.PORT || 4000;
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected");
    app.listen(port, () => console.log(`Server is listening at port ${port}`));
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
};
start();
