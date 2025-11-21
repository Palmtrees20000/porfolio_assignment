
// get me a list of all the items to watch
const myListOfItems = document.querySelectorAll('section');

// a comma deliniated list of name/value pairs controlling how the observer works
let observerOptions = {
    //null is the default and references the viewport
    root: null,
    //alters the viewport. negative values decrease the size.
    rootMargin: '0px 0px -30px 0px',
    //0 is barely showing, 1 is fully showing
    threshold: .25
  }

// AllItems is a list of all elements being watched
const myObserver = new IntersectionObserver(allItems => {
    allItems.forEach(singleItem => {
        if (singleItem.isIntersecting){
            hiliteNav(singleItem.target)
        }
    })
}, observerOptions)

// function to hilight the current navigation items
function hiliteNav(x) {
	const currentActive = document.querySelector('.active');
	if (currentActive) {
		currentActive.classList.remove('active');
	}
	let theid = x.getAttribute('id');
	let newActiveLink = document.querySelector(`[href="#${theid}"]`);
	if (newActiveLink) {
		newActiveLink.parentElement.classList.add('active');
	}
}

//call the function for each element in the list
myListOfItems.forEach(item => {
    myObserver.observe(item)
});




// Professional Navbar Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking on nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// Hero Slider Initialization
const heroSwiper = new Swiper('.hero-swiper', {
  // Loop through slides infinitely
  loop: true,
  
  // Slide transition effect
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  
  // Transition speed
  speed: 1000,
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // Pagination dots
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: false,
  },
  
  // Autoplay settings
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  
  // Keyboard navigation
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  
  // Accessibility
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    firstSlideMessage: 'This is the first slide',
    lastSlideMessage: 'This is the last slide',
  },
  
  // Responsive breakpoints
  breakpoints: {
    320: {
      spaceBetween: 0,
    },
    768: {
      spaceBetween: 0,
    },
    1024: {
      spaceBetween: 0,
    }
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 70; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Intersection Observer for scroll animations
const animationObserverOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, animationObserverOptions);

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.service-card, .testimonial');
  
  // Set initial state for animations
  animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animationObserver.observe(element);
  });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
      navbar.style.backdropFilter = 'blur(10px)';
    } else {
      navbar.style.backgroundColor = '#000';
      navbar.style.backdropFilter = 'none';
    }
  }
});

// Loading state management
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// Set initial body opacity for smooth loading
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';