let cols;
let rows;
let size = 10;
let grid = [];

function setup() {
    createCanvas(700, 700);
    cols = width / size;
    rows = height / size;

    for (let i = 0; i < cols; i++) {
        grid[i] = [];
        for (let j = 0; j < rows; j++) {
            grid[i][j] = floor(random(2));
        }
    }
}

function draw() {
    background(220);
    displayGrid();

    let nextGen = [];
    for (let i = 0; i < cols; i++) {
        nextGen[i] = [];
        for (let j = 0; j < rows; j++) {
            // Randzellen bleiben gleich
            if (i == 0 || i == cols - 1 || j == 0 || j == rows - 1) {
                nextGen[i][j] = grid[i][j];
            } else {
                let n = neighboringStates(grid, i, j);
                if (grid[i][j] == 1 && n < 2) {
                    nextGen[i][j] = 0;
                } else if (grid[i][j] == 1 && (n == 2 || n == 3)) {
                    nextGen[i][j] = 1;
                } else if (grid[i][j] == 1 && n > 3) {
                    nextGen[i][j] = 0;
                } else if (grid[i][j] == 0 && n == 3) {
                    nextGen[i][j] = 1;
                } else {
                    nextGen[i][j] = grid[i][j];
                }
            }
        }
    }

    grid = nextGen;
}

function neighboringStates(grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            let xIndex = x + i;
            let yIndex = y + j;

            // Bounds-Check
            if (xIndex >= 0 && xIndex < cols && yIndex >= 0 && yIndex < rows) {
                sum += grid[xIndex][yIndex];
            }
        }
    }
    sum -= grid[x][y]; // Eigene Zelle abziehen
    return sum;
}

function displayGrid() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (grid[i][j] == 0) {
                fill(255);
            } else {
                fill(0);
            }
            noStroke();
            rect(i * size, j * size, size, size);
        }
    }
}
