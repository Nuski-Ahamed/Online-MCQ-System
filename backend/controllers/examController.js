
const { Exam, Question,Result}  = require('../models/exammodel');

exports.getExams = async (req, res) => {
  try {
    const exams = await Exam.find();
    console.log(' Fetched Exams:', exams);
    res.json(exams);
  } catch (error) {
    console.error('Error fetching exams:', error);

    res.status(500).json({ message: 'Server error' });
  }
};

exports.getQuestions = async (req, res) => {
  const exam_id = req.params.exam_id;
  try {
    const questions = await Question.find({exam_id : exam_id});
    console.log('Fetched Questions:', questions);
    res.json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.submitResults = async (req, res) => {
  try {
    const { exam_id, user_id, score } = req.body;

    const result = new Result({
      exam_id,
      user_id,
      score,
    });

    await result.save();

    res.status(200).json({ message: 'Answers submitted successfully!' });
  } catch (error) {
    console.error('Error saving answers:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

