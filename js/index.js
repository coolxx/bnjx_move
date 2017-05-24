$(function(){
	$('.btnbox a').click(function(){
		$('.btnbox a').removeClass('on1').eq($(this).index()).addClass('on1');
		$('.showbox ul').hide().eq($(this).index()).show()
	});
	$('.fx').toggle(function(){
		$('.bdsharebuttonbox').show()
	},function(){
		$('.bdsharebuttonbox').hide()
	});
	$('.b_p1').animate({marginTop:'2rem'});
	$('.banner h1').animate({marginTop:'1.15rem'});
	$('.b_p2').animate({marginTop:'1.15rem'});
})