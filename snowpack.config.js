// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

const { fetchMovie } = require("./js/fetchMovie");

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    fetchMovie,
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
