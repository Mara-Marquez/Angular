//destructuracion de funciones/argumentos
interface  Product{
  description:string,
  price:number  
}
const phone: Product={
    description:'Samsumg Galaxy 78H',
    price:3445.9
}
const tablet: Product={
    description:'Opio 99px',
    price:7999.99
}

const shoppingCart=[phone,tablet];
const taxi=0.15;

interface TaxCalculationOptions{
    tax:number,
    products:Product[];
}
function taxCalculation(options:TaxCalculationOptions):number[]{
let total=0;
options.products.forEach(product=>{
    total+=product.price;
})

    return [total, total*options.tax]
}


const result =taxCalculation({
    products:shoppingCart,
    tax:taxi
});
console.log('Total',result[0], 'TAx' )
export{};
//aplicar en loa rgumentos de la funcion, dentro y en el resultado 