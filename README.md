# **Easy-Reading Chrome Extension**
#### Video Demo: < >
#### Description: Chrome extension to change the background of the page to make it easier to read.

## Files Included

### Manifest.json
**manifest.json** contains the information about the extension, including links to the necessary files and permissions. It also contains a message to the user about more color choices under options.

### Background Scripts
**background.js** contains the script to initialize the background preferred color once the user installs or updates the extension.

### Popup HTML and Scripts
**pop.html** contains the HTML code to format the popup that appears once the user clicks on the extension's icon in the toolbar. The popup styling is formatted in **popup.css**. What happens once the user clicks on the preferred color is controlled by the script in **popup.js**, which changes the page's background color using the stored preferred color.

### Options HTML and Scripts
**options.html** formats the options popup that offers 3 more colors to the user. The new color is then saved by the script located in **options.js** to store it as the new preferred color.

### Images Folder
The **images** folder contains the icons for the toolbar in various pixel sizes.

### Extension Inspiration and Design Choices
I wanted to make this extension because I discovered that reading webpages with these pastel colors as a backround is easier on my eyes. I also noticed that most extensions seemed to focus on darkmode or inverting the colors to black and white, so I decided to try coding my own extension. aAt first, I wanted to include a color picker but I decided to only offer 4 options because a) the color picker would be too overwhelming to choose from constantly and b) the text would not have high enough contrast depending on the color chosen.

I also thought about including an off button or making the webpage color change persistent after visiting a new webpage. But I decided not to because I usually need the new background colors hwen reading longer pages, so that means I'll stay on the webpage a while. Maybe I will include the extra features in the future, though. I also coded this in Manifest 3, which is relatively new, so I need more time to understand how the new features work.



