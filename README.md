# Resume Online
Personal resume site

## Used tech
- Astro
- Tailwind
- DaisyUI

## 🚀 Project Structure

Inside this project, you'll see the following folders and files:

- public/* - Your non-code, unprocessed assets (fonts, icons, images, etc.)
- src/* - Your project source code (components, pages, styles, etc.)
  - admin/ (specific folder for the Netlify CMS)
  - data/ (content in form of JSON file)
  - components/ (any Astro/React/Vue/Svelte/Preact components)
  - layouts/
  - pages/ (content as `.astro` or `.md` files, each page is exposed as a route based on its file name)
  - static/ (style and javascript files)

- package.json - A project manifest.
- astro.config.mjs - An Astro configuration file. 
- tsconfig.json - A TypeScript configuration file.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
