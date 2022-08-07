const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d");

let data = {
  x: 0,
  y: 0,
  width: 30,
  height: 30,
  color: "red"
}

function draw() {
	ctx.fillStyle = data.color;
	ctx.fillRect(data.x, data.y, data.width, data.height);
}

function loop() {
  requestAnimationFrame(loop);
  draw();
  update();
}

loop();

document.addEventListener("keydown", function(e) {
  	if(e.keyCode === 37) {
		data.x -= 10 
    }
    if(e.keyCode === 39) {
		data.x += 10
    }
    if(e.keyCode === 38) {
		data.y -= 10
    }
    if(e.keyCode === 40) {
		data.y += 10
    }
})