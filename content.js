function fillCredentials() {
  const usernameField = document.querySelector("#LoginUserPassword_auth_username");
  const passwordField = document.querySelector("#LoginUserPassword_auth_password");

  if (usernameField && passwordField) {
    chrome.storage.local.get(["username", "password", "autoSubmit"], ({ username, password, autoSubmit = false }) => {
      if (!username || !password) {
        console.log("No credentials stored for auto-login");
        return;
      }

      // Fill the form fields
      usernameField.value = username;
      passwordField.value = password;
      
      console.log("Credentials filled successfully");

      // Auto-submit if enabled
      if (autoSubmit) {
        setTimeout(() => {
          submitForm();
        }, 500); // Small delay to ensure form is fully populated
      }
    });
    
    return true; // Found form elements
  }
  return false; // Form not ready yet
}

function submitForm() {
  try {
    // Try the portal's custom submit method first
    if (window.oAuthentication && typeof window.oAuthentication.submitActiveForm === 'function') {
      console.log("Using portal's custom submit method");
      window.oAuthentication.submitActiveForm();
    } else {
      // Fallback: try clicking the login button
      const loginButton = document.querySelector("#UserCheck_Login_Button");
      if (loginButton) {
        console.log("Clicking login button");
        loginButton.click();
      } else {
        // Last resort: standard form submission
        const form = document.querySelector("#LoginUserPassword_auth_form");
        if (form) {
          console.log("Using standard form submit");
          form.submit();
        }
      }
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}

function waitForLoginForm() {
  // First, try immediate detection
  if (fillCredentials()) {
    return;
  }

  // Set up MutationObserver to watch for dynamically loaded content
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        // Check if login form elements are now present
        if (fillCredentials()) {
          observer.disconnect(); // Stop observing once we've found and filled the form
          return;
        }
      }
    }
  });

  // Start observing the entire document for changes
  observer.observe(document, {
    childList: true,
    subtree: true
  });

  // Stop observing after 10 seconds to prevent indefinite watching
  setTimeout(() => {
    observer.disconnect();
    console.log("Stopped watching for login form after timeout");
  }, 10000);
}

// Start the process when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', waitForLoginForm);
} else {
  waitForLoginForm();
}
