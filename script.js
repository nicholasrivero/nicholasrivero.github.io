// Initialize an object to track the current slide index for each section
let slideIndex = {};

// Function to change the slide in a specific section
function changeSlide(n, section) {
    // If this section hasn't been initialized, set its slide index to 0
    if (!slideIndex[section]) slideIndex[section] = 0;

    // Update the slide index for the section
    slideIndex[section] += n;

    // Call showSlides to display the current slide
    showSlides(slideIndex[section], section);
}

// Function to display the current slide
function showSlides(n, section) {
    // Select all slides within the specified section
    const slides = document.querySelectorAll(`#${section} .slide`);

    // Loop back to the first slide if the index exceeds the number of slides
    if (n >= slides.length) slideIndex[section] = 0;

    // Loop back to the last slide if the index goes below zero
    if (n < 0) slideIndex[section] = slides.length - 1;

    // Hide all slides in this section
    slides.forEach(slide => slide.style.display = "none");

    // Display the current slide based on the updated slide index
    slides[slideIndex[section]].style.display = "block";
}

// Initialize each section’s slideshow on page load
document.addEventListener("DOMContentLoaded", () => {
    // List of section IDs that have slideshows
    const sections = ["living-room", "guest-room", "master-bedroom", "studio-suite"];

    // Initialize each section with the first slide visible
    sections.forEach(section => showSlides(0, section));
});
