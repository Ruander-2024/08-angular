import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from "./modules/landing/landing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'intro';
}
