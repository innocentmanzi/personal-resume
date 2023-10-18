function openAbout(aboutContent) {
  var i;
  var x = document.getElementsByClassName("about-content");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(aboutContent).style.display = "block";  
}

function openProject(projectContent) {
  var i;
  var x = document.getElementsByClassName("project-content");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(projectContent).style.display = "block";  
}

const by = (selector) => document.querySelector(selector);
const $typingText = by(".typing-text");
const $cursor = by(".cursor");

const words = [
  "Software developer",
  "Full-stack developer",
  "Web developer",
  "Front-end developer",
  "Back-end developer",
  "Freelancer",
];

const delay = {
  typing: 80,
  keeping: 1000,
  erasing: 100,
  word: 2000,
};
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const type = async (word) => {
  $cursor.classList.add("typing");
  for (const char of word) {
    $typingText.textContent += char;
    await sleep(delay.typing);
  }
  $cursor.classList.remove("typing");
  await sleep(delay.keeping);

  for (let i = 1; i <= word.length; i++) {
    $typingText.textContent = word.substring(0, word.length - i);
    await sleep(delay.erasing);
  }
};

const loop = async (wordIndex = 0) => {
  await type(words[wordIndex % words.length]);

  setTimeout(async () => {
    await loop(wordIndex + 1);
  }, delay.word);
};



function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function toggleNav() {
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("main");

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
    } else {
        sidebar.style.width = "250px";
        main.style.marginLeft = "250px";
    }
}

function checkScreenSize() {
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("main");

    if (window.innerWidth <= 768) {
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
    } else {
        sidebar.style.width = "250px";
        main.style.marginLeft = "250px";
    }
}

function openContent(evt, contentName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(contentName).style.display = "block";
  evt.currentTarget.className += " active";

}

// Function to select the default tab
function selectDefaultTab() {
  var defaultTab = document.getElementById("About");
  if (defaultTab) {
    defaultTab.style.display = "block";
  }
}

// Call the selectDefaultTab function to set the default tab
selectDefaultTab();

// Open sidebar when clicking the button
document.querySelector(".openbtn").addEventListener("click", function (e) {
    toggleNav();
    e.stopPropagation();
});

document.addEventListener("DOMContentLoaded", () => {
  loop();
});

// Check the screen size when the page loads and when it's resized
window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

