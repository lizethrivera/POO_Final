//Validaciones de Log In Empresa

var localStorage = window.localStorage;
var logins = [];

if(localStorage.getItem("login") == null){
    logins = [
        {
            correo: "juanito.alchofa123@hotmail.com",
            contraseña: "juanitoalca123"
        },


    ];
    
    localStorage.setItem("logins", JSON.stringify(logins));


}else{
    logins = JSON.parse(localStorage.getItem('login'));
}

window.onload = iniciar;

function iniciar(){
    document.getElementById("login").addEventListener('click', guardarInformacionLI, false);
    
}


function guardarInformacionLI(){
    //console.log("Entro");
    if(validarLI()  ){
        
        //console.log("Hola");
        let login = {
            correo: document.getElementById("correo-login").value,
            contraseña: document.getElementById("contraseña-login").value,
        };

    //console.log(JSON.stringify(login));
    logins.push(login);
    localStorage.setItem('logins',JSON.stringify(logins));
    

    return true;
    //logIn();
    //window.location = "index2.html";
    
    }
}



function limpiarCamposLI(){


    document.getElementById("errorCorreosLI").innerHTML="";
    document.getElementById("correo-login").value = "";
    document.getElementById("correo-login").classList.remove("is-valid");



    document.getElementById("errorContraseñasLI").innerHTML="";
    document.getElementById("contraseña-login").value = "";
    document.getElementById("contraseña-login").classList.remove("is-valid");
    

}



function validarLI(e){
    if(validarCorreoLI() && validarContraseñaLI() ){
        return true;
    }else{

        camposVaciosLI();      

    }
}

function camposVaciosLI(){
    var correo = document.getElementById("correo-login");
    var contraseña = document.getElementById("contraseña-login");

    if(correo.value == ""){
        document.getElementById("errorCorreosLI").innerHTML="";
        document.getElementById("errorCorreosLI").innerHTML += `<div style=" color: #DC3545"> Ingrese su correo </div>`;
        document.getElementById("correo-login").classList.add("is-invalid");
        //console.log("Correo: Campo vacio")
    }

    if(contraseña.value == ""){
        //console.log("Entro contraseña");
        document.getElementById("errorContraseñasLI").innerHTML="";
        document.getElementById("errorContraseñasLI").innerHTML += `<div style=" color: #DC3545"> Ingrese su contraseña </div>`;
        document.getElementById("contraseña-login").classList.add("is-invalid");
        //console.log("Contraseña: Campo vacio");
    }




}


function validarEmail(email){
   // console.log("Entré en la función: "+ email);
    var patron = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
    if (!patron.test(email)){
        return false;
    }else {
        return true;
    }
}


//Validando Correo
function validarCorreoLI(){
    var correo = document.getElementById('correo-login');
    //console.log("Correo: "+ correo.value);


    if(correo.value == ""){
        //console.log("I'm not free");
        correo.focus();
        document.getElementById("errorCorreosLI").innerHTML="";
        document.getElementById("errorCorreosLI").innerHTML += `<div style=" color: #DC3545"> Ingrese su correo </div>`;
        document.getElementById("correo-login").classList.add("is-invalid");
        //console.log("Correo: Campo vacio");
        return false;
    }else
        if(validarEmail(correo.value) == false){
            document.getElementById("errorCorreosLI").innerHTML="";
            document.getElementById("errorCorreosLI").innerHTML += `<div style=" color: #DC3545"> Por favor seguir patron: user@example.com </div>`;
            document.getElementById("correo-login").classList.add("is-invalid");
           // console.log("Correo: Campo vacio");
        }else{

            document.getElementById("errorCorreosLI").innerHTML="";
            document.getElementById("errorCorreosLI").innerHTML += `<div style=" color: #F16F21"> Perfecto! </div>`;
            document.getElementById("correo-login").classList.add("is-valid");
            document.getElementById("correo-login").classList.remove("is-invalid");
            document.getElementById("correo-login").classList.add("is-valid");
            //console.log("Correo: "+ correo.value);  
            return true;
            
        }
    
    

}



function validarContraseñaLI(){
    var contraseña = document.getElementById("contraseña-login");
    ///console.log("Confirmando contraseña");

    if(contraseña.value == ""){
        contraseña.focus();
            //console.log("Entro contraseña");
            document.getElementById("errorContraseñasLI").innerHTML="";
            document.getElementById("errorContraseñasLI").innerHTML += `<div style=" color: #DC3545"> Ingrese su contraseña </div>`;
            document.getElementById("contraseña-login").classList.add("is-invalid");
           // console.log("Contraseña: Campo vacio");
            return false;
    }else{
        //console.log("Entro");
        document.getElementById("errorContraseñasLI").innerHTML="";
        document.getElementById("errorContraseñasLI").innerHTML += `<div style=" color: #F16F21"> Perfecto! </div>`;
        document.getElementById("contraseña-login").classList.add("is-valid");
        document.getElementById("contraseña-login").classList.remove("is-invalid");
        document.getElementById("contraseña-login").classList.add("is-valid");
        //console.log("Contraseña: "+ contraseña.value);  

        return true;
    }

        
    
    }



