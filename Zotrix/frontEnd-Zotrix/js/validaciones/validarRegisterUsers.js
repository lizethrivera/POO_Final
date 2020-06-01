var localStorage = window.localStorage;
var informacionU = [];



if(localStorage.getItem("informacion") == null){

    informacionU = [{

        nombreUsuario: "Mario Alejandro",
        apellidoUsuario: "Gomez Martinez",
        imagenUsuario: "img/perfil.jpg",
        correoUsuario: "mariogomez@hotmail.com",
        contraseñaUsuario: "mariogomezGordo123",

    }];


    localStorage.setItem("informacionU", JSON.stringify(informacionU));

}else{

    informacionU = JSON.parse(localStorage.getItem('informacion'));
}

console.log(informacionU)


window.onload = start;


function start(){

    console.log("Inicio Validaciones");
    document.getElementById("registrarUsuario").addEventListener('click', guardarInformacionUsuario, false);

}

function guardarInformacionUsuario(){

    if(validar() ){

        console.log("Verdadero");

        let informacion = {

            nombreUsuario: document.getElementById("nombreUsuario").value,
            apellidoUsuario: document.getElementById("apellidoUsuario").value,
            imagenUsuario: document.getElementById("imagenUsuario").value,
            correoUsuario: document.getElementById("correoUsuario").value,
            contraseñaUsuario: document.getElementById("contraseñaUsuario").value,

        };

    console.log(JSON.stringify(informacion));
    informacionU.push(informacion);
    localStorage.setItem('informacionU', JSON.stringify(informacionU));
    limpiarCamposLI();
    }
}


function validar(e){

    if(validarNombreUsuario() && validarCorreoUsuario() && validarContraseñaUsuario() && validarConfirmacionContraseñaUsuario() && validarApellidoUsuario() && validarTerminos() ){
        console.log("Retorno");
        return true;
    }
    else{

        camposVacios();
    }


}


function limpiarCamposLI(){


    document.getElementById("errorNombreUsuario").innerHTML="";
    document.getElementById("nombreUsuario").value = "";
    document.getElementById("nombreUsuario").classList.remove("is-valid");

    document.getElementById("errorApellidoUsuario").innerHTML="";
    document.getElementById("apellidoUsuario").value = "";
    document.getElementById("apellidoUsuario").classList.remove("is-valid");

    document.getElementById("errorImagenUsuario").innerHTML="";
    document.getElementById("imagenUsuario").value = "";
    document.getElementById("imagenUsuario").classList.remove("is-valid");

    document.getElementById("errorCorreoUsuario").innerHTML="";
    document.getElementById("correoUsuario").value = "";
    document.getElementById("correoUsuario").classList.remove("is-valid");

    document.getElementById("errorContraseñaUsuario").innerHTML="";
    document.getElementById("contraseñaUsuario").value = "";
    document.getElementById("contraseñaUsuario").classList.remove("is-valid");

    document.getElementById("errorConfirmarContraseñaUsuario").innerHTML="";
    document.getElementById("confirmarContraseñaUsuario").value = "";
    document.getElementById("confirmarContraseñaUsuario").classList.remove("is-valid");


    document.getElementById("checkUsers").checked = false;



    

}


function camposVacios(){

    var nombre = document.getElementById("nombreUsuario");
    var apellido = document.getElementById("apellidoUsuario");
    var correo = document.getElementById("correoUsuario");
    var contraseña = document.getElementById("contraseñaUsuario");
    var ccontraseña = document.getElementById("confirmarContraseñaUsuario");
    var validar = document.getElementById("checkUsers");

    if(nombre.value == ""){
        document.getElementById("errorNombreUsuario").innerHTML="";
        document.getElementById("errorNombreUsuario").innerHTML += `<div style=" color: #DC3545"> Ingrese su nombre </div>`;
        document.getElementById("nombreUsuario").classList.add("is-invalid");
        console.log("Nombre: Campo vacio");
    }

    if(apellido.value == ""){
        document.getElementById("errorApellidoUsuario").innerHTML="";
        document.getElementById("errorApellidoUsuario").innerHTML += `<div style=" color: #DC3545"> Ingrese su apellido </div>`;
        document.getElementById("apellidoUsuario").classList.add("is-invalid");
        console.log("Apellido: Campo vacio");
    }

    if(correo.value == ""){
        document.getElementById("errorCorreoUsuario").innerHTML="";
        document.getElementById("errorCorreoUsuario").innerHTML += `<div style=" color: #DC3545"> Ingrese su correo </div>`;
        document.getElementById("correoUsuario").classList.add("is-invalid");
        console.log("Correo: Campo vacio")
    }


    if(contraseña.value == ""){
        console.log("Entro contraseña");
        document.getElementById("errorContraseñaUsuario").innerHTML="";
        document.getElementById("errorContraseñaUsuario").innerHTML += `<div style=" color: #DC3545"> Ingrese su contraseña </div>`;
        document.getElementById("contraseñaUsuario").classList.add("is-invalid");
        console.log("Contraseña: Campo vacio");

    }


    if(ccontraseña.value == ""){
        console.log("Entro contraseña");
        document.getElementById("errorConfirmarContraseñaUsuario").innerHTML="";
        document.getElementById("errorConfirmarContraseñaUsuario").innerHTML += `<div style=" color: #DC3545"> Complete el campo </div>`;
        document.getElementById("confirmarContraseñaUsuario").classList.add("is-invalid");
        console.log("Contraseña: Campo vacio");
    }

    if(validar.checked != true || validar.checked == null){
        document.getElementById("errorChekedUser").innerHTML="";
        document.getElementById("errorChekedUser").innerHTML += `<div style=" color: #DC3545"> Debe aceptar los terminos y condiciones </div>`;
    }


}


