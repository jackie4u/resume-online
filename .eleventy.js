module.exports = function(eleventyConfig) {
  
  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  // const pluginNavigation = require('@11ty/eleventy-navigation')

  // Copy Admin Files to /_Site
  eleventyConfig.addPassthroughCopy({
    // TEMPORARY FIX of CMS Admin
    "./src/admin/config.yml": "./config.yml",
    ".src/admin/confirmation.html": "./admin/confirmation.html",
    "./src/admin/email-change.html": "./admin/email-change.html",
    "./src/admin/invitation.html": "./admin/invitation.html",
    "./src/admin/recovery.html": "./admin/recovery.html",
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