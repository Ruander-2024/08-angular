import { Injectable } from '@angular/core';
import { Usermodel } from '../interfaces/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  allChars: Array<Usermodel> = [
  
  ]
  
}
