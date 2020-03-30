$(".btnEnviar").on("click",function(){
	var name, last, email, it, web, social, net, message, datos;

	name = $(".name").val();
	last = $(".last").val();
	email = $(".email").val();
	it = $('#it').is(":checked");
	web = $('#web').is(":checked");
	social = $('#social').is(":checked");
	net = $('#net').is(":checked");
   	message = $(".message").val();
   	
   	if (it){ 
   		it = $(".it").val();
   }else{
   		it = "";
   }
   	if (web){ 
   		web = $(".web").val();
   }else{
   		web = "";
   }
   	if (social){ 
   		social = $(".social").val();
   }else{
   		social = "";
   }
   	if (net){ 
   		net = $(".net").val();
   }else{
   		net = "";
   }


   	data = new FormData();
   	data.append("name", name);
   	data.append("last", last);
   	data.append("email", email);
   	data.append("it", it);
   	data.append("web", web);
   	data.append("social", social);
   	data.append("net", net);
   	data.append("message", message);


   	if (name == "") {
   		$(".ajaxAlert").html(
        '<div class="alert alert-warning">'
        + '<div class="alert-icon">'
        +'<i class="material-icons">warning</i>'
        +' </div>'
        +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
        +'<span aria-hidden="true"><i class="material-icons">clear</i></span>'
        +'</button>'
		+'<b>Dont leave name empty.</b>'
		+' </div>');
   	}else if (last == ""){
   		$(".ajaxAlert").html(
        '<div class="alert alert-warning">'
        + '<div class="alert-icon">'
        +'<i class="material-icons">warning</i>'
        +' </div>'
        +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
        +'<span aria-hidden="true"><i class="material-icons">clear</i></span>'
        +'</button>'
		+'<b>Dont leave last name empty.</b>'
		+' </div>');

   	}else if (email == ""){
   		$(".ajaxAlert").html(
        '<div class="alert alert-warning">'
        + '<div class="alert-icon">'
        +'<i class="material-icons">warning</i>'
        +' </div>'
        +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
        +'<span aria-hidden="true"><i class="material-icons">clear</i></span>'
        +'</button>'
		+'<b>Dont leave email empty.</b>'
		+' </div>');

   	}else if (message == ""){
   		$(".ajaxAlert").html(
        '<div class="alert alert-warning">'
        + '<div class="alert-icon">'
        +'<i class="material-icons">warning</i>'
        +' </div>'
        +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
        +'<span aria-hidden="true"><i class="material-icons">clear</i></span>'
        +'</button>'
		+'<b>Dont leave message empty.</b>'
		+' </div>');

   	}else {
   		          $.ajax({

			url: "ajax/contacto.ajax.php",
			method: "POST",
			data: data,
			cache: false,
			contentType: false,
			processData: false,
			success: function(respuesta){

				
				if (respuesta === "ok") {

					swal({
					   type: "success",
					   title: "We will be with you in a moment!",
					   showConfirmButton: true,
					   confirmButtonText: "Cerrar"
					   }).then((result) => {
					 	if (result.value) {

					 	window.location = "#contact";

					 	}
                     })
                    

				}

		

		    }
	    })
   	}
   	
	

})	