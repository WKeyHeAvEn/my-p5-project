let img;

function preload() {
    img = loadImage("images/image.png");
}

function setup() {
    createCanvas(600, 400);
    imageMode(CORNER);
    noStroke();
    frameRate(30);
}

function draw() {
    background(0);

    if (img) {
        image(img, 0, 0, width, height);
    } else {
        fill(255, 0, 0);
        rect(50, 50, 200, 200);
        fill(0, 255, 0);
        ellipse(400, 200, 150, 150);
    }

    applyGlitch();
}

function applyGlitch() {
    let slices = int(random(3, 6));

    for (let i = 0; i < slices; i++) {
        let y = int(random(height));
        let h = int(random(5, 20));
        let xOffset = int(random(-20, 20));
        let slice = get(0, y, width, h);
        image(slice, xOffset, y);
    }

    if (random() < 0.05) {
        fill(random(255), random(255), random(255), 50);
        rect(0, 0, width, height);
    }
}
