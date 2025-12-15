// ============================================
// ENHANCED PORTFOLIO INTERACTIONS
// Professional animations and smooth interactions
// ============================================

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Enhanced IntersectionObserver for scroll animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add staggered delay for better visual effect
            setTimeout(() => {
                entry.target.classList.add('animated');
            }, index * 50);
        }
    });
}, observerOptions);

// Observe all elements with data-animate attribute
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// Enhanced Navbar background on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
}, { passive: true });

// Smooth parallax effect for hero section
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent && scrolled < window.innerHeight) {
        const rate = scrolled * 0.3;
        const opacity = Math.max(0, 1 - (scrolled / 800));
        
        heroContent.style.transform = `translateY(${rate}px)`;
        heroContent.style.opacity = opacity;
    }
    
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
}, { passive: true });

// Add active state to navigation links on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    const navHeight = navbar.offsetHeight;
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionId = section.getAttribute('id');
        const sectionBottom = sectionTop + sectionHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation, { passive: true });

// Enhanced stagger animation for skill cards
document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.08}s`;
    });
});

// Enhanced stagger animation for project cards
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
});

// Enhanced stagger animation for service items
document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.08}s`;
    });
});

// Mouse move parallax effect for hero image
document.addEventListener('DOMContentLoaded', function() {
    const heroImage = document.querySelector('.hero-image');
    const profileImg = document.querySelector('.profile-img');
    
    if (heroImage && profileImg) {
        heroImage.addEventListener('mousemove', function(e) {
            const rect = heroImage.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (x - centerX) / 20;
            const moveY = (y - centerY) / 20;
            
            profileImg.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
        
        heroImage.addEventListener('mouseleave', function() {
            profileImg.style.transform = 'translate(0, 0)';
        });
    }
});

// Smooth reveal animation for cards on hover
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.skill-card, .project-card, .service-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
});

// Add floating animation to skill icons
document.addEventListener('DOMContentLoaded', function() {
    const skillIcons = document.querySelectorAll('.skill-icon');
    
    skillIcons.forEach((icon, index) => {
        icon.style.animation = `float 3s ease-in-out infinite`;
        icon.style.animationDelay = `${index * 0.2}s`;
    });
});

// Add CSS for float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }
    
    .nav-link.active {
        color: #ffffff;
    }
    
    .nav-link.active::before {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Prevent animation on page load if user prefers reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-animate]').forEach(el => {
        el.classList.add('animated');
        el.style.transition = 'none';
    });
    
    // Disable parallax
    window.removeEventListener('scroll', updateParallax);
}

// Add cursor effect for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    const interactiveElements = document.querySelectorAll('a, button, .skill-card, .project-card, .service-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            document.body.style.cursor = 'pointer';
        });
        
        element.addEventListener('mouseleave', function() {
            document.body.style.cursor = 'default';
        });
    });
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
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

// Apply throttling to scroll-heavy functions
const throttledHighlight = throttle(highlightNavigation, 100);
window.addEventListener('scroll', throttledHighlight, { passive: true });

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add smooth page transitions
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in class to body
    document.body.classList.add('loaded');
});

// ============================================
// TYPING ANIMATION
// Alternating typing and deleting effect
// ============================================
(function() {
    'use strict';
    
    // Text array with exact texts as specified
    const texts = [
        'I BUILD  What YOUR COMPETITORS WISH They HAD',
        'Currently Pursuing BSCS At GC University Faisalabad. Skilled In HTML, CSS, And JavaScript For Front-End Development. Exploring C, C++, Python, and Agentic AI ChatBots.'
    ];
    
    // Dynamic typing speeds based on text length (longer = faster, shorter = slower for readability)
    const getTypingSpeed = (textLength) => {
        // Longer text (>100 chars): faster speed (35ms per character)
        // Shorter text (≤100 chars): slower speed (80ms per character for better readability)
        return textLength > 100 ? 35 : 80;
    };
    
    // Delete speed (consistent for all texts)
    const DELETE_SPEED = 25;
    const PAUSE_AFTER_TYPE = 800; // Pause after fully typing a text (reduced from 2000ms)
    const PAUSE_AFTER_DELETE = 200; // Pause after fully deleting a text (reduced from 500ms)
    
    // State variables
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let animationTimeout = null;
    
    // Get the typing text element
    const typingElement = document.getElementById('typing-text');
    
    // Function to type text character by character
    function typeText() {
        const currentText = texts[currentTextIndex];
        
        if (!typingElement) return;
        
        if (!isDeleting) {
            // Typing mode: add characters one by one
            typingElement.textContent = currentText.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            
            // Get dynamic typing speed based on current text length
            const typingSpeed = getTypingSpeed(currentText.length);
            
            // Check if we've finished typing the current text
            if (currentCharIndex >= currentText.length) {
                // Pause after fully typing, then switch to deleting
                isDeleting = true;
                animationTimeout = setTimeout(typeText, PAUSE_AFTER_TYPE);
            } else {
                // Continue typing with dynamic speed
                animationTimeout = setTimeout(typeText, typingSpeed);
            }
        } else {
            // Deleting mode: remove characters one by one
            typingElement.textContent = currentText.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            
            // Check if we've finished deleting the current text
            if (currentCharIndex <= 0) {
                // Switch to next text and start typing
                isDeleting = false;
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                animationTimeout = setTimeout(typeText, PAUSE_AFTER_DELETE);
            } else {
                // Continue deleting
                animationTimeout = setTimeout(typeText, DELETE_SPEED);
            }
        }
    }
    
    // Initialize typing animation when DOM is ready
    function initTypingAnimation() {
        if (typingElement) {
            // Start with empty text
            typingElement.textContent = '';
            // Begin typing after a short delay
            animationTimeout = setTimeout(typeText, 500);
        }
    }
    
    // Start animation when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTypingAnimation);
    } else {
        initTypingAnimation();
    }
    
    // Clean up on page unload (optional, prevents memory leaks)
    window.addEventListener('beforeunload', function() {
        if (animationTimeout) {
            clearTimeout(animationTimeout);
        }
    });
})();
