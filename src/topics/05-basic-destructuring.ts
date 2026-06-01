//la destructuracion se puede aplicar en objetos o modulosm argumentsos o valriables
//tomar ciertas piezas en vez de venir campo por campo
interface AudioPlayer{
    audioVolume:number;
    songDuration:number;
    songName:string;
    details:Details;
}
interface Details{
    author:string;
    year:number
}
const audioPlayer:AudioPlayer={
    audioVolume:0,
    songDuration:0,
    songName:"Mess",
    details:{
        author:"EDD",
        year:2015,
    }
}
//console.log(audioPlayer.songName)
//console.log(audioPlayer.details.author)

//desestructuracios
const songName ='Happy Song'
const {songName:anotherSong} =audioPlayer//le podemos poner un nombre diferente

//destructura de details
const{details:detalle}=audioPlayer
const{author:autor}=detalle
//adentro de uno
const {
    songName:name, 
    songDuration:duration,
    details:{author}
} =audioPlayer


//console.log(author)

//destructuracion de arreglos se hace lo mismo pero en  []

const [,p2,p3,p4,p5='Not found']:string[]=['Goku','Milk','Vegeta','Crillin']
//nomas hay q definir si hay uno 
console.log(p5)
export{};