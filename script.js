// Function to start the hero selection after clicking 'Get Started'
function startSelection() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('hero-selection').style.display = 'block';
}

// Function to show a category of heroes
function showCategory(category) {
    const selectText = document.getElementById('select-text');
    if (selectText) selectText.style.display = 'none';

    const categories = document.querySelectorAll('.hero-category');
    categories.forEach(cat => cat.style.display = 'none');

    const selectedCategory = document.getElementById(category);
    if (selectedCategory) selectedCategory.style.display = 'block';

    const backButton = document.getElementById('back-button');
    backButton.style.display = 'inline-block';

    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => btn.style.display = 'none');
}

// Function to select a hero and show details
function selectHero(category, name, image, info, skins = [], skills = [], gameplay = '') {
    // Set hero basic details
    document.getElementById('hero-name').innerText = `${name} (${category})`;
    document.getElementById('hero-image').src = image;
    document.getElementById('hero-info').innerText = info;

    // Populate hero skins
    const skinsList = document.getElementById('skins-list');
    skinsList.innerHTML = ''; // Clear previous skins
    skins.forEach(skin => {
        const skinDiv = document.createElement('div');
        skinDiv.classList.add('skin-item');
        skinDiv.innerHTML = `
            <img src="${skin.image}" alt="${skin.name}">
            <p>${skin.name}</p>
        `;
        skinsList.appendChild(skinDiv);
    });

    // Populate hero skills
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = ''; // Clear previous skills
    skills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill-item');
        skillDiv.innerHTML = `
            <img src="${skill.image}" alt="${skill.name}" class="skill-image">
            <div>
                <h5>${skill.name}</h5>
                <p>${skill.description}</p>
            </div>
        `;
        skillsList.appendChild(skillDiv);
    });

    // Set gameplay information
    document.getElementById('gameplay-info').innerText = gameplay;

    // Hide hero selection, show selected hero details
    document.getElementById('hero-selection').style.display = 'none';
    document.getElementById('selected-hero').style.display = 'block';
}



// Function to go back to hero selection
function goBack() {
    const selectText = document.getElementById('select-text');
    if (selectText) selectText.style.display = 'block';

    const categories = document.querySelectorAll('.hero-category');
    categories.forEach(cat => cat.style.display = 'none');

    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => btn.style.display = 'inline-block');

    const backButton = document.getElementById('back-button');
    backButton.style.display = 'none';

    document.getElementById('hero-selection').style.display = 'block';
    document.getElementById('selected-hero').style.display = 'none';
}

// Video end event to show start screen
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('intro-video');
    const videoIntro = document.getElementById('video-intro');
    const startScreen = document.getElementById('start-screen');

    if (video && videoIntro && startScreen) {
        video.addEventListener('ended', function() {
            videoIntro.style.display = 'none';
            startScreen.style.display = 'block';
        });
    }
});
