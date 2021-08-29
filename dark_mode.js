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

function selectNavElement(clicked_id) {
  var clickedElement = document.getElementById(clicked_id);
  var isElementSelected = clickedElement.classList.contains("selected");
  var allNavElements = document.getElementsByClassName("nav-item");
  if (! isElementSelected) {
    [].forEach.call(allNavElements, function(actualNavElement) {
      actualNavElement.classList.remove("selected");
    });
  clickedElement.classList.add("selected");
  // clickedElement.style.color = "red";
  };
}
