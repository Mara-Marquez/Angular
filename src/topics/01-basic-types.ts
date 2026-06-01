//tipos basicos de typescript
let name='Mara';//no se puede redeclarar
const nombre='MARA ximena'//constantes que no cambiaran nunca

let hpPoints: number | string =90;//declarar el tipo
hpPoints= 'FULL';//para declararle un string tambien uno u otro
//let hpPoints: number |'FULL';// para permitir solo ese tipo de string

const isAlive:boolean =true;
console.log(name,hpPoints,isAlive);
export{};//significa que es modulo