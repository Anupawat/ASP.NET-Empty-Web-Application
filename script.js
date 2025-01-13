// JavaScript for future interactivity or additional animations
console.log("Page Loaded Successfully!");

// Optional: Change text dynamically
const animatedBox = document.getElementById("animated-box");
animatedBox.addEventListener("mouseover", () => {
    animatedBox.textContent = "Feel the Rhythm!";
});
animatedBox.addEventListener("mouseout", () => {
    animatedBox.textContent = "Enjoy the Vibes!";
});
