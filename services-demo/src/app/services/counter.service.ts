import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private _counter = 30

  constructor() { }

  addCounter(): void{
    this._counter++; // this._counter = this._counter + 1
    console.log(this._counter);
  }

  get counter(): number{
    return this._counter;
  }


}
