## Cad Exchanger Test Work

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Also, you can check result at [Demo](http://localhost:3000)

## About

The project includes two static pages: Home and Contact.
Since both pages are statically generated, they are delivered to the client instantly without any server-side delays.
The Home page features a YouTube video player implemented using a third-party component.
This player is rendered only on the client side to prevent blocking the initial page load.
As a result, the layout appears instantly, and the video loads asynchronously.

## Styles
This project uses Material UI for UI components.
The global theme is defined in ```styles/theme.ts```.
Custom styles and animations have been added for buttons and text fields to enhance the user experience.

## Contact Form
The Contact page contains a form that uses react-hook-form and zod for validation.
The form validates fields on the client side, and on submit, triggers a server action.

Within this server action:
* Input data is sanitized using sanitize-html
* The schema is checked via Zod
* If valid, a response is logged and returned to the client
* If invalid, an error is displayed both in the console and on the page

## Seo
Basic SEO metadata like title and description is included for each page.
Additionally, Open Graph tags are added for the Home page to improve social link previews.

## Deploy
The project is deployed on Vercel — a free and convenient platform for deploying Next.js apps with built-in CI/CD.
