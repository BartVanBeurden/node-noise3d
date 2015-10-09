module.exports = function(params) {
	
	if (typeof params != "object")
		throw new TypeError("params is not an object")
	if (typeof params.interpolation != "function")
		throw new TypeError("params.interpolation is not a function");
	if (typeof params.size != "number")
		throw new TypeError("params.size is not a number");
	if (params.size <= 0 || !Number.isFinite(params.size))
		throw new RangeError("params.size out of bounds");
	
	var irp = params.interpolation;
	var size = params.size;
	var isize = 1 / params.size;
	
	return function(x, y, z) {
		var x0 = Math.floor(x * isize);
		var y0 = Math.floor(y * isize);
		var z0 = Math.floor(z * isize);
		
		var x0v = x0 % 2;
		var y0v = y0 % 2;
		var z0v = z0 % 2;
		
		var value = (x0v + y0v + z0v) % 2 ? 1 : -1;
		
		var tx = (x - x0 * size) * isize;
		var ty = (y - y0 * size) * isize;
		var tz = (z - z0 * size) * isize;
		
		var irpx = irp(value, -value, tx);
		var irpy = irp(irpx, -irpx, ty);
		var irpz = irp(irpy, -irpy, tz);
		
		return irpz;
	};
};
