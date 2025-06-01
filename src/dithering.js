let img;

function preload() {
    img = loadImage("images/image.png");
}

function setup() {
    createCanvas(img.width, img.height);
    img.loadPixels();
    loadPixels();

    for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
            let index = (x + y * img.width) * 4;
            let r = img.pixels[index];
            let g = img.pixels[index + 1];
            let b = img.pixels[index + 2];

            // Grayscale value
            let gray = (r + g + b) / 3;

            // Random threshold between 1 and 256
            let threshold = random(1, 256);
            let colorValue = (threshold > gray) ? 255 : 0;

            // Write black or white to canvas pixels
            pixels[index] = pixels[index + 1] = pixels[index + 2] = colorValue;
            pixels[index + 3] = 255;
        }
    }

    updatePixels();
    noLoop();
}
