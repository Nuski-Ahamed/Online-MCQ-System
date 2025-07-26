import { ExamPaper } from './components/exam-paper/exam-paper';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { ExamPaperPage } from './pages/exam-paper-page/exam-paper-page';



export const routes: Routes = [
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'login', component: Login },
      { path: 'dashboard', component: Dashboard },


      
      { path: 'exams', component: ExamPaperPage },
      {path:'exampaper/:exam_id',component:ExamPaper},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }