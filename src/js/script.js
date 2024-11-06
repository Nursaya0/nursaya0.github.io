if (window.screen.width <= 1130) {
    function removeall() {
        $(".cir_border").css("border", "none");
    }
    $("#sec").on("click", function () {
        removeall();
        $("#sec").css("border", "2px solid whitesmoke");
        $("#sec").css("border-radius", "20px");
    });
    $("#pri").on("click", function () {
        removeall();
        $("#pri").css("border", "2px solid whitesmoke");
        $("#pri").css("border-radius", "20px");
    });
    $("#tri").on("click", function () {
        removeall();
        $("#tri").css("border", "2px solid whitesmoke");
        $("#tri").css("border-radius", "20px");
    });
    $("#quad").on("click", function () {
        removeall();
        $("#quad").css("border", "2px solid whitesmoke");
        $("#quad").css("border-radius", "20px");
    });
    $("#quint").on("click", function () {
        removeall();
        $("#quint").css("border", "2px solid whitesmoke");
        $("#quint").css("border-radius", "20px");
    });
    $("#hex").on("click", function () {
        removeall();
        $("#hex").css("border", "2px solid whitesmoke");
        $("#hex").css("border-radius", "20px");
    });
    $("#hept").on("click", function () {
        removeall();
        $("#hept").css("border", "2px solid whitesmoke");
        $("#hept").css("border-radius", "20px");
    });
}

$("#about").on("mouseover", function () {
    introAboutLogoTransition();
});

$("input").on("change", function () {
    $("body").toggleClass("blue");
});

// Light/Dark toggle
const checkbox = document.getElementById("checkbox");
const themeChangeSound = new Audio('src/sounds/theme.mp3'); // Загрузка звука

function introAboutLogoTransition() {
    $("#about-quad").css("top", "70%");
    $("#about-quad").css("opacity", "1");
}

function checkDarkMode() {
    if (
        localStorage.getItem("tourism_website_darkmode") !== null &&
        localStorage.getItem("tourism_website_darkmode") === "true"
    ) {
        document.body.classList.add("dark");
        checkbox.checked = true;
    }
}
checkDarkMode();

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    document.body.classList.contains("dark")
        ? localStorage.setItem("tourism_website_darkmode", true)
        : localStorage.setItem("tourism_website_darkmode", false);
    
    // Воспроизведение звука при смене темы
    themeChangeSound.play();
});

// scroll button

let mybutton = document.getElementById("upbtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Update Navbar While Scrolling
function updateNav() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links li a");

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (window.screen.width <= 425) {
            if (rect.top <= 1300) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        } else if (425 <= window.screen.width <= 768) {
            if (rect.top <= 1250) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        } else {
            if (rect.top <= 1000) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        }
    });
}
function togle_change(){ 
    var event1 = document.getElementById("first-events"); 
    var event2 = document.getElementById("second-events"); 
 
    if (event1.style.display !== "none") { 
        event1.style.display = "none"; 
        event2.style.display = "block"; 
      } else { 
        event1.style.display = "block"; 
        event2.style.display = "none"; 
      } 
}
function getGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    switch (true) {
        case (hour >= 5 && hour < 12):
            greeting = "Good Morning!";
            break;
        case (hour >= 12 && hour < 17):
            greeting = "Good Afternoon!";
            break;
        case (hour >= 17 && hour < 21):
            greeting = "Good Evening!";
            break;
        default:
            greeting = "Good Night!";
            break;
    }

    return greeting;
}

// Функция для отображения приветствия на странице
function displayGreeting() {
    const greeting = getGreeting();
    const greetingElement = document.getElementById('display-greeting');
    greetingElement.textContent = greeting;
}

// Вызываем функцию для отображения приветствия при загрузке страницы
window.onload = displayGreeting;

const backgroundMusic = new Audio('src/sounds/main.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;

window.addEventListener('focus', () => backgroundMusic.play());
window.addEventListener('blur', () => backgroundMusic.pause());

let isTimeVisible = false;
const showTimeButton = document.getElementById('show-time-btn');
const displayTime = document.getElementById('display-time');
if (showTimeButton) {
    showTimeButton.addEventListener('click', function () {
        if (isTimeVisible) {
            displayTime.textContent = ""; // Скрыть время
            isTimeVisible = false;
            showTimeButton.textContent = "Show time"; 
        } else {
            const currentTime = new Date().toLocaleTimeString();
            displayTime.textContent = currentTime; // Показать время
            isTimeVisible = true;
            showTimeButton.textContent = "Hide time"; 
        }
    });
}