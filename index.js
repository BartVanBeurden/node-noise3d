module.exports = {
	interpolation			: require("./lib/interpolation.js"),
	array					: require("./lib/array.js"),
	createPerlin			: require("./lib/noise/perlin.js"),
	createCheckerboard		: require("./lib/noise/checkerboard.js"),
	createConstant			: require("./lib/noise/constant.js"),
	createInverter			: require("./lib/noise/invert.js"),
	createBrownianMotion	: require("./lib/noise/brownian.js")
};