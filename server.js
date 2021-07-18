const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require('cors')

dotenv.config({ path: "./config/config.env" });

connectDB();
const expenses = require("./routes/expenseRoute");
const cards = require("./routes/cardRoute");

const app = express();

app.options('*', cors());

app.use(express.json())

app.use("/api/v1/expenses", expenses);
app.use("/api/v1/cards", cards);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
