const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  return EleventyFetch( "https://gtrsoftware.com/wp-json/wp/v2/posts", {
    duration: "1d",
    type: "json"   
  });
};