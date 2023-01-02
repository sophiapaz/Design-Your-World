(function() {

// Set up the canvas
const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Cusomise values here!
const prerad = Math.round(canvas.width / 28);

let balls = [];
// The bigger the screen, the more balls
for (let i=0; i<20; i++) {
  balls.push({
    x: Math.round(Math.random()*canvas.width),
    y: Math.round(Math.random()*canvas.height),
    z: Math.random()/4*3+0.25,
    rad: Math.round(Math.random() * prerad) + prerad,
    col: `rgba(250, 249, 246, 0.7)`,
    dir: Math.round(Math.random()*360)-180
  });
}

// Function for well drawing the balls.
function drawBall(x, y, rad, col) {
  ctx.beginPath();
  ctx.arc(x, y, rad, 0, Math.PI*2);
  ctx.fillStyle = col;
  ctx.fill();
}

// Set up the variables for the loop
let lastZ = 0;
let zdif = 0;

window.onscroll = () => {
	zdif = lastZ - window.scrollY;
  lastZ = window.scrollY;
	for(let i=0; i<balls.length; i++) {
		balls[i].y += (balls[i].z*zdif);
	}
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(let i=0; i<balls.length; i++) {
    drawBall(balls[i].x, balls[i].y, balls[i].rad, balls[i].col);
    balls[i].x += Math.sin(balls[i].dir)*0.2;
    balls[i].y += Math.cos(balls[i].dir)*0.2;


    if (balls[i].x < 0-balls[i].rad) {
      balls[i].col = `rgba(245, 245, 245, 0.7)`;
      balls[i].rad = Math.round(Math.random() * prerad) + prerad,
      balls[i].dir = Math.round(Math.random()*360)-180;
      balls[i].x = canvas.width+balls[i].rad-1;
      balls[i].y = Math.round(Math.random()*canvas.height);
      balls[i].z = Math.random()/4*3+0.25;
    }

    if (balls[i].x > canvas.width+balls[i].rad) {
      balls[i].col = `rgba(250, 249, 246, 0.7)`;
      balls[i].rad = Math.round(Math.random() * prerad) + prerad,
      balls[i].dir = Math.round(Math.random()*360)-180;
      balls[i].x = 0-balls[i].rad+1;
      balls[i].y = Math.round(Math.random()*canvas.height);
      balls[i].z = Math.random()/4*3+0.25;
    }
    if (balls[i].y < 0-balls[i].rad) {
      balls[i].col = `rgba(255, 250, 250, 0.7)`;
      balls[i].rad = Math.round(Math.random() * prerad) + prerad,
      balls[i].dir = Math.round(Math.random()*360)-180;
      balls[i].y = canvas.height+balls[i].rad-1;
      balls[i].x = Math.round(Math.random()*canvas.width);
      balls[i].z = Math.random()/4*3+0.25;
    }
    if (balls[i].y > canvas.height+balls[i].rad) {
      balls[i].col = `rgba(250, 249, 246, 0.7)`;
      balls[i].rad = Math.round(Math.random() * prerad) + prerad,
      balls[i].dir = Math.round(Math.random()*360)-180;
      balls[i].y = 0-balls[i].rad+1;
      balls[i].x = Math.round(Math.random()*canvas.width);balls[i].z = Math.random()/4*3+0.25;
    }
  }
	requestAnimationFrame(draw);
}
draw();

window.onresize = function(){
  canvas.width = window.innerWidth/5;
  canvas.height = window.innerHeight/5;
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for(let i=0; i<balls.length; i++) {
    drawBall(balls[i].x, balls[i].y, balls[i].rad, balls[i].col);
  }
}

})();
