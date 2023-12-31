const express = require("express");
const app = express();
const userData = require("./routes/userData");

const connectDB = require("./db/connect");
require("dotenv").config();

const PORT = 3000;

app.use(express.json());
app.use("/api/v1/user", userData);
//ROUTES
app.get("/", (req, res) => {
  res.send("hi otaku");
});

// app.get("/api/v1/user");          --FIND USER DATA
// app.post("/api/v1/user");         --SAVE USER DATA

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(PORT, () => {
    console.log(`SERVER IS LISTNING ON PORT: ${PORT}`);
  });
};

start();
