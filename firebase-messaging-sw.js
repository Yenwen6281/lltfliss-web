importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBGhMMd6fd2oK23J-YA27VYXFGh69R1PA0",
  authDomain: "lltfliss-ce07a.firebaseapp.com",
  projectId: "lltfliss-ce07a",
  storageBucket: "lltfliss-ce07a.firebasestorage.app",
  messagingSenderId: "839671719751",
  appId: "1:839671719751:web:063a638ed2c7eb984f4e62"
});

const messaging = firebase.messaging();

// 當 App 關閉或手機鎖定時收到通知的處理函式
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification?.title || "Eggy's Mandarin 🌸";
  const notificationOptions = {
    body: payload.notification?.body || "New note from Bean! 💌",
    icon: "https://raw.githubusercontent.com/Yenwen6281/mandarin-subtitles/854cab3f7b910a95391b99dfa7d881b22543524f/c1.png",
    badge: "https://raw.githubusercontent.com/Yenwen6281/mandarin-subtitles/854cab3f7b910a95391b99dfa7d881b22543524f/c1.png",
    data: payload.data || {}
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});