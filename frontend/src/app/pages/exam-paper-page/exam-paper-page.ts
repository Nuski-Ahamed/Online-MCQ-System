import { Component,OnInit } from '@angular/core';
import { ExamCard } from "../../components/exam-card/exam-card";
import { ExamService } from '../../services/exam.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-exam-paper-page',
  imports: [ExamCard, CommonModule],
  templateUrl: './exam-paper-page.html',
  styles: ``
})
export class ExamPaperPage implements OnInit{


  exams: any[] = [];  

  constructor(private examService: ExamService) {}

  ngOnInit() {
    this.examService.getExams().subscribe((data) => {
      this.exams = data;
      console.log('📦 Received exams:', this.exams);
    });
  }

}
