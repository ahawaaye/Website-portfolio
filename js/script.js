function revealOnScroll() {
    revealSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 1.3;
  
      if (sectionTop < triggerPoint) {
        section.classList.add('rv');
      } else {
        section.classList.remove('rv');
      }
    });
  }