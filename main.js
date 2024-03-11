import express, { response } from "express";
import fs from "fs-extra";
import "dotenv/config";
const app = express();
app.use(express.json());
app.get("/", async (req, res) => {
  res.send("This is a Math API");
});
app.get("/add", async (req, res) => {
  if (!req.query.a || !req.query.b)
    return res.status(400).json({ message: "No number given!" });
  if (isNaN(req.query.a) || isNaN(req.query.b))
    return res.status(400).json({ message: "invalid number." });
  const sum = parseInt(req.query.a) + parseInt(req.query.b);
  res.status(200).json({ result: sum });
});
app.post("/add", async (req, res) => {
  let numbers = req.body;
  if (numbers.length > parseInt(process.env.ADD_MAX_ARRAY_LENGTH))
    return res.status(400).json({
      message: `Number Array length is not allowed! max length is ${process.env.ADD_MAX_ARRAY_LENGTH}`,
    });
  if (!Array.isArray(numbers))
    return res.status(400).json({ message: "input is not valid." });
  if (numbers.length == 0)
    return res.status(400).json({ message: "no number given!" });
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    if (isNaN(currentNumber)) continue;
    sum += currentNumber;
  }
  res.status(200).json({ result: sum });
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
