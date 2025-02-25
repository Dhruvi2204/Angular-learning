import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  userObj: any = {
    fname: 'Dhruvi',
    // default value of fname will be Dhruvi
    lname: '',
    userName: '',
    city: '',
    state: '',
    zipCode: '',
    isTermsAgree: '',
    // Provide value that you want to set as default.
  };
  //! Creating an object and in that we have property for every input field of the form and bind it with ng model directive in html and wherever ng model directive is used we need to have name property set else error will be provided.

  saveForm() {
    console.log(this.userObj);
  }
}
