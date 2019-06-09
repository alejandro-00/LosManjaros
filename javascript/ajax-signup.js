$(document).ready(function() {

    $('#subm').click(function(){

    	var form =  document.getElementById("formSignUp");

        var dataString = $('#formSignUp').serialize();
        dataString = dataString + "&submit=submit";


        if(validacion() == true){
        $.ajax({
            type: "POST",
            url: "signup.php",
            data: dataString,
            success: function(datos) {

            }
        });
        }
        return false;

    });


});

function ajax_comprobacion_correo(correo) {
    var result = 0;
    $.ajax({
      url:"signupmail.php",
      data: "security=true",
      type:  "POST",
      async: false,
      success:function(data){
         		for(i=0; i<data.length; i++){

			if(data[i].correo == correo){
				result = 1;
			}

				}
      }
   });
   return result;
}



function ajax_comprobacion_user(user,correo) {
  var USUARIO = {
    "user": user,
    "correo": correo
  };
  var data = JSON.stringify(USUARIO);
    var result = 0;
    $.ajax({
      url:"signupuser.php",
      data: {x: data},
      type:  "POST",
      async: false,
      success:function(data){
         		for(i=0; i<data.length; i++){

			if(data[i].username == user){
				result = 1;
			}

				}
      }
   });
   return result;
}


function validacion(){
  var firstname = document.getElementById('firstname').value;
  var lastname = document.getElementById('lastname').value;
	var correo = document.getElementById("correo").value;
	var usuario = document.getElementById("usuario").value;
	var password = document.getElementById("password").value;
	var password2 = document.getElementById("password2").value;
	var genero = document.getElementById("genero").value;

	var contenedor = document.getElementById("cont-send");

if(contenedor.hasChildNodes()) {
  while (contenedor.hasChildNodes()) {
  contenedor.removeChild(contenedor.firstChild);
}
}
	var errores = '';

  if(firstname == ''){
    errores += "<span class='p-0'>Escribe tu first name. </span> <br/>";
  }else if(firstname != ''){

  }
  if(lastname == ''){
		errores += "<span class='p-0'>Escribe tu last name. </span> <br/>";
	}else if(lastname != ''){

	}

  if(usuario == ''){
    errores += "<span class='p-0'>Escribe un usuario. </span> <br/>";
  }else if(ajax_comprobacion_user(usuario, correo) == 1){
    errores += "<span class='p-0'>Ese usuario no está disponible. </span> <br/>";
  }else{

  }

	if(correo == ''){
		errores += "<span class='p-0'>Escribe un correo. </span> <br/>";
	}else if(ajax_comprobacion_correo(correo) == 1){
		errores += "<span class='p-0'>Ese correo no está disponible. </span> <br/>";
	}else{

	}

  if(genero == 'Selecciona un género'){
    errores += "<span class='p-0'>Elige un género. </span> <br/>";
	}else{


	}
	if(usuario == ''){
		errores += "<span class='p-0'>Escribe un usuario. </span> <br/>";
	}else if(ajax_comprobacion_user(usuario) == 1){
		errores += "<span class='p-0'>Ese usuario no está disponible. </span> <br/>";
	}else{

	}

	if(password == ''){
		errores += "<span class='p-0'>Escribe una contraseña. </span> <br/>";
	}else if(password != ''){

	}

	if(password2 == ''){
		errores += "<span class='p-0'>Repite de nuevo tu contraseña. </span> <br/>";
	}else if(password2 != password){
		errores += "<span class='p-0'>Las contraseñas deben de ser iguales. </span> <br/>";
	}else if(password2 != ''){

	}

	if(genero == ''){
		errores += "<span class='p-0'>Selecciona un género.</span> <br/>";
	}else if(genero != ''){

	}


	if(errores != ''){

		var contenedorErrores = document.createElement("div");
		contenedorErrores.className = "alerta-error mt-2 p-2";
		contenedorErrores.innerHTML = errores;
		contenedor.appendChild(contenedorErrores);

	}else{
		var contenedorEnviado = document.createElement("div");
		contenedorEnviado.className = "alerta-success mt-2";
		var parrafoEnviado = document.createElement("span");
		parrafoEnviado.className = "p-0";
		parrafoEnviado.innerHTML = "Usuario registrado correctamente."
		contenedorEnviado.appendChild(parrafoEnviado);
		contenedor.appendChild(contenedorEnviado);
		document.getElementById("formSignUp").reset();
		return true;
	}
				       }
