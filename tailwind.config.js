/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        jikan: {
          primary: "#2C3E50", // Dark Blue Gray
          secondary: "#34495E", // Dark Blue
          accent: "#1ABC9C", // Green Neon
          neutral: "#ECF0F1", // Light Gray
        },
      },
    },
  },
  plugins: [],
};
