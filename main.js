// Mixed Messages - a Portfolio project for Codecademy

const beerNames = ["Old Fitz", "Rail Life", "Bill Bopper", "Extrus Grount", "Merlin's Elixir", 
    "Hacker Style", "Python's Venom", "JSBeer", "Pepper Pommit", "Gallapin' Cherry", "Cream Volood Organic"];
const beerTypes = ["IPA", "Porter", "Stout", "Hefeweizen", "Gose", "NEIPA", "Belgian Tripel", 
    "Sour", "Pilsener"];
const breweries = ["Omnipollo", "Kees", "Bær Nanobrewery", "Pohjala", "Heineken", "Lagunitas", 
    "Tommie Sjef", "Drie Fonteinen", "Brewed by Numbers"];

// Function to generate a mixed message with my favourite beer, type and brewery. 
function generateMixedMessage() {
    let aOrAn = "";
    const vowels = ["a", "e", "i", "o", "u"];

    // Pick a random beer from the list
    const beer = beerNames[Math.floor(Math.random() * beerNames.length)];

    // Pick a random type from the list
    const beerType = beerTypes[Math.floor(Math.random() * beerTypes.length)];

    // Pick a random brewery from the list
    const brewery = breweries[Math.floor(Math.random() * breweries.length)];

    // Check if the beer type starts with a vowel to see if a or an needs to be used
    if (vowels.includes(beer[0].toLowerCase())) { 
        aOrAn = "an";
    } else {
        aOrAn = "a";
    }

    // Print out the message to the console
    console.log(`My favourite beer is '${beer}', which is ${aOrAn} ${beerType} made by ${brewery}.`);
};

generateMixedMessage();

