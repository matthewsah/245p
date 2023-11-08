// code and inspiration from:
// https://youtu.be/MfxBfRD0FVU

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // update the size of the element we render
  update() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  // render the element on the screen
  // by default the shape will be a point/circle
  show() {
    stroke(255);
    strokeWeight(25);
    point(this.x, this.y);
  }
}

class ParticleUpDown extends Particle {
  constructor(x, y) {
    super(x, y);
  }

  update() {
    this.y += random(-5, 5);
  }

  show() {
    super.show();
  }
}

class ParticleLeftRight extends Particle {
  constructor(x, y) {
    super(x, y);
  }

  update() {
    this.x += random(-5, 5);
  }

  show() {
    super.show();
  }
}

class Box extends Particle {
  constructor(x, y) {
    super(x, y);
    this.bright = random(255);
    this.r = 10;
  }

  update() {
    super.update();
    this.r += random(-8, 8);
  }

  show() {
    strokeWeight(1);
    stroke(255);
    fill(this.bright);
    square(this.x, this.y, this.r);
  }
}

class Triangle extends Particle {
  constructor(x, y) {
    super(x, y);
    this.side = 10;
  }

  update() {
    super.update();
    this.side += random(-5, 5);
  }

  show() {
    strokeWeight(25);
    stroke(255);
    triangle(this.x, this.y, 
             this.x + 0.5 * this.side, this.y + this.side, 
             this.x + this.side, this.y);
  }
}