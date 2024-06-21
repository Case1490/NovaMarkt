/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Negro: "#000000",
        Azul: "#001f36",
        VerdeOscuro: "#1c5560",
        VerdeClaro: "#79ae92",
        Crema: "#fbffcd",
      },
    },
  },
  plugins: [],
};
