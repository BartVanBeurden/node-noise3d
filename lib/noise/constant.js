module.exports = function(params) {
	
	if (typeof params != "object")
		throw new TypeError("params is not an object");
	if (typeof params.value != "number")
		throw new TypeError("params.value is not a number");
	if (params.value < -1 || params.value > 1)
		throw new RangeError("params.value is out of bounds");
	
	var value = params.value;
	
	return function(x, y, z) {
		return value;
	}
};