window.WPP.config.disableGoogleAnalytics=!0,window.WPP.config.googleAnalyticsId=null,window.WPP.config.deviceName=!1;

function sleep(e) {
    return new Promise((n) => setTimeout(n, e));
	}

let onReadyFn = async() => {
    while (!window.WPP?.isReady) {
        await sleep(500);
    }
    const wasuboReadyEvent = new CustomEvent("Wasubo:Ready", { detail: null });
    document.dispatchEvent(wasuboReadyEvent);
    window.dispatchEvent(wasuboReadyEvent);

    window.WPP.ev.addListener("chat.new_message", (e) => {
        const messageData = e.toJSON();
        const wasuboNewMessageEvent = new CustomEvent("Wasubo:NewMessage", {
            detail: {
                body: messageData.body,
                from: messageData.from,
                fromSelf: messageData.id.fromMe,
                name: messageData.notifyName ?? messageData.verifiedBizName ?? messageData.name
            }
        });
        document.dispatchEvent(wasuboNewMessageEvent);
    });

    window.WPP.whatsapp.ChatStore.on("change:active", (e) => {
        const activeChat = window.WPP.whatsapp.ChatStore.getActive();
        const activeChatData = activeChat?.toJSON();
        const wasuboChatOpenEvent = new CustomEvent("Wasubo:ChatOpen", {
            detail: {
                ...activeChatData,
                name: activeChatData?.notifyName ?? activeChatData?.verifiedBizName ?? activeChatData?.name ?? activeChat?.formattedTitle
            }
        });
        document.dispatchEvent(wasuboChatOpenEvent);
    });
};

if (window.WPP?.webpack) {
    window.WPP.webpack.onReady(() => {
        onReadyFn();
    });
} else {
    onReadyFn();
}
 