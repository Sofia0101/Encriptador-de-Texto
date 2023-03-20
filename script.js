const textArea = document.querySelector(".text__area");
const mensaje = document.querySelector(".mensaje__area");




function button(){
    const textoEncriptado = encriptador(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value = "";
}


 function encriptador(encriptada){
    let letras = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

        encriptada = encriptada.toLowerCase();
        for(i = 0; i < letras.length; i++){

           if (encriptada.includes(letras[i][0])){
               encriptada = encriptada.replaceAll(letras[i][0], letras[i][1]);
                
           }
        }
        return encriptada;
        
}


function desencriptador(desencriptada){
    let letras = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

        desencriptada = desencriptada.toLowerCase();
        for(i = 0; i < letras.length; i++){

           if (desencriptada.includes(letras[i][1])){
               desencriptada = desencriptada.replaceAll(letras[i][1], letras[i][0]);
                
           }
        }
        return desencriptada;
        
}

function button__des(){
    const textoDesencriptado = desencriptador(textArea.value);
    mensaje.value = textoDesencriptado
    textArea.value = "";
}


function funcion__copiar(){
    var copyText = document.getElementById("myInput");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  
}