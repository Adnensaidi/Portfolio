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
    // Technical Skills Carousel
    const carouselContent = document.querySelector(".carousel-content");
    const items = Array.from(carouselContent.children);
    const modal = document.getElementById("modal");
    const modalImages = document.getElementById("modal-images");
    const closeModal = document.querySelector(".close");
    const logo = document.querySelector(".mode-icon"); // Select the logo element
    let currentIndex = 0; // Current section index
    const intervalTime = 3000; // Interval for automatic scrolling
    const totalSections = items.length; // Total number of sections

    if (totalSections === 0) {
        console.error('No carousel items found!');
        return;
    }

    // Function to update the carousel
    const updateCarousel = (index) => {
        carouselContent.style.transform = `translateX(-${index * 100}%)`;
    };

    // Function to display images in the modal
    const showModal = (images) => {
        modalImages.innerHTML = ""; // Clear previous images
        images.forEach((src) => {
            const img = document.createElement("img");
            img.src = src;
            modalImages.appendChild(img);
        });
        modal.style.display = "block"; // Show the modal
    };

    // Close modal event
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Function for automatic scrolling
    const startAutoSlide = () => {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSections;
            updateCarousel(currentIndex);
        }, intervalTime);
    };

    // Start the auto scroll when the page loads
    startAutoSlide();

    // Add event listener for each carousel section
    items.forEach((item, index) => {
        item.querySelector(".clickable").addEventListener("click", () => {
            currentIndex = index;
            updateCarousel(currentIndex);

            // Show specific images based on the section clicked
            if (index === 0) {
                showModal([ // Front End images
                    "Assets/frontend1.png",
                    "Assets/frontend2.png",
                    "Assets/frontend3.png",
                ]);
            } else if (index === 1) {
                showModal([ // Back End images
                    "Assets/backend1.png",
                    "Assets/backend2.png",
                    "Assets/backend3.png",
                ]);
            } else if (index === 2) {
                showModal([ // Database images
                    "Assets/database1.png",
                    "Assets/database2.png",
                ]);
            }

            // Change the logo when a section is clicked
            logo.src = "Assets/NewLogo.png";
        });
    });

    // Add an event listener to the logo to close the modal and return to the original logo
    logo.addEventListener("click", () => {
        if (logo.src.includes("NewLogo.png")) {
            modal.style.display = "none"; // Close the modal
            logo.src = "Assets/Logo_Name.png"; // Return to the original logo
            currentIndex = 0; // Go back to the first section
            updateCarousel(currentIndex); // Update the carousel to the first section
        }
    });

    // Technical Skills Carousel: Previous and Next buttons
    const prevButton = document.getElementById("prev-technical");
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalSections) % totalSections;
        updateCarousel(currentIndex);
    });

    const nextButton = document.getElementById("next-technical");
    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalSections;
        updateCarousel(currentIndex);
    });
    });

// _________________________________________Project Section_________________________________________________ 
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.image-links a');
    const previewImage = document.getElementById('preview-image');
  
    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            const imageSrc = this.getAttribute('src');
            previewImage.src = imageSrc;
            previewImage.style.display = 'block'; // Show the image
        });
  
        link.addEventListener('mouseout', function() {
            previewImage.style.display = 'none'; // Hide the image
        });
    });
  });
  
  // _________________________________________contact me Section_________________________________________________ 
  
  function goToD() {
    window.location.href = "https://discord.com/channels/988713608877834291/1314300479592730654"; // Replace with your desired URL OF DISCORD
  }
  document.getElementById("discord").onclick = goToD;// Add event listener to the image
  
  function goToLink() {
    window.location.href = "https://www.linkedin.com/in/idriss-mrayah-b81b0a331/"; // Replace with your desired URL OF LINKEDIN
  }
  document.getElementById("linkdin").onclick = goToLink;
  
  function goTogit() {
    window.location.href = "https://github.com/samael226/Portfolio-Project"; // Replace with your desired URL OF GITHUB
  }
  document.getElementById("github").onclick = goTogit;