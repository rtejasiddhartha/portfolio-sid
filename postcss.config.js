    module.exports = {
      plugins: [
        // This is the correct way to specify the Tailwind CSS plugin for PostCSS v8+ and Tailwind v3
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    };
    