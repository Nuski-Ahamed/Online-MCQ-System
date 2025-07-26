import { Component,Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExamService } from '../../services/exam.service';

@Component({
  selector: 'app-exam-card',
  imports: [RouterLink],
  templateUrl: './exam-card.html',
  styleUrl: './exam-card.css'
})
export class ExamCard {
  @Input() title!: string;
  @Input() description!: string;
  @Input() exam_id!: string;
  
}
