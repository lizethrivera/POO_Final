var codigoUsuario = readCookie('userCode');
var nombreUsuario = readCookie('nombreUsuario');
var apellidoUsuario = readCookie('apellidoUsuario');
function obtenerPromociones(){
    $.ajax({
        url: '../backEnd-Zotrix/API/promociones.php',
        method: 'GET', 
        data: "", //Usamos JSON
        dataType: 'json',

        success: function(respuesta){
            console.log(respuesta);
            mostrarPromocion(respuesta);

        },
        error: function(error){
            console.error("Aiuda",error);
        } //Función que tiene como parametro el error.
    });
}
obtenerPromociones();

function mostrarPromocion(promociones){
    console.log(promociones);

    for(let i=0; i<promociones.length; i++){
        console.log("estoy");
        let descuento='';
        

        for(let j=0; j<promociones[i].promocionProducto.length; j++){
            precioDescuento =  promociones[i].promocionProducto[j].precioOferta;
            porcetajeDescuento = promociones[i].promocionProducto[j].porcentajeDescuento;

        }



        document.getElementById('productos').innerHTML+=`
        <div class="col-md-3 col-sm-6">
                        <div class="product-grid">
                            <div class="product-image">
                                <a href="#">
                                    <img class="pic-1" src="img/landingShop/producto2.jpeg">
                                    <img class="pic-2" src="img/landingShop/producto2.jpeg">
                                </a>
                                <span class="product-trend-label">Trend</span>
                                <span class="product-discount-label">-${porcetajeDescuento}%</span>
                                <ul class="social">
                                    <li><a href="#" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                                    <li><a data-tip="Wishlist" onclick="agregarFavorito" ><i class="fa fa-heart"></i></a></li>
                                    <li><a href="#" data-tip="Compare"><i class="fa fa-random"></i></a></li>
                                    <li><a href="#" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                                </ul>
                            </div>
                            <div class="product-content">
                                <h3 class="title"><a data-toggle="modal" data-target="#staticBackdrop" onclick="obtenerProducto('${promociones[i].productCode}')">${promociones[i].nombreProducto}</a></h3>
                                <div class="price discount"><span>$${promociones[i].precioProducto}</span>$${precioDescuento}</div>
                            </div>
                        </div>
                    </div>
                        
        `;
    }
}

function agregarFavorito(producto){
    var usuario = readCookie('userCode');
    console.log(producto);
    $.ajax({
        url: '../backEnd-Zotrix/API/promoFavoritas.php?id='+usuario+'&idProducto='+producto,
        method: 'POST', 
        data: "", //Usamos JSON
        dataType: 'json',

        success: function(respuesta){
            console.log(respuesta);
            //mostrarEmpresa(respuesta);

        },
        error: function(error){
            console.error("Aiuda",error);
        } //Función que tiene como parametro el error.
    });
    alertOki();
}


function obtenerProducto(codigo){
    console.log(codigo);

    $.ajax({
        url: '../backEnd-Zotrix/API/products.php?id='+codigo,
        method: 'GET', 
        data: "", //Usamos JSON
        dataType: 'json',

        success: function(respuesta){
            console.log(respuesta);
            mostrarProducto(respuesta);
            verComentarios(respuesta);
        },
        error: function(error){
            console.error("Aiuda",error);
        } //Función que tiene como parametro el error.
    });

}

function wishlist(){
    var codigo = readCookie('userCode');
    $.ajax({
        url: '../backEnd-Zotrix/API/promoFavoritas.php?id='+codigo,
        method: 'GET', 
        data: "", //Usamos JSON
        dataType: 'json',

        success: function(respuesta){
            console.log(respuesta);
            mostrarWishlist(respuesta);
        },
        error: function(error){
            console.error("Aiuda",error);
        } //Función que tiene como parametro el error.
    });
}



