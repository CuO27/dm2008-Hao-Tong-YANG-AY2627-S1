# Week8 ## — Arduino Basics

---

### Activities

| Activity | What I Made                   |
| -------- | ----------------------------- |
| `8a`     | Experiment with the led in arduino to learn simple control, like consistant light on, fade control and combination of two functions |
| `8b`     | Experiment with different sensor in arduino, like phototransistor sensor, force sensor and ultrasonic sensor |

---

### This Week

Activity 5a — Light it up
 - I explored the basic function of controlling led 
 - Learned to connect the wires properly and got familiar with the arduino IDE interface.
 - It feels cool to see the code on the screen become the physical interaction on the led light.

Activity 8b — Sensor Check
 - I experimented with different sensor and play with them to see how they function.
 - It is interesting to see the sensor show certain statistics in the monitor and it continuously changing when moving or pressing.
 - It needs to be careful when connecting the wires since it is more complicated than the led pratice.

---

### Output

![activity8a](readme-assets/activity8a-image01.jpeg)
![activity8a](readme-assets/activity8a-image02.jpeg)
![activity8a](readme-assets/activity8a-image03.jpeg)

![activity8b](readme-assets/activity8b-image01.jpeg)
![activity8b](readme-assets/activity8b-image02.jpeg)
![activity8b](readme-assets/activity8b-image03.jpeg)

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
