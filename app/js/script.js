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

/// adding and appending
let row = `<div class="grid__element"></div>
    <div class="grid__element"></div >
    <div class="grid__element"></div>
    <div class="grid__element"></div>
    <div class="grid__element"></div>
    <div class="grid__element"></div>
    <div class="grid__element"></div>
    <div class="grid__element"></div>
    <div class="grid__element"></div>
    <div class="grid__element"></div>
    <div class="grid__element"></div>
    <div class="grid__element"></div>
    <div class="grid__element"></div>
    <div class="grid__element"></div>
    <div class="grid__element"></div>
    <div class="grid__element"></div>
    <div class="grid__element"></div>
    <div class="grid__element"></div>
    <div class="grid__element"></div> 
    <div class="grid__element"></div>`

    let element = document.getElementById("element");

    let i = winHeight / gridWidth;
    console.log(i)

/// changing number of grid rows
    let grid = document.getElementById("grid");
    let rowNumber = Math.trunc(i)
    grid.style.setProperty('--row-number', rowNumber)


    for(let j = 0 ; j < i ; j++){
      element.insertAdjacentHTML("afterend", row)
    }



    /// height update issue resolved using this code

window.addEventListener('resize', function () {
  "use strict";
  window.location.reload();
});
