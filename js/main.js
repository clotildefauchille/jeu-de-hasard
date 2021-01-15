// Le nombre max
let app = {
    init: function () {
        app.game = {
            attempt: 1,
            searchedNumber: undefined,
            min: 1,
            max: 10,
            scores: [],
            gameAttempt: [],
            game: 0,
            gameNumber: []
        };
        app.handleEvent();
    },
    handleEvent: () => {
        document.querySelector("#playButton").addEventListener('click', app.play)
    },
    getRandomNumber: (min, max) => {
        // Le nombre généré aleatoire
        return app.game.searchedNumber = Math.floor(Math.random() * (max - min) + min);
    },
    play: () => {
        console.log('hello')
        app.getRandomNumber(app.game.min, app.game.max);
        console.log('nombre aléatoire: ', app.getRandomNumber(app.game.min, app.game.max));

        // Le nombre saisi
        var enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'), 10);

        if (enteredNumber == null) {
            return

        } else {
            // Le nombre d'essais
            // game.attempt = 1;

            // Tant que le nombre saisi n'est pas bon on redemande un nombre
            while (enteredNumber !== app.game.searchedNumber) {
                // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
                if (enteredNumber < app.game.searchedNumber) {
                    enteredNumber = parseInt(prompt('C\'est plus'));
                } else {
                    enteredNumber = parseInt(prompt('C\'est moins'));
                }
                // on incrémente le nombre d'essais
                app.game.attempt += 1;

            }
            app.game.game += 1;
            app.game.gameNumber.push(app.game.game);
            console.log("numero de la partie", app.game.gameNumber);
            app.game.scores++;
            // on est sorti de la boucle, c'est que le nombre saisi est bien le nombre cherché
            // on affiche un message de victoire
            alert('Bravo ! C\'était bien ' + app.game.searchedNumber + ' - Nombre d\'essais : ' + app.game.attempt);
            app.game.gameAttempt.push(app.game.attempt);
            // on affiche un message pour rejouer une partie
            console.log("essai par partie", app.game.gameAttempt);
            if (window.confirm(`ton score est de ${app.game.scores}, veux tu refaire une partie?`)) {
                app.play()
            } else {
                // for (let attempt of game.gameAttempt) {
                //     alert(`partie  : ${attempt} essais`)
                // };
                for (let i = 0; i < app.game.gameNumber.length; i++) {
                    alert(`partie ${i+1}: ${app.game.gameAttempt[i]}`)
                }
            }
            console.log('score:', app.game.scores)
        }
    }

}

document.addEventListener("DOMContentLoaded", app.init);