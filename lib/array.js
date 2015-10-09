module.exports.range = function(a, b) {
	var result = [];
	for (var i = a; i <= b; i++) {
		result.push(i);
	}
	return result;
};

module.exports.shuffle = function(array, random) {
	// Fisher-Yates
	var currentIndex = array.length;
	var swapValue = 0;
	var randomIndex;
	
	while (currentIndex) {
		randomIndex = Math.floor(random() * currentIndex);
		currentIndex -= 1;
		
		swapValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = swapValue;
	}
	
	return array;
};