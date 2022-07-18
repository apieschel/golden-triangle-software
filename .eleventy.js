module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./style.css");
	// Return your Object options:
	return {
		dir: {
			output: "web"
		}
	}
};