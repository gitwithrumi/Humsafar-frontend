/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      Cabin: ["Cabin", "sans-serif"],
      Lora: ["Lora", "sans-serif"],
    },
    colors: {
      primary: "#00CC66",
      secondary: "#374248",
      secondaryLight: "#808080",
      primaryBackground: "#ffffff",
      textLight: "#ffffff",
      textDark: "#374248",
      secondaryBackground: "#FCF2EE",
      sectionBackground: "#2F453A",
      borderColor: "#fcf2ee",
    },
  },
};
export const plugins = [];
