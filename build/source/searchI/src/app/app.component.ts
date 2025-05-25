import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeIComponent } from './home-i/home-i.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , HomeIComponent],
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'searchI';
}
