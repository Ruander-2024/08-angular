import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-left-counter',
  standalone: true,
  imports: [],
  templateUrl: './left-counter.component.html',
  styleUrl: './left-counter.component.css'
})
export class LeftCounterComponent {
    counter: number = 0;

    constructor(private counterService: CounterService){
      this.counter = this.counterService.counter
    }

    addOneToCounter(): void{
      this.counterService.addCounter();
      this.counter = this.counterService.counter;
    }
}
