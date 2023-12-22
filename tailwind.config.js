/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Dark1: "#112d4e",
        Dark2: "#3f72af",
        Light1: "#dbe2ef",
        Light2: "#f9f7f7",
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(160deg, #112d4e 0%, #3f72af 100%)",
      }
    },
  },
  plugins: [],
}

