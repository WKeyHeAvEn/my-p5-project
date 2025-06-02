function setup() {
  createCanvas(400, 400);
  background(220);

  let x0 = 50;
  let y0 = 50;
  let x1 = 300;
  let y1 = 200;

  stroke(0);
  drawLineBresenham(x0, y0, x1, y1);
}

function drawPixel(x, y) {
  point(x, y);
}

function drawLineBresenham(x0, y0, x1, y1) {
  let dx = abs(x1 - x0);
  let dy = abs(y1 - y0);
  let sx = x0 < x1 ? 1 : -1;
  let sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;

  while (true) {
    drawPixel(x0, y0);

    if (x0 === x1 && y0 === y1) break;

    let e2 = 2 * err;

    if (e2 > -dy) {
      err -= dy;
      x0 += sx;
    }

    if (e2 < dx) {
      err += dx;
      y0 += sy;
    }
  }
}
