
function logIn(){
    
    axios({
        url:"../backEnd-Zotrix/API/login.php",
        method: "post",
        responseType: "json",
        //params:  persona, Petición GET. Directamente enviamos el objeto sin utilizar stringify
        data:{
            correoUsuario : document.getElementById("correo-login").value,
            passwordUsuario: document.getElementById("contraseña-login").value
        } //Petición POST
    }).then(respuesta=>{
        if(respuesta.data.codigoResultado==1){
            console.log("Chi");
            window.location.href = "user-profile.php";
        }else{
            document.getElementById('error').style.display = 'block';
            document.getElementById('error').innerHTML = respuesta.data.mensaje;
        }
        console.log('(AJAX Axios)', respuesta);
        
    }).catch(err=>{
        console.error('(AJAX Axios)', err);
    }); 

}