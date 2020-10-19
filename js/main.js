var imagenes = ['img/carru1.jpg','img/carru2.jpg','img/carru3.jpg','img/carru4.jpg'],
    cont= 0;

function carrousel(contenedor){
    contenedor.addEventListener('click', e =>{
        let atras= contenedor.querySelector('.atras'),
            adelante= contenedor.querySelector('.adelante'),
            img= contenedor.querySelector('img'),
            tgt=e.target;


        if(tgt == atras){
            if(cont>0){
                img.src = imagenes[cont -1];
                cont--;
            }else{
                img.src=imagenes[imagenes.length - 1];
                cont=imagenes.length -1;
            }

        }else if(tgt == adelante){
            if(cont < imagenes.length -1){
                img.src = imagenes[cont + 1];
                cont++;
            }else{
                img.src=imagenes[0];
                cont=0;
            }

        }
            

    });

   

}
document.addEventListener("DOMContentLoaded", () =>{
    let contenedor=document.querySelector('.contenedor');

    carrousel(contenedor);
})

var nombre = document.getElementById('nombre');
var correo = document.getElementById('correo');
var error = document.getElementById('error');
error.style.color='red';

function enviarFormulario(){
    console.log('enviando formulario');

    var mensajesError=[];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('ingresa un nombre correcto');
        
    }else{
        alert('se ha enviado el mensaje correctamente')
    }
    if(correo.value === null || correo.value === ''){
        mensajesError.push('ingresa un correo correcto');
    }

    error.innerHTML= mensajesError.join(', ');



    return false;

}

skills =[{label:"HTML",data:10},{label:"CSS",data:40},{label:"JS",data:30},{label:"python",data:20}]

const skill = document.getElementById('skills')

skills.forEach(({label,data}) => {
    skill.innerHTML+=`<div class="barra${data}">
    <p>${label}</p>
    <p>${data*10}%</p>
    </div>`

});

