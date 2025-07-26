const express = require('express');
const router = express.Router();

const examController = require('../controllers/examController');

router.get('/api/exams',examController.getExams);
router.get('/api/questions/:exam_id',examController.getQuestions);
router.post('/api/results', examController.submitResults);


module.exports = router
