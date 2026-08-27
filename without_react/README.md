# Vanilla JavaScript Quiz App

A simple quiz application built with plain HTML, CSS, and JavaScript to demonstrate how web apps can be created without using frameworks like React or Vue.

This project is designed for learning and practice. It shows how developers can build interactive user interfaces by directly manipulating the DOM using vanilla JavaScript.

## Why this project exists

This project focuses on the fundamentals of front-end development:

- HTML for structure
- CSS for styling
- JavaScript for behavior and logic
- DOM manipulation for updating the interface dynamically

Instead of relying on a framework, the app updates questions, checks selected answers, tracks the score, and shows the final result using browser-native APIs.

## What the app does

- Shows a multiple-choice question at a time
- Lets the user select one answer from four options
- Validates the selected answer
- Keeps track of the score
- Moves to the next question
- Displays the final result when all questions are answered

## Learning goals

This project is especially useful for beginners who want to understand how apps are built before using frameworks.

Key concepts covered:

- Selecting elements with `document.getElementById()` and `document.querySelectorAll()`
- Updating text content with `innerText`
- Handling user events with `addEventListener()`
- Working with radio button inputs
- Tracking state like the current question and the score
- Rendering dynamic UI changes without a framework

## Project structure

```bash
.
├── index.html
├── style.css
├── script.js
├── README.md
```

- [index.html](index.html) contains the app structure and quiz markup
- [style.css](style.css) contains the styling for the quiz layout
- [script.js](script.js) contains the logic for quiz flow, scoring, and DOM updates

## How it works

1. The quiz data is stored in JavaScript as an array of objects.
2. The app loads the first question and renders the answer options.
3. The user selects one of the radio buttons.
4. When the submit button is clicked, the app checks whether the answer is correct.
5. The score is updated and the next question is loaded.
6. Once all questions are answered, the final score is displayed.

## Run locally

Open [index.html](index.html) in your browser.

If you want to serve it locally using a simple HTTP server, you can run:

```bash
python3 -m http.server 8000
```

Then visit:

```bash
http://localhost:8000
```

## Why this is a good beginner project

This app is a great introduction to front-end development because it shows the core idea behind modern frameworks:

- data is stored in JavaScript
- UI is rendered from that data
- user actions trigger updates
- the DOM is updated based on application state

Frameworks like React simply make this process more structured and reusable, but the fundamentals are the same.

## Technologies used

- HTML
- CSS
- Vanilla JavaScript

## Example skills you develop here

- JavaScript fundamentals
- DOM API usage
- Event-driven programming
- State management basics
- UI logic without frameworks

## Note

This project is intentionally minimal and beginner-friendly. It is not meant to be a production-scale app, but rather a practical example of how web applications work under the hood before introducing libraries or frameworks.

## Future improvements

You can extend this project by adding:

- a timer for each question
- a progress bar
- difficulty levels
- sound effects
- a restart button
- a larger question bank
- animations and transitions

---

Built as a learning project to understand how web apps work with plain JavaScript and direct DOM manipulation.
