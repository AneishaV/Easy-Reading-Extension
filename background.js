// Store color for background
let color = "#d4c4e7";

// On install and update, store color
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %clilac', 'color: ${color}');
});