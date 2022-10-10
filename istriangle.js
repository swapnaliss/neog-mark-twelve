const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputE1 = document.querySelector("#output");


 function calculateSumOfAngles(angle1 , angle2 , angle3)
{
    const sumOfAngles = angle1 + angle2 + angle3;
    // console.log(angle1);
    return sumOfAngles;

}

function isTriangle() {
  if (
    inputs[0].value === "" ||
    inputs[1].value === "" ||
    inputs[2].value === ""
  ) {
    showMessage("Fields can not be empty.", "red");
  } else if (
    inputs[0].value < 0 ||
    inputs[1].value < 0 ||
    inputs[2].value < 0
  ) {
    showMessage("Negative numbers not allowed.", "red");
  } else {
    const SumOfAngles = calculateSumOfAngles(
      Number(inputs[0].value),
      Number(inputs[1].value),
      Number(inputs[2].value)
    );

    if (SumOfAngles === 180) {
      showMessage("yey, The angle from a triangle", "green");
    } else {
      showMessage("oh oh,The angle don't from a triangle", "red");
    }
  }
}

const showMessage = (message, color) => {
  outputE1.innerText = message;
  outputE1.style.color = color;
};
isTriangleBtn.addEventListener("click",isTriangle)
