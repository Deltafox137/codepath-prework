# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Darren Lin**

Time spent: **18** hours spent in total

Link to project: (https://glitch.com/edit/#!/tricky-succinct-fridge)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] List anything else that you can get done to improve the app!
* - a counter to show how many strikes the player has

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![gif1](http://g.recordit.co/9evaNi9eVp.gif)
![gif2](http://g.recordit.co/QrSGJNYiDL.gif)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[ -w3schools
  -freecodecamp
  -stackexchange]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[This is my first time using html/css/javascript and at first I was a bit confused. In addition to reading the explanation
on the task page, I went online to look more into the languages to better understand how to use them. I had trouble figuring
out how to implement the images when the game buttons were pressed. At first, I tried to set the button to change to the
image when it was active in the css file but bigger images would get cut off. Then, I spent some time figuring out how the 
image tag in html worked but another issue I ran into was that the bigger images would overflow out of the button. The issue was 
resolved by changing the width and height of the image in the css file. Another problem I had was when I was trying to implement
the timer into the game. At first I tried to write a function in the setInterval function but then the timer wouldn't stop when it
reached 0. The timer would also not reset for some reason and would keep doubling in countdown speed everytime I pressed the start
button. I fixed the problem by creating a new function instead of passing it as an argument in the setInterval function.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[As I was working on the project, I learned there was something called a java event handler. Since this is my first time using
Javascript, I wasn't too sure what it was or how I could implement it into the code. Java event handler seemed like a cool
feature that's part of the language and I wonder about the various ways it could be implemented into a website to make
interactions smoother or easier. There were some interactions I had run into while working on the code but wasn't too sure
how I could work around them, but maybe the event handler could come in handy.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had more hours on the project, I would spend it on working on the game buttons. I noticed the game buttons had some weird
interactions and sometimes would bug out. For example, before I added the images to the buttons, when I held down my mouse button
and dragged it off the button before letting the mouse button go, the sound from the button will keep playing. I tried using the
onmouseleave in the html but the problem persisted after I added an image into the buttons. There may be some more interactions
with the button I have not discovered yet but if I had some more time maybe I could have randomly stumbled upon them.]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/3b86d817c399448489bb1a17a83f0c4a)


## License

    Copyright [Darren lin]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
