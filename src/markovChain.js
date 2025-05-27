let sentencesArray;
let markov = {};
let startWords = [];

function preload() {
    sentencesArray = loadStrings('markovChaintxt/shakespeare.txt');
}

function setup() {
    createCanvas(800, 600);
    background(255);
    textSize(16);
    fill(0);
    buildMarkovModel();
    let sentence = generateSentence();
    text(sentence, 20, 30, width - 40, height);
}

function draw() {
}

function buildMarkovModel() {
    for (let line of sentencesArray) {
        let words = line.split(/\s+/).map(w => w.replace(/[^a-zA-Z']/g, '')).filter(Boolean);

        if (words.length > 0) {
            startWords.push(words[0]);
        }

        for (let i = 0; i < words.length - 1; i++) {
            let word = words[i].toLowerCase();
            let next = words[i + 1].toLowerCase();

            if (!markov[word]) {
                markov[word] = [];
            }
            markov[word].push(next);
        }
    }
}

function generateSentence(maxLength = 20) {
    let word = random(startWords).toLowerCase();
    let result = [word];

    for (let i = 0; i < maxLength - 1; i++) {
        let choices = markov[word];
        if (!choices || choices.length === 0) {
            break;
        }
        word = random(choices);
        result.push(word);
    }

    return result.join(' ') + '.';
}
