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