# JSExpertMax Gesture Controller - JS Expert

> App developed using AI to detect and recognize gestures and faces, allowing users to navigate a streaming video Website using their hands, and to play and pause videos by blinking their eyes.

<h1 align="center">
<img src=".github/demo.gif" />
</h1>

Navigate using your hands

<p>✊ - Scroll Down</p>
<p>🖐 - Scroll Up</p>
<p>🤏 - Click</p>

## Live Demo
[Try it yourself!](https://renatomarquesteles.github.io/jsexpert-07/)

## Features Checklist
- Titles List
  - [✔] - Search field should not crash when typing search term
  - [✔] - It should draw hands on the screen and make background elements still clickable 🙌
  - [✔] - Must trigger scroll up when using open palm 🖐
  - [✔] - Must trigger scroll down when using closed palm ✊
  - [✔] - Must trigger click on nearest element when using pinch gesture 🤏🏻
  - [✔] - When moving elements on screen, must trigger **:hover** event on elements in context

- Video Player
  - [✔] - It should be possible to play or pause videos with the blink of an eye 😁
  - [✔] - All Machine Learning processing must be done via a Web worker

## Technologies

- JavaScript
- [TensorFlow](https://www.tensorflow.org/)
- Web Workers
- Module Workers
- HTML Canvas
- [Fingerpose](https://github.com/andypotato/fingerpose)
- [PseudoStyler](https://github.com/TSedlar/pseudo-styler)

### Credits
- User interface based on [Streaming Service](https://codepen.io/Gunnarhawk/pen/vYJEwoM) by [gunnarhawk](https://github.com/Gunnarhawk)
- This app was developed during the JS Expert Week #7 by [@Erick Wendel](https://github.com/ErickWendel) ([official repository](https://github.com/erickWendel/semana-javascript-expert07))
