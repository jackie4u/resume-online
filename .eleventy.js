module.exports = function(eleventyConfig) {
  
  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  // const pluginNavigation = require('@11ty/eleventy-navigation')

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/static/img");

  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
};