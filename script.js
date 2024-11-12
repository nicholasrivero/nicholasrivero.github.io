let slideIndex = {};

// Function to change the slide in a specific section
function changeSlide(n, section) {
    if (!slideIndex[section]) slideIndex[section] = 0;
    slideIndex[section] += n;
    showSlides(slideIndex[section], section);
}

// Function to display the current slide
function showSlides(n, section) {
    const slides = document.querySelectorAll(`#${section} .slide`);
    if (n >= slides.length) slideIndex[section] = 0;
    if (n < 0) slideIndex[section] = slides.length - 1;
    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex[section]].style.display = "block";
}

// Initialize each section’s slideshow on page load
document.addEventListener("DOMContentLoaded", () => {
    const sections = ["living-room", "guest-room", "master-bedroom", "studio-suite"];
    sections.forEach(section => {
        slideIndex[section] = 0; // Start each section with the first slide
        showSlides(0, section);
    });
});
