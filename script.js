
// Favorite activities array
const activities = [
    "💻 Learning Web Development",
    "🎮 Playing Games",
    "🎵 Listening to Music",
    "📚 Reading and Learning",
    "🌍 Exploring New Technologies"
];

// Select HTML elements
const moreBtn = document.getElementById("moreBtn");
const backgroundBtn = document.getElementById("backgroundBtn");
const greetBtn = document.getElementById("greetBtn");
const textColorBtn = document.getElementById("textColorBtn");

const moreInfo = document.getElementById("moreInfo");
const greeting = document.getElementById("greeting");
const activityList = document.getElementById("activityList");
const heading = document.getElementById("profile-name");

// Display favorite activities
function displayActivities() {
    activities.forEach(function(activity) {
        const li = document.createElement("li");
        li.textContent = activity;
        activityList.appendChild(li);
    });
}

displayActivities();

// Feature 1: Show More About Me
let informationVisible = false;

function showMore() {
    if (informationVisible === false) {
        moreInfo.style.display = "block";
        moreBtn.textContent = "Show Less About Me";
        informationVisible = true;
    } else {
        moreInfo.style.display = "none";
        moreBtn.textContent = "Show More About Me";
        informationVisible = false;
    }
}

moreBtn.addEventListener("click", showMore);

// Feature 2: Change Background
const backgrounds = [
    "#eef4ff",
    "#dcfce7",
    "#fce7f3",
    "#fef3c7",
    "#ede9fe"
];

let backgroundIndex = 0;

function changeBackground() {
    backgroundIndex++;

    if (backgroundIndex >= backgrounds.length) {
        backgroundIndex = 0;
    }

    document.body.style.backgroundColor =
        backgrounds[backgroundIndex];
}

backgroundBtn.addEventListener("click", changeBackground);

// Feature 3: Favorite Activities
// Already displayed using the activities array above.

// Feature 4: Greet Me!
function greetVisitor() {
    let visitorName = prompt("Hello! What is your name?");

    if (visitorName && visitorName.trim() !== "") {
        greeting.textContent =
            "Welcome to my profile, " + visitorName.trim() + "! 👋";
    } else {
        greeting.textContent = "You didn't enter a name. Try again!";
    }
}

greetBtn.addEventListener("click", greetVisitor);

// Bonus: Change Text Colour
const textColors = [
    "#1e3a8a",
    "#dc2626",
    "#059669",
    "#9333ea",
    "#ea580c"
];

let colorIndex = 0;

function changeTextColor() {
    colorIndex++;

    if (colorIndex >= textColors.length) {
        colorIndex = 0;
    }

    heading.style.color = textColors[colorIndex];
}

textColorBtn.addEventListener("click", changeTextColor);
