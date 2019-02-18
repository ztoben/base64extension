function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "base-64-decode-x1",
    title: "Base64 Decode x1",
    contexts: ["selection"]
  });

  chrome.contextMenus.onClicked.addListener(function(info) {
    if (info.menuItemId == "base-64-decode-x1") {
      const text = window.atob(info.selectionText);

      copyToClipboard(text);
    }
  });

  chrome.contextMenus.create({
    id: "base-64-decode-x2",
    title: "Base64 Decode x2",
    contexts: ["selection"]
  });

  chrome.contextMenus.onClicked.addListener(function(info) {
    if (info.menuItemId == "base-64-decode-x2") {
      const text = window.atob(window.atob(info.selectionText));

      copyToClipboard(text);
    }
  });
});
