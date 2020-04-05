$(document).ready(function(){
    $('#show').mousedown(function(){
        $('#contraseña-login').removeAttr('type');
        $('#show').addClass('fa-eye-slash').removeClass('fa-eye');
    });

    $('#show').mouseup(function(){
        $('#contraseña-login').attr('type','password');
        $('#show').addClass('fa-eye').removeClass('fa-eye-slash');
    });
});


$(document).ready(function(){
    $('#showC').mousedown(function(){
        $('#contraseñaEmpresa').removeAttr('type');
        $('#showC').addClass('fa-eye-slash').removeClass('fa-eye');
    });

    $('#showC').mouseup(function(){
        $('#contraseñaEmpresa').attr('type','password');
        $('#showC').addClass('fa-eye').removeClass('fa-eye-slash');
    });
});




var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});
