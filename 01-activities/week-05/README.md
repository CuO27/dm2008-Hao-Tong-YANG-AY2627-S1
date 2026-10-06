# Week5 ## — Object-oriented Programming (Part II)

---

### Activities

| Activity | What I Made                   |
| -------- | ----------------------------- |
| `5a`     | Created a system of moving balls that shrink and disappear when they collide with each other. |

---

### This Week

Activity 5a — Colliding Circles
 - I explored how to use vectors to make the difference in the position and movement of each ball in the same class.
 - I Used a for loop to create several balls at the same time.
 - Used dist() to detect when the balls collide with each other.
 - When two balls collide, their size becomes smaller until they eventually disappear.
 - Used splice() to remove balls from the array when they disappear and used push() to add new balls and maintain five balls on the screen at all times.
 - I liked how the collision system created an ongoing cycle where the balls disappear and are continuously replaced by new ones.

---

### Output

![activity5a](readme-assets/activity5a-image01.PNG)
![activity5a](readme-assets/activity5a-image02.PNG)

---

<!-- ─────────────────────────────────────────────────────
     GOING FURTHER — if you want to document more, here are some ideas:

     ### 5a — Colliding Circles


     ### 🧩 Something I Found Interesting
     In activity 5a, I accidentally make the colour of stroke continuously changing when collision detected, and I found the effect is quite interesting.

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
     ```
     ───────────────────────────────────────────────────── -->
