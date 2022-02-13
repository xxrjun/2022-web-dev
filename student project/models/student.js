const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
  },
  age: {
    type: Number,
    defaule: 18,
    max: [80, "Too old in the school."],
  },
  scholarship: {
    merit: {
      type: Number,
      min: 0,
      max: [5000, "Too much merit scholarship."],
    },
    other: {
      type: Number,
      min: 0,
    },
  },
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
