let xoff = 0;

function setup() {
    createCanvas(600, 400);
    background(255);
    stroke(50);
    noFill();
}

function draw() {
    background(255, 50);

    beginShape();
    let xoffLine = xoff;
    for (let x = 0; x <= width; x += 10) {
        let y = noise(xoffLine) * height;
        vertex(x, y);
        xoffLine += 0.05;
    }
    endShape();

    xoff += 0.01;
}
