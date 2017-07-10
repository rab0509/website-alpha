function initCanvas() {
  var ctx = document.getElementById('my_canvas').getContext('2d');
  var cW = ctx.canvas.width, cH = ctx.canvas.height;
  var y = 0, x = 0;

  function animate() {
	ctx.save();								// (animate method) save your transform effects
		
	ctx.clearRect(0, 0, cW, cH);						// clear the whole canvas
		
	//ctx.rotate(-.3);							// rotate the rectangle by -0.3 radians
	ctx.fillStyle = "magenta";						// magenta filled rectangle						
	ctx.fillRect(0, y, 50, 50);						// size: 50 x 50 pixels, x position static

	//ctx.rotate(.8);							// rotate the rectangle by 0.8 radians
	ctx.fillStyle = "blue";							// blue filled rectangle
	ctx.fillRect(x, 0, 50, 50);						// size: 50 x 50 pixels, y position static
		
	y++;									// increment x position by 1 pixel
	x++;									// increment y position by 1 pixel
		
	ctx.restore();											
  }
	
  var animateInterval = setInterval(animate, 30);				// execute animate function every 30 msec.
  ctx.canvas.addEventListener('click', function (event) {			// if user clicks mouse, clear the animateInterval (i.e. stop animation)
	clearInterval(animateInterval);
  });
}

window.addEventListener('load', function(event) {
	initCanvas();
});
