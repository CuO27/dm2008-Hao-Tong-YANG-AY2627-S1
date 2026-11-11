# Swirly Swirls

---

### The Project

 - Swirly Swirls is a playful interactive experience where users can create spirals through physical input. 
 - We use a force sensor connected to Arduino, the pressure applied by the user generates hand-drawn style spirals on the screen. 
 - As the spirals move and collide with one another, their colours will change and piano notes will be triggered, creating an engaging visual and sound experience.
 - We wanted to create a playful, childlike atmosphere that feels like a child drawing and doodling on a canvas. 
 - The hand-drawn quality of the spirals with the piano and pencil-sketching sounds when creating them, create a fun experience.

---

### Output

 ![final project](readme-assets/final-project-image03.PNG)
 ![final project](readme-assets/final-project-image04.PNG)
 ![final project](readme-assets/final-project-video03.mp4)
 ![final project](readme-assets/final-project-video.mp4)


[Watch Online](https://drive.google.com/file/d/1DJtI2k8l_XYhucBP5R00CnZaR-PhGjSB/view?usp=sharing)


---

### ✍️ Reflection

 Swirly Swirls explores a playful interactive experience where users can create hand-drawn style spirals through force sensor input.We started with Jane’s original idea and gradually developed it into a more refined concept together. My main contribution was working on the Arduino and p5.js 

 The interesting parts of this project was combining the p5.js knowledge and functions we learned throughout the semester with Arduino. The biggest challenge for the process is to find the balance between the childish feeling we want and too simple for the visuals. 

 However during our testing, we accidentally created a hand-drawn feeling for the spirals by using random stroke weights. The result sparked a new direction for our project. We decided to further explore shaky lines to reinforce this quality. The playful and childish piano sound and visuals helped bring out the “kidcore” aesthetic we wanted.

 We build an experience that combines screen-based visuals with physical input. I realised that even simple interactions can create a meaningful experience when developed thoughtfully. It also reminded me that although AI can help with coding, having a basic understanding of the code is still important. Instead of relying on AI to generate code, we also used it to explain methods and solutions, helping us understand, and revise the code to better match our ideas and aesthetic. In this way, AI became more of a learning tool in the process.

 Given more time, I would like to explore WebMIDI, which I learned in another course, to create more dynamic and smoother sounds that respond to the interaction. This could allow us to develop the sound experience further.

---

<!-- ─────────────────────────────────────────────────────
     
      ### 🛠️ Hardware
     List the physical components you used.
     - Arduino Uno
     - Ultrasonic sensor (HC-SR04)

     ### 🧩 Something I find interesting
     We found the fubction called noise() in P5js library, which create the smooth change to our spiral and make the spiral's line look more natural in a hand-drawn style instead of in perfect circle. This approach reinforces our concept further.
     
     ```js
      for (let a = 0; a <= this.angle; a += 0.02) {

      // AI used:
      // noise() is like changes gradually with no sudden change compare to random
      // map() converts a number from one range to another 
       let shake = map(noise(a * 2, this.seed), 0, 1, -2, 2);
      
       //let r = random(4.92, 5) * a;
       let r = 5 * a + shake;
  
       let x = r * cos(a);
       let y = r * sin(a);

      vertex(x, y);
      }
     ```

     ### 🔗 References
     Tutorials, libraries, artworks, or research that informed your project.
     ───────────────────────────────────────────────────── -->
