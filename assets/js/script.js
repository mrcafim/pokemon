$(document).ready(function(){   
	$('#btnPikachu').click(function(){
		var settings = {
			"async": true,
			"crossDomain": true,
			"url": "http://pokeapi.co/api/v2/pokemon/4",
			"method": "GET",
			"headers": {
				"Cache-Control": "no-cache",
				"Postman-Token": "74d51afa-7599-468e-9e68-793d15279862"
			}
		}

		$.ajax(settings).done(function (response) {
			console.log(response);
		});

	});
});