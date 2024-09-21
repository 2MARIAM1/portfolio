function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const roles = ["Junior Computer Science Engineer", "Mobile Application Developer", "System Designer", "Flutter Engineer", "Android Engineer"];
let currentRoleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 80;
const erasingSpeed = 50;
const delayBetweenRoles = 1500;

function typeRole() {
    const dynamicText = document.getElementById("dynamic-text");
    
    if (isDeleting) {
        if (charIndex > 0) {
            dynamicText.textContent = roles[currentRoleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeRole, erasingSpeed);
        } else {
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            setTimeout(typeRole, typingSpeed);
        }
    } else {
        if (charIndex < roles[currentRoleIndex].length) {
            dynamicText.textContent += roles[currentRoleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeRole, typingSpeed);
        } else {
            isDeleting = true;
            setTimeout(typeRole, delayBetweenRoles);
        }
    }
}
document.getElementById('scroll-left').addEventListener('click', function() {
    scrollItems(-1);
});

document.getElementById('scroll-right').addEventListener('click', function() {
    scrollItems(1);
});

function scrollItems(direction) {
    const container = document.querySelector('.scroll-container');
    const itemWidth = container.querySelector('.scroll-item').offsetWidth;
    const gapWidth = parseInt(window.getComputedStyle(container).gap);
    const visibleItems = Math.floor(container.clientWidth / (itemWidth + gapWidth)); // Calculate visible items
    const scrollAmount = (itemWidth + gapWidth) * visibleItems; // Scroll by visible items count
    container.scrollLeft += direction * scrollAmount;
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeRole, delayBetweenRoles);
});
