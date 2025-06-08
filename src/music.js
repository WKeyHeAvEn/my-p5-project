let song;
let fft;
let button;
let playing = false;

function preload() {
    song = loadSound('music/enchpannt-162bpm-bbmin-klarkommen-enchpannt-x-mst-mp3.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    fft = new p5.FFT();

    // Start-Button
    button = createButton("Musik Starten / Stoppen");
    button.position(20, 20);
    button.mousePressed(togglePlay);
}

function draw() {
    background(0, 20); // Leicht durchsichtig für Nachleuchteffekt
    noFill();

    let spectrum = fft.analyze();

    strokeWeight(2);
    stroke(map(mouseX, 0, width, 100, 255), 100, 255); // Farbe hängt von Mausposition ab
    beginShape();
    for (let i = 0; i < spectrum.length; i++) {
        let x = map(i, 0, spectrum.length, 0, width);
        let y = map(spectrum[i], 0, 255, height, 0);
        vertex(x, y);
    }
    endShape();

    // Kreis basierend auf Lautstärke
    let amp = fft.getEnergy("bass");
    let r = map(amp, 0, 255, 10, 400);
    noStroke();
    fill(255, 100, 200, 150);
    ellipse(width / 2, height / 2, r);
}

function togglePlay() {
    if (song.isPlaying()) {
        song.pause();
        playing = false;
    } else {
        song.play();
        playing = true;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
