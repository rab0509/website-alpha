function draw() {
	var ctx = document.getElementById('my_canvas').getContext('2d');
	//alert(ctx.canvas.id+" | "+ctx.canvas.width+" | "+ctx.canvas.height);
	//ctx.fillStyle = color || hex || rgba() || gradient || pattern ;
	// var gradient = ctx.createLinearGradient (x0, y0, x1, y1);
	// var gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);

// Demo Linear Gradient, Shadowing

	var g1 = ctx.createLinearGradient(0, 0, 200, 0);
	g1.addColorStop(0, "magenta");
	g1.addColorStop(0.5, "yellow");
	g1.addColorStop(1, "black");
	ctx.fillStyle = g1;
	ctx.shadowColor = "rgba(0,0,0,1)";					// black shadow
	ctx.shadowOffsetX = 5;
	ctx.shadowOffsetY = 5;

	ctx.strokeStyle = "red";
	ctx.lineWidth = 10;
	ctx.fillRect(0, 0, 200, 200);
	ctx.strokeRect(0, 0, 200, 200);

// Demo Radial Gradient, Shadowing

	//var g2 = ctx.createLinearGradient(250, 200, 450, 200);
	//g2.addColorStop(0, "pink");
	//g2.addColorStop(0.5, "blue");
	//g2.addColorStop(1, "orange");
	//ctx.fillStyle = g2;
	//ctx.strokeStyle = "green";
	//ctx.lineWidth = 5;
	//ctx.fillRect(250, 0, 200, 200);
	//ctx.strokeRect(250, 0, 200, 200);

	var g2 = ctx.createRadialGradient(350, 100, 0, 350, 100, 200);
	g2.addColorStop(0, "magenta");
	g2.addColorStop(0.5, "yellow");
	g2.addColorStop(1, "black");
	ctx.fillStyle = g2;
	ctx.shadowColor = "rgba(0,0,255,1)";				// blue shadow
	ctx.strokeStyle = "green";
	ctx.fillRect(250, 0, 200, 200);
	ctx.strokeRect(250, 0, 200, 200);

// Line Drawing, rounded corners

	ctx.lineWidth = 20;
	ctx.lineCap = "round"; 						// ( butt, round, square )
	ctx.lineJoin = "round"; 					// ( bevel, round, miter )
	ctx.miterLimit = 2;
	ctx.setLineDash([20,10,30,40,10]);

	ctx.beginPath();															// resets the current default path
	ctx.moveTo(400, 400);						// creates a new subpath with a given point
	ctx.lineTo(490, 490);						// creates a new line along the current path
	ctx.lineTo(550, 290);
	ctx.stroke();																	// Strokes the current default path

}
window.onload = draw;							//Once the page has been loaded, execute the draw function
