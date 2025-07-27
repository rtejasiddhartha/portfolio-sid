const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  // This adds 'babel-plugin-styled-components' to CRA's Babel configuration.
  addBabelPlugin('babel-plugin-styled-components')
);