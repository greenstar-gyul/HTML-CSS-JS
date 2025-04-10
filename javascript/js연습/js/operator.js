let num1Txt = document.querySelector("#num1");
let num2Txt = document.querySelector("#num2");
let resultTxt = document.querySelector("#result");

let addBtn = document.querySelector("#add");
let subBtn = document.querySelector("#sub");
let multyBtn = document.querySelector("#multy");
let dividBtn = document.querySelector("#divid");

let num1 = 0;
let num2 = 0;

num1Txt.onchange = () => {
  num1 = Number(num1Txt.value);
}

num2Txt.onchange = () => {
  num2 = Number(num2Txt.value);
}

addBtn.onclick = () => {
  // let num1 = Number(num1Txt.value);
  // let num2 = Number(num2Txt.value);

  resultTxt.value = num1 + num2;
}

subBtn.onclick = () => {
  // let num1 = Number(num1Txt.value);
  // let num2 = Number(num2Txt.value);

  resultTxt.value = num1 - num2;
}

multyBtn.onclick = () => {
  // let num1 = Number(num1Txt.value);
  // let num2 = Number(num2Txt.value);

  resultTxt.value = num1 * num2;
}

dividBtn.onclick = () => {
  // let num1 = Number(num1Txt.value);
  // let num2 = Number(num2Txt.value);

  resultTxt.value = num1 / num2;
}