function validarNombreUsuario(){

    var nombre = document.getElementById('nombreUsuario');
    console.log("Nombre: "+ nombre.value);

    if(nombre.value == ""){
        console.log("I'm free");
        document.getElementById("errorNombreUsuario").innerHTML="";
        document.getElementById("errorNombreUsuario").innerHTML += `<div style=" color: #DC3545"> Ingrese su nombre </div>`;
        document.getElementById("nombreUsuario").classList.add("is-invalid");
        console.log("Nombre: Campo vacio");
        return false;
    }
    document.getElementById("errorNombreUsuario").innerHTML="";
    document.getElementById("errorNombreUsuario").innerHTML += `<div style=" color: green"> </div>`;
    document.getElementById("nombreUsuario").classList.add("is-valid");
    document.getElementById("nombreUsuario").classList.remove("is-invalid");
    document.getElementById("nombreUsuario").classList.add("is-valid");
    console.log("Nombre: "+ nombre.value)
    return true;


}


function validarApellidoUsuario(){

    var apellido = document.getElementById('apellidoUsuario');
    console.log("Apellido: "+ apellido.value);

    if(apellido.value == ""){
        console.log("I'm free");
        document.getElementById("errorApellidoUsuario").innerHTML="";
        document.getElementById("errorApellidoUsuario").innerHTML += `<div style=" color: #DC3545"> Ingrese su apellido </div>`;
        document.getElementById("apellidoUsuario").classList.add("is-invalid");
        console.log("Apellido: Campo vacio");
        return false;
    }
    document.getElementById("errorApellidoUsuario").innerHTML="";
    document.getElementById("errorApellidoUsuario").innerHTML += `<div style=" color: green"> </div>`;
    document.getElementById("apellidoUsuario").classList.add("is-valid");
    document.getElementById("apellidoUsuario").classList.remove("is-invalid");
    document.getElementById("apellidoUsuario").classList.add("is-valid");
    console.log("Apellido: "+ apellido.value)
    return true;


}

function validarEmail(email){
    console.log("Entré en la función: "+ email);
    var patron = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
    if (!patron.test(email)){
        return false;
    }else {
        return true;
    }
}


function validarCorreoUsuario(){
    var correo = document.getElementById('correoUsuario');
    console.log("Correo: "+ correo.value);


    if(correo.value == ""){
        console.log("I'm not free");
        document.getElementById("errorCorreoUsuario").innerHTML="";
        document.getElementById("errorCorreoUsuario").innerHTML += `<div style=" color: #DC3545"> Ingrese su correo </div>`;
        document.getElementById("correoUsuario").classList.add("is-invalid");
        console.log("Correo: Campo vacio");
        return false;
    }else
        if(validarEmail(correo.value) == false){
            document.getElementById("errorCorreoUsuario").innerHTML="";
            document.getElementById("errorCorreoUsuario").innerHTML += `<div style=" color: #DC3545"> Por favor seguir patron: user@example.com </div>`;
            document.getElementById("correoUsuario").classList.add("is-invalid");
            console.log("Correo: Campo vacio");
        }else{

            document.getElementById("errorCorreoUsuario").innerHTML="";
            document.getElementById("errorCorreoUsuario").innerHTML += `<div style=" color: green">  </div>`;
            document.getElementById("correoUsuario").classList.add("is-valid");
            document.getElementById("correoUsuario").classList.remove("is-invalid");
            document.getElementById("correoUsuario").classList.add("is-valid");
            console.log("Correo: "+ correo.value);  
            return true;
            
        }
    
    
        

    

}


