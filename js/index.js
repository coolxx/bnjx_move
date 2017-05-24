$(function(){
	$('.btnbox a').click(function(){
		$('.btnbox a').removeClass('on1').eq($(this).index()).addClass('on1');
		$('.showbox ul').hide().eq($(this).index()).show()
	});
	$('.b_p1').animate({marginTop:'2rem', transition:'2s'});
	$('.banner h1').animate({marginTop:'1.15rem',transition:'2s'});
	$('.b_p2').animate({marginTop:'1.15rem',transition:'2s'});
})