# Setting Up a Nuxt + Tailwind Project

Craft seamless web applications by integrating Nuxt3 and Tailwind CSS, enhanced with vital modules. Here's a streamlined guide to get you started:

## 1. **Creating a New Nuxt3 Project**

Begin with creating a fresh Nuxt3 application:


`npx nuxi@latest init my-app`

## 2. **Installing TailwindCSS**

Install TailwindCSS:

`npm install --save-dev @nuxtjs/tailwindcss`

Register TailwindCSS in the Nuxt config:

`modules: ["@nuxtjs/tailwindcss"];`

Add Tailwind directives in `./assets/css/tailwind.css`. The provided example adds styles for markdown. Also, bring in additional Tailwind plugins:

bashCopy code

`npm install --save-dev @tailwindcss/forms @tailwindcss/aspect-ratio @tailwindcss/typography`

To use the `Inter` font, add it in `./assets/css/inter.css`:

`@import  url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");`

Configure Tailwind in `tailwind.config.js`.

## 3. **Incorporating Headless UI**

Install and register Headless UI:

`npm install --save-dev nuxt-headlessui`

In your Nuxt configuration:

javascriptCopy code

`modules: ["nuxt-headlessui"];`

## 4. **Integrating Heroicons**

Introduce Heroicons:

`npm install @heroicons/vue`

## 5. **Localization with i18n**

For multilingual support:

`npm install --save-dev @nuxtjs/i18n`

Update your `modules` and `nuxt.config.ts` to integrate the `i18n` options.

## 6. **Image Support with Nuxt Image**

Install the image module:

`npm install --save-dev @nuxt/image`

Add `@nuxt/image` to your Nuxt modules.

## 7. **Adding Animations with vueuse/motion**

To enrich your app with animations:

`npm install @vueuse/motion`

Include `@vueuse/motion/nuxt` in your modules.

## 8. **Content Management with Nuxt Content v2**

Nuxt Content offers a smooth writing experience to boost your productivity:

bashCopy code

`npm install @nuxt/content`

Ensure you refer to the [official documentation](https://content.nuxt.com/) for Nuxt Content to correctly set up and configure it for your application.

----------

The guide now aligns with the provided `package.json` content, streamlining the setting up of a Nuxt3 project integrated with Tailwind CSS and the mentioned modules. To jump into the action, clone our repository that comes pre-configured. Begin your web development journey on solid ground.

**Clone, set up, and propel your project forward!**

Here's to productive coding and success in your endeavors!