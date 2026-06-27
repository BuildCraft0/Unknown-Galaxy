# Simple To-Do App

A small front-end to-do list project built with HTML, CSS, and vanilla JavaScript.

## Features

- Add new tasks
- Delete tasks
- Simple and colorful UI
- No external libraries required

## Project Files

- `index.html` - app structure and JavaScript logic
- `style.css` - app styling

## How to Run

1. Download or clone this repository.
2. Open `index.html` in your browser.

## Deployment Steps

This is a static project, so no build step is required.

### Deploy on GitHub Pages

1. Push this project to a GitHub repository.
2. Open the repository on GitHub.
3. Go to `Settings` > `Pages`.
4. In `Source`, select `Deploy from a branch`.
5. Choose the `main` branch and `/root` folder.
6. Click `Save`.
7. After a short time, GitHub will generate a live link for your site.

### Deploy on Netlify

1. Log in to Netlify.
2. Click `Add new site` > `Import an existing project`.
3. Connect your GitHub repository.
4. Keep the build command empty.
5. Set the publish directory as `/` or leave it as default for a static root project.
6. Click `Deploy site`.

### Deploy on Vercel

1. Log in to Vercel.
2. Click `Add New` > `Project`.
3. Import your GitHub repository.
4. Since this is a plain HTML/CSS/JavaScript app, no special framework setup is needed.
5. Click `Deploy`.

## How It Works

- Type a task in the input field
- Click `Add Task`
- Use the `Delete` button to remove a task

## Tech Stack

- HTML5
- CSS3
- JavaScript

## Current Limitation

Tasks are not saved after refreshing the page because there is no local storage or backend yet.

## Future Improvements

- Save tasks in local storage
- Mark tasks as completed
- Add edit task support
- Improve mobile responsiveness
