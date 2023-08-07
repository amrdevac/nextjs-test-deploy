/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e11d48",
          secondary: "#d1d5db",
          accent: "#1fb2a6",
          neutral: "#2a323c",

          "base-100": "#f3f4f6",
          info: "#60a5fa",
          success: "#22c55e",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
};
