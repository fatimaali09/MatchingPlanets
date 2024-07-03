var planets = [ "mercury.jpg", "venus.jpg", "earth.jpg", "mars.jpg", "jupiter.jpg", "saturn.jpg", "uranus.jpg", "neptune.jpg"]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

var shuffled_planets = shuffleArray(planets);
console.log(shuffled_planets);

var cards =""
for(var index=0; index < shuffled_planets.length; index++)
    cards += '<div class="card"></div>'