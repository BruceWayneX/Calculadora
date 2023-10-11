const txtOp1 = document.getElementById("op1");
const txtOperacion = document.getElementById("operacion");
const txtOp2 = document.getElementById("op2");
const btnResultadorder = document.getElementById("resultado");
const pResultadoFinal = document.getElementById("resultado_final");

btnResultadorder.addEventListener('click', resultado)


// function resultado(){
//     console.log("Presionaste el boton de resultado")
// }


// function resultado(){
//     console.log(txtOperador.value)
// }


function resultado(){
   const operacion = txtOperacion.value
   const op1 = parseFloat(txtOp1.value)
   const op2 = parseFloat(txtOp2.value)


   if(((operacion == "+") || (operacion == "-") ||(operacion == "*") || (operacion == "/") && !isNaN(op1) && !isNaN(op2)&& !isNaN(operacion))){
    let resultado_final;
    switch (operacion){
        case "+":
            resultado_final = op1 + op2
            break;
        case "-":
            resultado_final = op1 - op2
            break;
        case "*":
            resultado_final = op1 * op2
            break;
        case "/":
            resultado_final = op1 / op2
            break
        }
        pResultadoFinal.style = "color:blue"
        pResultadoFinal.innerText = "=" + resultado_final
   } else{
    pResultadoFinal.style = "color:red"
    pResultadoFinal.innerText = "calculo imposible"
   }
}










