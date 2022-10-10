const input = document.querySelectorAll(".sides");
const display = document.querySelector("#output");
const clickbtn = document.querySelector("#check");

clickbtn.addEventListener("click", areaTriangle);

function areacalc(a, b) {
  const area = (a * b) / 2;
  return area;
}

function areaTriangle() {
  const area = areacalc(Number(input[0].value), Number(input[1].value));
  if (Number(input[0].value) > 0 && Number(input[1].value) > 0) {
    display.innerText = "Area of triangle is " + area;
  } else {
    display.innerText = " Number should be greater than 0";
  }
}
