let sentencesArray;
let uniqueWordsArray = [];
let noDoubleUniqueWordsArray = [];

function preload() {
    sentencesArray = loadStrings('markovChaintxt/shakespeare.txt')
}

function setup() {
    for (let sentence = 0; sentence < sentencesArray.length; sentence++) {
        const wordsArray = sentencesArray[sentence].split(/[\s.,;:!?]+/).filter(Boolean);
        for (let word = 0; word < wordsArray.length; word++) {
            uniqueWordsArray.push(wordsArray[word])
            if (uniqueWordsArray === wordsArray[word]) {

            } else {
                noDoubleUniqueWordsArray.push(wordsArray[word])
            }
        }
    }
    console.log(noDoubleUniqueWordsArray)

}

function draw() {

}
