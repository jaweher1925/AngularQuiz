import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { PagenameComponent } from './pagename/pagename.component';
import { CoursComponent } from './cours/cours.component';
import { InterviewComponent } from './interview/interview.component';
import { DocComponent } from './doc/doc.component';
import { WelcQuizComponent } from './welc-quiz/welc-quiz.component';

const routes: Routes = [
  {path:'',redirectTo:'welcome',pathMatch:"full"},
  {path:"welcome",component:WelcomeComponent},
  {path:"question",component:QuestionComponent},
  {path:"pagename",component:PagenameComponent},
  {path:"cours",component:CoursComponent},
  {path:"interview",component:InterviewComponent},
  {path:"Doc",component:DocComponent},
  {path:"welQuiz",component:WelcQuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
