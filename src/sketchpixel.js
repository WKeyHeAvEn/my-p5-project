let img;

function preload() {
    img = loadImage("../images/image.png");
}

function setup() {
    createCanvas(600, 600);
    pixelDensity(1);
}


function draw() {
    background(0);
    image(img, 50, 50, 600, 600);
    img.loadPixels();
    for (let i = 0; i < img.pixels.length; i += 4) {
        let red = img.pixels[i];
        let green = img.pixels[i + 1];
        let blue = img.pixels[i + 2];
        let alpha = img.pixels[i + 3];
        img.pixels[i] = red;
        img.pixels[i + 1] = green;
        img.pixels[i + 2] = blue;
        img.pixels[i + 3] = alpha;




    }
    img.updatePixels();
}
