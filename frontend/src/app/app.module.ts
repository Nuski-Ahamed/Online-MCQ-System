
import { provideHttpClient, withInterceptorsFromDi, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { ExamPaper } from './components/exam-paper/exam-paper';


@NgModule({
  declarations: [
  // This should not be declared here, it's an import
  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ExamPaper
  
  
  
    

  ],
  providers: [
    // provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: []
})
export class AppModule { }

    

