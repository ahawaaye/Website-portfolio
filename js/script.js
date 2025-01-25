
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

document.addEventListener("DOMContentLoaded", function () {
    const revealSections = document.querySelectorAll('.project-boards-container, .image-above-contacts-container'); // Combine all sections to animate

    function revealOnScroll() {
        const triggerPoint = window.innerHeight / 1.3; // Common trigger point for all elements

        revealSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerPoint) {
                section.classList.add('rv'); // Adds animation class
            } else {
                section.classList.remove('rv'); // Removes class when out of viewport
            }
        });
    }

    // Attach scroll event listener
    window.addEventListener('scroll', revealOnScroll);

    // Run once on page load to check already visible sections
    revealOnScroll();
});


document.addEventListener("DOMContentLoaded", () => {
    const revealSections = document.querySelectorAll('.project-boards-container, .image-above-contacts-container');

    const revealOnScroll = () => {
        const triggerPoint = window.innerHeight * 0.7; // Keep the original trigger point

        revealSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerPoint) {
                section.classList.add('rv'); // Add animation class when section is in view
            } 
        });
    };

    // Add the scroll event listener
    window.addEventListener('scroll', revealOnScroll);

    // Initial check on page load
    revealOnScroll();
});

