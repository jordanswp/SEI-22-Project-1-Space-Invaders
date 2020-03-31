- Explanation of technologies used
- Approach taken
- Installation instructions
- Unsolved problems

Explanation of technologies used:

1. Javascript
2. CSS
3. HTML

Approach Taken:

- Did up a background first, followed by the aliens and the player. Simply used images sourced from google for those three elements

- I first worked with the background, eventually deciding to make it 708x1080 for easy viewing purposes, before working on the size of the aliens and the player, which were all done on CSS

- Next, I worked on the positions of the alien (1 for now due to easy working purposes) and the player

- After that, I worked on the user being able to control the player, which was done on JS. Learnt two new concepts here" onkeydown, and e.keyCode. Originally, I wanted it to be left and right keys to move the player and spacebar to shoot, but I had to set it to A, D, and K, respectively as the arrow keys as well as spacebar kept moving the page around. Aside from that, also created the "movePlayer" function so that the respective keys would move the player in the correct direction

- Added the drawBullets and drawAliens functions to display the aliens and bullets

- Added collision detection so that the aliens can be killed with the bullets

- Had a major issue with the hit box as no matter where the bullet hit, whether it was the second, third, or last alien, the first alien would always be the one to disappear regardless

- Spent a long time trying to fix the error mentioned which turned out to be a simple naming error

- Decided to randomise the locations of the aliens to make the game different every load

- added win and losing conditions