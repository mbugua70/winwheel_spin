const express = require("express");
const mongoose = require("mongoose");
const segmentsRoutes = require("./routes/segmentRoute");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors()); // Apply CORS middleware here

// Database connection
const dbURI =
  "mongodb+srv://myAtlasDBUser:123456789johndoe@myatlasclusteredu.kmyoknr.mongodb.net/spin_demo_one?retryWrites=true&w=majority&appName=myAtlasClusterEDU";

// Port
const port = process.env.PORT;

// Connect to MongoDB and start the server
mongoose
  .connect(dbURI)
  .then((result) =>
    app.listen(port, () => {
      console.log(`Listening to port: ${port}`);
    })
  )
  .catch((err) => console.log(err));

// Routes
app.use("/api/segments", segmentsRoutes);
