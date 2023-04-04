chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "scrape_messages") {
    chrome.tabs.executeScript({ file: "content.js" }, () => {
      chrome.tabs.sendMessage(sender.tab.id, "get_messages", (response) => {
        sendResponse(response);
      });
    });
    return true;
  }
});