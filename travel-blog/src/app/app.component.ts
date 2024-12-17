import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { CardComponent } from "./card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [MenuComponent, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'travel-blog';
}
