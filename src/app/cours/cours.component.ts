import { Component } from '@angular/core';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent {
  searchText: any;
  names = [
      { titre: 'angular'},
      { titre: 'react'},
      { titre: 'nest js'},
    
  ];
}
