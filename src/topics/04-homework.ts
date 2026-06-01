interface Adress{
    calle:string,
    pais:string,
    ciudad:string
};

interface SuperHero{
   name:string,
   age:number,
   adress:Adress,
   showAdress:()=>string;
};


const superHeroe: SuperHero={
    name:'Spiderman',
    age:25,
    adress:{
        calle:'Main St',
        pais:'USA',
        ciudad:'NY'
    },
    showAdress(){
        return this.name+' vive en, '+this.adress.ciudad+', '+this.adress.pais
    }
}

const address=superHeroe.showAdress();
console.log(address);

export{};