function validarPaisUsuario(){

    console.log("Entro a pais");
    var pais = document.getElementById('paisUsuario');
    console.log("Pais: "+pais.value);

    if(pais.value == 0){
        console.log("Entro a pais");
        document.getElementById("errorPaisUsuario").innerHTML="";
        document.getElementById("errorPaisUsuario").innerHTML += `<div style=" color: #DC3545"> Debe elegir un pais </div>`;
        console.log("Nombre: Campo vacio");
        return false;
    }
    document.getElementById("errorPaisUsuario").innerHTML="";
    document.getElementById("errorPaisUsuario").innerHTML += `<div style=" color: green"></div>`;
    console.log("Pais: "+ pais.value);
    return true;


}

function validarEstadoUsuario(){

    console.log("Entro a estado");
    var estado = document.getElementById('estadoUsuario');
    console.log("Estado: "+estado.value);

    if(estado.value == 0){
        console.log("Entro a estado");
        document.getElementById("errorEstadoUsuario").innerHTML="";
        document.getElementById("errorEstadoUsuario").innerHTML += `<div style=" color: #DC3545"> Debe elegir un estado </div>`;
        console.log("Estado: Campo vacio");
        return false;
    }
    document.getElementById("errorEstadoUsuario").innerHTML="";
    document.getElementById("errorEstadoUsuario").innerHTML += `<div style=" color: green"></div>`;
    console.log("Estado: "+ estado.value);
    return true;
}


function validarCiudadUsuario(){

    var ciudad = document.getElementById('ciudadUsuario');
    console.log("Ciudad: "+ ciudad.value);

    if(ciudad.value == ""){
        console.log("Entro a ciudad");
        document.getElementById("errorCiudadUsuario").innerHTML="";
        document.getElementById("errorCiudadUsuario").innerHTML += `<div style=" color: #DC3545"> Ingrese su ciudad </div>`;
        document.getElementById("ciudadUsuario").classList.add("is-invalid");
        console.log("Ciudad: Campo vacio");
        return false;
    }
    document.getElementById("errorCiudadUsuario").innerHTML="";
    document.getElementById("errorCiudadUsuario").innerHTML += `<div style=" color: green"> </div>`;
    document.getElementById("ciudadUsuario").classList.add("is-valid");
    document.getElementById("ciudadUsuario").classList.remove("is-invalid");
    document.getElementById("ciudadUsuario").classList.add("is-valid");
    console.log("Ciudad: "+ ciudad.value)
    return true;

}


function validarNumero(numero){
    console.log("Entré en la función: "+ numero);
    var patron = /^([0-9])*$/ ;

        if(!/^([0-9])*$/.test(numero)){
            return false;
        }else{
            return true;
        }
}



function validarNumeroUsuario(){

    var numero = document.getElementById('numeroUsuario');
    console.log("Numero: "+ numero.value);

    if(numero.value == ""){
        console.log("I'm free");
        document.getElementById("errorNumeroUsuario").innerHTML="";
        document.getElementById("errorNumeroUsuario").innerHTML += `<div style=" color: #DC3545"> Ingrese su numero </div>`;
        document.getElementById("numeroUsuario").classList.add("is-invalid");
        console.log("Numero: Campo vacio");

        return false;
    }else
        if(validarNumero(numero.value) == false){
            document.getElementById("errorNumeroUsuario").innerHTML="";
            document.getElementById("errorNumeroUsuario").innerHTML += `<div style=" color: #DC3545"> Debe ingresar sólo números </div>`;
            document.getElementById("numeroUsuario").classList.add("is-invalid");
            console.log("Numero: Campo vacio");
            return false;
        }
    else
        if(numero.value != ""){
            document.getElementById("errorNumeroUsuario").innerHTML="";
            document.getElementById("errorNumeroUsuario").innerHTML += `<div style=" color: green"></div>`;
            document.getElementById("numeroUsuario").classList.add("is-valid");
            document.getElementById("numeroUsuario").classList.remove("is-invalid");
            document.getElementById("numeroUsuario").classList.add("is-valid");
            console.log("Numero: "+ document.getElementById("numeroUsuario").value);  
            return true;
        }

}



function validarZipUsuario(){

    var zip = document.getElementById('zipUsuario');
    console.log("Numero: "+ zip.value);

    if(zip.value == ""){
        console.log("Entro a zip");
        document.getElementById("errorZipUsuario").innerHTML="";
        document.getElementById("errorZipUsuario").innerHTML += `<div style=" color: #DC3545"> Ingrese su zip </div>`;
        document.getElementById("zipUsuario").classList.add("is-invalid");
        console.log("Numero: Campo vacio");

        return false;
    }else
        if(validarNumero(zip.value) == false){
            document.getElementById("errorZipUsuario").innerHTML="";
            document.getElementById("errorZipUsuario").innerHTML += `<div style=" color: #DC3545"> Debe ingresar sólo números </div>`;
            document.getElementById("zipUsuario").classList.add("is-invalid");
            console.log("Numero: Campo vacio");
            return false;
        }
    else
        if(zip.value != ""){
            document.getElementById("errorZipUsuario").innerHTML="";
            document.getElementById("errorZipUsuario").innerHTML += `<div style=" color: green"></div>`;
            document.getElementById("zipUsuario").classList.add("is-valid");
            document.getElementById("zipUsuario").classList.remove("is-invalid");
            document.getElementById("zipUsuario").classList.add("is-valid");
            console.log("Numero: "+ document.getElementById("zipUsuario").value);  
            return true;
        }

}


