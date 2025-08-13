# College Auto Login Extension

A Chrome extension that automatically fills and submits login forms for your college internet portal, saving you time and hassle during daily authentication.

## Features

- 🔐 **Secure Credential Storage**: Stores login credentials locally using Chrome's encrypted storage
- 🚀 **Auto-Fill Forms**: Automatically detects and fills username/password fields
- ⚡ **Optional Auto-Submit**: Can automatically submit forms or just fill them for manual submission
- 🔄 **Dynamic Content Support**: Works with JavaScript-heavy portals that load content dynamically
- ⚙️ **Easy Configuration**: Simple options page for managing settings
- 🛡️ **Privacy Focused**: No data is sent to external servers

## Installation

### Method 1: Load Unpacked Extension (Recommended)

1. **Download the Extension**
   - Clone or download this repository to your computer
   - Extract to a folder like `C:\Extensions\college-auto-login`

2. **Enable Developer Mode in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Toggle on "Developer mode" in the top-right corner

3. **Load the Extension**
   - Click "Load unpacked" button
   - Select the folder containing the extension files
   - The extension should now appear in your extensions list

4. **Pin the Extension (Optional)**
   - Click the puzzle piece icon in Chrome's toolbar
   - Find "College Auto Login" and click the pin icon to keep it visible

### Method 2: Pack and Install

1. **Pack the Extension**
   - Go to `chrome://extensions/`
   - Click "Pack extension"
   - Select the extension folder
   - This creates a `.crx` file

2. **Install the Packed Extension**
   - Drag the `.crx` file to the extensions page
   - Click "Add extension" when prompted

## Configuration

### First-Time Setup

1. **Open Extension Settings**
   - Click the extension icon in your toolbar, OR
   - Right-click the extension icon and select "Options", OR
   - Go to `chrome://extensions/` and click "Details" → "Extension options"

2. **Enter Your Credentials**
   - Username: Your college portal username
   - Password: Your college portal password
   - Auto-submit: Check this if you want automatic form submission (recommended for trusted devices only)

3. **Save Settings**
   - Click "Save Settings"
   - You should see a "Settings saved successfully!" message

### Security Settings

- **Auto-Submit**: Enable only on your personal, trusted devices
- **Clear Credentials**: Use this button to remove all stored data when needed

## Usage

### Automatic Operation

1. **Navigate to Login Page**
   - Go to your college's internet portal login page
   - The extension automatically detects the login form

2. **Credential Filling**
   - Username and password fields are filled automatically
   - If auto-submit is enabled, the form submits after a brief delay
   - If auto-submit is disabled, you'll need to click the login button manually

### Manual Control

- The extension works silently in the background
- No user interaction needed once configured
- Access settings anytime through the extension icon

## Troubleshooting

### Extension Not Working

1. **Check Permissions**
   - Ensure the extension has permission to access the portal website
   - Go to extension details and verify site access

2. **Verify Credentials**
   - Open extension options and confirm username/password are correct
   - Try clearing and re-entering credentials

3. **Portal Changes**
   - If the portal website changes, the extension might need updates
   - Check console logs for any errors

### Common Issues

**Form Not Detected**
- The portal might load content dynamically
- Wait a few seconds for the page to fully load
- Refresh the page and try again

**Auto-Submit Not Working**
- Ensure auto-submit is enabled in settings
- Some portals have custom submission methods that might need manual clicking

**Credentials Not Saved**
- Check that you clicked "Save Settings"
- Ensure Chrome has storage permissions

## Technical Details

### Supported Portals

This extension is designed for portals with:
- Username/password form fields
- Standard HTML forms or JavaScript-based submission
- Dynamic content loading support

### Browser Compatibility

- **Chrome**: Fully supported (Manifest V3)
- **Edge**: Should work (Chromium-based)
- **Firefox**: Not compatible (uses different extension format)

### Security Features

- **Local Storage Only**: Credentials never leave your device
- **Chrome Encryption**: Uses Chrome's built-in storage encryption
- **No Network Requests**: Extension doesn't communicate with external servers
- **Permission Minimal**: Only requests necessary permissions

## Privacy & Security

### What Data is Stored

- ✅ Username and password (encrypted locally)
- ✅ Auto-submit preference
- ❌ No browsing history
- ❌ No personal information beyond credentials
- ❌ No data sent to external servers

### Security Best Practices

1. **Use Strong Passwords**: Ensure your portal password is strong and unique
2. **Trusted Devices Only**: Only install on devices you control
3. **Regular Updates**: Keep the extension updated
4. **Monitor Usage**: Regularly review stored credentials
5. **Remove When Done**: Uninstall if no longer needed

### Organizational Policies

⚠️ **Important**: Check your institution's IT policy before using automated login tools. Some organizations may prohibit or restrict the use of such extensions.

## Development

### File Structure

```
college-auto-login/
├── manifest.json      # Extension configuration
├── background.js      # Service worker
├── content.js         # Main functionality
├── options.html       # Settings page
├── options.js         # Settings logic
└── README.md         # This file
```

### Customization

To adapt for different portals, modify:
- `content.js`: Update form selectors and submission methods
- `manifest.json`: Adjust host permissions for different URLs

## Support

### Getting Help

1. **Check Console Logs**
   - Press F12 on the portal page
   - Look for extension-related messages in the Console tab

2. **Extension Logs**
   - Go to `chrome://extensions/`
   - Click extension details
   - Check "Inspect views: service worker" for background logs

### Common Solutions

- **Clear browser cache** if login page behavior changes
- **Disable other extensions** temporarily to check for conflicts
- **Update Chrome** to ensure compatibility

## License

This project is provided as-is for educational purposes. Use responsibly and ensure compliance with your institution's policies.

## Disclaimer

- This extension is for personal use only
- Users are responsible for complying with their organization's IT policies
- The developers are not liable for any misuse or policy violations
- Always ensure you have permission to use automated tools on your institution's systems

---

**Version**: 1.1  
**Last Updated**: August 2025  
**Compatibility**: Chrome 88+
# login-utility
