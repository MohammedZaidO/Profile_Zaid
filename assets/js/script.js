'use strict';

// ===== UTILITY FUNCTIONS =====
const elementToggleFunc = function (elem) { 
  if (elem) elem.classList.toggle("active"); 
}

// ===== SIDEBAR FUNCTIONALITY =====
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () { 
    elementToggleFunc(sidebar); 
  });
}

// ===== TESTIMONIALS MODAL =====
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Modal toggle function
const testimonialsModalFunc = function () {
  if (modalContainer) modalContainer.classList.toggle("active");
  if (overlay) overlay.classList.toggle("active");
}

// Add click event to all modal items
if (testimonialsItem.length > 0) {
  testimonialsItem.forEach(item => {
    item.addEventListener("click", function () {
      const avatar = this.querySelector("[data-testimonials-avatar]");
      const title = this.querySelector("[data-testimonials-title]");
      const text = this.querySelector("[data-testimonials-text]");
      
      if (modalImg && avatar) modalImg.src = avatar.src;
      if (modalImg && avatar) modalImg.alt = avatar.alt;
      if (modalTitle && title) modalTitle.innerHTML = title.innerHTML;
      if (modalText && text) modalText.innerHTML = text.innerHTML;

    testimonialsModalFunc();
    });
  });
}

// Add click event to modal close button
if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);

// ===== CUSTOM SELECT =====
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () { 
    elementToggleFunc(this); 
  });
}

// Add event in all select items
if (selectItems.length > 0) {
  selectItems.forEach(item => {
    item.addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      if (select) elementToggleFunc(select);
    filterFunc(selectedValue);
    });
  });
}

// ===== FILTER FUNCTIONALITY =====
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    if (selectedValue === "all") {
      item.classList.add("active");
    } else if (selectedValue === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// Add event in all filter button items for large screen
if (filterBtn.length > 0) {
let lastClickedBtn = filterBtn[0];

  filterBtn.forEach(btn => {
    btn.addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
    });
  });
}

// ===== CONTACT FORM =====
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add event to all form input field
if (formInputs.length > 0) {
  formInputs.forEach(input => {
    input.addEventListener("input", function () {
      // check form validation
      if (form && form.checkValidity()) {
        if (formBtn) formBtn.removeAttribute("disabled");
      } else {
        if (formBtn) formBtn.setAttribute("disabled", "");
      }
    });
  });
}

// ===== PERFECT NAVIGATION SYSTEM =====
class NavigationManager {
  constructor() {
    this.navigationLinks = document.querySelectorAll("[data-nav-link]");
    this.pages = document.querySelectorAll("[data-page]");
    this.currentPage = 'about';
    
    console.log("Navigation Manager: Found", this.navigationLinks.length, "links and", this.pages.length, "pages");
    
    this.init();
  }

  init() {
    // Set initial state
    this.setActivePage('about');
    
    // Add click listeners
    this.navigationLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageName = link.textContent.toLowerCase().trim();
        console.log("Navigation clicked:", pageName);
        this.setActivePage(pageName);
      });
    });
  }

  setActivePage(pageName) {
    console.log("Setting active page:", pageName);
    
    // Remove active class from all pages and links
    this.pages.forEach(page => {
      page.classList.remove('active');
    });
    
    this.navigationLinks.forEach(link => {
      link.classList.remove('active');
    });
    
    // Find and activate the target page
    const targetPage = document.querySelector(`[data-page="${pageName}"]`);
    const targetLink = Array.from(this.navigationLinks).find(link => 
      link.textContent.toLowerCase().trim() === pageName
    );
    
    if (targetPage && targetLink) {
      targetPage.classList.add('active');
      targetLink.classList.add('active');
      this.currentPage = pageName;
      
      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      console.log("Successfully activated:", pageName);
    } else {
      console.error("Page or link not found for:", pageName);
      console.log("Available pages:", Array.from(this.pages).map(p => p.dataset.page));
      console.log("Available links:", Array.from(this.navigationLinks).map(l => l.textContent.trim()));
    }
  }
}

// ===== PROFESSIONAL ANIMATION SYSTEM =====
class AnimationController {
  constructor() {
    this.initializeAnimations();
  }

  initializeAnimations() {
    this.addEntranceAnimations();
    this.addHoverEffects();
    this.addScrollAnimations();
  }

