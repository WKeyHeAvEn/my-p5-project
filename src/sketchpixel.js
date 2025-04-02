
function setup() {
    createCanvas(500, 500);
}


function draw() {
    drawGrid(); // Zeichne das Raster erneut
    for (let sq of smallSquares) {
        fill(sq.color);
        square(sq.x, sq.y, sq.size);
    }
}
