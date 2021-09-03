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
  var allMainContentElements = document.getElementsByClassName("main-content");
  if (! isElementSelected) {
    [].forEach.call(allNavElements, function(actualNavElement) {
      actualNavElement.classList.remove("selected");
    });
    [].forEach.call(allMainContentElements, function(actualMainContentElement) {
      actualMainContentElement.style.display = "none";
    });
      
  clickedElement.classList.add("selected");
  var contentToDisplay = document.getElementById(clicked_id + " " + "main-content");
  contentToDisplay.style.display = "block";
  };
}


var labelSelectorCheckboxes = document.getElementsByClassName("labelSelectorCheckbox");
var thoughtBubbles = document.getElementsByClassName("thought-bubble");

var myFunction = function(event) {
	var checkboxText = event.target.getAttribute("value");
	var indexOfThoughtBubble;
	for (indexOfThoughtBubble = 0; indexOfThoughtBubble < thoughtBubbles.length; indexOfThoughtBubble++) {
		if (thoughtBubbles[indexOfThoughtBubble].innerText.includes(checkboxText.toUpperCase())) {
			if (event.target.checked) {
				thoughtBubbles[indexOfThoughtBubble].style.display = "block";
			} else {
				thoughtBubbles[indexOfThoughtBubble].style.display = "none";
			}
		}
	}
};

for (var i = 0; i < labelSelectorCheckboxes.length; i++) { 
	labelSelectorCheckboxes[i].addEventListener('click', myFunction, false);
}
