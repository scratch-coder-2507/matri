/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryblack: "var(--primaryblack)",
        primaryorange: "var(--primaryorange)",
        primarywhite: "var(--primarywhite)",
        "shade-100": "var(--shade-100)",
        "shade-200": "var(--shade-200)",
        "shade-300": "var(--shade-300)",
        "shade-400": "var(--shade-400)",
        "shade-500": "var(--shade-500)",
        "shade-600": "var(--shade-600)",
        "shade-700": "var(--shade-700)",
        "shade-800": "var(--shade-800)",
        "shade-900": "var(--shade-900)",
      },
    },
  },
  plugins: [],
}

