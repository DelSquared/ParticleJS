function Particle(x,y,vx,vy,ax,ay,life){
  this.x=x;
  this.y=y;
  this.vx=vx;
  this.vy=vy;
  this.ax=ax;
  this.ay=ay;
  this.life=life;
  this.update=function(){
    this.x+=this.vx*0.01;
    this.y+=this.vy*0.01;
    this.vx+=this.ax*0.01;
    this.vy+=this.ay*0.01;
    this.life-=1;
  }
}
function ParticleFountain(x,y,rate,life,gravity,max){
  this.x=x;
  this.y=y;
  this.g=gravity;
  this.particles=[];
  this.max=max;
  this.rate=rate;
  this.life=life;
  this.update=function(){
    if(this.particles.length<this.max){
      for (i=0;i<rate;i++){
        this.particles.push(new Particle(this.x,this.y,70*Math.random()-35,70*Math.random()-35,0,this.g,this.life));
      }
    }
    for (i=0;i<this.particles.length;i++){
      this.particles[i].update();
    }
    for (i=0;i<this.particles.length;i++){
      if (this.particles[i].life<0){
        this.particles.splice(i,1);
      }
    }
  }
}
