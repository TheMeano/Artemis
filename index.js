const navbar = document.getElementById('navbar');
const navBrand = document.getElementById('navBrand');
const containerFluid = document.getElementById("container_fluid")
// Store the initial height of the navbar
const initialHeight = navbar.offsetHeight;

// Add an event listener to the scroll event
window.addEventListener('scroll', function() {
  // Check if the user has scrolled beyond a certain threshold (e.g., 100 pixels)
  if (window.pageYOffset > 100) {
    // If scrolled, make the navbar smaller by reducing its height
    navbar.style.height = '100px';
    
    navBrand.style.height = '100px';// Adjust the height to your desired value
  } else {
    // If not scrolled, revert the navbar to its initial height
    navbar.style.height = initialHeight + 'px';
    navBrand.style.height = initialHeight + 'px';
  }
});

window.addEventListener('scroll', function() {
  var backToTopBtn = document.getElementById('backToTopBtn');

  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});


var navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

navbarLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    if (window.getComputedStyle(navbarToggler).display !== 'none') {
      setTimeout(function() {
        navbarToggler.click();
      }, 500); // Adjust the delay time (in milliseconds) as needed
    }
  });
});

var carousel = document.querySelector('#carouselExampleSlidesOnly');

carousel.addEventListener('slide.bs.carousel', function () {
  var activeItem = this.querySelector('.carousel-item.active');
  
  setTimeout(function() {
    activeItem.classList.remove('active');
  }, 600); // Adjust the delay time (in milliseconds) to match the transition duration
});

carousel.addEventListener('slid.bs.carousel', function () {
  var nextItem = this.querySelector('.carousel-item-next');
  
  setTimeout(function() {
    nextItem.classList.add('active');
  }, 0);
});
