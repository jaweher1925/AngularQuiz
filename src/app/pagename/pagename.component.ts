import { Component , OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pagename',
  templateUrl: './pagename.component.html',
  styleUrls: ['./pagename.component.css']
})
export class PagenameComponent implements OnInit{
    @ViewChild('name')  namekey!: ElementRef;
    constructor() {}
    ngOnInit(): void {    
    }
    startQuiz(){
      localStorage.setItem("name",this.namekey.nativeElement.value);
    }
}
