import { Injectable } from '@angular/core';
import { Messaging, getToken, onMessage } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private messageSource = new BehaviorSubject<any>(null);
  currentMessage = this.messageSource.asObservable();

  constructor(private messaging: Messaging) {}

  // ✅ Request Notification Permission
  async requestPermission() {
    try {
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        console.error('🚫 Notification permission denied');
        return;
      }
      console.log('✅ Notification permission granted');

      // ✅ Get the FCM Token
      const token = await getToken(this.messaging, {
        vapidKey:
          'BLpVMXIEDia2Ywzguyh50Oqe9o7KP7PaKYtjxMkMXeypGPjrMDPh-S8erqcJrgQiCIbj-COyK2fRGmt0x8NifAE', // Replace with your Firebase VAPID Key
      });

      if (token) {
        console.log('✅ FCM Token:', token);
        localStorage.setItem('fcmToken', token); // Store the token for later use
      } else {
        console.log('⚠️ No registration token available.');
      }
    } catch (error) {
      console.error('❌ Error getting permission:', error);
    }
  }

  // ✅ Listen for Incoming Notifications
  receiveMessages() {
    onMessage(this.messaging, (payload) => {
      console.log('📩 Message received:', payload);
      this.messageSource.next(payload); // Send notification payload to subscribers
    });
  }
}
