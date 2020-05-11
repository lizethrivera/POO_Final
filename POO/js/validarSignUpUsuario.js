var localStorage = window.localStorage;
var informacionU = [];


let paisUsuarios = ['Honduras', 'El Salvador', 'Estados Unidos'];
for(let i=0; i<paisUsuarios.length; i++){
    document.getElementById("paisUsuario").innerHTML += `<option value="${paisUsuarios[i]}">${paisUsuarios[i]}</option>`;
}

let estadoUsuarios = ['Distrito Central', 'El Porvenir', 'Lepaterique'];

for(let i=0; i<estadoUsuarios.length; i++){
    document.getElementById("estadoUsuario").innerHTML += `<option value="${estadoUsuarios[i]}">${estadoUsuarios[i]}</option>`;
}


if(localStorage.getItem("informacion") == null){

    informacionU = [{

        nombreUsuario: "Mario Alejandro",
        apellidoUsuario: "Gomez Martinez",
        imagenUsuario: "img/perfil.jpg",
        bannerUsuario: "img/banner.jpg",
        correoUsuario: "mariogomez@hotmail.com",
        paisUsuario: "El Salvador",
        estadoUsuario: "Cabañas",
        ciudadUsuario: "Sensuntepeque",
        zipUsuario: "801365",
        telefonoUsuario: "99999999",
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
            bannerUsuario: document.getElementById("bannerUsuario").value,
            correoUsuario: document.getElementById("correoUsuario").value,
            paisUsuario: document.getElementById("paisUsuario").value,
            estadoUsuario: document.getElementById("estadoUsuario").value,
            ciudadUsuario: document.getElementById("ciudadUsuario").value,
            zipUsuario: document.getElementById("zipUsuario").value,
            telefonoUsuario: document.getElementById("numeroUsuario").value,
            contraseñaUsuario: document.getElementById("contraseñaUsuario").value,

        };

    console.log(JSON.stringify(informacion));
    logins.push(informacion);
    localStorage.setItem('logins', JSON.stringify(logins));
    window.location = "users.html";
    }
}


function validar(e){

    if(validarNombreUsuario() && validarCorreoUsuario() && validarPaisUsuario() && validarEstadoUsuario() && validarNumeroUsuario() && validarCiudadUsuario() && validarZipUsuario() && validarContraseñaUsuario() && validarConfirmacionContraseñaUsuario() && validarApellidoUsuario() ){
        console.log("Retorno");
        return true;
    }
    else{

        camposVacios();
    }


}

function camposVacios(){

    var nombre = document.getElementById("nombreUsuario");
    var apellido = document.getElementById("apellidoUsuario");
    var correo = document.getElementById("correoUsuario");
    var pais = document.getElementById("paisUsuario");
    var estado = document.getElementById("estadoUsuario");
    var numero = document.getElementById("numeroUsuario");
    var ciudad = document.getElementById('ciudadUsuario');
    var zip = document.getElementById("zipUsuario");
    var contraseña = document.getElementById("contraseñaUsuario");
    var ccontraseña = document.getElementById("confirmarContraseñaUsuario");

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

    if(pais.value == 0){
        console.log("Entro a pais");
        pais.focus();
        document.getElementById("errorPaisUsuario").innerHTML="";
        document.getElementById("errorPaisUsuario").innerHTML += `<div style=" color: #DC3545"> Debe elegir un país </div>`;
        console.log("Pais: Campo vacio");
    }

    if(estado.value == 0){
        console.log("Entro a estado");
        estado.focus();
        document.getElementById("errorEstadoUsuario").innerHTML="";
        document.getElementById("errorEstadoUsuario").innerHTML += `<div style=" color: #DC3545"> Debe elegir un estado </div>`;
        console.log("Estado: Campo vacio");
    }

    if(numero.value == ""){
        console.log("Entro a numero");
        numero.focus();
        document.getElementById("errorNumeroUsuario").innerHTML="";
        document.getElementById("errorNumeroUsuario").innerHTML += `<div style=" color: #DC3545"> Ingrese su numero </div>`;
        document.getElementById("numeroUsuario").classList.add("is-invalid");
        console.log("Numero: Campo vacio");

    }

    if(ciudad.value == ""){
        document.getElementById("errorCiudadUsuario").innerHTML="";
        document.getElementById("errorCiudadUsuario").innerHTML += `<div style=" color: #DC3545"> Ingrese una ciudad </div>`;
        document.getElementById("ciudadUsuario").classList.add("is-invalid");
        console.log("Ciudad: Campo vacio");

    }

    if(zip.value == ""){
        console.log("Entro a zip");
        document.getElementById("errorZipUsuario").innerHTML="";
        document.getElementById("errorZipUsuario").innerHTML += `<div style=" color: #DC3545"> Ingrese una zip </div>`;
        document.getElementById("zipUsuario").classList.add("is-invalid");
        console.log("Zip: Campo vacio");
    
    }


    if(contraseña.value == ""){
        contraseña.focus();
        console.log("Entro contraseña");
        document.getElementById("errorContraseñaUsuario").innerHTML="";
        document.getElementById("errorContraseñaUsuario").innerHTML += `<div style=" color: #DC3545"> Ingrese su contraseña </div>`;
        document.getElementById("contraseñaUsuario").classList.add("is-invalid");
        console.log("Contraseña: Campo vacio");

    }


    if(ccontraseña.value == ""){
        contraseña.focus();
        console.log("Entro contraseña");
        document.getElementById("errorConfirmarContraseñaUsuario").innerHTML="";
        document.getElementById("errorConfirmarContraseñaUsuario").innerHTML += `<div style=" color: #DC3545"> Complete el campo </div>`;
        document.getElementById("confirmarContraseñaUsuario").classList.add("is-invalid");
        console.log("Contraseña: Campo vacio");
    }
}


