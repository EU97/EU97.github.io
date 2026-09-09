/**
 * EU97 Portfolio - Main JavaScript
 * Handles navigation, scroll effects, and interactive elements
 */

(function() {
  'use strict';

  // ============================================
  // Mobile Navigation Toggle
  // ============================================
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
      if (!isClickInsideNav && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // ============================================
  // Performance Optimization: Debounce Function
  // ============================================
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // ============================================
  // Navbar Scroll Effect
  // ============================================
  let lastScrollTop = 0;
  const navbar = document.getElementById('navbar');
  const scrollThreshold = 100;

  function handleNavbarScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Hide navbar on scroll down, show on scroll up
    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  // ============================================
  // Smooth Scroll for Navigation Links
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navHeight = navbar.offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================
  // Active Navigation Link Highlighting
  // ============================================
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - navbar.offsetHeight - 50;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (navLink) {
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
          });
          navLink.classList.add('active');
        }
      }
    });
  }

  // ============================================
  // Intersection Observer for Fade-in Animations
  // ============================================
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeIn');
        // Optional: Stop observing after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll('.project-card, .skill-category, .about-image');
  animateElements.forEach(el => {
    observer.observe(el);
  });

  // ============================================
  // Dynamic Year in Footer
  // ============================================
  const footerYear = document.querySelector('.footer p');
  if (footerYear) {
    const currentYear = new Date().getFullYear();
    if (currentYear > 2023) {
      footerYear.textContent = footerYear.textContent.replace('2023-2024', `2023-${currentYear}`);
    }
  }

  // ============================================
  // Parallax Effect for Hero Section (Optimized with RAF)
  // ============================================
  const hero = document.querySelector('.hero');
  let ticking = false;
  let requestParallaxUpdate;
  
  if (hero) {
    function updateParallax() {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;
      
      if (scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      }
      ticking = false;
    }

    requestParallaxUpdate = function() {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };
  }

  // ============================================
  // Project Card Tilt Effect (Optional Enhancement)
  // ============================================
  const tiltCards = document.querySelectorAll('.project-card');
  
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', function() {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });

  // ============================================
  // Scroll to Top Button (Optional)
  // ============================================
  function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.setAttribute('aria-label', 'Scroll to top');
    button.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--primary-color);
      color: white;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 999;
      box-shadow: var(--shadow-lg);
    `;
    
    document.body.appendChild(button);
    
    function updateScrollButton() {
      if (window.pageYOffset > 500) {
        button.style.opacity = '1';
        button.style.visibility = 'visible';
      } else {
        button.style.opacity = '0';
        button.style.visibility = 'hidden';
      }
    }
    
    button.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    button.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });

    return updateScrollButton;
  }

  // Initialize scroll to top button
  const updateScrollButton = createScrollToTopButton();

  // ============================================
  // Consolidated Scroll Handler (Performance Optimized)
  // ============================================
  function handleScroll() {
    handleNavbarScroll();
    highlightNavigation();
    updateScrollButton();
    if (hero) {
      requestParallaxUpdate();
    }
  }

  // Use throttled scroll for better performance
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(function() {
        handleScroll();
        scrollTimeout = null;
      }, 10); // Throttle to ~100fps
    }
  }, { passive: true });

  // ============================================
  // Console Welcome Message
  // ============================================
  console.log('%c👋 Welcome to EU97 Portfolio — Edgar Ulises Rojo Rodriguez!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
  console.log('%cSystems Engineer | Researcher | Professor | FIME-UANL', 'color: #6b7280; font-size: 14px;');

  // ============================================
  // Project Tabs Filtering
  // ============================================
  const projectTabs = document.querySelectorAll('.tab-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (projectTabs.length > 0 && projectCards.length > 0) {
    projectTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        // Remove active class from all tabs
        projectTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        
        // Filter projects
        projectCards.forEach(card => {
          const cardCategories = card.getAttribute('data-category').split(' ');
          
          if (category === 'all') {
            card.style.display = '';
            card.classList.remove('hidden');
          } else if (cardCategories.includes(category)) {
            card.style.display = '';
            card.classList.remove('hidden');
          } else {
            card.style.display = 'none';
            card.classList.add('hidden');
          }

          // ============================================
          // Precision Engineering Section (Dynamic)
          // ============================================
          function escapeHtml(value) {
            return String(value || '')
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#39;');
          }

          function getLocalizedText(field, lang) {
            if (typeof field === 'string') return field;
            if (!field || typeof field !== 'object') return '';
            return field[lang] || field.en || Object.values(field)[0] || '';
          }

          function initPrecisionEngineeringSection() {
            const grid = document.getElementById('precision-grid');
            const results = document.getElementById('precision-results');
            const courseFilter = document.getElementById('precision-filter-course');
            const weekFilter = document.getElementById('precision-filter-week');
            const labFilter = document.getElementById('precision-filter-lab');
            const statusFilter = document.getElementById('precision-filter-status');
            const searchInput = document.getElementById('precision-search');

            if (!grid || !results || !courseFilter || !weekFilter || !labFilter || !statusFilter || !searchInput) {
              return;
            }

            const data = window.precisionEngineeringContent;
            const activities = data && Array.isArray(data.activities) ? data.activities : [];
            let currentLang = localStorage.getItem('preferredLanguage') || 'en';

            function renderFilterOptions() {
              const renderOptionSet = (selectEl, values, allLabel) => {
                const previousValue = selectEl.value || 'all';
                const optionsMarkup = values.map(item =>
                  `<option value="${escapeHtml(item.value)}">${escapeHtml(item.label)}</option>`
                ).join('');
                selectEl.innerHTML = `<option value="all">${escapeHtml(allLabel)}</option>${optionsMarkup}`;
                const stillExists = values.some(item => item.value === previousValue);
                selectEl.value = stillExists ? previousValue : 'all';
              };

              const buildUniqueOptions = (valueKey, labelKey) => {
                const optionMap = new Map();
                activities.forEach(activity => {
                  const optionValue = activity[valueKey];
                  if (!optionValue || optionMap.has(optionValue)) return;
                  optionMap.set(optionValue, {
                    value: optionValue,
                    label: getLocalizedText(activity[labelKey], currentLang) || optionValue
                  });
                });
                return Array.from(optionMap.values());
              };

              renderOptionSet(
                courseFilter,
                buildUniqueOptions('course', 'courseLabel'),
                courseFilter.dataset.allLabel || 'All Courses'
              );
              renderOptionSet(
                weekFilter,
                buildUniqueOptions('week', 'weekLabel'),
                weekFilter.dataset.allLabel || 'All Weeks'
              );
              renderOptionSet(
                labFilter,
                buildUniqueOptions('labType', 'labTypeLabel'),
                labFilter.dataset.allLabel || 'All Lab Types'
              );
              renderOptionSet(
                statusFilter,
                buildUniqueOptions('status', 'statusLabel'),
                statusFilter.dataset.allLabel || 'All Statuses'
              );
            }

            function renderActivities() {
              const selectedCourse = courseFilter.value;
              const selectedWeek = weekFilter.value;
              const selectedLab = labFilter.value;
              const selectedStatus = statusFilter.value;
              const searchTerm = searchInput.value.trim().toLowerCase();

              const filtered = activities.filter(activity => {
                const title = getLocalizedText(activity.title, currentLang);
                const description = getLocalizedText(activity.description, currentLang);
                const filesText = (activity.workingFiles || [])
                  .map(file => getLocalizedText(file.label, currentLang))
                  .join(' ');

                const matchesCourse = selectedCourse === 'all' || activity.course === selectedCourse;
                const matchesWeek = selectedWeek === 'all' || activity.week === selectedWeek;
                const matchesLab = selectedLab === 'all' || activity.labType === selectedLab;
                const matchesStatus = selectedStatus === 'all' || activity.status === selectedStatus;
                const matchesSearch = !searchTerm || `${title} ${description} ${filesText}`.toLowerCase().includes(searchTerm);

                return matchesCourse && matchesWeek && matchesLab && matchesStatus && matchesSearch;
              });

              if (filtered.length === 0) {
                grid.innerHTML = `<div class="precision-empty">${escapeHtml(results.dataset.noResults || 'No activities match your filters.')}</div>`;
              } else {
                grid.innerHTML = filtered.map(activity => {
                  const courseLabel = getLocalizedText(activity.courseLabel, currentLang);
                  const weekLabel = getLocalizedText(activity.weekLabel, currentLang);
                  const labLabel = getLocalizedText(activity.labTypeLabel, currentLang);
                  const statusLabel = getLocalizedText(activity.statusLabel, currentLang);
                  const title = getLocalizedText(activity.title, currentLang);
                  const description = getLocalizedText(activity.description, currentLang);
                  const procedureLabel = escapeHtml(results.dataset.procedureLabel || 'Procedure');
                  const instructionsLabel = escapeHtml(results.dataset.instructionsLabel || 'Instructions');
                  const workingFilesLabel = escapeHtml(results.dataset.filesLabel || 'Working Files');

                  const workingFiles = (activity.workingFiles || []).map(file => (
                    `<li><a href="${escapeHtml(file.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(getLocalizedText(file.label, currentLang))}</a></li>`
                  )).join('');

                  return `
                    <article class="precision-card">
                      <div class="precision-card-header">
                        <h3>${escapeHtml(title)}</h3>
                        <span class="precision-status precision-status--${escapeHtml(activity.status)}">${escapeHtml(statusLabel)}</span>
                      </div>
                      <p class="precision-description">${escapeHtml(description)}</p>
                      <div class="precision-meta">
                        <span>${escapeHtml(courseLabel)}</span>
                        <span>${escapeHtml(weekLabel)}</span>
                        <span>${escapeHtml(labLabel)}</span>
                      </div>
                      <div class="precision-links">
                        <a href="${escapeHtml(activity.procedureUrl)}" target="_blank" rel="noopener noreferrer">${procedureLabel}</a>
                        <a href="${escapeHtml(activity.instructionUrl)}" target="_blank" rel="noopener noreferrer">${instructionsLabel}</a>
                      </div>
                      <div class="precision-files">
                        <h4>${workingFilesLabel}</h4>
                        <ul>${workingFiles}</ul>
                      </div>
                    </article>
                  `;
                }).join('');
              }

              const resultSuffix = filtered.length === 1
                ? (results.dataset.oneLabel || 'activity')
                : (results.dataset.manyLabel || 'activities');
              results.textContent = `${filtered.length} ${resultSuffix}`;
            }

            [courseFilter, weekFilter, labFilter, statusFilter].forEach(filter =>
              filter.addEventListener('change', renderActivities)
            );
            searchInput.addEventListener('input', debounce(renderActivities, 120));

            document.addEventListener('languageChanged', function(event) {
              currentLang = event.detail && event.detail.lang ? event.detail.lang : (localStorage.getItem('preferredLanguage') || 'en');
              renderFilterOptions();
              renderActivities();
            });

            renderFilterOptions();
            renderActivities();
          }
        });
      });
    });
  }

  // ============================================
  // Expandable Tool Categories
  // ============================================
  const toolCategories = document.querySelectorAll('.tool-category');
  
  if (toolCategories.length > 0) {
    // Expand the first category by default
    if (toolCategories[0]) {
      toolCategories[0].classList.add('expanded');
    }

    toolCategories.forEach(category => {
      const header = category.querySelector('.category-header');
      
      if (header) {
        header.addEventListener('click', function() {
          const isExpanded = category.classList.contains('expanded');
          
          // Toggle current category
          if (isExpanded) {
            category.classList.remove('expanded');
          } else {
            category.classList.add('expanded');
          }
        });
      }
    });
  }

  // ============================================
  // Counter Animation for Hero Stats
  // ============================================
  function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + '+';
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 16);
  }

  // Observe hero stats for animation
  const statNumbers = document.querySelectorAll('.stat-number');
  
  if (statNumbers.length > 0) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-target'));
          animateCounter(entry.target, target);
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => statsObserver.observe(stat));
  }

  // ============================================
  // Enhanced Scroll Reveal Animations
  // ============================================
  const revealElements = document.querySelectorAll('.tool-item, .contact-item, .timeline-content, .about-bio p');
  
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      revealObserver.observe(el);
    });
  }

  // ============================================
  // Smooth Scroll Enhancement
  // ============================================
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  // ============================================
  // Language Toggle
  // ============================================
  const langToggle = document.getElementById('lang-toggle');
  
  if (langToggle) {
    langToggle.addEventListener('click', function() {
      const currentLang = localStorage.getItem('preferredLanguage') || 'en';
      const newLang = currentLang === 'en' ? 'es' : 'en';
      
      // Update language
      localStorage.setItem('preferredLanguage', newLang);
      
      // Update button text
      this.textContent = newLang === 'en' ? '🇪🇸 ES' : '🇬🇧 EN';
      
      // Apply translations
      if (typeof applyTranslations === 'function') {
        applyTranslations(newLang);
      }
    });
  }

  // ============================================
  // Initialize
  // ============================================
  initPrecisionEngineeringSection();
  console.log('Portfolio initialized successfully!');
  console.log('✨ Enhanced features loaded: Project filtering, expandable tools, animated counters');
})();
