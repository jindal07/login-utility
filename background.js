chrome.runtime.onInstalled.addListener(() => {
  console.log("College Auto Login extension installed successfully.");
  
  // Set default settings
  chrome.storage.local.get(["autoSubmit"], ({ autoSubmit }) => {
    if (autoSubmit === undefined) {
      chrome.storage.local.set({ autoSubmit: false });
    }
  });
});

// Handle extension icon click - open options page
chrome.action.onClicked.addListener(() => {
  chrome.runtime.openOptionsPage();
});
