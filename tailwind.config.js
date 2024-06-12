/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        lime: "hsl(var(--lime))",
        black: "hsl(var(--black))",
        graphite: "hsl(var(--graphite))",
        darkGray: "hsl(var(--darkGray))",
        lightGray: "hsl(var(--lightGray))",
        white: "hsl(var(--white))",
        green: "hsl(var(--green))",
        blue: "hsl(var(--blue))",
        violet: "hsl(var(--violet))",
        lightViolet: "hsl(var(--lightViolet))",
        rose: "hsl(var(--rose))",
        peach: "hsl(var(--peach))",
        beige: "hsl(var(--beige))"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
}
