redirect = function(string) {
	window.location.href = string;
}

//Replicate snek style flickering for its banner
let flickering = false;

setInterval(function() {
	if(flickering) {
		$('#snek').removeClass('flicker');
		flickering = false;
	} else {
		let flicker = Math.round(Math.random() * 10);
		if(flicker === 0) {
			$('#snek').addClass('flicker');
			flickering = true;
		}
	}
}, 50);