/// calc

/// getting window height and width

let winHeight = window.innerHeight;
let winWidth = window.innerWidth;

/// calculating grid height and width
let gridHeight = winHeight / 10;
let gridWidth = winWidth / 20;

/// changing grid__element width and height to corresponding ones above

let gridElement = document.getElementById("element");
gridElement.style.setProperty('--grid-width', gridWidth + "px")
gridElement.style.setProperty('--grid-height', gridWidth + "px")

window.addEventListener('resize', function () {
  "use strict";
  window.location.reload();
});