function validarContraseñaUsuario(){
    var contraseña = document.getElementById('contraseñaUsuario');
    console.log("Contraseña: "+ contraseña.value);


    if(contraseña.value == ""){
        console.log("Entro contraseña");
        document.getElementById("errorContraseñaUsuario").innerHTML="";
        document.getElementById("errorContraseñaUsuario").innerHTML += `<div style=" color: #DC3545"> Ingrese su contraseña </div>`;
        document.getElementById("contraseñaUsuario").classList.add("is-invalid").style.border='none';
        console.log("Contraseña: Campo vacio");

        document.getElementById("errorConfirmarContraseñaUsuario").innerHTML="";
        document.getElementById("errorConfirmarContraseñaUsuario").innerHTML += `<div style=" color: #DC3545"> Las contraseñas no coinciden </div>`;
        document.getElementById("confirmarContraseñaUsuario").classList.add("is-invalid");
        confirmarContraseñaUsuario.value = "";
        console.log("Contraseña confirmada: " + document.getElementById("confirmarContraseñaUsuario").value);

        return false;
    }else
            if(contraseña.value != ""){
                    if(contraseña.value.length >= 8){
                        console.log("Entro");
                        document.getElementById("errorContraseñaUsuario").innerHTML="";
                        document.getElementById("errorContraseñaUsuario").innerHTML += `<div style=" color: green"> Perfecto! </div>`;
                        document.getElementById("contraseñaUsuario").classList.remove("is-invalid");
                        document.getElementById("passwordHelpInline").innerHTML = "";
                        document.getElementById("contraseñaUsuario").classList.add("is-valid");
                        console.log("Contraseña: "+ document.getElementById("contraseñaUsuario").value);
                }
            document.getElementById("errorConfirmarContraseñaUsuario").innerHTML="";
            document.getElementById("errorConfirmarContraseñaUsuario").innerHTML += `<div style=" color: #DC3545"> Las contraseñas no coinciden </div>`;
            document.getElementById("confirmarContraseñaUsuario").classList.add("is-invalid");
            console.log("Contraseña confirmada: " + document.getElementById("confirmarContraseñaUsuario").value);
            
            return true;
                }
}

function validarTerminos(){
    var validar = document.getElementById("checkUsers");

    if(validar.checked != true || validar.checked == null){
        document.getElementById("errorChekedUser").innerHTML="";
        document.getElementById("errorChekedUser").innerHTML += `<div style=" color: #DC3545"> Debe aceptar los terminos y condiciones </div>`;
        return false;
    }
    else{
        if(validar.checked = true ){
            document.getElementById("errorChekedUser").innerHTML="";
            return true;
        }
    }
}



function validarConfirmacionContraseñaUsuario(){
    var contraseña = document.getElementById("contraseñaUsuario");
    var ccontraseña = document.getElementById("confirmarContraseñaUsuario");

    console.log("Confirmando contraseña");

    if(contraseña.value != ccontraseña.value){
        document.getElementById("errorConfirmarContraseñaUsuario").innerHTML="";
        document.getElementById("errorConfirmarContraseñaUsuario").innerHTML += `<div style=" color: #DC3545"> Las contraseñas no coinciden </div>`;
        document.getElementById("confirmarContraseñaUsuario").classList.add("is-invalid");
        console.log("Contraseña confirmada: " + document.getElementById("confirmarContraseñaUsuario").value);
        return false;
    } else
        if(contraseña.value == null){
            
            return false;
    }else{
        console.log("Entro");
                    document.getElementById("errorConfirmarContraseñaUsuario").innerHTML="";
                    document.getElementById("errorConfirmarContraseñaUsuario").innerHTML += `<div style=" color: green"> Contraseñas correctas </div>`;
                    document.getElementById("confirmarContraseñaUsuario").classList.remove("is-invalid");
                    document.getElementById("confirmarContraseñaUsuario").classList.add("is-valid");
                    console.log("Contraseña: "+ document.getElementById("contraseñaUsuario").value  +"= Contraseña confirmada: "+ document.getElementById("confirmarContraseñaUsuario").value);
    return true;
}
    }