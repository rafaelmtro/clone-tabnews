# Project Gemini Instructions: tabnews

This project is an implementation of [TabNews](https://www.tabnews.com.br), developed as part of the [curso.dev](https://www.curso.dev) course.

## Project Overview

- **Technologies:** Next.js (v13), React, `Prettier`.
- **Architecture:** Standard Next.js project using the `pages/` directory for routing.
- **Purpose:** A clone/implementation of TabNews for educational purposes.

## Building and Running

The project uses `npm` for task management.

- **Development:**
  ```bash
  npm run dev
  ```
  Starts the Next.js development server.

- **Linting & Formatting:**
  ```bash
  # Check formatting
  npm run lint:check

  # Fix formatting
  npm run lint:fix
  ```
  Uses `Prettier` to ensure consistent code style.

## Development Conventions

- **Code Style:** 
  - Indentation: 2 spaces (as specified in `.zed/settings.json`).
  - Formatting: Managed by `Prettier`.
- **Components:** React functional components are used (see `pages/index.js`).
- **Routing:** File-system based routing via the `pages/` directory.

## Key Files and Directories

- `pages/`: Contains the application's routes and pages.
  - `index.js`: The main entry point (Home page).
- `package.json`: Project metadata, dependencies, and scripts.
- `.zed/settings.json`: Project level settings for consistent coding styles.
- `.prettierignore`: Files and directories for `Prettier` to ignore.
