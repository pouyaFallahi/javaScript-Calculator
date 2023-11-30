const btn_sum = document.getElementById('btn_plus')
const btn_sub =document.getElementById('btn_subtraction')
const btn_mul =document.getElementById('btn_multiplication')
const btn_div =document.getElementById('btn_division')


btn_sum.addEventListener("click", plus)
btn_sub.addEventListener("click", subtraction)
btn_mul.addEventListener("click",multiplication )
btn_div.addEventListener("click",division )

let number1 = parseFloat(number_one.value);
let number2 = parseFloat(number_two.value);

function plus () {
    number1 = parseFloat(document.getElementById('number_one').value);
    number2 = parseFloat(document.getElementById('number_two').value);
    result = number1 + number2
    number_result.innerHTML = String(result)
    operator.innerHTML = btn_sum.innerHTML
}

function subtraction () {
    number1 = parseFloat(document.getElementById('number_one').value);
    number2 = parseFloat(document.getElementById('number_two').value);
    result = number1 - number2
    number_result.innerHTML = result
    operator.innerHTML = btn_sub.innerHTML

}

function multiplication () {
    number1 = parseFloat(document.getElementById('number_one').value);
    number2 = parseFloat(document.getElementById('number_two').value);
    result = number1 * number2
    number_result.innerHTML = result
    operator.innerHTML = btn_mul.innerHTML
}

function division () {
    number1 = parseFloat(document.getElementById('number_one').value);
    number2 = parseFloat(document.getElementById('number_two').value);
    result = number1 / number2
    number_result.innerHTML = result
    operator.innerHTML = btn_div.innerHTML
}


console.log(number1, number2,btn_sub);
