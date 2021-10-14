# **Easy-Reading Chrome Extension**
#### Video Demo: <https://youtu.be/c_bmDH_goro>
#### Description: Chrome extension to change the background of the page to make it easier to read.

## Files Included

### Manifest.json
The manifest file **manifest.json** contains the information about the extension, including links to the necessary files and permissions for specific APIs. It also contains a message to the user about more color choices under options.

### Background Scripts
The background script file **background.js** contains the script to initialize the background preferred color once the user installs or updates the extension.

### Popup HTML and Scripts
The popup HTML file **pop.html** contains the HTML code to format the popup that appears once the user clicks on the extension's icon in the toolbar. The popup styling is formatted in **popup.css**. What happens once the user clicks on the preferred color is controlled by the script in **popup.js**, which changes the page's background color using the stored preferred color.

### Options HTML and Scripts
The options HTML file **options.html** formats the options popup that offers 3 more colors to the user. The new color is then saved by the script located in **options.js** to store it as the new preferred color.

### Images Folder
The **Images** folder contains the icons for the toolbar in various pixel sizes. There are 4 different versions of the icon so the browser can choose the correct size for the user’s device.

### Extension Inspiration
A while ago, I visited a webpage that allowed users to change the background and test which color was best for reading webpage text. After that, I wondered if I could find an extension to do that for me. But after some searching, most extensions seemed to focus on changing backgrounds to dark mode or inverting the colors of the background and text (another version of dark mode). While dark mode has its place, it wasn’t necessarily the easiest thing to use to read webpages in the daytime, so I decided to try coding my own extension for CS50’s Final Project.

I referenced the Google Chrome Extensions [documentation] (https://developer.chrome.com/docs/extensions) extensively for this project, especially to add an options feature that pops up on the extension page and not on a separate HTML webpage. 
```
 "options_page": "options.html",
    "options_ui": {
        "page": "options.html",
        "open_in_tab": false
    }
```
### Extension Design Choices
I decided to create a Chrome extension that provides 4 color options to the user in pastel colors. At first, I wanted to include a color picker that allowed the user unlimited color options and spent some time figuring out how to do that. In the end, I decided to only offer the 4 options because a)constantly choosing colors from the color picker would be too overwhelming for me on a daily basis and b) depending on the color chosen, the text might not have enough contrast to read, thus canceling the “easy reading” effect I wanted.

I also thought about including an off button or making the webpage color change persistent after visiting a new webpage. But I decided not to because I usually need the new background colors when reading longer pages, so that means I'll stay on the webpage for a while. Maybe I will include the extra features in the future, though. I also coded this in Manifest 3, which is relatively new, so I need more time to understand how the new features work.
