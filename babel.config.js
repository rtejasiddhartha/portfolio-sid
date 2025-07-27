module.exports = {
  presets: [
    // This preset includes all necessary Babel transforms for Create React App.
    // It automatically configures Babel based on your project's React setup.
    'react-app'
  ],
  plugins: [
    // This plugin is essential for styled-components, especially for:
    // 1. Better debugging experience (component names in dev tools)
    // 2. Smaller CSS bundles in production (removes dead code/optimizes)
    // 3. Avoiding FOUC (Flash of Unstyled Content) by extracting styles.
    ['babel-plugin-styled-components', {
      // Set displayNames to true for better debugging in development (optional, but useful)
      // This is typically enabled by default in dev, but can be explicit.
      displayName: process.env.NODE_ENV !== 'production',
      // Set ssr to true if you were doing Server-Side Rendering.
      // Even without full SSR, it can influence how styles are extracted.
      ssr: false, // You are not doing SSR, keep this false.
      // Transpile template literals to improve compatibility in older browsers (optional)
      // autoLabel: true, // Automatically add component names as labels for easier debugging
      // minify: true, // Minify the CSS in production builds
      // pure: true, // Enables tree-shaking for styled components
      // fileName: false, // Do not add file names to the generated class names
    }],
  ],
};