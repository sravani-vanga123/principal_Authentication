const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    className: { type: String, required: true },
    roll: { type: Number, required: true },
    principalId: { type: mongoose.Schema.Types.ObjectId, ref: "Principal" }
});

module.exports = mongoose.model("Student", studentSchema);
