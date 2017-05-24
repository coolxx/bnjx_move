$(function(){
	$('.btnbox a').click(function(){
		$('.btnbox a').removeClass('on1').eq($(this).index()).addClass('on1');
		$('.showbox ul').hide().eq($(this).index()).show()
	});
	$('.fx').toggle(function(){
		$('.bdsharebuttonbox').show()
	},function(){
		$('.bdsharebuttonbox').hide()
	})
})