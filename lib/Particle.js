function Particle(x, y, vx, vy, ax, ay, life) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.ax = ax;
    this.ay = ay;
    this.life = life;
    this.update = function () {
        this.x += this.vx * 0.01;
        this.y += this.vy * 0.01;
        this.vx += this.ax * 0.01;
        this.vy += this.ay * 0.01;
        this.life -= 1;
    };
}
function ParticleFountain(x, y, rate, life, gravity, max) {
    this.x = x;
    this.y = y;
    this.g = gravity;
    this.particles = [];
    this.max = max;
    this.rate = rate;
    this.life = life;
    this.update = function () {
        if (this.particles.length < this.max) {
            for (var i = 0; i < rate; i++) {
                this.particles.push(new Particle(this.x, this.y, 70 * Math.random() - 35, 70 * Math.random() - 35, 0, this.g, this.life));
            }
        }
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].update();
        }
        for (var i = 0; i < this.particles.length; i++) {
            if (this.particles[i].life < 0) {
                this.particles.splice(i, 1);
            }
        }
    };
}
function RadialParticleVortex(x, y, max, radius) {
    this.x = x;
    this.y = y;
    this.particles = [];
    this.max = max;
    this.r = radius;
    this.create = function () {
        var x = this.x + this.r * Math.cos(2 * Math.PI * Math.random());
        var y = this.y + this.r * Math.sin(2 * Math.PI * Math.random());
        this.particles.push(new Particle(x, y, 0.1 * (x - this.x) / this.r, 0.1 * (y - this.y) / this.r, 0, 0, Infinity));
    };
    this.update = function () {
        if (this.particles.length < this.max) {
            this.create();
        }
        for (var i = 0; i < this.particles.length; i++) {
            var a = 1 / ((this.x - this.particles[i].x) * (this.x - this.particles[i].x) + (this.y - this.particles[i].y) * (this.y - this.particles[i].y) + 1);
            this.particles[i].ax = 20000 * a * (this.x - this.particles[i].x);
            this.particles[i].ay = 20000 * a * (this.y - this.particles[i].y);
            this.particles[i].update();
        }
        for (var i = 0; i < this.particles.length; i++) {
            if ((this.x - this.particles[i].x) * (this.x - this.particles[i].x) + (this.y - this.particles[i].y) * (this.y - this.particles[i].y) > this.r * this.r + 1) {
                this.particles.splice(i, 1);
                this.create();
            }
            if ((this.x - this.particles[i].x) * (this.x - this.particles[i].x) + (this.y - this.particles[i].y) * (this.y - this.particles[i].y) < this.r / 5) {
                this.particles.splice(i, 1);
            }
        }
    };
}

//more emitter/attracter variants to be added soon
