const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const result = document.querySelector(".result");

[number1, number2].forEach((element) => {
    element.onchange = function () {
        result.textContent = String(Number(number1.value) + Number(number2.value));
    }
})