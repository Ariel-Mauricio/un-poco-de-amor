onload = () => {
    document.body.classList.remove("container");

    // Add dynamic greeting animation
    const greetings = document.querySelector('.greetings');
    if (greetings) {
        greetings.style.animation = 'fadeIn 3s ease-in-out';
    }

    // Add button interactivity with smooth effects
    const buttons = document.querySelectorAll('.botones');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.15) translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1) translateY(0)';
        });

        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.pointerEvents = 'none';
            
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = size + 'px';
            ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
            ripple.style.animation = 'rippleEffect 0.6s ease-out';
            
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add some interactive hearts
    document.addEventListener('mousemove', function(e) {
        // Optional: add more interactivity here
    });
};

// Add ripple effect animation to style
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);