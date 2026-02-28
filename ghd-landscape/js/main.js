function toggleMenu() {
  const menu = document.querySelector('.nav-links');
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

/* REVIEW SCROLL ANIMATION */
const reviews = document.querySelectorAll(".review-box");

window.addEventListener("scroll", () => {
  reviews.forEach(review => {
    const reviewTop = review.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (reviewTop < windowHeight - 100) {
      review.classList.add("show");
    }
  });
});