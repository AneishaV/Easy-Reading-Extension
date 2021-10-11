let page = document.getElementById("buttonDiv");
let selectedClassName = "current";
const presetButtonColors = ["#d4c4e7", "#eda58e", "#98bdef", "#efa9a0"];

// Reacts to a button click by marking the selected button and saving selection
function handleButtonClick(event) {
    // Remove styling from previously selected c
    let current = event.target.parentElement.querySelector(
        `.${selectedClassName}`
    );
    if (current && current !== event.target) {
        current.classList.remove(selectedClassName);
    }

    // Mark button as selected
    let color = event.target.dataset.color;
    event.target.classList.add(selectedClassName);
    chrome.storage.sync.set({ color });
}

// Add button to page for each supplied color
function constructOptions(buttonColors) {
    chrome.storage.sync.get("color", (data) => {
        let currentColor  = data.color;
        //for each color given
        for (let buttonColor of buttonColors) {
            // create button with that color
            let button = document.createElement("button");
            button.dataset.color = buttonColor;
            button.style.backgroundColor = buttonColor;

            // Mark currently selected color
            if (buttonColor == currentColor) {
                button.classList.add(selectedClassName);
            }

            //and register listener for when that button is clicked
            button.addEventListener("click", handleButtonClick);
            page.appendChild(button);
        }
    });
}

// Initialize page by constructing color options
constructOptions(presetButtonColors);
