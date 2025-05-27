let tiles = [];
const gridSize = 10;
const tileSize = 40;
let grid = [];
let options = [];
const adjacencyRules = {
    0: { up: [0, 1], right: [1, 2], down: [0, 3], left: [3, 0] },
    1: { up: [0, 1], right: [2, 1], down: [1, 3], left: [0, 1] },
    2: { up: [1, 2], right: [2, 3], down: [2, 3], left: [1, 0] },
    3: { up: [0, 3], right: [3, 0], down: [3, 0], left: [2, 3] },
};

function preload() {
    for (let i = 0; i < 4; i++) {
        tiles[i] = loadImage(`tile${i}.png`);
        options.push(i);
    }
}

function setup() {
    createCanvas(gridSize * tileSize, gridSize * tileSize);
    for (let i = 0; i < gridSize * gridSize; i++) {
        grid[i] = options.slice();
    }
    frameRate(10);
}

function draw() {
    background(220);
    let minOptions = 999;
    let minIndex = -1;
    for (let i = 0; i < grid.length; i++) {
        if (grid[i].length > 1 && grid[i].length < minOptions) {
            minOptions = grid[i].length;
            minIndex = i;
        }
    }
    if (minIndex == -1) {
        noLoop();
        return;
    }
    let choice = random(grid[minIndex]);
    grid[minIndex] = [choice];
    propagate(minIndex);
    for (let i = 0; i < grid.length; i++) {
        if (grid[i].length == 1) {
            let x = (i % gridSize) * tileSize;
            let y = floor(i / gridSize) * tileSize;
            image(tiles[grid[i][0]], x, y, tileSize, tileSize);
        }
    }
}

function propagate(index) {
    let stack = [index];
    while (stack.length > 0) {
        let current = stack.pop();
        let x = current % gridSize;
        let y = floor(current / gridSize);
        let currentOptions = grid[current];
        if (currentOptions.length != 1) continue;
        let tile = currentOptions[0];
        let neighbors = [
            { x: x, y: y - 1, dir: 'up', opp: 'down' },
            { x: x + 1, y: y, dir: 'right', opp: 'left' },
            { x: x, y: y + 1, dir: 'down', opp: 'up' },
            { x: x - 1, y: y, dir: 'left', opp: 'right' }
        ];
        neighbors.forEach(n => {
            if (n.x < 0 || n.x >= gridSize || n.y < 0 || n.y >= gridSize) return;
            let ni = n.y * gridSize + n.x;
            let allowed = adjacencyRules[tile][n.dir];
            let neighborOptions = grid[ni];
            let newOptions = neighborOptions.filter(o => allowed.includes(o));
            if (newOptions.length < neighborOptions.length) {
                grid[ni] = newOptions;
                stack.push(ni);
            }
        });
    }
}
