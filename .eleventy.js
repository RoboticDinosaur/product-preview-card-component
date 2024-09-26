module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/favicon.ico");
  eleventyConfig.addWatchTarget("src/scss/");
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};