function readCookie(name) {

    var nameEQ = name + "="; 
    var ca = document.cookie.split(';');

    for(var i=0;i < ca.length;i++) {

        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) {
        return decodeURIComponent( c.substring(nameEQ.length,c.length) );
        }

    }

    return null;

}

function guardarComentario(codigoProducto){
    console.log(codigoProducto);

    var f = new Date();
    //var nombreProducto = document.getElementById('nombreProducto').value
    var comentario = document.getElementById('comentario').value;
    var nombreUsuario = readCookie('nombreUsuario');
    var imagen = "img.jpg";
    console.log(comentario);
    console.log(nombreUsuario);
    console.log(imagen);

    let orden = {
        comentario: comentario,
        usuarioComentario: nombreUsuario,
        uimgComentario: imagen
    }

    $.ajax({
        url: '../backEnd-Zotrix/API/comentarios.php?id='+codigoProducto,
        method: 'POST',
        data: JSON.stringify(orden), //Usamos JSON
        dataType: 'json',

        success: function(respuesta) {
            console.log(respuesta);
            mostrarProducto(respuesta);
            verComentarios(respuesta);
        }, //Función que tiene como parametro una respuesta que puede ser JSON.
        error: function(error) {
            //mostrarProducto(respuesta);
                console.error("Aiuda", error);
            } //Función que tiene como parametro el error.
    });

}
obtenerProducto();
function verComentarios(product){
    console.log("Estos son tus comentarios", product);
    document.getElementById('comentarios').innerHTML = '';
        for(let k=0; k<product.comentarios.length; k++){
            document.getElementById('comentarios').innerHTML +=`
            <!-- Avatar -->
                <div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt=""></div>
                <!-- Contenedor del Comentario -->
                <div class="comment-box">
                    <div class="comment-head">
                        <h6 class="comment-name by-author"><a>${product.comentarios[k].usuarioComentario}</a></h6>
                    </div>
                    <div class="comment-content">
                        ${product.comentarios[k].comentario}
                    </div>
                </div>
        
            `
        }
}

