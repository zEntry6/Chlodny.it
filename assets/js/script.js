const slides = document.getElementById("slides");

if (slides) {
  const totalSlides = slides.children.length;
  let currentSlide = 0;
  let autoplayInterval;

  function updateSlide() {
    slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 4000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  slides.addEventListener("mouseenter", stopAutoplay);
  slides.addEventListener("mouseleave", startAutoplay);
  startAutoplay();
}

const menuToggle = document.getElementById("menu-toggle");
const dropdownMenu = document.getElementById("dropdown-menu");
const closeDropdown = document.getElementById("close-dropdown");

menuToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show-dropdown");
});

closeDropdown.addEventListener("click", () => {
  dropdownMenu.classList.remove("show-dropdown");
});

const menuLinks = dropdownMenu.querySelectorAll("a");
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    dropdownMenu.classList.remove("show-dropdown");
  });

const orderForm = document.getElementById("order-form");
const submitBtn = document.getElementById("submit-btn");
const confirmationMessage = document.querySelector(".confirmation-message");

orderForm.addEventListener("submit", function(event) {
  event.preventDefault();

  confirmationMessage.style.display = "block";
  orderForm.reset();

  setTimeout(() => {
    confirmationMessage.style.display = "none";
  }, 5000);
});

submitBtn.addEventListener("mouseover", () => {
  submitBtn.style.backgroundColor = "#444";
  submitBtn.style.transform = "translateY(-3px)";
});

submitBtn.addEventListener("mouseout", () => {
  submitBtn.style.backgroundColor = "#000";
  submitBtn.style.transform = "translateY(0)";
});
});
