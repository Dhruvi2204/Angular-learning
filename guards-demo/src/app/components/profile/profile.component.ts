import { Component } from '@angular/core';
import {
  CanComponentDeactivate,
  canDeactivateGuard,
} from '../../guards/can-deactivate.guard';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements CanComponentDeactivate {
  username!: string;
  password!: string;
  savedUsername!: string;
  savedPassword!: string;
  onSave() {
    this.savedPassword = this.password;
    this.savedUsername = this.username;
    alert('Saved changes!');
  }

  canDeactivate() {
    if (
      this.username !== this.savedUsername &&
      this.password !== this.savedPassword
    ) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    } else {
      return true;
    }
  }
}
