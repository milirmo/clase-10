let num1=parseInt(prompt("ingrese un numero"));
let num2=parseInt(prompt("ingrese un segundo numero"));

function sumar (num1,num2) {
    let suma=num1+num2
    document.write("la suma de ambos numeros es: "+suma)
}
function intervalo (num1,num2) {
    if (num1<num2) {
        for (i=num1+1; i<num2; i++) {
            document.write(i)
        }
    } else {
        if (num2<num1) {
            for (i=num2+1; i<num1; i++) {
                document.write(i)
            }
        } else {
            document.write("no hay intervalos, los numeros son iguales.")
        }
    }
}
function intervaloreversa (num1,num2) {
    if (num1>num2) {
        for (i=num1-1; i>num2; i--) {
            document.write(i)
        }
    } else {
        if (num2>num1) {
            for (i=num2-1; i>num1; i--) {
                document.write(i)
            }
        } else {
            document.write("no hay intervalos, los numeros son iguales.")
        }
    }
}