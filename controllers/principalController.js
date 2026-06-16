const Principal = require('../models/principalModel');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, "secretkey", { expiresIn: "1h" });
};

exports.registerPrincipal = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const exists = await Principal.findOne({ email });
    if (exists) return res.status(400).json({ message: "Principal already exists" });

    const principal = await Principal.create({ name, email, password });

    res.status(201).json({
      _id: principal._id,
      name: principal.name,
      email: principal.email,
      token: generateToken(principal._id)
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.loginPrincipal = async (req, res) => {
  const { email, password } = req.body;

  try {
    const principal = await Principal.findOne({ email });
    if (!principal) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await principal.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    res.json({
      _id: principal._id,
      name: principal.name,
      email: principal.email,
      token: generateToken(principal._id)
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
