// *********************mode function   ********************************************************


// _________________________________________Menu_________________________________________________ 


// Function to toggle the visibility of the menu
function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const body = document.body;

  // Toggle the menu visibility
  if (sidebar.style.display === 'block') {
      sidebar.style.display = 'none';
      body.classList.remove('menu-open'); // Remove overflow restriction
  } else {
      sidebar.style.display = 'block';
      body.classList.add('menu-open'); // Add overflow restriction
  }
}

// Function to scroll to a specific section of the page and close the menu
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling

  // Hide the sidebar menu when a section is clicked
  const sidebar = document.getElementById('sidebar');
  sidebar.style.display = 'none'; // Close the sidebar menu
  document.body.classList.remove('menu-open'); // Remove overflow restriction
}

// _________________________________________Home Section_________________________________________________ 

// Select the element with the class 'container_home'
const container = document.querySelector('.container_home');

// Function to move the background based on mouse position
function moveBackground(event) {
  const x = (event.clientX / window.innerWidth) * 100; // X position of the mouse
  const y = (event.clientY / window.innerHeight) * 100; // Y position of the mouse

  // Move the background based on mouse position
container.style.backgroundPosition = `${x}% ${y}%`;
}

// Add a 'mousemove' event to capture the mouse movement
container.addEventListener('mousemove', moveBackground);

// Function to create animated particles in the background
function createParticles() {
  const container = document.querySelector('.container_home');

   // Create multiple particles (e.g., 50 particles)
  for (let i = 0; i < 50; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');

     // Randomly position the particle
     const size = Math.random() * 5 + 5; // Random size between 5px and 10px
     const xPosition = Math.random() * 100; // Random horizontal position (percentage)
     const yPosition = Math.random() * 100; // Random vertical position (percentage)
  
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${xPosition}%`;
  particle.style.top = `${yPosition}%`;

     // Add the particle to the container element
  container.appendChild(particle);
  }
}

// Launch the particle creation function as soon as the page is loaded
window.onload = createParticles;

// Greeting function 
function greeting(id){
  var text = document.querySelector(id);
  console.log(text);
  text.innerText = "   I'm Idriss";
}


// ....................................................Technical-Skills function..................................................
document.addEventListener("DOMContentLoaded", () => {
  // Get all the necessary elements from the DOM
  const carouselContent = document.querySelector(".carousel-content");
  const items = Array.from(carouselContent.children); // All carousel items
  const prevButton = document.getElementById("prev"); // Previous button
  const nextButton = document.getElementById("next"); // Next button
  let currentIndex = 0; // Keeps track of the currently active slide
  const intervalTime = 3000; // Slide duration in milliseconds (3 seconds)
  let autoSlideInterval; // Variable to store the interval for auto-sliding

  // Function to update the carousel to show the correct slide
  const updateCarousel = (index) => {
      // First, remove the "active" class from all items
      items.forEach((item) => item.classList.remove("active"));

      // Add the "active" class to the currently selected item
      items[index].classList.add("active");

      // Move the carousel to the correct position
      carouselContent.style.transform = `translateX(-${index * 100}%)`;
  };

  // Function to move to the next slide
  const nextSlide = () => {
      // Increment the index, looping back to the first slide if needed
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel(currentIndex); // Update the carousel display
  };

  // Function to move to the previous slide
  const prevSlide = () => {
      // Decrement the index, looping to the last slide if needed
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel(currentIndex); // Update the carousel display
  };

  // Function to start the auto-slide feature
  const startAutoSlide = () => {
      autoSlideInterval = setInterval(nextSlide, intervalTime); // Automatically go to the next slide
  };

  // Function to stop the auto-slide feature
  const stopAutoSlide = () => {
      clearInterval(autoSlideInterval); // Stop the interval
  };

  // Event listener for the previous button
  prevButton.addEventListener("click", () => {
      stopAutoSlide(); // Stop auto-slide temporarily
      prevSlide(); // Move to the previous slide
      startAutoSlide(); // Restart auto-slide
  });

  // Event listener for the next button
  nextButton.addEventListener("click", () => {
      stopAutoSlide(); // Stop auto-slide temporarily
      nextSlide(); // Move to the next slide
      startAutoSlide(); // Restart auto-slide
  });

  // Start the auto-slide when the page loads
  startAutoSlide();

  // Add a smooth transition effect for the carousel
  carouselContent.style.transition = "transform 0.5s ease-in-out";
});
