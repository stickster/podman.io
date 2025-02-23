# Podman Website README

This website is built using [Docusaurus 2](https://docusaurus.io/).

### Basic Commands

- Install packages
  - `$ yarn`
- Starts a local development server
  - `$ yarn start`
- Generate static content to serve on a static hosting service
  - `$ yarn build`

### Deployment

- Using SSH: `$ USE_SSH=true yarn deploy`
- Not using SSH: `$ GIT_USER=<Your GitHub username> yarn deploy`

_If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch._

---

## Configuration Information

### Page Content Plan

- Page data (text and images) can be found in `static/data/`
  - this content is then rendered in landing pages in `src/pages/`
- Docs and blog content would be written in `.mdx` or `.md` files in `docs/`, and `blog/` respectively

### Plugins and Libraries

- Icon Library: [Iconify](https://iconify.design/)
  - [Icones](https://icones.js.org/) for web based icon library overview
  - [Iconify Intellisense vscode extension](https://marketplace.visualstudio.com/items?itemName=antfu.iconify)
- CSS Framework: [Tailwind](https://tailwindcss.com/) (see `tailwind.config.js`, `assets/css/main.css`)
- Wordpress Blog Integration: [Wordpress to Docusaurus Plugin](https://github.com/mark-tate/wordpress-to-docusaurus-plugin)
- Code Formatting: [Prettier](https://prettier.io/) (see `.prettierrc`, `.prettierignore`)
- Linting: [Eslint](https://eslint.org/) (see `.eslintrc`, `.eslintignore`)
- Rendering markdown from js strings: [react markdown parser](https://github.com/remarkjs/react-markdown)
  - Use the custom `<Markdown text="..." styles="..." /> component for any markdown strings
    - This component wraps the markdown parser in `<BrowserOnly>{() => <ReactMarkdown />}</BrowserOnly>` and handles the lazy loading and imports, reducing the amount of code needed on each instance.
    - Reasons for this is that the reactmarkdown component needed to by dynamically imported to avoid import error. Being async on a ssg page caused hydration isues without the other code. the reactmarkdown component works fine without the extra code, but it does throw errors
