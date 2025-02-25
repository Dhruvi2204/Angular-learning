import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule, RouterLink],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  fname: string = 'Dhruvi';
  age: number = 21;
  isActive: boolean = true;
  myPlaceholder: string = 'Enter your name';
  divClassName: string = 'bg-primary';
  myName: string = '';
  showWelcome() {
    alert('Welcome to Angular 19!');
  }

  onValueChange() {
    alert('City changed!');
  }

  selectedCity: string = '';
  constructor(private router: Router) {
    console.log(this.fname);
    this.isActive = false;
    console.log(this.isActive);
  }
  navigateToAdmin() {
    this.router.navigateByUrl('/admin')
  }
}
