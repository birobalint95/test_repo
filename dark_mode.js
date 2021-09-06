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


// get label selector checkbox elements
var labelSelectorCheckboxes = document.getElementsByClassName("labelSelectorCheckbox");

// create label selector function that gets triggered by an event
var labelSelectorFunction = function(event) {
	// get number of checked label selector checkboxes
	var numberOfCheckedLabelSelectorCheckboxes = document.querySelectorAll('.labelSelectorCheckbox:checked').length;
	// check if there were no checked label selector checkboxes
	if (numberOfCheckedLabelSelectorCheckboxes == 0) {
		// create a span element for the warning message of no selected label
		var noSelectedLabelWarningMessage = document.createElement('span')
		// define the id of the span
		noSelectedLabelWarningMessage.id = "no-selected-label-warning-message";
		// define the text the warning message displays
		noSelectedLabelWarningMessage.innerHTML = "No thoughts found. Please check if you have any of the labels selected above.";
		// get label checkbox container element and append the warning message element to it
		document.getElementById("filter-bar").appendChild(noSelectedLabelWarningMessage);
	} else {
		// create the span element for the warning message of no selected label
		var noSelectedLabelWarningMessage = document.getElementById("no-selected-label-warning-message");
		// check if the element exists
		if (noSelectedLabelWarningMessage) {
			// if it does, remove it
			noSelectedLabelWarningMessage.remove();
		}
	}
	// get thought bubble elements
	var thoughtBubbles = document.getElementsByClassName("thought-bubble");
	// get value attribute of the checkbox that triggered the function
	var actualCheckboxValue = event.target.getAttribute("value");
	// define the variable for indexing thought bubbles
	var indexOfThoughtBubble;
	// loop through the thought bubbles
	for (indexOfThoughtBubble = 0; indexOfThoughtBubble < thoughtBubbles.length; indexOfThoughtBubble++) {
		// check if the inner text of the actual thought bubble includes the checkbox value (in a proper format)
		if (thoughtBubbles[indexOfThoughtBubble].innerText.includes(actualCheckboxValue.toUpperCase())) {
			// if it does, check if the checkbox is checked
			if (event.target.checked) {
				// if it is, then display the actual thought bubble as a block
				thoughtBubbles[indexOfThoughtBubble].style.display = "block";
			// else, if the checkbox is unchecked
			} else {
				// do not display the actual thought bubble
				thoughtBubbles[indexOfThoughtBubble].style.display = "none";
			}
		}
	}
};

// loop through the label selector checkbox elements
for (var i = 0; i < labelSelectorCheckboxes.length; i++) {
	// add event listeners to clicking on these checkboxes
	labelSelectorCheckboxes[i].addEventListener('click', labelSelectorFunction, false);
}

$(document).ready (function() {
	$("#svg-image").hover (function() {
		$("#list-svg-group").toggleClass("hide");
		$("#downloadtray").toggleClass("downloadtray");	
		$("#downloadarrow").toggleClass("downloadarrow");			
	});
});