function mostrarProducto(product){
    

    console.log(codigoUsuario);

        for(let i=0; i<product.promocionProducto.length; i++){
            precioOferta = product.promocionProducto[i].precioOferta;
            descuento = product.promocionProducto[i].porcentajeDescuento;
            precioFinal = product.promocionProducto[i].precioFinal;
        }
        document.getElementById('guardarComentario').innerHTML='';
        document.getElementById('guardarComentario').innerHTML+=`
        <div class="comment-avatar"><img id="imagen" src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt=""></div>
        <!-- Contenedor del Comentario -->
        <div class="comment-box">
            <div class="comment-head">
                <h6 class="comment-name by-author"><a>${nombreUsuario}</a></h6>
                <div class="botones" style="height: 20px; margin-left: 450px;">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary" onclick="guardarComentario('${product.productCode}')">Guardar</button>
                </div>
                
            </div>
            <div class="comment-content">
                <input type="text" id="comentario" style="width: 100%; border: darkgrey;" placeholder="Introduce tu comentario...">
                
            </div>
            
        </div>
        
        `;

        
        document.getElementById('info-Product').innerHTML =`
        <div>
        <div class="form-row">
        <div class="col-md-7 mb-3">
            <div class="col-md-12 mb-3">
            <img class="imagen" src="img/products/61JrBVi9WQL._SY355_.jpg" alt="" srcset="">
        </div>
        </div>
        <div class="col-md-5 mb-3">
        <div class="col-md-12 mb-3"> 
            <span></span><label for="validationDefault01" id="nombreProducto">${product.nombreProducto}</label>
    </div>
        <form>
            <div class="row rowws">
            <div class="col">
                <p class="clasificacion">
                <input id="radio1" type="radio" name="estrellas" value="5">
                <label for="radio1">★</label>
                <input id="radio2" type="radio" name="estrellas" value="4">
                <label for="radio2">★</label>
                <input id="radio3" type="radio" name="estrellas" value="3">
                <label for="radio3">★</label>
                <input id="radio4" type="radio" name="estrellas" value="2">
                <label for="radio4">★</label>
                <input id="radio5" type="radio" name="estrellas" value="1">
                <label for="radio5">★</label>
                </p>
            </div>
            <div class="col" style="text-align: right;">
                <button class="btn-wishlist mr-0 mr-lg-n3" type="button" data-toggle="tooltip" onclick="agregarFavorito('${product.productCode}')" title="Agregar a lista de deseos" data-original-title="Add to wishlist"><i class="far fa-heart"></i></button>
                <button class="btn-wishlist mr-0 mr-lg-n3" type="button" data-toggle="tooltip" title="Agregar a promocion favorita" data-original-title="Add to wishlist"><i class="far fa-bookmark"></i></button>
            
            </div>
            </div>
        </form> 
        
        <div class="mb-3 rowws"><span class="h3 font-weight-normal text-accent mr-1">$${precioOferta}</span>
            <del class="text-muted font-size-lg mr-3">$${product.precioProducto}<small>00</small></del><span class="badge badge-danger badge-shadow align-middle mt-n2">%${descuento}</span>
        </div>
        
        <form class="mb-grid-gutter rowws" method="post">
           
            <div class="input-group form-group">
        
                <input type="number" class="input-group" id="customFileLang" value=0 lang="es" min="0" max="100">

            </div>
            <div class="form-group d-flex align-items-center" mt-2>


            <button class="btn btn-primary btn-shadow btn-block" onclick="agregarPedido('${codigoUsuario}','${product.nombreProducto}','${product.descripcionProducto}','${product.productCode}',${product.precioProducto}, '${precioFinal}')" type="" style="text-decoration: none;"><i class="fas fa-cart-plus"></i> Agregar a carrito</button>
            </div>
        </form>
        
        
        <div class="accordion mb-4 rowws" id="productPanels">
            <div class="card">
            <div class="card-header">
                <h3 class="accordion-heading"><a href="#productInfo" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="productInfo" class="collapsed"><i class="czi-announcement text-muted font-size-lg align-middle mt-n1 mr-2"></i>INFORMACION DEL PRODUCTO<span class="accordion-indicator"><i data-feather="chevron-up"></i></span></a></h3>
            </div>
            <div class="collapse" id="productInfo" data-parent="#productPanels" style="">
                <div class="card-body">
                    ${product.descripcionProducto}
                </div>
            </div>
            </div>
        
            <div class="card">
            <div class="card-header">
                <h3 class="accordion-heading"><a onclick="obtenerSucursalesPromociones('${product.productCode}')" class="collapsed" href="#localStore" role="button" data-toggle="collapse" aria-expanded="true" aria-controls="localStore"><i  class="czi-location text-muted font-size-lg align-middle mt-n1 mr-2"></i>PRODUCTO DISPONIBLE EN<span class="accordion-indicator"><i data-feather="chevron-up"></i></span></a></h3>
            </div>
            <div class="collapse" id="localStore" data-parent="#productPanels">
            <div class="card-body" id="sucursales">
            
            </div>
            </div>
            </div>
        </div>

        <div class="col-md-12 mb-3">
            <span></span><label for="validationDefault01">Codigo QR</label>
            <div class="custom-file">
                <img src="" alt="" srcset="">
            </div>
        </div>
        </div>
        </div>

    </div>
        `;
    
}

