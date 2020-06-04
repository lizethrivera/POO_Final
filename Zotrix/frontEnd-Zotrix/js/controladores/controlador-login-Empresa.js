function logInEmpresa(){
    axios({
        url:"../backEnd-Zotrix/API/login-Empresa.php",
        method: "post",
        responseType: "json",
        data:{
            correoEmpresa : document.getElementById("correo-login").value,
            passwordEmpresa: document.getElementById("contraseña-login").value
        } //Petición POST
    }).then(respuesta=>{
        if(respuesta.data.codigoresultado = 1){
            console.log("Shi");
            window.location.href = "dashBoard.html";
        }else{
            console.log("no");
        }
        console.log(respuesta);
    }).catch(err=>{
        console.error('(AJAX Axios)', err);
    }); 
    

}