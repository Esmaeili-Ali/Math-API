import express from "express";
import fs from "fs-extra";
import "dotenv/config";
import {
  addNumberArrayController,
  addTwoNumberController,
  multiplyNumberArrayController,
  multiplyTwoNumberController,
} from "./controller/math.js";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("This is a Math API");
});

app.get("/add", addTwoNumberController);

app.post("/add", addNumberArrayController);
app.get("/multiply", multiplyTwoNumberController);
app.post("/multiply", multiplyNumberArrayController);
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
