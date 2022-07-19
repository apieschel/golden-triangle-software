module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./style.css");
	eleventyConfig.addPassthroughCopy("./assets");
	// Return your Object options:
	return {
		dir: {
			output: "web"
		}
	}
};