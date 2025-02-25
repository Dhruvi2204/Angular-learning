import { Component } from '@angular/core';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';

@Component({
  selector: 'app-root',
  imports: [Page1Component, Page2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ag-grid-demo';
}
