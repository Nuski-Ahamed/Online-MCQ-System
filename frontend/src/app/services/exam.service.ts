import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private apiUrl = 'http://localhost:5000/api/exams';

  constructor(private http: HttpClient) { }

  getExams(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  private apiUrl2 = 'http://localhost:5000/api';
   

  getQuestions(exam_id: string): Observable<any> {
    return this.http.get(`${this.apiUrl2}/questions/${exam_id}`);
  }

  submitResults(exam_id: string, user_id: string, score: number) {
  return this.http.post('http://localhost:5000/api/results', {
    exam_id,
    user_id,
    score
  });
}
}
