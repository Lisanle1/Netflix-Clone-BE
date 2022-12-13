const express = require("express");
require('dotenv').config();
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.get("/", (req, res) =>
  res.send(`Server Running`)
);

const PORT=process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is listening on the port ${PORT}`);
});
