//funciones
//funcion tradicional
function addNumber(a:number,b:number){//se le debe de poner el tipo de dato y si no sabemos any
return a+b;
}
//lambda

const AddNumberArrow =(a:number, b:number):string=>{
    return `${a+b}`;//con `${}` podemos hacer string
}
//
function multiply(firstNumber:number,secondNumber?:number,base:number=2){
    return firstNumber*base;
}
const result =addNumber(8,7);
const result2 =AddNumberArrow(4,6);
const result3 =multiply(4);
console.log({result}, {result2},{result3})//para verlo como objeto
export{};