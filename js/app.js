$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})

	/* new stuff */
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		//animate it to the right of the screen
		.animate(
		  {'left': '400px'},
		  500,
		  function() {
		    $(this).hide();
		    $(this).css('left', '-129px');
		  }
		);
	})
	.mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

