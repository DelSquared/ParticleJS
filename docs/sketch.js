var w = 500;
var d = 2;
var fountain = new ParticleFountain(250,250,1,450,50,Infinity);
function setup() {
  createCanvas(w, w);
  noFill();
  stroke(255);
  strokeWeight(2);
  frameRate(60);
}
function draw() {
  background(0);
  ellipse(250,250,4);
  fountain.update();
  for (i=0;i<fountain.particles.length;i++){
    ellipse(fountain.particles[i].x,fountain.particles[i].y,4);
    if (fountain.particles[i].y>=w) {
      fountain.particles[i].vy = -0.25*fountain.particles[i].vy;
      fountain.particles[i].update();
    }
  }
}
