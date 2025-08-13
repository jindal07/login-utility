// Load saved credentials and settings
chrome.storage.local.get(["username", "password", "autoSubmit"], ({ username, password, autoSubmit = false }) => {
  if (username) document.getElementById("username").value = username;
  if (password) document.getElementById("password").value = password;
  document.getElementById("autoSubmit").checked = autoSubmit;
});

// Save credentials and settings
document.getElementById("save").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const autoSubmit = document.getElementById("autoSubmit").checked;

  if (!username || !password) {
    showStatus("Both username and password are required.", "red");
    return;
  }

  chrome.storage.local.set({ username, password, autoSubmit }, () => {
    showStatus("Settings saved successfully!", "green");
  });
});

// Clear all stored data
document.getElementById("clear").addEventListener("click", () => {
  if (confirm("Are you sure you want to clear all stored credentials?")) {
    chrome.storage.local.clear(() => {
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      document.getElementById("autoSubmit").checked = false;
      showStatus("All credentials cleared.", "orange");
    });
  }
});

function showStatus(message, color) {
  const statusElement = document.getElementById("status");
  statusElement.style.color = color;
  statusElement.textContent = message;
  
  // Clear the message after 3 seconds
  setTimeout(() => {
    statusElement.textContent = "";
  }, 3000);
}
