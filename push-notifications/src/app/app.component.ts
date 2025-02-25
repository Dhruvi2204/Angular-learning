import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'push-notifications';
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.requestPermission();
    this.firebaseService.receiveMessages();

    this.firebaseService.currentMessage.subscribe((message) => {
      if (message) {
        alert(`🔔 New Notification: ${message.notification?.title}`);
      }
    });
  }
}
