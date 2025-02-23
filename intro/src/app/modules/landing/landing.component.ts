import { Component, OnInit } from '@angular/core';
import { Usermodel } from '../../interfaces/users.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})


export class LandingComponent implements OnInit {
  userList: Array<Usermodel> = [];
  savedUsers: Array<Usermodel> = [];

 constructor(private usersService: UsersService){}

 ngOnInit(): void {
  this.userList = this.usersService.allChars;
  this.savedUsers = this.usersService.savedUsers;
}

getEven(){
  this.userList = this.usersService.getEven()
}

getOdds(){
  this.userList = this.usersService.getOdds()
}

resetTable(){
  window.location.reload();
  alert('Az oldal frissült!')
}
}
