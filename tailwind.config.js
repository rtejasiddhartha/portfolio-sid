/** @type {import('tailwindcss').Config} */
module.exports = {
  // This 'content' array tells Tailwind CSS which files to scan for Tailwind classes.
  // It's crucial for Tailwind to generate only the CSS you actually use.
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JavaScript/JSX/TypeScript files in the 'src' folder
    "./public/index.html",       // Scans your main HTML file for any Tailwind classes
  ],
  theme: {
    // 'extend' allows you to add to Tailwind's default theme without overwriting it.
    // For example, you could add custom colors, fonts, or spacing here.
    extend: {
      // If you want to use the 'Inter' font as a Tailwind font-family, you would define it here:
      // fontFamily: {
      //   inter: ['Inter', 'sans-serif'],
      // },
    },
  },
  plugins: [], // Add any Tailwind plugins here if you use them (e.g., @tailwindcss/forms)
};
