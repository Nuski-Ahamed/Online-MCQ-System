const mongoose = require('mongoose');



const examSchema = new mongoose.Schema({
  _id: String,
  title: String,
  description: String,
});

const Exam = mongoose.model('Exam', examSchema,'exams');

const questionSchema = new mongoose.Schema({
  _id: String,
  exam_id: String,
  question_text: String,
  options: [String],
  correct_option: String,
});
const Question = mongoose.model('Question', questionSchema, 'questions');

const resultSchema = new mongoose.Schema({
  exam_id: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  score:{
    type: Number,
    required: true
  },

  timestamp: {
    type: Date,
    default: Date.now
  },
  
});

const Result = mongoose.model('Result', resultSchema, 'results');



module.exports = {
  Exam,
  Question,
  Result,
};

