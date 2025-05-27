let data = [
    { label: "Jan", value: 25 },
    { label: "Feb", value: 40 },
    { label: "Mar", value: 30 },
    { label: "Apr", value: 80 },
    { label: "Mai", value: 65 },
    { label: "Jun", value: 20 },
    { label: "Jul", value: 90 },
    { label: "Aug", value: 55 },
    { label: "Sep", value: 35 },
    { label: "Okt", value: 75 },
    { label: "Nov", value: 60 },
    { label: "Dez", value: 50 }
];

let maxValue;
let barWidth;

function setup() {
    createCanvas(900, 500);
    maxValue = max(data.map(d => d.value));
    barWidth = width / data.length;
    textAlign(CENTER, CENTER);
    textFont('Arial');
}

function draw() {
    background(240);
    noStroke();

    for (let i = 0; i < data.length; i++) {
        let x = i * barWidth;
        let y = height;
        let h = map(data[i].value, 0, maxValue, 0, height - 100);
        let colorValue = map(data[i].value, 0, maxValue, 180, 20);

        fill(colorValue, 100, 200);
        rect(x, y - h, barWidth - 10, h);

        fill(0);
        text(data[i].label, x + barWidth / 2 - 5, height - 10);

        if (mouseX > x && mouseX < x + barWidth - 10 && mouseY > y - h && mouseY < y) {
            fill(50);
            text(data[i].value, x + barWidth / 2 - 5, y - h - 20);
        }
    }

    fill(50);
    textSize(16);
    text("Monatlicher Produktverkauf (Beispiel)", width / 2, 30);
}
