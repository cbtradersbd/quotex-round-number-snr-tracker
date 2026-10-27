// In-Page Context WebSocket & Engine.IO Interceptor
(function() {
    console.log("[CB-SNR] In-page context interceptor active.");
    const OriginalWebSocket = window.WebSocket;
    window.WebSocket = function(...args) {
        const ws = new OriginalWebSocket(...args);
        ws.addEventListener("message", (e) => {
            try {
                // Non-invasive tick hook
                window.postMessage({ type: "CB_SNR_TICK", asset: "LIVE_ASSET", price: 1.08500 }, "*");
            } catch(err) {}
        });
        return ws;
    };
})();
