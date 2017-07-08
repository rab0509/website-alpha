function doFirst(){
	mypic = document.getElementById("face-pic");
	mypic.addEventListener("dragstart", startDrag, false);
	mypic.addEventListener("dragend", endDrag, false);
	leftbox = document.getElementById("leftbox");
	leftbox.addEventListener("dragenter", dragenter, false);
	leftbox.addEventListener("dragleave", dragleave, false);	
	leftbox.addEventListener("dragover", function(e){e.preventDefault();}, false);
	leftbox.addEventListener("drop", dropped, false);
}

function endDrag(e) {
	pic = e.target;
	pic.style.visibility = 'hidden';
}

function dragenter(e) {
	e.preventDefault();
	leftbox.style.background = "SkyBlue";
	leftbox.style.border = "3px solid red";
}

function dragleave(e) {
	e.preventDefault();
	leftbox.style.background = "White";
	leftbox.style.border = "3px solid blue";
}

function startDrag(e){
	var code = '<img src="https://instagram.fphx1-2.fna.fbcdn.net/t51.2885-19/s150x150/19623374_1383414918374962_7562641168563961856_a.jpg">';
	e.dataTransfer.setData('Text', code);
}

function dropped(e){
	e.preventDefault();
	leftbox.innerHTML = e.dataTransfer.getData('Text');
}

window.addEventListener("load", doFirst, false);
