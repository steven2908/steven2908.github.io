// Fade-in animation on scroll
window.addEventListener('scroll', function() {
  const fadeElements = document.querySelectorAll('.fade-in');

  fadeElements.forEach(function(element) {
    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      element.classList.add('visible');
    }
  });
});

// Hover animation for buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)';
    button.style.transition = 'transform 0.3s ease';
  });
  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
  });
});