function agregarPedido(usuario,nombreProducto, descripcionProducto, producto, precio, precioFinal){
    console.log(usuario);
    console.log(producto);
    console.log(precioFinal);

    var f = new Date();
    //var nombreProducto = document.getElementById('nombreProducto').value
    var productInfo = document.getElementById('productInfo').value
    var cantidad = document.getElementById('customFileLang').value;
    var ordenOr = "en proceso";
    console.log(cantidad);
    console.log(ordenOr);
    console.log(precio);


    let orden = {
        cantidad: cantidad,
        nombreProducto: nombreProducto,
        descripcionProducto: descripcionProducto,
        fechaCompra: f,
        estadoOrden: ordenOr,
        precio: precio,
        precioFinal: precioFinal
    }

    $.ajax({
        url: '../backEnd-Zotrix/API/carrito.php?id='+usuario+'&productoID='+producto,
        method: 'POST',
        data: JSON.stringify(orden), //Usamos JSON
        dataType: 'json',

        success: function(respuesta) {
            console.log(respuesta);


        }, //Función que tiene como parametro una respuesta que puede ser JSON.
        error: function(error) {

                console.error("Aiuda", error);
            } //Función que tiene como parametro el error.
    });
}


function obtenerSucursalesPromociones(codigoProducto){

    
    console.log(f);
    $.ajax({
            url: '../backEnd-Zotrix/API/promociones.php?id='+codigoProducto,
            method: 'GET', 
            data: "", //Usamos JSON
            dataType: 'json',

            success: function(respuesta){
                console.log(respuesta);
                mostrarSucursales(respuesta);
            },
            error: function(error){
                console.error("Aiuda",error);
            } //Función que tiene como parametro el error.
        });
    
}

function mostrarSucursales(sucursales){
    for(let i=0; i<sucursales.length; i++){
        document.getElementById('sucursales').innerHTML +=`
        <div id="map" style="margin-top: 525px; height: 300px;"></div>
                                        <script>
                                                var map = L.map('map').setView([${sucursales[i].altitudSucursal}, ${sucursales[i].latitudSucursal}], 8);
                                            L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=iDBLo5VjrG6S52W3HIHF',{
                                                
                                                attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
                                                
                                            }).addTo(map);
                                        
                                            var marker = L.marker([${sucursales[i].altitudSucursal}, ${sucursales[i].latitudSucursal}]).addTo(map);

                                            </script>
        
        
        
        `
    }
}


function pasarVariables(pagina, nombres) {
    pagina +="?";
    nomVec = nombres.split(",");
    for (i=0; i<nomVec.length; i++)
    pagina += nomVec[i] + "=" + escape(eval(nomVec[i]))+"&";
    pagina = pagina.substring(0,pagina.length-1);
    location.href=pagina;
}


function obtenerEmpresas(){
    $.ajax({
        url: '../backEnd-Zotrix/API/bussiness.php',
        method: 'GET', 
        data: "", //Usamos JSON
        dataType: 'json',

        success: function(respuesta){
            console.log(respuesta);
            mostrarEmpresas(respuesta);

        },
        error: function(error){
            console.error("Aiuda",error);
        } //Función que tiene como parametro el error.
    });
}
obtenerEmpresas();

function mostrarEmpresas(empresas){
    console.log(empresas);

    for(let i=0; i<empresas.length; i++){
        console.log("estoy");
        let descuento='';



        document.getElementById('Empresas').innerHTML+=`
        <div class="col-md-3 col-sm-6 pb-5">
                        <div class="product-grid">
                            <div class="product-image">
                                <a href="#">
                                    <img class="pic-1" src="img/landingShop/empresa1.png">
                                    <img class="pic-2" src="img/landingShop/empresa1.png">
                                </a>
                                <span class="product-trend-label">NUEVA</span>
                                <ul class="social">
                                    <li><a  data-tip="Quick View"><i class="fa fa-search  mt-5"></i></a></li>
                                </ul>
                            </div>
                            <div class="product-content">
                                <h3 class="title"><a data-toggle="modal" data-target="#modalEmpresa" onclick="obtenerEmpresa('${empresas[i].empresaCode}')">${empresas[i].nombreEmpresa}</a></h3>
                                <div class="price">${empresas[i].productos.length} Productos</div>
                            </div>
                        </div>
                    </div>
                        
        `;
    }
}


