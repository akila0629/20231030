function setup() {
	createCanvas(840, 840);
	background(0);
	angleMode(DEGREES)
	colorMode(HSB)
	cw = width / 2
	ch = height / 2
	w = width
	h = height
	rectMode(RADIUS)
	
}


function draw() {
	frameRate(random(30,90))
	translate(0, 0)
	let mainHue = random(0, 360)
	let cH = mainHue + random(0, 60)
	let cS = random(40, 70)
	let cB = random(20, 60)

	noFill()
	blendMode(OVERLAY)
	for (var x = 0; x < width; x += random(5, 30)) {
		for (var y = 0; y < height; y += random(5, 30)) {
			stroke(cH, cS, cB)
			rect(x, y, 3, 3)
		}
	}
	var count = 0
	for (var j = 0; j <= width; j += 120) {
		for (var i = 0; i <= height; i += 120) {
			count += 1
			if (count % 1 == 0) {
				blendMode(ADD)
				strokeWeight(1)
				circle(j, i, 300 * (sin(frameCount / 2)))
			}
			if (count % 2 == 0) {
				blendMode(MULTIPLY)
				strokeWeight(2)
				rect(j, i, 600 * noise(sin(frameCount/4)))
			}
			if (count % 3 == 0) {
				blendMode(MULTIPLY)
				strokeWeight(2)
				circle(j, i, 800 * noise(sin(frameCount/6)))
			}
		}
	}
}
