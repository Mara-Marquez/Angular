//nuevo arreglo
const skills: string[]=['Bash','Counter','Healing'];
//interfaces para tipar los objetos
interface Character{
    name:string;
    hp:number;
    skills:string[];
    hometown?:string;//opcional undefine o string
}


const strider:Character ={
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    hometown: undefined
};//para poder definir hacemos una interfaz

strider.hometown='Chihuahua';

console.table(strider);


export{};