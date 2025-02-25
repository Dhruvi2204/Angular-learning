import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
// ! automatic change detection is done by zone.js file. 
@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // automatic change detetction by zone.js kept off so when value changes, it is not automatically changed for normal variables but for signal, automatic detection is there.
})
export class SignalComponent {
  firstName = signal('Dhruvi');
  // signal created
  lastName = signal<string>('Shah');
  // strongly created as datatype is specified
  myAge: number = 21;
  myPlaceholder = signal<string>('Enter your name');
  myNumber = signal<number>(1);
  constructor() {
    const fname = this.firstName();
    // accessed as method in ts file as well as in html file.
    console.log(fname);

    setTimeout(() => {
      this.myAge = 23;
      this.firstName.set('Meet');
      // set method to update value.
    }, 4000);
  }

  onIncrement() {
    this.myNumber.update((oldValue:number) => oldValue + 1);
  }
}
