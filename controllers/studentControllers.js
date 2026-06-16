const Student = require('../models/studentModel');

exports.addStudent = async (req, res) => {
  try {
    const { name, className, roll } = req.body;

    const student = await Student.create({
      name,
      className,
      roll,
      principalId: req.principalId
    });

    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find({ principalId: req.principalId });
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
