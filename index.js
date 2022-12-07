let imgOff = document.querySelectorAll("#my-img");
let imgOn = document.querySelectorAll("#turn-on");
let elOn = document.getElementById("btn-on");
let elOff = document.getElementById("btn-off");

// function turnLightOn() {

//   console.log("ON");
// }
// function turnLightOff() {

//   console.log("OFF");
// }

elOn.addEventListener("click", function () {
  imgOff.innerHTML = `<img id="my-img" src="ONbulb.png" />`;
});
elOff.addEventListener("click", function () {
  imgOff.innerHTML = `<img id="my-img" src="OFFbulb.png" />`;
});
