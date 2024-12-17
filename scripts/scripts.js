document.querySelectorAll('.view-more').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.getElementById(this.dataset.target);
        target.style.display = 'block';
    });
});

document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', function () {
        this.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// Toggle the visibility of the skills under each section
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const heading = card.querySelector('h3');
    const skillList = card.querySelector('p');

    heading.addEventListener('click', () => {
        // Toggle visibility of the skills list
        if (skillList.style.display === "none" || skillList.style.display === "") {
            skillList.style.display = "block";
        } else {
            skillList.style.display = "none";
        }
    });
});
function scrollToSection(id) {
    // Get the target element
    const element = document.getElementById(id);
    
    if (element) {
      // Scroll to the element with smooth scrolling
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
document.getElementById('nextBtn').addEventListener('click', function() {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const firstItem = carouselWrapper.firstElementChild;

    // Start the hiding and sliding of the first item and show the new one
    carouselWrapper.style.transition = 'transform 1.5s ease-in-out, opacity 3.5s ease-in-out';
    carouselWrapper.style.transform = 'translateX(-320px)';  // Slide the carousel
    carouselWrapper.style.opacity = 0;  // Fade out current items

    setTimeout(() => {
        carouselWrapper.appendChild(firstItem); // Move the first item to the end
        carouselWrapper.style.transition = 'none'; // Reset transition immediately
        carouselWrapper.style.transform = 'translateX(0)'; // Keep the new item in place
        carouselWrapper.style.opacity = 1;  // Fade in new items
    }, 1500); // Wait for the fade-out and slide effect to finish

});

document.getElementById('prevBtn').addEventListener('click', function() {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const lastItem = carouselWrapper.lastElementChild;

    // Start the hiding and sliding of the last item and show the new one
    carouselWrapper.style.transition = 'transform 1.5s ease-in-out, opacity 3.5s ease-in-out';
    carouselWrapper.style.transform = 'translateX(320px)';  // Slide the carousel
    carouselWrapper.style.opacity = 0;  // Fade out current items

    setTimeout(() => {
        carouselWrapper.insertBefore(lastItem, carouselWrapper.firstElementChild); // Move last item to the front
        carouselWrapper.style.transition = 'none'; // Reset transition immediately
        carouselWrapper.style.transform = 'translateX(0)'; // Keep the new item in place
        carouselWrapper.style.opacity = 1;  // Fade in new items
    }, 1500); // Wait for the fade-out and slide effect to finish
});


// Wait for the DOM to fully load before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Get the hamburger button and navbar elements
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('#navbar ul li a');

    // Toggle the menu when the hamburger is clicked
    function toggleMenu() {
        navbar.classList.toggle('visible');
    }

    // Attach the event listener to the hamburger button
    hamburger.addEventListener('click', toggleMenu);

    // Close the menu when a link is clicked (only for small screens)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {  // Close menu only on small screens
                navbar.classList.remove('visible');
            }
        });
    });
});




