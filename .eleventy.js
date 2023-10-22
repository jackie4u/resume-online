module.exports = function(eleventyConfig) {
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }

  // const pluginNavigation = require('@11ty/eleventy-navigation')

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/static/img");
};