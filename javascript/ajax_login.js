var inputUser = document.getElementById("email-input");
var inputPass = document.getElementById("password-input");
inputUser.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    ajax_login();
  }
});
inputPass.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    ajax_login();
  }
});

function ajax_login_validacion() {

  var userName = document.getElementById("email-input").value;
  var passWord = document.getElementById("password-input").value;
  var contenedor = document.querySelector("#container");

  var userNameTrim = userName.trim();
  var passWordTrim = passWord.trim();
  var userNameLength = userNameTrim.length;
  var passWordLength = passWordTrim.length;

  if (contenedor.hasChildNodes()) {
    while (contenedor.hasChildNodes()) {
      contenedor.removeChild(contenedor.firstChild);
    }
  }

  var errores = "";

  if (userNameLength == 0) {
    errores += "<span>No has ingresado un nombre de usuario.</span> <br/>";
  } else {

  }
  if (passWordLength == 0) {
    errores += "<span>No has ingresado una contraseña.</span> <br/>";
  } else {

  }

  if (errores != "") {
    var contenedorErrores = document.createElement("div");
    contenedorErrores.className = "col-12 text-center alerta-error p-2 mt-1 mb-2";
    contenedorErrores.innerHTML = errores;
    contenedor.appendChild(contenedorErrores);
  } else {
    return true;
  }
}

function ajax_login(){
if(ajax_login_validacion() == true){

  var userName = document.querySelector("#email-input").value;
  var passWord = document.querySelector("#password-input").value;

            var USUARIO = {
              "name": userName,
              "pswd": passWord
            };
            var data = JSON.stringify(USUARIO);
            $.ajax({
              url: 'php/login.php',
              data: {x : data},
              dataType: 'json',
              type: 'POST',
              success: function(datos) {
                console.log(datos);
                var contenedor = document.querySelector("#cont-send");
                if (contenedor.hasChildNodes()) {
                  while (contenedor.hasChildNodes()) {
                  contenedor.removeChild(contenedor.firstChild);
                }
                }

                if(datos == '3'){
                  inicioExitosoAdmin();
                }else if(datos == '1'){
                  inicioExitosoUsuario();
                }else if(datos != '3' && != '1'){
                  inicioNoExitoso();
                }
              }

            });
          }
}


          function inicioExitosoAdmin(){
            var contenedor = document.querySelector("#cont-send");
            var contenedorEnviado = document.createElement("div");
            contenedorEnviado.className = "mt-2 alert alert-success text-center";
            contenedorEnviado.innerHTML = "<span class='mt-2 rounded-circle text-center'>¡Has iniciado sesión con éxito!</span>";
            contenedor.appendChild(contenedorEnviado);

            var formID = document.getElementById("formLogin");
            formID.reset();


            setTimeout(function(){

              var contenedor = document.querySelector("#cont-send");
              if (contenedor.hasChildNodes()) {
                while (contenedor.hasChildNodes()) {
                  contenedor.removeChild(contenedor.firstChild);
                }
              }
              location.href= "cp-admin.html";
            },1000);
          }

          function inicioExitosoUsuario(){
            var contenedor = document.querySelector("#cont-send");
            var contenedorEnviado = document.createElement("div");
            contenedorEnviado.className = "mt-2 alert alert-success text-center";
            contenedorEnviado.innerHTML = "<span class='rounded-circle text-center'>¡Has iniciado sesión con éxito!</span>";
            contenedor.appendChild(contenedorEnviado);

            var formID = document.getElementById("formLogin");
            formID.reset();


            setTimeout(function(){

              var contenedor = document.querySelector("#cont-send");
              if (contenedor.hasChildNodes()) {
                while (contenedor.hasChildNodes()) {
                  contenedor.removeChild(contenedor.firstChild);
                }
              }
            location.href = "index.html";
          },1000);
          }

          function registroNoExitoso(){
            var contenedor = document.querySelector("#cont-send");
            var contenedorErrores = document.createElement("div");
            contenedorErrores.className = "col-12 alerta-error p-2 mt-2";
            contenedorErrores.innerHTML = "El usuario o la contraseña son incorrectos";
            contenedor.appendChild(contenedorErrores);

            var formID = document.getElementById("formLogin");
            formID.reset();

          }
