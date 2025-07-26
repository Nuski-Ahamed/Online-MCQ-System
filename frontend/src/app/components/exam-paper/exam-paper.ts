import { FormsModule, NgModel } from '@angular/forms';
import { Component,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from '../../services/exam.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-exam-paper',
  imports: [FormsModule, CommonModule,],
  templateUrl: './exam-paper.html',
  styles: ``
})
export class ExamPaper implements OnInit {
questions: any[] = [];
  exam_id!: string;

  constructor(
    private route: ActivatedRoute,
    private examService: ExamService,
    private router: Router
  ) {}

  ngOnInit() {
    this.exam_id = this.route.snapshot.paramMap.get('exam_id')!;
    this.examService.getQuestions(this.exam_id).subscribe(
      (data) => {
        this.questions = data;
        console.log('Loaded questions for exam:', this.exam_id, data);
      },
      (err) => {
        console.error('Failed to load questions:', err);
      }
    );
  }

  selectedAnswers: { [questionId: string]: string } = {};


  submitAnswers() {

    const results = this.questions.map((q:any) => {
    const userAnswer = this.selectedAnswers[q._id];
    const isCorrect = userAnswer === q.correct_option;

    console.log(`Question: ${q.question}`);

    return {
      question: q.question_text,
      userAnswer:userAnswer,
      correctAnswer: q.correct_option,
      isCorrect
    };
    
  });
  console.log("📝 Results:", results);
  const score = results.filter(r => r.isCorrect).length;

  const user_id = 'user1'; // Get this from auth service or localStorage
  this.examService.submitResults(this.exam_id, user_id, score).subscribe(
    (res) => {
      console.log('Submitted to backend:', res);
      alert(`Score: ${score}/${this.questions.length}`);
    },
    (err) => {
      console.error('Submission failed:', err);
    }
  );

  this.router.navigate(['/exams']);
  }
  

}
