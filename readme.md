# noise3d

## Install

	npm install noise3d
	
## Usage

```javascript
var noise = require("noise3d");

var perlin = noise.createPerlin({
	interpolation: noise.interpolation.linear,
	permutation: noise.array.shuffle(noise.array.range(0, 255), Math.random)
});

var brownian = noise.createBrownianMotion({
	octaves: 4,
	persistence: 0.5,
	noise: perlin
});

for (var x = 0; x < 512; x++) {
	for (var y = 0; y < 512; y++) {
		var z = 1; // keep z constant for 2D noise
		image[x][y] = 127 + brownian(x / 64, y / 64, z) * 128;
	}
}
```

## Noise functions

All noise functions implement following interface:

```javascript
value = noise(x, y, z)
```
	
- `x` x coordinate
- `y` y coordinate
- `z` z coordinate
- `value` noise value between [-1, +1]

### noise.createPerlin(params)

Perlin Noise

```javascript
var perlin = noise.createPerlin({
	interpolation: noise.interpolation.linear,
	permutation: noise.array.shuffle(noise.array.range(0, 255), Math.random)
});
```

- `params.interpolation` interpolation method (see utility methods)
- `params.permutation` permutation array (numbers 0 to 255 in pseudorandom order)

### noise.createCheckerboard(params)

Checkerboard Pattern

```javascript
var checker = noise.createCheckerboard({
	interpolation: noise.interpolation.nearestNeighbour,
	size: 2
});
```

- `params.interpolation` interpolation method (see utility methods)
- `params.size` size between checkerboard rectangles

### noise.createConstant(params)

Constant Value

```javascript
var constant = noise.createConstant({
	value: 0.3
});
```

- `params.value` constant value between [-1, +1]

### noise.createInverter(params)

Inverts noise values

```javascript
var invert = noise.createInverter({
	noise: perlin
});
```

- `params.noise` the noise function (x, y, z) to invert

### noise.createBrownianMotion

Fractal Brownian Motion

```javascript
var brownian = noise.createBrownianMotion({
	octaves: 4,
	persistence: 0.5,
	noise: perlin
});
```

- `params.octaves` number of octaves
- `params.persistence` persistence (amplitude)
- `params.noise` input noise function to fractionally combine

## Utility methods

### Interpolation

All interpolation methods implement following interface:

```javascript
value = interpolate(a, b, t)
```

- noise.interpolation.nearestNeighbour
- noise.interpolation.linear
- noise.interpolation.cosine

### noise.array.range(a, b)

Create an array with items between a and b

```javascript
noise.array.range(3, 5) == [3, 4, 5]
```

### noise.array.shuffle(array, random)

Shuffle an array

```javascript
noise.array.shuffle([3, 4, 5], Math.random)
```

- `array` the array to be shuffled
- `random` a random function that generates numbers between [0, 1)


