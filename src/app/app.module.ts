import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { PagenameComponent } from './pagename/pagename.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { CoursComponent } from './cours/cours.component';
import { InterviewComponent } from './interview/interview.component';
import { DocComponent } from './doc/doc.component';
import { WelcQuizComponent } from './welc-quiz/welc-quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionComponent,
    HeaderComponent,
    PagenameComponent,
    ChangeBgDirective,
    CoursComponent,
    InterviewComponent,
    DocComponent,
    WelcQuizComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
