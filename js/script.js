// al usar querySelector necsitamos llamar los atributo como en css
const num1 = document.querySelector('.numero1');
const num2 = document.querySelector('.numero2');
const btn  = document.querySelector('.btnCalcular');
const resul = document.querySelector('#resultado');

function suma(){
    const resultado = parseInt(num1.value) + parseInt(num2.value)
    resul.innerHTML = 'El resultado de la suma es: ' + resultado;
    console.log(resultado);
}