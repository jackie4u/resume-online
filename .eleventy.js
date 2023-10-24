module.exports = function(eleventyConfig) {
  
  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  // const pluginNavigation = require('@11ty/eleventy-navigation')

  // Copy Admin Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
    ".src/admin/confirmation.html": "./admin/confirmation.html",
    "./src/admin/email-change.html": "./admin/email-change.html",
    "./src/admin/invitation.html": "./admin/invitation.html",
    "./src/admin/recovery.html": "./admin/recovery.html",
  });

  // Copy Static Folders to /_site
  eleventyConfig.addPassthroughCopy("./src/static");

  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
};