let axiom = "F";
let sentence = axiom;
let rules = [];
let len = 100;
let angle;

function setup() {
    createCanvas(600, 600);
    angle = radians(25);
    rules[0] = {
        a: "F",
        b: "F[+F]F[-F]F"
    };
    background(255);
    stroke(0, 100, 0);
    turtleDraw();
}

function turtleDraw() {
    background(255);
    resetMatrix();
    translate(width / 2, height);
    strokeWeight(2);
    for (let i = 0; i < sentence.length; i++) {
        let current = sentence.charAt(i);
        if (current === "F") {
            line(0, 0, 0, -len);
            translate(0, -len);
        } else if (current === "+") {
            rotate(angle);
        } else if (current === "-") {
            rotate(-angle);
        } else if (current === "[") {
            push();
        } else if (current === "]") {
            pop();
        }
    }
}

function generate() {
    len *= 0.6;
    let nextSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        let current = sentence.charAt(i);
        let found = false;
        for (let j = 0; j < rules.length; j++) {
            if (current === rules[j].a) {
                nextSentence += rules[j].b;
                found = true;
                break;
            }
        }
        if (!found) {
            nextSentence += current;
        }
    }
    sentence = nextSentence;
    turtleDraw();
}

function mousePressed() {
    generate();
}