function validarNombreUsuario(){

    var nombre = document.getElementById('nombreUsuario');
    console.log("Nombre: "+ nombre.value);

    if(nombre.value == ""){
        console.log("I'm free");
        nombre.focus();
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
        apellido.focus();
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
        correo.focus();
        document.getElementById("errorCorreoUsuario").innerHTML="";
        document.getElementById("errorCorreoUsuario").innerHTML += `<div style=" color: #DC3545"> Ingrese su correo </div>`;
        document.getElementById("correoUsuario").classList.add("is-invalid");
        console.log("Correo: Campo vacio");
        return false;
    }else
        if(validarEmail(correo.value) == false){
            document.getElementById("errorCorreoUsuario").innerHTML="";
            document.getElementById("errorCorreoUsuario").innerHTML += `<div style=" color: #DC3545"> El patrón ingresado es incorrecto. Debe ser user@example.com </div>`;
            document.getElementById("correoUsuario").classList.add("is-invalid");
            console.log("Correo: Campo vacio");
            correo.focus();
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
        pais.focus();
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
        estado.focus();
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
        ciudad.focus();
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
        numero.focus();
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
        zip.focus();
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
        contraseña.focus();
        console.log("Entro contraseña");
        document.getElementById("errorContraseñaUsuario").innerHTML="";
        document.getElementById("errorContraseñaUsuario").innerHTML += `<div style=" color: #DC3545"> Ingrese su contraseña </div>`;
        document.getElementById("contraseñaUsuario").classList.add("is-invalid");
        console.log("Contraseña: Campo vacio");

        document.getElementById("errorConfirmarContraseñaUsuario").innerHTML="";
        document.getElementById("errorConfirmarContraseñaUsuario").innerHTML += `<div style=" color: #DC3545"> Las contraseñas no coinciden </div>`;
        document.getElementById("confirmarContraseñaUsuario").classList.add("is-invalid");
        confirmarContraseñaUsuario.value = "";
        console.log("Contraseña confirmada: " + document.getElementById("confirmarContraseñaUsuario").value);

        return false;
    }else
            if(contraseña.value != ""){
                if(contraseña.value.length <= 4){
                    console.log("Entro");
                    document.getElementById("errorContraseñaUsuario").innerHTML="";
                    document.getElementById("errorContraseñaUsuario").innerHTML += `<div style=" color: yellow"> Seguridad: Débil </div>`;
                    document.getElementById("contraseñaUsuario").classList.remove("is-invalid");
                    document.getElementById("contraseñaUsuario").classList.add("validYellow");
                    console.log("Contraseña: "+ document.getElementById("contraseña").value);
                }else
                    if(contraseña.value.length > 4 && contraseña.value.length <= 8){
                        console.log("Entro");
                        document.getElementById("errorContraseñaUsuario").innerHTML="";
                        document.getElementById("errorContraseñaUsuario").innerHTML += `<div style=" color: gray"> Seguridad: Neutra </div>`;
                        document.getElementById("contraseñaUsuario").classList.add("is-valid");
                        document.getElementById("contraseñaUsuario").classList.remove("is-invalid");
                        document.getElementById("contraseñaUsuario").classList.add("is-valid");
                        console.log("Contraseña: "+ document.getElementById("contraseñaUsuario").value); 
                }else
                    if(contraseña.value.length > 8){
                        console.log("Entro");
                        document.getElementById("errorContraseñaUsuario").innerHTML="";
                        document.getElementById("errorContraseñaUsuario").innerHTML += `<div style=" color: green"> Seguridad: Alta </div>`;
                        document.getElementById("contraseñaUsuario").classList.remove("is-invalid");
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



function validarConfirmacionContraseñaUsuario(){
    var contraseña = document.getElementById("contraseñaUsuario");
    var ccontraseña = document.getElementById("confirmarContraseñaUsuario");

    console.log("Confirmando contraseña");

    if(contraseña.value != ccontraseña.value){
        document.getElementById("errorConfirmarContraseñaUsuario").innerHTML="";
        document.getElementById("errorConfirmarContraseñaUsuario").innerHTML += `<div style=" color: #DC3545"> Las contraseñas no coinciden </div>`;
        document.getElementById("confirmarContraseñaUsuario").classList.add("is-invalid");
        console.log("Contraseña confirmada: " + document.getElementById("confirmarContraseñaUsuario").value);
        ccontraseña.focus();
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