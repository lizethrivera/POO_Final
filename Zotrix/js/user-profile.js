$('.nav ul li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
})

const tabBtn = document.querySelectorAll('.nav ul li');
const tab = document.querySelectorAll('.tab');

function tabs(panelIndex){
    tab.forEach(function(node){
        node.style.display = 'none';
    });
    tab[panelIndex].style.display = 'block';
}
//tab(0);


const inde = document.querySelectorAll('.tab');

function hola(index){
    console.log("Hola", +index);
    inde.forEach(function(node){
        node.style.display = 'none';
    });
    inde[index].style.display = 'block';
}
