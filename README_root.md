# Quiz App (Vanilla JS vs React)

This repository contains two versions of the same quiz application:

- `without_react/` — A plain HTML/CSS/JavaScript implementation that manipulates the DOM directly.
- `with_react/` — A React + Vite implementation that recreates the same UI and behavior using React components.

## Purpose

The goal of this README is to explain, step-by-step, the differences between the two implementations and why you might choose one over the other.

## High-level differences

- Architecture: `without_react` uses imperative DOM manipulation; `with_react` uses declarative component-based rendering.
- State management: `without_react` tracks state in plain variables; `with_react` uses React state (`useState`) and component props.
- Reusability: React components are easier to reuse and compose.
- Tooling: `with_react` uses Vite for development and build; `without_react` can be run by opening `index.html` or serving static files.
- Performance: For this small app, both perform similarly; React adds overhead but scales better for complexity.
- Learning focus: `without_react` teaches fundamentals (DOM, events); `with_react` teaches component design and modern frontend workflows.

## Step-by-step comparison

1. Project setup

- without_react:
  1. Create `index.html`, `style.css`, `script.js`.
  2. Add quiz markup in `index.html` and link `style.css` and `script.js`.
  3. Open `index.html` in a browser or serve with a static server.

- with_react:
  1. Initialize a project with `npm init` or `npm create vite@latest`.
  2. Install dependencies with `npm install`.
  3. Create `src/` components such as `App.jsx` and mount the app in `main.jsx`.
  4. Run the dev server with `npm run dev` and build with `npm run build`.

2. Rendering UI

- without_react:
  - Use `document.querySelector` and `innerHTML`/`innerText` to update the DOM when the question changes.
  - Manually clear and rebuild answer lists when moving between questions.

- with_react:
  - Return JSX from components. React diffs the virtual DOM and updates the real DOM efficiently.
  - Map over question data to render choices; state changes trigger re-render.

3. Handling user input

- without_react:
  - Attach `addEventListener` handlers to buttons and form elements.
  - Read selected radio button values, compute correctness, update score variables, and call functions to render the next question.

- with_react:
  - Attach event handlers in JSX (`onClick`, `onChange`).
  - Update state via `setState` functions; React re-renders affected components.

4. State and data flow

- without_react:
  - Keep `currentQuestionIndex` and `score` in module-scope variables.
  - Pass values implicitly by referencing globals or closure-captured variables.

- with_react:
  - Store `currentQuestionIndex` and `score` in component state (e.g., `const [index, setIndex] = useState(0)`).
  - Pass state and handlers down through props for child components.

5. Styling and assets

- without_react:
  - Single `style.css` controlling all styles. Simpler to edit for small apps.

- with_react:
  - Global CSS like `index.css` or CSS Modules. You can also use styled-components or CSS-in-JS if needed.

6. Build and deployment

- without_react:
  - No build step required. Deploy static files to any static host.

- with_react:
  - Build step bundles code using Vite. Output in `dist/` can be deployed to static hosts, but tooling is involved.

## When to use each approach

- Use `without_react` when:
  - You're learning fundamentals or building a very small app.
  - You want zero build tooling and minimal dependencies.
  - Performance is not a concern and codebase will remain simple.

- Use `with_react` when:
  - You plan to grow the app, add features, or reuse components.
  - You want a predictable, maintainable structure and strong ecosystem.
  - You need integrations (routing, global state, testing) that React supports well.

## How to run locally

- without_react:

  Open `without_react/index.html` in your browser or run a static server:

  ```bash
  python3 -m http.server 8000
  ```

  Visit `http://localhost:8000`.

- with_react:

  ```bash
  cd with_react
  npm install
  npm run dev
  ```

  Open the local Vite URL shown in the terminal.

## Summary

Both versions implement the same quiz UX. `without_react` keeps things minimal and explicit, perfect for learning. `with_react` provides a component-based, declarative structure suited for scaling and maintenance.

If you want, I can:

- Expand any step into more detail.
- Add examples showing how the same feature is implemented in both versions.
- Add diagrams or code snippets to the README.
