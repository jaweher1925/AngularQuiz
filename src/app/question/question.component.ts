import { Component ,OnInit} from '@angular/core';

import { QuestionService } from '../service/question.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',

  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public name: string="";
  public questionList : any =[];
  public currentQuestion:number =0;
  public point: number=0;
  counter =60;
  correctAnswer: number =0 ;
  incorrectAnswer :number =0;
  interval$ :any;
  progress:string='0';
  isQuizCompleted :boolean =false;

  constructor(private questionService :QuestionService) {}
  ngOnInit(): void { 
    //put name user
    this.name = localStorage.getItem("name")!;  
    this.getAllQuestions(); 
    this.startCounter();
  }

  //gest all guest from locale serv
  getAllQuestions(){
      this.questionService.getQuestionJson()
      .subscribe(res =>{
        this.questionList =res.questions ;
      })
  }

//click next prev questions
  nextQuestion(){
    this.currentQuestion++ ;
  }
  previousQuestion(){
    this.currentQuestion-- ;
  }

//point marker 
  answer(currentQno:number ,option:any){
    if(currentQno ===this.questionList.length)
    {
      this.isQuizCompleted =true;
      this.stopCounter();

    }
    if(option.correct){
      this.point+= 10;
      this.correctAnswer++; 
      setTimeout(() =>{
        this.currentQuestion++;
        this.resetCounter();     
        this.getProgressPercent();
      },1000);
      
     
    }else{
      setTimeout(()=>{
        this.currentQuestion++;
        this.incorrectAnswer++;
        this.resetCounter();  
        this.getProgressPercent();
      }, 1000);
      this.point-=10;
    
      

    }
  }
//timer
    startCounter()
    {
      this.interval$ =interval(1000)   //inport from rxjs  
      .subscribe(val=> {
          this.counter--;
          if (this.counter ===0 ){
            this.currentQuestion++;
            this.counter=60;
            this.point-=10;
          }
      }) ;
      setTimeout(()=> {
        this.interval$.unsubscribe();
      },6000000);
    }

    stopCounter(){
      this.interval$.unsubscribe();
      this.counter=0;
    }

    resetCounter(){
        this.stopCounter();
        this.counter=60;
        this.startCounter(); 
    }
    resetQuiz(){
      this.resetCounter();
      this.getAllQuestions();
      this.point =0;
      this.counter=60;
      this.currentQuestion=0;
      this.progress="0";

      
    }
 //progress 
 getProgressPercent(){
  this.progress = ((this.currentQuestion/this.questionList.length)*100).toString();
  return this.progress;
 }



}
