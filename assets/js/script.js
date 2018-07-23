$(document).ready(function(){
	$('#loading').hide();
	$('#infoPikachu').hide();
	$('#infoDitto').hide();
	$('#infoCharizard').hide();
	$('#infoLugia').hide();
	$('#infoSquirtle').hide();


	$('#btnPikachu').click(function(){
		event.preventDefault();
		$('#loading').show();
		var retorno = '';
		$.ajax({
			async: true,
			crossDomain: true,
			type: 'GET',
			url: 'https://pokeapi.co/api/v2/pokemon/25',
      		dataType: 'json',
			headers: {
			},
			success: function(data) {
				$('#infoPikachu').show();
				$('#loading').hide();
				retorno += '<strong> Nome:</strong>';
				retorno += ' '+data.name+'<br>';
				retorno += '<strong> Id:</strong>';
				retorno += ' '+data.id+'<br>';
				retorno += '<strong> Tipo:</strong>';
				retorno += ' '+data.types[0].type.name+'<br>';
				$('#infoPikachu').html(retorno);
			}
		});

	});

	$('#btnDitto').click(function(){
		event.preventDefault();
		$('#loading').show();
		var retorno = '';
		$.ajax({
			async: true,
			crossDomain: true,
			type: 'GET',
			url: 'https://pokeapi.co/api/v2/pokemon/132',
      		dataType: 'json',
			headers: {
			},
			success: function(data) {
				$('#infoDitto').show();
				$('#loading').hide();
				retorno += '<strong> Nome:</strong>';
				retorno += ' '+data.name+'<br>';
				retorno += '<strong> Id:</strong>';
				retorno += ' '+data.id+'<br>';
				retorno += '<strong> Tipo:</strong>';
				retorno += ' '+data.types[0].type.name+'<br>';
				$('#infoDitto').html(retorno);
			}
		});

	});

	$('#btnCharizard').click(function(){
		event.preventDefault();
		$('#loading').show();
		var retorno = '';
		$.ajax({
			async: true,
			crossDomain: true,
			type: 'GET',
			url: 'https://pokeapi.co/api/v2/pokemon/6',
      		dataType: 'json',
			headers: {
			},
			success: function(data) {
				$('#infoCharizard').show();
				$('#loading').hide();
				retorno += '<strong> Nome:</strong>';
				retorno += ' '+data.name+'<br>';
				retorno += '<strong> Id:</strong>';
				retorno += ' '+data.id+'<br>';
				retorno += '<strong> Tipo:</strong>';
				retorno += ' '+data.types[0].type.name+' / '+data.types[1].type.name;
				$('#infoCharizard').html(retorno);
			}
		});

	});

	$('#btnLugia').click(function(){
		event.preventDefault();
		$('#loading').show();
		var retorno = '';
		$.ajax({
			async: true,
			crossDomain: true,
			type: 'GET',
			url: 'https://pokeapi.co/api/v2/pokemon/249',
      		dataType: 'json',
			headers: {
			},
			success: function(data) {
				$('#infoLugia').show();
				$('#loading').hide();
				retorno += '<strong> Nome:</strong>';
				retorno += ' '+data.name+'<br>';
				retorno += '<strong> Id:</strong>';
				retorno += ' '+data.id+'<br>';
				retorno += '<strong> Tipo:</strong>';
				retorno += ' '+data.types[0].type.name+' / '+data.types[1].type.name;
				$('#infoLugia').html(retorno);
			}
		});

	});

	$('#btnSquirtle').click(function(){
		event.preventDefault();
		$('#loading').show();
		var retorno = '';
		$.ajax({
			async: true,
			crossDomain: true,
			type: 'GET',
			url: 'https://pokeapi.co/api/v2/pokemon/7',
      		dataType: 'json',
			headers: {
			},
			success: function(data) {
				$('#infoSquirtle').show();
				$('#loading').hide();
				retorno += '<strong> Nome:</strong>';
				retorno += ' '+data.name+'<br>';
				retorno += '<strong> Id:</strong>';
				retorno += ' '+data.id+'<br>';
				retorno += '<strong> Tipo:</strong>';
				retorno += ' '+data.types[0].type.name+'<br>';
				$('#infoSquirtle').html(retorno);
			}
		});

	});
});