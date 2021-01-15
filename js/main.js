// Le nombre max

let game = {
    attempt: 1,
    searchedNumber: undefined,
    min: 1,
    max: 10,
    scores: [],
    gameAttempt: [],
    game: 0,
    gameNumber: []

};

function getRandomNumber(min, max) {
    // Le nombre généré aleatoire
    return game.searchedNumber = Math.floor(Math.random() * (max - min) + min);
};


function play() {

    getRandomNumber(game.min, game.max);
    console.log('nombre aléatoire: ', getRandomNumber(game.min, game.max));

    // Le nombre saisi
    var enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'), 10);

    if (enteredNumber == null) {
        return

    } else {
        // Le nombre d'essais
        // game.attempt = 1;

        // Tant que le nombre saisi n'est pas bon on redemande un nombre
        while (enteredNumber !== game.searchedNumber) {
            // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
            if (enteredNumber < game.searchedNumber) {
                enteredNumber = parseInt(prompt('C\'est plus'));
            } else {
                enteredNumber = parseInt(prompt('C\'est moins'));
            }
            // on incrémente le nombre d'essais
            game.attempt += 1;

        }
        game.game += 1;
        game.gameNumber.push(game.game);
        console.log("numero de la partie", game.gameNumber);
        game.scores++;
        // on est sorti de la boucle, c'est que le nombre saisi est bien le nombre cherché
        // on affiche un message de victoire
        alert('Bravo ! C\'était bien ' + game.searchedNumber + ' - Nombre d\'essais : ' + game.attempt);
        game.gameAttempt.push(game.attempt);
        // on affiche un message pour rejouer une partie
        console.log("essai par partie", game.gameAttempt);
        if (window.confirm(`ton score est de ${game.scores}, veux tu refaire une partie?`)) {
            play()
        } else {
            // for (let attempt of game.gameAttempt) {
            //     alert(`partie  : ${attempt} essais`)
            // };
            for (let i = 0; i < game.gameNumber.length; i++) {
                alert(`partie ${i+1}: ${game.gameAttempt[i]}`)
            }
        }
        console.log('score:', game.scores)
    }
};

play()


