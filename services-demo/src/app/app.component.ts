import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftCounterComponent } from "./components/left-counter/left-counter.component";
import { RightCounterComponent } from "./components/right-counter/right-counter.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LeftCounterComponent, RightCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'services-demo';
}
