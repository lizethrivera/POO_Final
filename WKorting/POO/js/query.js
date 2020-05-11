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

jQuery(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
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

$("#sliders").hover(function(){
    $("#vistas").show();
}, function(){
    $("#vistas").hide();

});


$("#swiper2").hover(function(){
    $("#vistas1").show();
}, function(){
    $("#vistas1").hide();

});

$("#swiper3").hover(function(){
    $("#vistas2").show();
}, function(){
    $("#vistas2").hide();

});

$("#swiper4").hover(function(){
    $("#vistas3").show();
}, function(){
    $("#vistas3").hide();

});

$("#swiper5").hover(function(){
    $("#vistas4").show();
}, function(){
    $("#vistas4").hide();

});

$("#swiper6").hover(function(){
    $("#vistas5").show();
}, function(){
    $("#vistas5").hide();

});