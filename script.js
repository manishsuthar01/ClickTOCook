let nav_bar = document.querySelector(".navbar");


document.querySelector("#menu_toggle").addEventListener("click", function () {
  nav_bar.classList.toggle("show");
}); 

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('body'),
//     smooth: true
// });