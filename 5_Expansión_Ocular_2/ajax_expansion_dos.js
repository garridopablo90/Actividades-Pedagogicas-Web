//console.log("correcto");

//document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatosDos () { 

const xhttp = new XMLHttpRequest();

xhttp.open('GET', 'catalogo_expansion_dos.json', true);

xhttp.send();

xhttp.onreadystatechange = function(){

    if(this.readyState == 4 && this.status == 200){
        //console.log(this.responseText);
        let datos2 = JSON.parse(this.responseText);
        //console.log(datos);
        let res2 = document.querySelector('#palabras3');
        res2.innerHTML = '';

        for(let item2 of datos2){
            //console.log(item.titulo);
            res2.innerHTML += `
           
              <p>${item2.palabra}</p>
            
            `
        }
    }

 }


}