const Teacher = require('../models/teacherModel');

exports.addTeacher = async (req, res) => {
  const { name, email, subject, password } = req.body;

  try {
    const exists = await Teacher.findOne({ email });
    if (exists) return res.status(400).json({ message: "Teacher already exists" });

    const teacher = await Teacher.create({ name, email, subject, password });

    res.status(201).json({ message: "Teacher created", teacher });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
