// CodeHive Landing Page - Standalone JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // ============================================
  // Navbar Scroll Effect
  // ============================================
  const navbar = document.getElementById('navbar');
  
  function handleScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check on load
  // ============================================
  // Mobile Menu Toggle
  // ============================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
  const closeIcon = mobileMenuBtn.querySelector('.close-icon');
  
  mobileMenuBtn.addEventListener('click', function() {
    const isOpen = !mobileMenu.classList.contains('hidden');
    
    if (isOpen) {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    } else {
      mobileMenu.classList.remove('hidden');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    }
  });
  // Close mobile menu when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });
  // ============================================
  // Floating Hexagons Animation
  // ============================================
  const floatingHexagons = document.getElementById('floatingHexagons');
  
  for (let i = 0; i < 6; i++) {
    const hexagon = document.createElement('div');
    hexagon.className = 'floating-hex';
    hexagon.style.left = `${10 + i * 15}%`;
    hexagon.style.top = `${20 + (i % 3) * 25}%`;
    hexagon.style.animationDelay = `${i * 0.5}s`;
    hexagon.style.animationDuration = `${8 + i * 2}s`;
    
    const size = 40 + i * 20;
    hexagon.innerHTML = `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    `;
    
    floatingHexagons.appendChild(hexagon);
  }
  // ============================================
  // Scroll Animation Observer
  // ============================================
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observerOptions = {
    root: null,
    rootMargin: '-100px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(el => observer.observe(el));
  // ============================================
  // Project Slides
  // ============================================
  const slides = [
    {
      id: 1,
      principle: "Usability & Visibility",
      principleIcon: "eye",
      problem: {
        title: "Poor Usability",
        points: [
          "Complex, maze-like navigation structure",
          "Overloaded interfaces with excessive information",
          "Inconsistent layouts across different sections"
        ]
      },
      solution: {
        title: "Enhanced Usability",
        points: [
          "Simplified navigation with clear visual hierarchy",
          "Streamlined interfaces showing only relevant information",
          "Consistent design patterns throughout the system"
        ]
      },
      note: "Applied Nielsen's Visibility of System Status and Consistency heuristics to create predictable, learnable interfaces."
    },
    {
      id: 2,
      principle: "Interaction Design",
      principleIcon: "pointer",
      problem: {
        title: "Inefficient Interaction Design",
        points: [
          "Too many steps required for basic tasks",
          "No feedback after user actions",
          "High cognitive load on users"
        ]
      },
      solution: {
        title: "Streamlined Interactions",
        points: [
          "Reduced task completion to minimal steps",
          "Immediate visual and audio feedback on actions",
          "Progressive disclosure to reduce cognitive overhead"
        ]
      },
      note: "Implemented Fitts's Law for optimal target sizing and reduced interaction cost through efficient task flows."
    },
    {
      id: 3,
      principle: "User-Centered Design",
      principleIcon: "users",
      problem: {
        title: "Weak User-Centered Design",
        points: [
          "System designed around administration needs",
          "Student workflows treated as secondary",
          "No consideration for real-world usage scenarios"
        ]
      },
      solution: {
        title: "Student-First Approach",
        points: [
          "User personas developed from student research",
          "Workflows designed around actual student tasks",
          "Real-world usage scenarios inform every decision"
        ]
      },
      note: "Applied ISO 9241-210 human-centered design process, involving students throughout the design lifecycle."
    },
    {
      id: 4,
      principle: "Accessibility",
      principleIcon: "accessibility",
      problem: {
        title: "Accessibility Gaps",
        points: [
          "Poor text readability and contrast",
          "Limited device adaptability",
          "No support for assistive technologies"
        ]
      },
      solution: {
        title: "Inclusive Design",
        points: [
          "WCAG 2.1 AA compliant color contrast",
          "Fully responsive design for all devices",
          "Screen reader optimized with proper ARIA labels"
        ]
      },
      note: "Implemented universal design principles ensuring the system is usable by people with diverse abilities."
    },
    {
      id: 5,
      principle: "Learnability",
      principleIcon: "book",
      problem: {
        title: "Low Learnability",
        points: [
          "New users struggle without guidance",
          "Unfamiliar interaction patterns",
          "Steep learning curve discourages adoption"
        ]
      },
      solution: {
        title: "Intuitive Experience",
        points: [
          "Familiar patterns from common web applications",
          "Contextual help and tooltips where needed",
          "Minimal learning curve—productive from day one"
        ]
      },
      note: "Applied recognition over recall principle and leveraged existing mental models from popular applications."
    }
  ];
  let currentSlide = 0;
  const slidesDots = document.getElementById('slidesDots');
  const slidesContent = document.getElementById('slidesContent');
  const slideCounter = document.getElementById('slideCounter');
  const slidePrev = document.getElementById('slidePrev');
  const slideNext = document.getElementById('slideNext');
  // Generate dots
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = `slide-dot ${index === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
    dot.addEventListener('click', () => goToSlide(index));
    slidesDots.appendChild(dot);
  });
  // Generate slides HTML
  function getIconSvg(iconName) {
    const icons = {
      eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
      pointer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path></svg>',
      users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
      accessibility: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="4" r="2"></circle><path d="M12 8v6"></path><path d="M12 20v-2"></path><path d="M8 10l-4 6"></path><path d="M16 10l4 6"></path><path d="M8 16l4-2 4 2"></path></svg>',
      book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>'
    };
    return icons[iconName] || icons.eye;
  }
  function renderSlides() {
    slidesContent.innerHTML = slides.map((slide, index) => `
      <div class="slide ${index === currentSlide ? 'active' : ''}" data-slide="${index}">
        <div class="slide-principle">
          <div class="principle-badge">
            ${getIconSvg(slide.principleIcon)}
            <span>HCI Principle: ${slide.principle}</span>
          </div>
        </div>
        
        <div class="slide-grid">
          <div class="problem-card">
            <div class="card-header">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <div>
                <span class="card-label">Current System</span>
                <h4 class="card-title">${slide.problem.title}</h4>
              </div>
            </div>
            <ul class="card-points">
              ${slide.problem.points.map(point => `
                <li class="card-point">
                  <span class="point-dot"></span>
                  <span>${point}</span>
                </li>
              `).join('')}
            </ul>
          </div>
          
          <div class="solution-card">
            <div class="card-header">
              <div class="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div>
                <span class="card-label">New System</span>
                <h4 class="card-title">${slide.solution.title}</h4>
              </div>
            </div>
            <ul class="card-points">
              ${slide.solution.points.map(point => `
                <li class="card-point">
                  <span class="point-dot"></span>
                  <span>${point}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
        
        <div class="slide-note">
          <p><strong>HCI Insight:</strong> ${slide.note}</p>
        </div>
      </div>
    `).join('');
  }
  function goToSlide(index) {
    currentSlide = index;
    updateSlides();
  }
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
  }
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
  }
  function updateSlides() {
    // Update active slide
    const allSlides = slidesContent.querySelectorAll('.slide');
    allSlides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentSlide);
    });
    // Update dots
    const dots = slidesDots.querySelectorAll('.slide-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
    // Update counter
    slideCounter.textContent = `${currentSlide + 1} / ${slides.length}`;
  }
  // Initialize slides
  renderSlides();
  
  // Navigation event listeners
  slidePrev.addEventListener('click', prevSlide);
  slideNext.addEventListener('click', nextSlide);
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });
  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});