/**
 * Generate output
 */
const addText = {
    /**
     * Output user choice to HTML
     * @param {string} text
     */
    userChoice(text) {
        const choice1 = document.getElementById('choice1');
        const hr1 = document.getElementById('hr-1');
        choice1.innerHTML = `<strong>You:</strong> ${text}`;
        hr1.classList.remove('hidden');
    },
    /**
     * Output user choice to HTML
     * @param {string} text
     */
    computerChoice(text) {
        const choice2 = document.getElementById('choice2');
        choice2.innerHTML = `<strong>Computer:</strong> ${text}`;
    },
    /**
     * Output final result to HTML
     * @param {string} text
     */
    finalResult(text) {
        const results = document.getElementById('results');
        const hr2 = document.getElementById('hr-2');
        results.innerHTML = text;
        hr2.classList.remove('hidden');
    },
    /**
     * Output win, loss and tie count to HTML
     * @param {string} outcome
     */
    countOutcome(outcome) {
        const winElement = document.getElementById('win-count');
        const winElementValue = winElement.attributes['value'].value;
        let winCount = winElementValue === '0' ? 0 : Number(winElementValue);

        const loseElement = document.getElementById('lose-count');
        const loseElementValue = loseElement.attributes['value'].value;
        let loseCount = loseElementValue === '0' ? 0 : Number(loseElementValue);

        const tieElement = document.getElementById('tie-count');
        const tieElementValue = tieElement.attributes['value'].value;
        let tieCount = tieElementValue === '0' ? 0 : Number(tieElementValue);

        const hr3 = document.getElementById('hr-3');
        hr3.classList.remove('hidden');

        if (outcome === 'win') {
            winCount++;
            winElement.innerHTML = `Wins: ${winCount}`;
            winElement.attributes['value'].value = winCount;
            winElement.classList.remove('hidden');
        } else if (outcome === 'loss') {
            loseCount++;
            loseElement.innerHTML = `Losses: ${loseCount}`;
            loseElement.attributes['value'].value = loseCount;
            loseElement.classList.remove('hidden');
        } else if (outcome === 'tie') {
            tieCount++;
            tieElement.innerHTML = `Ties: ${tieCount}`;
            tieElement.attributes['value'].value = tieCount;
            tieElement.classList.remove('hidden');
        }
    }
};

function startGame() {
    // Get user choice from HTML
    const userChoice = document.getElementById("user-choice");
    const userChoiceValue = userChoice.value;

    // Write user choice to the HTML document
    addText.userChoice(userChoiceValue);

    // Calculate computer choice
    let computerChoiceValue = '';
    //let computerChoiceText = '';
    const getRandom = Math.random();
    if (getRandom < 0.34) {
        computerChoiceValue = 'rock';
        //computerChoiceText = 'Kivi';
    } else if (getRandom <= 0.67) {
        computerChoiceValue = 'paper';
        //computerChoiceText = 'Paber';
    } else {
        computerChoiceValue = 'scissors';
        //computerChoiceText = 'Käärid';
    }

    // Add computer choice to the HTML
    addText.computerChoice(computerChoiceValue);

    /**
     * Compare user choice with computer choice.
     * @param {string} choice1 User choice
     * @param {string} choice2 Computer choice
     * @returns {Object} Result outcome and text
     */
    const compare = function (choice1, choice2) {
        let obj = {};
        const winText = "You won &#129321;";
        const loseText = "You lost &#128561;";
        const tieText = 'Tie &#128529;';

        if (choice1 === choice2) {
            // Tie
            obj.outcome = 'tie';
            obj.text = tieText;
            return obj;
        }
        if (choice1 === 'rock') {
            if (choice2 === 'scissors') {
                // Rock won
                obj.outcome = 'win';
                obj.text = winText;
                return obj;
            } else {
                // Paper won
                obj.outcome = 'loss';
                obj.text = loseText;
                return obj;
            }
        }
        if (choice1 === 'paper') {
            if (choice2 === 'rock') {
                // Paper won
                obj.outcome = 'win';
                obj.text = winText;
                return obj;
            } else {
                // Scissors won
                obj.outcome = 'loss';
                obj.text = loseText;
                return obj;
            }
        }
        if (choice1 === 'scissors') {
            if (choice2 === 'rock') {
                // Rock won
                obj.outcome = 'loss';
                obj.text = loseText;
                return obj;
            } else {
                // Scissors won
                obj.outcome = 'win';
                obj.text = winText;
                return obj;
            }
        }
    };

    // Result variable with compare values
    const result = compare(userChoiceValue, computerChoiceValue);

    // Print final result to HTML
    addText.finalResult(result.text);
    addText.countOutcome(result.outcome);

    endGame();
}

const endGame = function () {
    const startBtn = document.getElementById('startGameBtn');
    startBtn.attributes['title'].value = 'Play again';
    startBtn.innerHTML = 'Play again';
}