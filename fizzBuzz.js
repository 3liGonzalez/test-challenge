/*Desarrolle una función que acepte un número y
 evalúe las siguientes condiciones:
- Si es divisible por 3, devuelva 'Fizz'. 
- Si es divisible por 5, devuelve 'Buzz'. 
- Si es divisible por 3 y 5, devuelve 'FizzBuzz'. 
- En caso contrario, devolver el número original.**/

function calcularFizzBuzz(n) {
    if (n /3 === 0)
return 'Fizz'; }
    if ( n / 5 ==0)
    {return 'Buzz';}
if (n / 3 && n/5)
{return 'FizzBuzz'
}
else {return n;}
