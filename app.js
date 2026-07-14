// Theme Manager
const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButtonText(savedTheme);
};

const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButtonText(newTheme);
};

const updateThemeButtonText = (theme) => {
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.innerHTML = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
    }
};

// Points Tracker Logic
let scores = {
    delivery: 25,
    innovation: 15,
    collaboration: 15
};

const MAX_CATEGORY_SCORE = 50;
const MAX_TOTAL_SCORE = 150;

const initTracker = () => {
    // Attach event listeners for calculator controls
    setupControlButtons('delivery');
    setupControlButtons('innovation');
    setupControlButtons('collaboration');

    // Initial render
    updateUI();
};

const setupControlButtons = (category) => {
    const container = document.getElementById(`${category}-ctrl`);
    if (!container) return;

    const minusBtn = container.querySelector('.minus');
    const plusBtn = container.querySelector('.plus');

    minusBtn.addEventListener('click', () => {
        if (scores[category] > 0) {
            scores[category] -= 5;
            updateUI();
        }
    });

    plusBtn.addEventListener('click', () => {
        if (scores[category] < MAX_CATEGORY_SCORE) {
            scores[category] += 5;
            updateUI();
        }
    });
};

const updateUI = () => {
    // 1. Update text values in controller inputs
    for (const key in scores) {
        const valElem = document.getElementById(`${key}-val`);
        if (valElem) valElem.textContent = scores[key];

        const labelElem = document.getElementById(`${key}-label-score`);
        if (labelElem) labelElem.textContent = scores[key];

        // Update progress bar width
        const barFill = document.querySelector(`.bar-fill.${key}`);
        if (barFill) {
            const percentage = (scores[key] / MAX_CATEGORY_SCORE) * 100;
            barFill.style.width = `${percentage}%`;
        }
    }

    // 2. Calculate Total Score
    const totalScore = scores.delivery + scores.innovation + scores.collaboration;
    
    // 3. Determine and update Tier
    let tier = 'Bronze Tier';
    let tierClass = 'bronze';
    
    if (totalScore >= 151) {
        tier = 'Platinum Tier';
        tierClass = 'platinum';
    } else if (totalScore >= 101) {
        tier = 'Gold Tier';
        tierClass = 'gold';
    } else if (totalScore >= 51) {
        tier = 'Silver Tier';
        tierClass = 'silver';
    }

    // Update Tier title
    const tierDisplay = document.getElementById('tier-display');
    if (tierDisplay) tierDisplay.textContent = tier;

    // Highlight active tier in list
    const tierRows = document.querySelectorAll('.tier-badge-row');
    tierRows.forEach(row => {
        row.classList.remove('active');
        if (row.dataset.tier === tierClass) {
            row.classList.add('active');
        }
    });

    // 4. Update SVG Circle Progress
    const circleProgress = document.getElementById('circle-progress');
    const totalScoreText = document.getElementById('total-score');
    
    if (totalScoreText) totalScoreText.textContent = totalScore;
    
    if (circleProgress) {
        // Circle circumference is 2 * PI * r
        // Radius of circle in SVG is 54 (cx/cy = 60, r = 54)
        // Let's calculate based on a radius of 80 (since we will design the SVG with cx=100, cy=100, r=80)
        const radius = 80;
        const circumference = 2 * Math.PI * radius;
        
        // Cap visual calculation at 150 points for circular representation
        const displayScore = Math.min(totalScore, MAX_TOTAL_SCORE);
        const offset = circumference - (displayScore / MAX_TOTAL_SCORE) * circumference;
        
        circleProgress.style.strokeDasharray = `${circumference} ${circumference}`;
        circleProgress.style.strokeDashoffset = offset;
    }
};

// Start application
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initTracker();
    
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
});
