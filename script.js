
const activities = [
    {
        number: "01",
        name: "Web Development",
        description: "Creating modern websites and learning new coding techniques."
    },
    {
        number: "02",
        name: "Technology",
        description: "Exploring new technologies and discovering digital innovations."
    },
    {
        number: "03",
        name: "Music",
        description: "Enjoying music and discovering new sounds."
    },
    {
        number: "04",
        name: "Programming",
        description: "Solving coding challenges and building creative projects."
    },
    {
        number: "05",
        name: "Learning",
        description: "Developing new skills and expanding my knowledge."
    },
    {
        number: "06",
        name: "Creativity",
        description: "Turning imaginative ideas into practical digital experiences."
    }
];

// HTML elements
const moreBtn = document.getElementById("moreBtn");
const backgroundBtn = document.getElementById("backgroundBtn");
const greetBtn = document.getElementById("greetBtn");
const textColorBtn = document.getElementById("textColorBtn");

const moreInfo = document.getElementById("moreInfo");
const greeting = document.getElementById("greeting");
const activityList = document.getElementById("activityList");
const heading = document.querySelector(".hero h1 span");

// FEATURE 1: Display favorite activities
function displayActivities() {
    activityList.innerHTML = "";

    activities.forEach((activity) => {
        const card = document.createElement("article");

        card.className = "activity-card";

        card.innerHTML = `
            <div class="activity-number">${activity.number} / 06</div>
            <h3>${activity.name}</h3>
            <p>${activity.description}</p>
        `;

        activityList.appendChild(card);
    });
}

displayActivities();

// FEATURE 2: Show more about me
let informationVisible = false;

function toggleInformation() {
    if (informationVisible === false) {
        moreInfo.style.display = "block";
        moreBtn.textContent = "Show Less About Me ↑";
        informationVisible = true;
    } else {
        moreInfo.style.display = "none";
        moreBtn.textContent = "Show More About Me ↗";
        informationVisible = false;
    }
}

moreBtn.addEventListener("click", toggleInformation);

// FEATURE 3: Change background
const backgrounds = [
    "#080d19",
    "#101827",
    "#11152a",
    "#10201f",
    "#20162b"
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

// FEATURE 4: Greet visitor
function greetVisitor() {
    const visitorName = prompt("Welcome! What is your name?");

    if (visitorName && visitorName.trim() !== "") {
        greeting.textContent =
            `Welcome to my profile, ${visitorName.trim()}! 👋`;

    } else {
        greeting.textContent =
            "Please enter your name to receive a greeting.";
    }
}

greetBtn.addEventListener("click", greetVisitor);

// FEATURE 5: Change heading text colour
const textColors = [
    "#00d4ff",
    "#facc15",
    "#f472b6",
    "#4ade80",
    "#c084fc"
];

let colorIndex = 0;

function changeTextColor() {
    heading.style.color = textColors[colorIndex];

    heading.style.background = "none";
    heading.style.webkitTextFillColor = textColors[colorIndex];

    colorIndex++;

    if (colorIndex >= textColors.length) {
        colorIndex = 0;
    }
}

textColorBtn.addEventListener("click", changeTextColor);
