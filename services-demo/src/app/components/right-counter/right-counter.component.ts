import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-right-counter',
  standalone: true,
  imports: [],
  templateUrl: './right-counter.component.html',
  styleUrl: './right-counter.component.css'
})
export class RightCounterComponent {
  counter: number = 0;

  constructor(private counterService: CounterService){
    this.counter = this.counterService.counter;
  }

  addOneToCounter(): void{
    this.counterService.addCounter();
    this.counter = this.counterService.counter;
  }


}
