export const addTwoNumberController = async (req, res) => {
  if (!req.query.a || !req.query.b)
    return res.status(400).json({ message: "No number given!" });
  if (isNaN(req.query.a) || isNaN(req.query.b))
    return res.status(400).json({ message: "invalid number." });
  const sum = parseInt(req.query.a) + parseInt(req.query.b);
  res.status(200).json({ result: sum });
};
export const addNumberArrayController = async (req, res) => {
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
};

export const multiplyTwoNumberController = async (req, res) => {
  if (!req.query.a || !req.query.b)
    return res.status(400).json({ message: "No number given!" });
  if (isNaN(req.query.a) || isNaN(req.query.b))
    return res.status(400).json({ message: "invalid number." });
  const multiply = parseInt(req.query.a) * parseInt(req.query.b);
  res.status(200).json({ result: multiply });
};
export const multiplyNumberArrayController = async (req, res) => {
  let numbers = req.body;
  if (numbers.length > parseInt(process.env.MULTIPLY_MAX_ARRAY_LENGTH))
    return res.status(400).json({
      message: `Number Array length is not allowed! max length is ${process.env.MULTIPLY_MAX_ARRAY_LENGTH}`,
    });
  if (!Array.isArray(numbers))
    return res.status(400).json({ message: "input is not valid" });
  if (numbers.length == 0)
    return res.status(400).json({ message: "no number given!" });
  let multiply = 1;
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    if (isNaN(currentNumber)) continue;
    multiply *= currentNumber;
  }
  res.status(200).json({ result: multiply });
};

export const minusTwoNumberController = async (req, res) => {
  if (!req.query.a || !req.query.b)
    return res.status(400).json({ message: "No number given!" });
  if (isNaN(req.query.a) || isNaN(req.query.b))
    return res.status(400).json({ message: "invalid number." });
  const minus = parseInt(req.query.a) - parseInt(req.query.b);
  res.status(200).json({ result: minus });
};
export const minusNumberArrayController = async (req, res) => {
  let numbers = req.body;
  if (numbers.length > parseInt(process.env.MINUS_MAX_ARRAY_LENGTH))
    return res.status(400).json({
      message: `Number Array length is not allowed! max length is ${process.env.MINUS_MAX_ARRAY_LENGTH}`,
    });
  if (!Array.isArray(numbers))
    return res.status(400).json({ message: "input is not valid" });
  if (numbers.length == 0)
    return res.status(400).json({ message: "no number given!" });
  let minus = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    if (isNaN(currentNumber)) continue;
    minus -= currentNumber;
  }
  res.status(200).json({ result: minus });
};

export const divisionTwoNumberController = async (req, res) => {
  if (!req.query.a || !req.query.b)
    return res.status(400).json({ message: "no number given!" });
  if (isNaN(req.query.a) || isNaN(req.query.b))
    return res.status(400).json({ message: "invalid number." });
  const division = parseInt(req.query.a) / parseInt(req.query.b);
  res.status(200).json({ result: division });
};
export const divisionNumberArrayController = async (req, res) => {
  let numbers = req.body;
  if (numbers.length > parseInt(process.env.DIVISION_MAX_ARRAY_LENGTH))
    return res.status(400).json({
      message: `Number Array length is not allowed! max length is ${process.env.MULTIPLY_MAX_ARRAY_LENGTH}`,
    });
  if (!Array.isArray(numbers))
    return res.status(400).json({ message: "input is not valid!" });
  if (numbers.length == 0)
    return res.status(400).json({ message: "no number given!" });
  let div = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    if (isNaN(currentNumber)) continue;
    div = div / currentNumber;
  }
  res.status(200).json({ result: div });
};
