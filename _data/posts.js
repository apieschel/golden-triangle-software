// https://davedavies.dev/post/how-to-use-11ty-with-headless-wordpress/

const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  return EleventyFetch( "https://dev-gtr-software-api.pantheonsite.io/wp-json/wp/v2/posts?_embed", {
    duration: "40s",
    type: "json"   
  });
};