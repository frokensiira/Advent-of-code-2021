const gammaRate = [];
const epsilonRate = [];

for (i = 0; i < report[0].length; i++) {
    let gammaZero = 0;
    let gammaOne = 0;

    report.forEach((position) => {
        if (position.charAt(i) == 0) {
            gammaZero++;
        } else if (position.charAt(i) == 1) {
            gammaOne++;
        }
    });

    if (gammaZero > gammaOne) {
        gammaRate.push(0);
        epsilonRate.push(1);
    } else {
        gammaRate.push(1);
        epsilonRate.push(0);
    }
}

const gammaRateString = gammaRate.join("");
const epsilonRateString = epsilonRate.join("");

const gammaRateDecimal = parseInt(gammaRateString, 2);
const epsilonRateDecimal = parseInt(epsilonRateString, 2);

const powerConsumption = gammaRateDecimal * epsilonRateDecimal;
