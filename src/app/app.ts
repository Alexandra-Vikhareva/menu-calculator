import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingPage } from "./pages/greeting-page/greeting-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GreetingPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('menu-calculator');
}
