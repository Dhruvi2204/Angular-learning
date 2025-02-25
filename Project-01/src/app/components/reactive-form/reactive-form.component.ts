import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
// * import ReactiveFormsModule
@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  userForm: FormGroup = new FormGroup({
    // ! Validation is provided in ts file only and it is provided as an array as we can add multiple validations
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [
      Validators.pattern('^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$'),
    ]),
    //! The above validation is for aadhar card, available online and if we want validation for email simply write Validators.email. this format will match for aadhar card: 3675 9834 6012
    city: new FormControl(''),
    state: new FormControl('Gujarat'),
    // ? by default Gujarat will be selected.
    zip: new FormControl(''),
    isAgree: new FormControl(false),
  });

  // If we want that gujarat should be selected as state and user cannot select any other value, we need to disable that.

  constructor() {
    this.userForm.controls['state'].disable();
    setTimeout(() => {
      this.userForm.controls['state'].enable();
    }, 4000);
    // After 4 seconds, enabled
  }
  onSave() {
    console.log(this.userForm.value);
    // This we have to pass to the API
  }
}

// *FormControl: Represents a single input element in the form.
// !FormGroup: Represents a group of form controls (a form).
// &ReactiveFormsModule: Provides support for reactive forms.
