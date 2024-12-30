const jokes = [
    ['Wafer', 'Been a wafer a while, but now I\'m back.'],
    ['Gwen', 'Gwen will these jokes ever end?'],
    ['Howard', 'Good. Howard you?'],
    ['Mint', 'Mint to tell ya I was coming by.'],
    ['Waddle', 'Waddle you give me to stop knocking?'],
    ['Dublin', 'I\'m Dublin down on telling these knock-knock jokes.'],
    ['Erin', 'Erin the tires is what my bike needs.'],
    ['Ilene', 'Ilene a little when I get tired.'],
    ['Pooch', 'Pooch your hat on, it\'s cold out.']
];

const getRandomJoke = function() {
    return Math.floor(Math.random() * 5);
}

const tellJoke = function(joke) {
    return `Knock Knock! Who's there? ${joke[0]}. ${joke[0]} who? ${joke[1]}`;
}

console.log(tellJoke(jokes[getRandomJoke()]));
