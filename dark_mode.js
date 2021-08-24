// On toggler clicked

var container = document.getElementsByClassName('container')[0];
/*
document.getElementById('toggler').addEventListener('change', (event) => {
  console.log(toggler)
  event.target.checked ? container.removeAttribute('data-theme') : container.setAttribute('data-theme', 'dark');
});
*/

document.getElementById('toggler2').addEventListener('change', (event) => {
  console.log(toggler2)
  event.target.checked ? container.removeAttribute('data-theme') : container.setAttribute('data-theme', 'dark');
});
