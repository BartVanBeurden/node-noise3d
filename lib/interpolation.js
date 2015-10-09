var nearestNeighbour = function(a, b, t) {
	return t < 0.5 ? a : b;
};

var lerp = function(a, b, t) {
	return a + t * (b - a);
};

var cosine = function(a, b, t) {
	t = (1 - Math.cos(t * Math.PI)) * 0.5;
	return a + t * (b - a);
};

module.exports = {
	nearestNeighbour: nearestNeighbour,
	linear: lerp,
	cosine: cosine
};