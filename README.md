# **Easy-Reading Chrome Extension**
#### Video Demo: < >
#### Description: Chrome extension to change the background of the page to make the page easier to read.

## Files Included

### Manifest.json
**manifest.json** contains the information about the extension, including links to the necessary files and permissions for APIs. It also contains a message to the user about more color choices under options.

### Background Scripts
**background.js** contains the script to initialize the background preferred color once the user installs or updates the extension.

### Popup HTML and Scripts
**pop.html** contains the HTML code to format the popup that appears once the user clicks on the extension's icon in the toolbar. The popup styling is formatted in **popup.css**.

What happens once the user clicks on the preferred color is controlled by the script in **popup.js** which changes the page's background color using the stored preferred color.

### Options HTML and Scripts
**options.html** formats the options popup that offers 3 more color options to the user. The new color is then saved by the script located in **options.js** to switch the stored preferred color to the new color.

### Images Folder
The **images** folder contains the icons for the toolbar in various pixel sizes so the browser can choose the right one for the user's screen and device.

### Design Choices

I wanted to make this extension because I discovered that reading webpages with these pastel colors as a backround is easier on my eyes. I notice that most extensions seemed to focus on darkmode or inverting the colors to black and white, so I decided to try coding my own extension. I decided to include 4 pastel colors for the background instead of the original color picker because a) the color picker would be too overwhelmin to choose from constantly and b) the text would not have high enough contrast dependin on the color chosen.

I also thought about including an off button or making the webpage color change persistent after visiting a new webpage. I decided not to because I usually need the new background colors to make reading longer pages easier, so that means I'll stay on the webpage a while. Maybe I will include the extra features in the future, though. I also coded this in Manifest 3 which is relatively new so I need more time to understand how the new features are different.



