# Mini Project — Ducky Adventure (Flappy Bird Remix)

---

### The Project

 We give the new stroyline for this iconic game: The dead duck wants to escape and resurrect from Hell. 
 We replace the bird and pipes with our own duck character and obstacles to give the game fresh visuals.
 We add speed up phase in the game to increase the difficulty of the game.
 We also add different endings based on the type of obstacles you clash with to make the game more interesting and interactive.

---

### Output

 ![miniproject](readme-assets/miniproject-image01.PNG)
 ![miniproject](readme-assets/miniproject-image02.PNG)
 ![miniproject](readme-assets/miniproject-image03.PNG)

[Watch Online](https://your-link-here)

<!-- Replace the link above with a URL to a screen recording or video of your project.
     ⚠️ Make sure the file or page is set to public before submitting. -->

---

### ✍️ Reflection

 For this project, my groupmate and I chose to recreate Flappy Bird from the template given by the teacher. We brainstormed the ideation, narrative, new features, and overall game flow together. Besides the collision detection and multiple ending, which we solved together, I had full authority over the rest of the coding. I worked on building and connecting the different logic and functions of the game, as well as creating the background and ghost character.

 The most interesting part of this project was recreating an iconic game with our own aesthetic and storyline. Our idea was inspired by my rubber duck, which “sacrificed its life” when its plug broke and it could no longer make sounds. This funny experience sparked our ideas and helped us develop the game from a basic template into something more personal and cute. I especially enjoyed seeing our assets come alive on screen and become part of the interaction.

 One difficulty was that this was my first time building the whole code and logic without AI assistance, so it took time to get used to it. Integrating different functions we learned in class required a lot of trial and error, and I sometimes became frustrated when the code would not run properly even after several fixes and research.

 However, completing the game gave me a strong sense of achievement. There was a real sense of joy when I finally got my code to work. Spending time understanding the code, researching solutions, and turning our ideas into an interactive game was meaningful. Discussing problems with my groupmate also showed me that programming can be collaborative, as we could spark new ideas and support each other throughout the process.


---

<!-- ─────────────────────────────────────────────────────
     GOING FURTHER — want to document more? Try any of these:

     ### ✨ What I Changed 
     - Add multiple ending to the game
     - Redesigned the visual with a arcade video game asethetic

     ### 🔍 Code Structure
     Briefly explain how your files are organised.
     - `sketch.js` — main game loop
     - `assets/` — elements and sounds

     ### 🧩 Something I'm Proud Of
     We successfully create the endless loop background for our game.
     ```js
        image(img, bgScrollX, 0, 0, height);
        bgScrollX--;
        image(img, bgScrollX2, 0, 0, height);
        bgScrollX2--;

       if(bgScrollX < -3464){
         bgScrollX = 0;
       }
       if(bgScrollX2 < -2984){
         bgScrollX2 = 480;
       }
     ```
