/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0076ff",
          secondary: "#00c5ff",
          accent: "#d19700",
          neutral: "#102d38",
          "base-100": "#ffffff",
          info: "#00edff",
          success: "#00bb85",
          warning: "#f88700",
          error: "#be0b34",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
