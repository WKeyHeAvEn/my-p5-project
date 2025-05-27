let minVal = -2;
let maxVal = 2;
let maxIterations = 100;

function setup() {
    createCanvas(800, 800);
    pixelDensity(1);
}

function draw() {
    loadPixels();
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let a = map(x, 0, width, minVal, maxVal);
            let b = map(y, 0, height, minVal, maxVal);

            let ca = a;
            let cb = b;

            let n = 0;
            while (n < maxIterations) {
                let aa = a * a - b * b;
                let bb = 2 * a * b;
                a = aa + ca;
                b = bb + cb;

                if (abs(a + b) > 16) {
                    break;
                }

                n++;
            }

            let bright = map(n, 0, maxIterations, 0, 1);
            bright = map(sqrt(bright), 0, 1, 0, 255);

            let pix = (x + y * width) * 4;
            let c = n === maxIterations ? 0 : bright;
            pixels[pix + 0] = c;
            pixels[pix + 1] = c;
            pixels[pix + 2] = c;
            pixels[pix + 3] = 255;
        }
    }
    updatePixels();
    noLoop();
}

function mousePressed() {
    let range = maxVal - minVal;
    let zoomFactor = 0.5;
    let newCenterX = map(mouseX, 0, width, minVal, maxVal);
    let newCenterY = map(mouseY, 0, height, minVal, maxVal);
    minVal = newCenterX - (range * zoomFactor) / 2;
    maxVal = newCenterX + (range * zoomFactor) / 2;
    loop();
}
