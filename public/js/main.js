let currentSlide = 1;
let $slider = $('.slides');
let slideCout = $slider.children().length;

setInterval(function(){
	$slider.animate({
		marginLeft:'-=900px'
	},800, ()=>{
		currentSlide++;
		if (slideCout === currentSlide) {
			currentSlide = 1;
			$(this).css("margin-left","0px")
		}
	})
}, 2000)