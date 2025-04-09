let img;
let sortedImg;

function preload() {
    img = loadImage("../images/image.png"); // Bild laden
}

function setup() {
    createCanvas(img.width, img.height);
    pixelDensity(1);

    sortedImg = createImage(img.width, img.height);
    img.loadPixels();
    sortedImg.loadPixels();

    let pixelsArray = [];

    // Alle Pixel in ein Array einfügen
    for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
            let index = (x + y * img.width) * 4;
            let r = img.pixels[index];
            let g = img.pixels[index + 1];
            let b = img.pixels[index + 2];
            let a = img.pixels[index + 3];

            // Berechnung der Helligkeit als Durchschnitt der RGB-Werte
            let lightness = (r + g + b) / 3;

            pixelsArray.push({ r, g, b, a, lightness });
        }
    }

    // Array nach Helligkeit sortieren (dunkel nach hell)
    pixelsArray.sort((a, b) => a.lightness - b.lightness);

    // Sortierte Pixel wieder in das Bild einfügen
    for (let i = 0; i < pixelsArray.length; i++) {
        let x = i % img.width;
        let y = Math.floor(i / img.width);
        let index = (x + y * img.width) * 4;

        sortedImg.pixels[index] = pixelsArray[i].r;
        sortedImg.pixels[index + 1] = pixelsArray[i].g;
        sortedImg.pixels[index + 2] = pixelsArray[i].b;
        sortedImg.pixels[index + 3] = pixelsArray[i].a;
    }

    sortedImg.updatePixels();
    image(sortedImg, 0, 0); // Das sortierte Bild anzeigen

}
