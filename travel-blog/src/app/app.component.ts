import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { MenuComponent } from "./menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'travel-blog';
}