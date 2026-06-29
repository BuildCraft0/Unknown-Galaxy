# To-Do App

A clean and beginner-friendly to-do list application built with `HTML`, `CSS`, and `vanilla JavaScript`.

This project focuses on the fundamentals of front-end development: handling user input, updating the DOM dynamically, and keeping the interface simple, responsive, and easy to understand.

## Overview

The app lets users add tasks to a live list and remove them instantly when they are no longer needed. It also includes basic input validation so empty tasks are not added by mistake.

Because everything runs on the client side, the project is lightweight, fast to open, and easy to deploy on any static hosting platform.

## Features

- Add new tasks with a single click
- Remove tasks using a dedicated delete button
- Show a warning message when the input is empty
- Simple colorful UI with gradient styling
- No frameworks, build tools, or external libraries required

## Tech Stack

- `HTML5` for structure
- `CSS3` for styling and layout
- `JavaScript` for DOM interaction and task management

## Project Structure

```text
.
|-- index.html
|-- style.css
`-- README.md
```

## How It Works

1. The user enters a task in the input field.
2. Clicking `Add Task` creates a new list item dynamically.
3. A `Delete` button is attached to each task.
4. If the input is empty, a warning message is shown for a short time.

## Getting Started

### Run Locally

1. Clone or download this repository.
2. Open `index.html` directly in your browser.

No installation or build process is required.

## Deployment

Since this is a static front-end project, it can be deployed on any platform that serves plain `HTML`, `CSS`, and `JavaScript`. No build command or package installation is required.

### Before You Deploy

1. Make sure `index.html` is in the project root.
2. Confirm `style.css` is in the same root folder.
3. Test the app locally by opening `index.html` in your browser.
4. Commit and push your latest changes to GitHub if you are deploying from a repository.

### GitHub Pages

1. Push the project to a GitHub repository.
2. Open the repository on GitHub.
3. Go to `Settings` > `Pages`.
4. Under `Source`, choose `Deploy from a branch`.
5. Select the `main` branch and the `/ (root)` folder.
6. Click `Save`.
7. Wait a minute for GitHub to publish the site.
8. Open the generated live URL, usually in this format:

```text
https://your-username.github.io/repository-name/
```

### Netlify

1. Log in to Netlify.
2. Click `Add new site` > `Import an existing project`.
3. Connect your GitHub repository.
4. Leave the `Build command` empty.
5. Set the `Publish directory` to `.` if Netlify asks for one.
6. Click `Deploy site`.

### Vercel

1. Log in to Vercel.
2. Click `Add New` > `Project`.
3. Import the GitHub repository.
4. Keep the default settings because this is a static site.
5. Do not add any framework preset or build command.
6. Click `Deploy`.

## Quick Deployment Commands

If your project is not on GitHub yet, you can use these commands before deploying with GitHub Pages, Netlify, or Vercel:

```bash
git init
git add .
git commit -m "Initial project upload"
git branch -M main
git remote add origin https://github.com/your-username/repository-name.git
git push -u origin main
```

## Use Cases

- Practicing DOM manipulation
- Learning event handling in JavaScript
- Building a starter portfolio project
- Understanding how small client-side apps are structured

## Current Limitations

- Tasks are not saved after page refresh
- Users cannot edit or mark tasks as completed yet
- JavaScript logic is currently written inline inside `index.html`

## Suggested Improvements

- Add `localStorage` support for task persistence
- Allow tasks to be marked as completed
- Add edit and filter functionality
- Move JavaScript into a separate `script.js` file
- Improve mobile responsiveness further

## Why This Project Is Useful

This project is a strong starting point for beginners because it demonstrates the core flow of an interactive web app without adding unnecessary complexity. It is small enough to understand quickly, but practical enough to extend into a more complete task manager.
