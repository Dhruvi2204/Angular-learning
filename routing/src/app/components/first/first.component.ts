import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-first',
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent {
  constructor(private router: Router) {}
  navigateToSecond() {
    const message = 'Message from first component!';
    this.router.navigate(['/second-component'], { queryParams: { message } });
  }
}
