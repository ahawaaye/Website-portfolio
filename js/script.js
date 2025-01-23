
document.addEventListener("DOMContentLoaded", function () {
    const revealSections = document.querySelectorAll('.title-project-container'); // Select elements to animate

    function revealOnScroll() {
        revealSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight / 1.3;

            if (sectionTop < triggerPoint) {
                section.classList.add('rv'); // Add animation class when in viewport
            } else {
                section.classList.remove('rv'); // Remove if out of viewport
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Call once to check for already visible sections
});

document.addEventListener("DOMContentLoaded", function () {
    const revealSections = document.querySelectorAll('.project-boards-container'); // Selects all elements to animate

    function revealOnScroll() {
        revealSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight / 1.3;

            if (sectionTop < triggerPoint) {
                section.classList.add('rv'); // Adds the animation class
            } else {
                section.classList.remove('rv'); // Removes if out of viewport
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Runs once on page load
});
