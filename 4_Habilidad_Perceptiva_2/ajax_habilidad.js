//console.log("correcto");

//document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos () { 

const xhttp = new XMLHttpRequest();

xhttp.open('GET', 'catalogo_habilidad.json', true);

xhttp.send();

xhttp.onreadystatechange = function(){

    if(this.readyState == 4 && this.status == 200){
        //console.log(this.responseText);
        let datos = JSON.parse(this.responseText);
        //console.log(datos);
        let res = document.querySelector('#palabras1');
        res.innerHTML = '';

        for(let item of datos){
            //console.log(item.titulo);
            res.innerHTML += `
           
              <p>${item.palabra}</p>
            
            `
        }
    }

 }


}