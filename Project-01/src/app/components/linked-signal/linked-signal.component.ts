import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css',
})
export class LinkedSignalComponent {
  fname = signal('Dhruvi');
  lname = signal('Shah');

  fullName = linkedSignal({
    source: this.fname,
    computation: (source, previous) => {
      return source + ' ' + this.lname();
    }
  });

  // linked signal is used when one signal value changes then it should reflect

  changeName() {
    this.fname.set('Meet');
  }

  user = signal({ id: 116, name: 'Dhruvi' });
  email = linkedSignal({
    source: this.user,
    equal: (a: any, b: any) => a.id !== b.id,
    computation: (user) => `${user.name + user.id}@gmail.com`,
    // a and b represent the previous value and the current value of the user signal, respectively.
  });

  changeId() {
    // this.user.set({ id: 117, name: 'Krina' });
    this.user.set({ id: 116, name: 'Krina' });
    // this.user.set({ id: 117, name: 'Krina' });
  }
}
