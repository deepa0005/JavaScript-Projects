let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// Load available voices and populate the dropdown
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    if (!voices.length) {
        voices = window.speechSynthesis.getVoices();
    }
    speech.voice = voices[0]; // Set the default voice

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

// Update the selected voice when the dropdown value changes
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[Number(voiceSelect.value)];
});

// Handle speech synthesis when the button is clicked
document.querySelector("button").addEventListener("click", () => {
    const textArea = document.querySelector("textarea");
    if (textArea.value.trim() === "") {
        alert("Please enter text to speak.");
        return;
    }

    window.speechSynthesis.cancel(); // Cancel any ongoing speech
    speech.text = textArea.value;
    window.speechSynthesis.speak(speech);
});

