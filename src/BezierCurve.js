function setup() {
    createCanvas(600, 400);
    background(240);

    stroke(0);
    noFill();
    strokeWeight(2);

    // Punkte definieren
    let x1 = 100, y1 = 300;  // Startpunkt
    let x2 = 150, y2 = 100;  // Kontrollpunkt 1
    let x3 = 450, y3 = 100;  // Kontrollpunkt 2
    let x4 = 500, y4 = 300;  // Endpunkt

    // Hilfslinien anzeigen
    stroke(200);
    line(x1, y1, x2, y2);
    line(x3, y3, x4, y4);

    // Kontrollpunkte als Kreise anzeigen
    fill(255, 0, 0);
    noStroke();
    ellipse(x2, y2, 10, 10);
    ellipse(x3, y3, 10, 10);

    // Kurve zeichnen
    noFill();
    stroke(0);
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
}