  addEntranceAnimations() {
    const elements = document.querySelectorAll('.sidebar, .navbar');
    elements.forEach((element, index) => {
      if (element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, index * 150);
      }
    });
  }

  addHoverEffects() {
    // Service items hover
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
      if (item) {
        item.addEventListener('mouseenter', () => {
          item.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
          item.style.transform = 'translateY(-8px) scale(1.02)';
          item.style.boxShadow = '0 20px 40px rgba(255, 193, 7, 0.15)';
        });
        
        item.addEventListener('mouseleave', () => {
          item.style.transform = 'translateY(0) scale(1)';
          item.style.boxShadow = 'var(--shadow-1)';
        });
      }
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.navbar-link, .form-btn');
    buttons.forEach(button => {
      if (button) {
        button.addEventListener('mouseenter', () => {
          button.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
          button.style.transform = 'translateY(-2px) scale(1.05)';
          button.style.boxShadow = '0 8px 25px rgba(255, 193, 7, 0.3)';
        });
        
        button.addEventListener('mouseleave', () => {
          button.style.transform = 'translateY(0) scale(1)';
          button.style.boxShadow = 'none';
        });
      }
    });

    // Card hover effects
    const cards = document.querySelectorAll('.project-item, .testimonials-item, .blog-post-item');
    cards.forEach(card => {
      if (card) {
        card.addEventListener('mouseenter', () => {
          card.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
          card.style.transform = 'translateY(-12px) scale(1.03)';
          card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
          card.style.transform = 'translateY(0) scale(1)';
          card.style.boxShadow = 'var(--shadow-1)';
        });
      }
    });
  }

  addScrollAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
          }
        });
      }, { threshold: 0.1 });

      timelineItems.forEach(item => {
        if (item) {
          item.style.opacity = '0';
          item.style.transform = 'translateX(-30px)';
          item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
          observer.observe(item);
        }
      });
    }
  }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM loaded, initializing portfolio...");
  
  try {
    // Initialize navigation
    new NavigationManager();
    
    // Initialize animations
    new AnimationController();
    
    console.log("Portfolio initialization complete!");
  } catch (error) {
    console.error("Error during initialization:", error);
  }
});

// Enhanced Portfolio Interactivity
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing enhanced portfolio...');

  // Add staggered animation to service items
  const serviceItems = document.querySelectorAll('.service-item');
  serviceItems.forEach((item, index) => {
    item.style.setProperty('--item-index', index);
  });

  // Add intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for scroll animations
  const animateElements = document.querySelectorAll('.service-item, .testimonials-item, .timeline-item');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
  });

  // Enhanced hover effects for testimonials
  const testimonialCards = document.querySelectorAll('.testimonials-item .content-card');
  testimonialCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Typing effect for name
  const nameElement = document.querySelector('.info-content .name');
  if (nameElement) {
    const originalText = nameElement.textContent;
    nameElement.textContent = '';
    nameElement.style.borderRight = '2px solid var(--orange-yellow-crayola)';
    
    let i = 0;
    const typeWriter = () => {
      if (i < originalText.length) {
        nameElement.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      } else {
        nameElement.style.borderRight = 'none';
      }
    };
    
    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);
  }

  // Enhanced service item interactions
  serviceItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-6px) scale(1.02)';
      this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = 'var(--shadow-2)';
    });
  });

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('.navbar-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.includes('#')) {
        e.preventDefault();
        const targetId = href.split('#')[1];
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Add ripple effect to buttons
  const buttons = document.querySelectorAll('button, .navbar-link');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Add CSS for ripple effect
  const style = document.createElement('style');
  style.textContent = `
    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 193, 7, 0.3);
      transform: scale(0);
      animation: ripple-animation 0.6s linear;
      pointer-events: none;
    }
    
    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
    
    button, .navbar-link {
      position: relative;
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);

  // Enhanced sidebar interactions
  const sidebarBtn = document.querySelector('.info_more-btn');
  const sidebar = document.querySelector('.sidebar');
  
  if (sidebarBtn && sidebar) {
    sidebarBtn.addEventListener('click', function() {
      sidebar.classList.toggle('active');
      this.style.transform = sidebar.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
    });
  }

  // Add floating particles effect
  const createParticle = () => {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.style.cssText = `
      position: fixed;
      width: 4px;
      height: 4px;
      background: var(--orange-yellow-crayola);
      border-radius: 50%;
      pointer-events: none;
      opacity: 0.6;
      z-index: 1000;
      left: ${Math.random() * window.innerWidth}px;
      top: ${window.innerHeight + 10}px;
      animation: float-up 8s linear infinite;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, 8000);
  };

  // Add CSS for floating particles
  const particleStyle = document.createElement('style');
  particleStyle.textContent = `
    @keyframes float-up {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0.6;
      }
      100% {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(particleStyle);

  // Create particles periodically
  setInterval(createParticle, 3000);

  console.log('Enhanced portfolio initialization complete!');
});