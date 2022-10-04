const imagen1 = document.querySelector("#imagen1");
const imagen2 = document.querySelector("#imagen2");
const formulario = document.querySelector("#formulario");

const cargarImagen = (entradas, observador) =>{
    // console.log(entradas);
    // console.log(observador);

    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
           entrada.target.classList.add('visible');
          
        }else{
            entrada.target.classList.remove('visible');
           
        }
    });
}
//crando objerto tipo intersetion
const observador = new IntersectionObserver(cargarImagen, {
    root:null,
    rootMargin:'0px 0px 0px 0px',
    threshold: 1.0,
});

observador.observe(imagen1);
observador.observe(imagen2);

const cargarFormulario =(entradaF, watcher) =>{
    entradaF.forEach((entradaF) =>{
        if (entradaF.isIntersecting) {
            entradaF.target.classList.add('ver');            
        } else {
            entradaF.target.classList.remove('ver');
        }
    } );
}
const watcher = new IntersectionObserver(cargarFormulario,{
    root:null,
    rootMargin: '0px',
    threshold: 1.0,
});

watcher.observe(formulario);