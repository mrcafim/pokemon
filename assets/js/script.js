$(document).ready(function(){   
	$('#btnPikachu').click(function(){
		event.preventDefault();

		$.ajax({
			async: true,
			crossDomain: true,
			type: 'GET',
			url: 'https://pokeapi.co/api/v2/pokemon/2',
      		dataType: 'json',
			headers: {
			},
			success: function(data) {
				console.log(data);
			}
		});

	});
});