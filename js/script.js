// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar side bar untuk menghilangkan nav
const Hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!Hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
