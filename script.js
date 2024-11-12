let slideIndex = {};

function changeSlide(n, section) {
    if (!slideIndex[section]) slideIndex[section] = 0;
    slideIndex[section] += n;
    showSlides(slideIndex[section], section);
}

function showSlides(n, section) {
    const slides = document.querySelectorAll(`#${section} .slide`);
    if (n >= slides.length) slideIndex[section] = 0;
    if (n < 0) slideIndex[section] = slides.length - 1;
    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex[section]].style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    ["living-room", "guest-room", "master-bedroom", "studio-suite"].forEach(section => showSlides(0, section));
});
