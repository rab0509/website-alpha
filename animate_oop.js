function initCanvas() {
	var ctx = document.getElementById('my_canvas').getContext('2d');
	var cW = ctx.canvas.width, cH = ctx.canvas.height;
	
	function rectObj() {										// rectObj class
		this.x = 0, this.y = 0, this.w = 0, this.h = 0;						// class properties
		this.render = function(ctx, rx, ry, rw, rh, clr) {					// class method (render)
			ctx.fillStyle = clr;
			ctx.fillRect(rx, ry, rw, rh);
		}
	}
	// Establish Assests outside of the animate function to
	// avoid re-creating them each time the animate function runs
	
	var rect1 = new rectObj();									// 1st instance of rectObj
	var rect2 = new rectObj();									// 2nd instance of rectObj
	var rect3 = new rectObj();									// 3rd instance of rectObj
	var rect4 = new rectObj();									// 4th instance of rectObj	
	
	rect1.w = 50;
	rect2.w = 50;
	rect3.w = 50;
	rect4.w = 50;
	
	rect1.h = 50;
	rect2.h = 50;
	rect3.h = 50;
	rect4.h = 50;
	
	rect2.y = 100;
	rect3.y = 200;
	rect4.y = 300;
		
	function animate() {
		ctx.save();										// (animate method) save your transform effects
		
		// changes happen here -- draw to your canvas --
		
		ctx.clearRect(0, 0, cW, cH);								// clear the whole canvas
		
		rect1.render(ctx, rect1.x, rect1.y, rect1.w, rect1.h, "magenta"); 			// call render method for instance 1 of rectObj class
		rect2.render(ctx, rect2.x*0.5, rect2.y, rect2.w, rect2.h, "blue");			// call render method for instance 2 of rectObj class
		rect3.render(ctx, rect3.x*2, rect3.y, rect3.w, rect3.h, "orange");			// call render method for instance 3 of rectObj class
		rect4.render(ctx, rect4.x*2.5, rect4.y, rect4.w, rect4.h, "red");			// call render method for instance 4 of rectObj class
		
		rect1.x++;										// increment instance 1 x-position property of rectObj class by 1 pixel
		rect2.x++;										// increment instance 2 x-position property of rectObj class by 1 pixel
		rect3.x++;										// increment instance 3 x-position property of rectObj class by 1 pixel
		rect4.x++;										// increment instance 3 x-position property of rectObj class by 1 pixel		
		
		// changes happen here --
		
		ctx.restore();											
	}
	
	var animateInterval = setInterval(animate, 30);							// execute animate function every 30 msec.
	ctx.canvas.addEventListener('click', function (event) {						// if user clicks mouse, clear the animateInterval (i.e. stop animation)
		clearInterval(animateInterval);
	});
}
window.addEventListener('load', function(event) {
	initCanvas();
});
