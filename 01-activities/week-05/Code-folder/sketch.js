// DM2008 — Activity 5a [Guided]
// Colliding Circles (30 min)
//
// A vector stores position and movement together — cleaner than separate x and y variables.
// Your job is to get two balls moving, then detect and respond to their collision.
//
// Suggested order:
// 1. Create two Ball objects in setup()
// 2. Check the distance between them in draw()
// 3. Trigger a visual response when they collide
// 4. Implement edge behaviour in move() — wrap or bounce, your choice
//
// Stretch: add a third ball, or make the collision response affect both balls.

let balls = [];

function setup() {
  createCanvas(400, 400);
  // Create two balls at different starting positions
  for (let i = 0; i < 5; i++) {
    balls.push(new Ball(random(0, 400), random(0, 400)));
  }
}

function draw() {
  background(255, 204, 243);

  // Check collision between the two balls
  // dist() measures the distance between their centers
  // They overlap when that distance is less than the sum of their radii

  let d = dist(balls[0].pos.x, balls[0].pos.y, balls[1].pos.x, balls[1].pos.y);
  let colliding = d < balls[0].r + balls[1].r; // true when the balls overlap, false otherwise

  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].show(colliding);
    balls[i].checkCollision(balls);
    if (balls[i].r <= 10) {
      balls.splice(i, 1);
      balls.push(new Ball(random(0, 400), random(0, 400)));
    }
  }
}

class Ball {
  constructor(x, y) {
    // pos and vel are vectors — they store x and y together as one object
    this.pos = createVector(x, y);
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.r = 30;
  }

  move() {
    // Adding the velocity vector to position moves the ball each frame
    this.pos.add(this.vel);

    // Handle edges — could you make this bounce instead of wrap?
    if (this.pos.x > width) {
      //this.pos.x = 0;
      this.vel.x *= -1;
    }
    if (this.pos.x < 0) {
      //this.pos.x = width;
      this.vel.x *= -1;
    }
    if (this.pos.y > height) {
      //this.pos.y = 0;
      this.vel.y *= -1;
    }
    if (this.pos.y < 0) {
      //this.pos.y = height;
      this.vel.y *= -1;
    }
  }

  show(colliding) {
    // colliding is true or false — try using it in an if/else to change fill or size
    fill(100, 180, 220);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }

  checkCollision(others) {
    for (let i = 0; i < others.length; i++) {
      // Make sure we do not compare the ball to itself
      if (others[i] !== this) {
        let other = others[i];
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        if (d < this.r + other.r) {
          push();
          // fill(100, random(50, 180), 220);
          stroke(100, random(50, 180), 220);
          strokeWeight(7);
          noFill;
          ellipse(this.pos.x, this.pos.y, this.r * 2);
          pop();

          this.r -= 0.2;
        }
      }
    }
  }
}
