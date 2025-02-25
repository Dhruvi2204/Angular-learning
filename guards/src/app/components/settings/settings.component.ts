import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  isSaved: boolean = false;
  onSaveChanges() {
    this.isSaved = true;
    alert('Changes saved successfully!');
  }
}
