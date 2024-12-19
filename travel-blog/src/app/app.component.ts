import { Component, OnInit } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { MenuComponent } from "./menu/menu.component";
import { CommonModule } from '@angular/common';

interface User{
  name: string;
  age: number;
  isActive: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, MenuComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'travel-blog';

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  users: User[] | undefined;
  textColor: string = 'red';

  // ngOnInit(): void {
  //   setTimeout(() =>{
  //     this.users = [{
  //       name: 'John Doe',
  //       age: 19,
  //       isActive: true
  //     },{
  //       name: 'Bill Gates',
  //       age: 70,
  //       isActive: false
  //     },{
  //       name: 'Elon Musk',
  //       age: 43,
  //       isActive: true
  //     },{
  //       name: 'Teszt User',
  //       age: 27,
  //       isActive: false
  //     }]
  //   }, 2500)
  // }

  ngOnInit(): void {
    this.users = [{
      name: 'John Doe',
      age: 19,
      isActive: true
    },{
      name: 'Bill Gates',
      age: 70,
      isActive: false
    },{
      name: 'Elon Musk',
      age: 43,
      isActive: true
    },{
      name: 'Teszt User',
      age: 27,
      isActive: false
    }]
}

}
