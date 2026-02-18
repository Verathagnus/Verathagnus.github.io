/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        /* Legacy names kept for minimal refactor; map to theme */
        blue: "var(--accent-blue)",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#EDEDED",
        "deep-blue": "var(--bg-secondary)",
        "dark-grey": "var(--text-muted)",
        "opaque-black": "rgba(0,0,0,0.35)",
        /* New palette */
        "theme-bg": "var(--bg-primary)",
        "theme-card": "var(--bg-card)",
        "theme-text": "var(--text-primary)",
        "theme-muted": "var(--text-muted)",
        "theme-purple": "var(--accent-purple)",
        "theme-green": "var(--accent-green)",
        "theme-blue": "var(--accent-blue)",
        "theme-teal": "var(--accent-teal)",
        "theme-highlight": "var(--accent-highlight)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, var(--accent-blue) 7.21%, var(--accent-green) 45.05%, var(--accent-purple) 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, var(--accent-blue) 14.53%, var(--accent-teal) 69.36%, var(--accent-purple) 117.73%)",
        "gradient-hero":
          "linear-gradient(135deg, var(--accent-purple) 0%, var(--accent-blue) 50%, var(--accent-green) 100%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"]
      },
      boxShadow: {
        'theme': 'var(--shadow)',
      },
      content: {
        brush: "url('/brush.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}
