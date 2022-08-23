/// calc

/// getting window height and width
var body = document.body, html = document.documentElement;

let winHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
let winWidth = window.innerWidth;

/// calculating grid height and width
let gridHeight = winHeight / 10;
let gridWidth = winWidth / 20;

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

    let i = winHeight / gridHeight;

/// changing number of grid rows
    let grid = document.getElementById("grid");
    let rowNumber = Math.floor(i)
    grid.style.setProperty('--row-number', rowNumber + 1)


    for(let j = 0 ; j < rowNumber ; j++){
      element.insertAdjacentHTML("afterend", row)
      console.log("j:" + j)
    }

/// changing grid__element width and height to corresponding ones above

let gridElement = document.getElementsByClassName("grid__element");
for (var index = 0 ; index < gridElement.length ; index++){  
  gridElement[index].style.setProperty('--grid-width', gridWidth + "px")
  gridElement[index].style.setProperty('--grid-height', gridHeight + "px")
}

    /// height update issue resolved using this code

window.addEventListener('resize', function () {
  "use strict";
  window.location.reload();
});


/// debugging

console.log( "windHeight =" + winHeight)
console.log( "winWidth =" + winWidth)
console.log( "gridHeight ==" + gridHeight)
console.log( "gridWidth " + gridWidth)
console.log("i =" + i)
console.log("row Number =" + rowNumber)
