var brownian = function(params) {
	
	if (typeof params != "object")
		throw new TypeError("params is not an object");
	if (typeof params.octaves != "number")
		throw new TypeError("params.octaves is not a number");
	if (params.octaves <= 1 || !Number.isFinite(params.octaves))
		throw new RangeError("params.octaves is out of bounds");
	if (typeof params.persistence != "number")
		throw new TypeError("params.persistence is not a number");
	if (!Number.isFinite(params.persistence))
		throw new RangeError("params.persistence is out of bounds");
	if (typeof params.noise != "function")
		throw new TypeError("params.noise is not a function");
	
	var persistence = params.persistence;
	var octaves 	= params.octaves;
	var noise		= params.noise;
	var amplitudes 	= new Array(octaves);
	var frequencies	= new Array(octaves);
	var norm		= 0;
	
	for (var i = 0; i < octaves; i++) {
		amplitudes[i]	= Math.pow(persistence, i);
		frequencies[i]	= Math.pow(2, i);
		norm += amplitudes[i];
	}
	norm = 1 / norm;
	
	return function(x, y, z) {
		var value = 0;
		
		for (var i = 0; i < octaves; i++) {
			var f = 1 << i;
			value += amplitudes[i] * noise(x * f, y * f, z * f);
		}
		return value * norm;
	};
	
};

module.exports = brownian;