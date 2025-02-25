import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginRegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-quiz-master';
}
