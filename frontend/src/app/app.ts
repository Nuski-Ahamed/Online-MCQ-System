import { Component, signal } from '@angular/core';
import { ExamCard } from "./components/exam-card/exam-card";
import { Navbar } from "./components/navbar/navbar";
import { ExamPaper } from "./components/exam-paper/exam-paper";
import { Login } from "./components/login/login";
import { Dashboard } from "./pages/dashboard/dashboard";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ Navbar,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