function obtenerEmpresa(empresa){
    console.log(empresa);

    $.ajax({
        url: '../backEnd-Zotrix/API/bussiness.php?id='+empresa,
        method: 'GET', 
        data: "", //Usamos JSON
        dataType: 'json',

        success: function(respuesta){
            console.log(respuesta);
            mostrarEmpresa(respuesta);

        },
        error: function(error){
            console.error("Aiuda",error);
        } //Función que tiene como parametro el error.
    });
}

function mostrarEmpresa(empresa){
    console.log(empresa.nombreEmpresa);

    


    document.getElementById('seguirEmpresa').innerHTML = '';
    document.getElementById('seguirEmpresa').innerHTML+=`
    <div class="notification" id="seguir" onclick="guardarSiguiendo('${empresa.empresaCode}')">
        <i class="fas fa-check" id="icon"></i>
        <span class="alert-message"></span>
    </div>
    
    
    `;

    document.getElementById('nombreEmpresa').innerHTML='';
    document.getElementById('nombreEmpresa').innerHTML +=
    `
    <h3 class="user-name" >
    ${empresa.nombreEmpresa}
    </h3>    
    `

    for(let i=0; i<empresa.contacto.length; i++){
        numero = empresa.contacto[i].numeroEmpresa;
        soporteEmpresa = empresa.contacto[i].soporteEmpresa;
        facebookEmpresa = empresa.contacto[i].facebookEmpresa;
        instagramEmpresa = empresa.contacto[i].instagramEmpresa;
        youtubeEmpresa = empresa.contacto[i].youtubeEmpresa;
    }


    document.getElementById('contactos').innerHTML ='';
    document.getElementById('contactos').innerHTML+=`
    <p class="mobile-no">
    <i class="fa fa-phone"></i>
    ${numero}
    </p>

    <p class="user-mail">
        <i class="fa fa-envelope"></i>
        ${empresa.correoEmpresa}
    </p>

    <p class="user-mail">
    <i class="fas fa-headset"></i>
        ${soporteEmpresa}
    </p>

    <p class="user-mail">
    <i class="fab fa-facebook-f"></i>
        ${facebookEmpresa}
    </p>


    <p class="user-mail">
    <i class="fab fa-instagram"></i>
        ${instagramEmpresa}
    </p>


    <p class="user-mail">
    <i class="fab fa-youtube"></i>
        ${youtubeEmpresa}
    </p>

    <div class="user-rating">
        <h3 class="rating">
            4.5
        </h3>

        <div class="rate">
            <div class="stars">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
            
            <span class="no-user">
                <span>123</span>&nbsp;&nbsp; Reviews
            </span>
        </div>
    </div>

    
    `;



    for(let j=0; j<empresa.sucursales.length; j++){
        document.getElementById('infosucursales').innerHTML +=`
        <tr>
            <td>${empresa.sucursales[j].nombreSucursal}</td>
            <td>${empresa.sucursales[j].altitudSucursal}</td>
            <td>${empresa.sucursales[j].latitudSucursal}</td>

        </tr>
        
        
        `
    }
}


function guardarSiguiendo(codigoEmpresa){
    var usuario = readCookie('userCode');

    $.ajax({
        url: '../backEnd-Zotrix/API/siguiendo.php?id='+usuario+'&idEmpresa='+codigoEmpresa,
        method: 'POST', 
        data: "", //Usamos JSON
        dataType: 'json',

        success: function(respuesta){
            console.log(respuesta);
            //mostrarEmpresa(respuesta);

        },
        error: function(error){
            console.error("Aiuda",error);
        } //Función que tiene como parametro el error.
    });
    alerta();
}


function alerta(){
    document.getElementById('seguir').addEventListener('click', function(){
        var icon = document.getElementById('icon');
        icon.classList.toggle('fa-check');
        icon.classList.toggle('fa-minus');
    })
    swal("Ha comenzado a seguir la empresa");
}

