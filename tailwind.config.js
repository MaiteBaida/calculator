/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "rgb(34, 33, 45)",
        "custom-blue": "rgb(71, 77, 91)",
        "custom-orange": "rgb(255, 130, 97)",
        "custom-yellow": "rgb(251, 244, 141)",
      },
    },
  },
  plugins: [],
};
