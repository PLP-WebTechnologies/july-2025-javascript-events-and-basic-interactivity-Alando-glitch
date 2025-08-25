// ----------------------------
// Part 1: Event Handling
// ----------------------------
const clickBtn = document.getElementById("clickBtn");
const clickMessage = document.getElementById("clickMessage");

clickBtn.addEventListener("click", () => {
  clickMessage.textContent = "Button was clicked!";
});

const hoverInput = document.getElementById("hoverInput");
const hoverMessage = document.getElementById("hoverMessage");

hoverInput.addEventListener("mouseover", () => {
  hoverMessage.textContent = "You hovered over the input!";
});
hoverInput.addEventListener("mouseout", () => {
  hoverMessage.textContent = "";
});

// ----------------------------
// Part 2: Interactive Features
// ----------------------------
// Light/Dark Mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increase").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("decrease").addEventListener("click", () => {
  if (count > 0) {
    count--;
    countDisplay.textContent = count;
  }
});

// FAQ toggle
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");
faqQuestion.addEventListener("click", () => {
  faqAnswer.style.display =
    faqAnswer.style.display === "block" ? "none" : "block";
});

// ----------------------------
// Part 3: Form Validation
// ----------------------------
const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Final Message
  const formMessage = document.getElementById("formMessage");
  if (valid) {
    formMessage.textContent = "Form submitted successfully 🎉";
    formMessage.style.color = "green";
  } else {
    formMessage.textContent = "Please correct the errors above.";
    formMessage.style.color = "red";
  }
});