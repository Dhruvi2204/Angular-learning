importScripts(
  "https://www.gstatic.com/firebasejs/10.1.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDnNyVRSXKCJs38kmp6FkoA3CvJ5RL0SPk",
  authDomain: "push-notification-941a5.firebaseapp.com",
  projectId: "push-notification-941a5",
  storageBucket: "push-notification-941a5.firebasestorage.app",
  messagingSenderId: "902511059145",
  appId: "1:902511059145:web:10d794b91578b27ffd2d18",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    // icon: "/assets/icons/icon.png",
  });
});
