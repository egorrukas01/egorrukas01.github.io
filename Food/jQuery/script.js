/*$('.hero-bg');
$('#hero-bg');
$('p');*/
/*$(function(){
	var tag = $('#form-container p').text();
	alert(tag);
})*/
$(function(){
	/*var tag = $('#form-container p').hide(2000);
	var tag = $('#form-container p').show(2000);*/
	$('.form-left label').width(500);
	/*$('.form-left label').fadeOut(2000).fadeIn(1000);*/
	$('.top p').slideUp(500).slideDown(500);
	var link = $('input');

	link.mouseover(function(){
		$(this).addClass('border');
	})

	link.mouseout(function(){
		$(this).removeClass('border');
	})

	/*$('.form-left label').html("What?");*/
	/*$('#form-container p').text("hi");*/
})