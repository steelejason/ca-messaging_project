const jokes = [
    ['Wafer.', 'Wafer who?', 'Been a wafer a while, but now I\'m back.'],
    ['Gwen.', 'Gwen who?', 'Gwen will these jokes ever end?'],
    ['Howard.', 'Howard who?', 'Good. Howard you?'],
    ['Mint.', 'Mint who?', 'Mint to tell ya I was coming by.'],
    ['Waddle.', 'Waddle who?', 'Waddle you give me to stop knocking?']
];

const getRandomJoke = function() {
    return Math.floor(Math.random() * 5);
}

const tellJoke = function(joke) {
    return `Knock Knock! Who's there? ${joke[0]} ${joke[1]} ${joke[2]}`;
}

console.log(tellJoke(jokes[getRandomJoke()]));


