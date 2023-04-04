// public/content.js

// const mountNode = document.createElement('div');
// mountNode.setAttribute('id', 'my-extension-root');
// document.body.appendChild(mountNode);

// const script = document.createElement('script');
// script.setAttribute('type', 'text/javascript');
// script.setAttribute('src', chrome.runtime.getURL('index.js'));
// document.body.appendChild(script);
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "get_messages") {
    const messages = document.querySelectorAll("[data-testid='conversation'] .css-1dbjc4n.r-1ila09b.r-18u37iz.r-1ny4l3l");
    const messageList = Array.from(messages).map((message) => message.innerText);
    sendResponse(messageList);
  }
});
