let font;
let fontsize = 64;

function preload() {
    // Hier eine Google Font oder eine lokale Font laden
    font = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Regular.otf');
}

function setup() {
    createCanvas(600, 200);
    textFont(font);
    textSize(fontsize);
    fill(0);
}

function draw() {
    background(255);

    // Text mittig auf der Leinwand zeichnen
    textAlign(CENTER, CENTER);
    text('Hallo p5.js!', width / 2, height / 2);

    // Beispiel: Schriftgröße animieren
    fontsize = 64 + 20 * sin(frameCount * 0.05);
    textSize(fontsize);
}
