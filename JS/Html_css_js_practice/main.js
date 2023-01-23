const menu_toggle = document.querySelector('#hamburger');
const sidebar = document.querySelector('.sidebar');
// listen on button click
menu_toggle.addEventListener('click', () => {
    sidebar.classList.toggle('is-active'); // change class attribute
})
const input = document.querySelector(".theme-switcher input");
input.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.setAttribute("data-theme", "dark");
  } else {
    document.body.setAttribute("data-theme", "light");
  }
});
