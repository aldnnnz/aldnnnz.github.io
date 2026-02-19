export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        instrument: ['Instrument', 'sans-serif'],
        playfair: ['Playfair', 'serif'],
        anonymous: ['Anonymous', 'monospace'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}