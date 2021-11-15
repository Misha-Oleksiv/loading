
$(document).ready(function () {

	setTimeout(function(){
		$('.loading').animate({
			height: '301px'
		}, 60000,'linear');
		setTimeout(function(){
			$('.minute-number').text('1');
		},60000)
		$('.loading').animate({
			height: 0,
		}, 60000,'linear')
		setTimeout(function(){
			$('.minute-number').text('0');
		},120000)
		$('.loading').animate({
			height: '301px'
		}, 60000,'linear')
	},500)
})
