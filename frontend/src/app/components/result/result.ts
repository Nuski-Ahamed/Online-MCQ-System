import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  imports: [CommonModule],
  templateUrl: './result.html',
  styles: ``
})
export class Result {
      results = {
  score: 4,
  total: 5,
  answers: [
    {
      question: 'What is the capital of France?',
      selected: 'Paris',
      correct: 'Paris'
    },
    {
      question: '2 + 2 = ?',
      selected: '5',
      correct: '4'
    },
    // ... more questions
  ]
};

}
