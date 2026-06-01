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
// const result =addNumber(8,7);
// const result2 =AddNumberArrow(4,6);
// const result3 =multiply(4);
//console.log({result}, {result2},{result3})//para verlo como objeto

//15 como poner objetos en funciones

interface Character{
    name:string;
    pv:number;
    showpv: ()=> void;//para definir los metodos
   //opcional undefine o string
}

const healCharacter=(character:Character, amount:number)=>{

    character.pv+=amount;
    
}

const Strider:Character={
    name:'Strider',
     pv:50,
     showpv(){
        console.log('Puntos de vida ',this.pv)
     }

}
healCharacter(Strider,7)
Strider.showpv();
//ahora no de ahuevo tiene q ser de objeto character podemos
//le decimos a la funcion que se vea de esa manera 
//podemos hacerlo mas extricto si queremso 
export{};