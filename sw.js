// 背景推播監聽程式
self.addEventListener('push', function(event) {
    let data = {
        title: "Eggy's Mandarin 🌸",
        body: "New message from Bean! 💌",
        url: "/"
    };

    if (event.data) {
        try {
            data = event.data.json();
        } catch (e) {
            data.body = event.data.text();
        }
    }

    const options = {
        body: data.body,
        icon: "https://raw.githubusercontent.com/Yenwen6281/mandarin-subtitles/854cab3f7b910a95391b99dfa7d881b22543524f/c1.png",
        badge: "https://raw.githubusercontent.com/Yenwen6281/mandarin-subtitles/854cab3f7b910a95391b99dfa7d881b22543524f/c1.png",
        data: {
            url: data.url || "/"
        }
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

// 當使用者點擊通知橫幅時開啟或切換至 App
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    const targetUrl = event.notification.data.url;

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
            for (let i = 0; i < clientList.length; i++) {
                const client = clientList[i];
                if (client.url === targetUrl && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(targetUrl);
            }
        })
    );
});
