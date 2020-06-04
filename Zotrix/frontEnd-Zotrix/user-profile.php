<?php
    session_start();
    if(!isset($_SESSION["token"]))
        header("Location: login.html");

    if(!isset($_COOKIE["token"]))
    header("Location: login.html");

    if($_COOKIE["token"]!= $_SESSION["token"] )
    header("Location: login.html");
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil</title>

    <link  rel="icon"   href="img/logoex.png" type="image/png" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/User-profile.css">
    <link rel="stylesheet" href="css/animate.css">

    
</head>
<body>

    <!--Navigation-->
    <header>
        <nav class="navbar navbar-expand-md navbar-dark margins">
            <a class="navbar-brand logo" href="#">
                <img src="img/Logo.png" class="logo">
            </a>
            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            
        <!--List Menu-->
            <div class="navbar-collapse collapse" id="navbarsExample04">
            <ul class="navbar-nav mr-auto ulnavs">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="shop-user.html">Productos</a>
                </li>


                <li class="nav-item">
                    <a class="nav-link" href="bussiness-view.html">Empresas</a>
                </li>

            </ul>
            
            
            <div class="form-inline my-2 my-md-0" >
                
                <div class="form-inline my-2 my-md-0" id="formicons">
                <ul class="navbar-nav mr-auto flex-row ulnavs">

                    <li class="nav-item">
                        <a class="nav-link" href="cart-user.html"><i class="fas fa-shopping-cart icons fa-lg"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <!--IMG Dropdown-->
            <div class="otro" >
                <ul class="navbar-nav">
                    <li class="nav-item dropdown" id="perfil">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            
                                <img src="img/navbarPerfil/Merida-brave-35550159-417-500.jpg"  alt="" class="circulo-Perfil">
                        </a>
                            <div class="dropdown-menu drop" id="perfil-drop" aria-labelledby="navbarDropdownMenuLink">
                                <!--IMG Dropdown Inside-->
                                <div class="drop-perfil">
                                    <div class="img-nameuser">
                                        <div class="row">
                                            <div class="col-4">
                                                <a href="#">
                                                    <img src="img/navbarPerfil/Merida-brave-35550159-417-500.jpg" alt="" class="circulo-Perfil-In">
                                                </a>
                                            </div>

                                            <div class="col-8 left">
                                                <h8>Hola de nuevo</h8>
                                                <br>
                                                <h8>Iliana Pineda</h8>
                                                <h8 id="codigoUsuario"></h8>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="aboutUser">
                                            <a class="dropdown-item" href="user-profile.php"><i class="fas fa-star"></i> Perfil</a>
                                        
                                    </div>

                                        <div class="infoUser">
                                            <a class="dropdown-item" href="configuracionUSer.html"><i class="fas fa-users-cog"></i> Configuracion</a>
                                        </div>

                                        <div class="closeUser">
                                            <a class="dropdown-item" href="logout.php"><i class="fas fa-power-off"></i> Cerrar Sesion</a>
                                        </div>
                                </div>
                            
                            </div>
                    </li>
    
                </ul>
            </div>
            </div>
        </nav>
    </header>



    <!--Perfil-->
    <main>
        <div class="" id="Cuerpo">
            <div class="profile-header">
                <div class="profile-img">
                    <img src="img/navbarPerfil/Merida-brave-35550159-417-500.jpg" width="200" alt="" srcset="">
                </div>
    
                <div class="profile-nav-info">
                    <h3 class="user-name" id="nombre">
                        Iliana Pineda
                    </h3>
    
                    <div class="address">
                        <p class="state">New York,</p>
                        <span class="country">
                            USA.
                        </span>
                    </div>
                </div>
    
                <div class="profile-option">
                    <div class="notification">
                        <i class="fa fa-bell"></i>
                        <span class="alert-message">1</span>
                    </div>
                </div>
            </div>
    
            <div class="main-bd">
                <div class="left-side">
                    <div class="profile-side">
                        <p class="mobile-no">
                            <i class="fa fa-phone"></i>
                            +504 33872698
                        </p>
    
                        <p class="user-mail">
                            <i class="fa fa-envelope"></i>
                            iliana@yahoo.com
                        </p>
    
                        <div class="user-bio">
                            <p class="bio">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, modi error minus architecto voluptatibus molestiae dolore impedit natus aperiam similique magni deleniti quam voluptates illo, explicabo at, magnam eum eos?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex facilis molestiae temporibus tempora maxime animi ullam, harum quam. Deleniti quaerat natus nulla sequi. Natus distinctio sapiente ratione architecto voluptatem incidunt.
                            </p>
                        </div>
    
                        <div class="profile-btn">
                            <button class="chatbtn">
                                <i class="fa fa-comment"></i>Chat
                            </button>
    
                            <button class="createbtn">
                                <i class="fa fa-plus"></i>Create
                            </button>
                        </div>
    
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
                    </div>
                </div>
    
                <div class="right-side" width:100%>
                    <div class="nav">
                        <ul>
                            <li onclick="tabs(0)" class="user-post active">-</li>
                            <li onclick="tabs(1)" class="user-review">Comentarios</li>
                            <li onclick="tabs(2)" class="user-setting">Siguiendo</li>
                        </ul>
                    </div>
    
                    <div class="profile-body">
                        <div class="profile-posts tab">
                            <h1>Your posts</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nam quis totam inventore provident, et iure explicabo ut animi iste vero? Asperiores quam adipisci iusto eum, culpa in nemo? Dicta.</p>
                        </div>
    
                        <div class="profile-review tab">
                            <h1>Your Reviews</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nam quis totam inventore provident, et iure explicabo ut animi iste vero? Asperiores quam adipisci iusto eum, culpa in nemo? Dicta.</p>
                        </div>
    
                        <div class="profile-setting tab">
                            <h1>Your Settings</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nam quis totam inventore provident, et iure explicabo ut animi iste vero? Asperiores quam adipisci iusto eum, culpa in nemo? Dicta.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    


<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
<script src="js/query.js"></script>
<script src="js/user-profile.js"></script>
<script src="js/controladores/controlador.js"></script>
</body>
</html>