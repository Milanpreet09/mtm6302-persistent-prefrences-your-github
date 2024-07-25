// Load user preferences from localStorage and apply them
document.addEventListener('DOMContentLoaded', () => {
    const bgColorInput = document.getElementById('bg-color');
    const fontColorInput = document.getElementById('font-color');
    const fontSizeInput = document.getElementById('font-size');
    const borderColorInput = document.getElementById('border-color');
    const borderWidthInput = document.getElementById('border-width');
    const textAlignSelect = document.getElementById('text-align');
    const saveButton = document.getElementById('save');

    // Load preferences from localStorage
    const preferences = JSON.parse(localStorage.getItem('pagePreferences')) || {};
    
    if (preferences.backgroundColor) {
        document.body.style.backgroundColor = preferences.backgroundColor;
        bgColorInput.value = preferences.backgroundColor;
    }
    if (preferences.fontColor) {
        document.body.style.color = preferences.fontColor;
        fontColorInput.value = preferences.fontColor;
    }
    if (preferences.fontSize) {
        document.body.style.fontSize = preferences.fontSize + 'px';
        fontSizeInput.value = preferences.fontSize;
    }
    if (preferences.borderColor) {
        document.body.style.borderColor = preferences.borderColor;
        borderColorInput.value = preferences.borderColor;
    }
    if (preferences.borderWidth) {
        document.body.style.borderWidth = preferences.borderWidth + 'px';
        borderWidthInput.value = preferences.borderWidth;
    }
    if (preferences.textAlign) {
        document.body.style.textAlign = preferences.textAlign;
        textAlignSelect.value = preferences.textAlign;
    }

    // Save preferences to localStorage
    saveButton.addEventListener('click', () => {
        const newPreferences = {
            backgroundColor: bgColorInput.value,
            fontColor: fontColorInput.value,
            fontSize: fontSizeInput.value,
            borderColor: borderColorInput.value,
            borderWidth: borderWidthInput.value,
            textAlign: textAlignSelect.value
        };

        document.body.style.backgroundColor = newPreferences.backgroundColor;
        document.body.style.color = newPreferences.fontColor;
        document.body.style.fontSize = newPreferences.fontSize + 'px';
        document.body.style.borderColor = newPreferences.borderColor;
        document.body.style.borderWidth = newPreferences.borderWidth + 'px';
        document.body.style.textAlign = newPreferences.textAlign;

        localStorage.setItem('pagePreferences', JSON.stringify(newPreferences));
    });
});
