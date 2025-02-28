import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CategoriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'quiz-master';
}
