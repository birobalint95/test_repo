var container = document.getElementsByClassName('container')[0];
var currentMode = document.getElementById('current-mode');

document.getElementById('toggler2').addEventListener('change', (event) => {
  if (event.target.checked) {
    container.removeAttribute('data-theme')
    currentMode.innerHTML = "light mode";
  } else {
    container.setAttribute('data-theme', 'dark');
    currentMode.innerHTML = "dark mode";
  };
});
