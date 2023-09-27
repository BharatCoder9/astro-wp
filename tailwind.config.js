const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    theme: {
      extend: {
        fontFamily: {
          sans: ["Inter", ...defaultTheme.fontFamily.sans],
        },
      },
    },
    daisyui: {
      themes: ["lofi"],
    },
  };
  