module.exports = function(params) {
	
	if (typeof params != "object")
		throw new TypeError("params is not an object");
	if (typeof params.noise != "function")
		throw new TypeError("params.noise is not a function");
	
	var noise = params.noise;
	
	return function(x, y, z) {
		return -noise(x, y, z);
	};
};