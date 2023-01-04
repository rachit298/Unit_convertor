const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-el");

convertBtn.addEventListener("click", function () {
  let inputValue = inputEl.value;

  let metresToFeet = inputValue * 3.281;
  let feetToMetres = inputValue / 3.281;

  let litresToGallons = inputValue * 0.264;
  let gallonsToLitres = inputValue / 0.264;

  let kilogramToPounds = inputValue * 2.204;
  let poundsToKilogram = inputValue / 2.204;

  lengthEl.textContent = `${inputValue} metres = ${metresToFeet.toFixed(
    3
  )} feet | ${inputValue} feet = ${feetToMetres.toFixed(3)} metres`;

  volumeEl.textContent = `${inputValue} litres = ${litresToGallons.toFixed(
    3
  )} gallons | ${inputValue} gallons = ${gallonsToLitres.toFixed(3)} litres`;

  massEl.textContent = `${inputValue} kilos = ${kilogramToPounds.toFixed(
    3
  )} pounds | ${inputValue} pounds = ${poundsToKilogram.toFixed(3)} kilos`;

  inputEl.value = "";
});
