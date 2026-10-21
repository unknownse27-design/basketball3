/**LOAD DATA**/

const makes =
    Number(
        localStorage.getItem(
            "makes"
        )
    ) || 0;


const misses =
    Number(
        localStorage.getItem(
            "misses"
        )
    ) || 0;


const totalShots =
    Number(
        localStorage.getItem(
            "totalShots"
        )
    ) || 50;


const goalAccuracy =
    Number(
        localStorage.getItem(
            "goalAccuracy"
        )
    ) || 80;


/**CALCULATE ACCURACY**/

const total =
    makes + misses;


let accuracy = 0;


if (total > 0) {

    accuracy =
        Math.round(
            (makes / total) * 100
        );

}


/**UPDATE HEADER**/

document.getElementById(
    "current-goal"
).textContent =
    goalAccuracy +
    "% Accuracy";


/**UPDATE RESULTS**/

document.getElementById(
    "result-accuracy"
).textContent =
    accuracy +
    "%";


document.getElementById(
    "result-makes"
).textContent =
    makes;


document.getElementById(
    "result-misses"
).textContent =
    misses;


document.getElementById(
    "result-total"
).textContent =
    total;


/**PERFORMANCE**/

document.getElementById(
    "performance-accuracy"
).textContent =
    accuracy +
    "%";


document.getElementById(
    "performance-fill"
).style.width =
    Math.min(
        accuracy,
        100
    ) +
    "%";


document.getElementById(
    "goal-result"
).textContent =
    goalAccuracy +
    "%";


/**RESULT MESSAGE**/

const resultMessage =
    document.getElementById(
        "result-message"
    );


const resultSummary =
    document.getElementById(
        "result-summary"
    );


if (total === 0) {

    resultMessage.textContent =
        "No shots recorded yet!";

    resultSummary.textContent =
        "Complete a shooting session to see your results.";

}

else if (
    accuracy >= goalAccuracy
) {

    resultMessage.textContent =
        "Goal reached!";

    resultSummary.textContent =
        "You reached your " +
        goalAccuracy +
        "% shooting goal. Keep working on consistency.";

}

else {

    resultMessage.textContent =
        "Keep working!";

    resultSummary.textContent =
        "You finished at " +
        accuracy +
        "% accuracy. Your goal was " +
        goalAccuracy +
        "%.";

}


/**SHOOTING ADVICE**/

const advice =
    document.getElementById(
        "shooting-advice"
    );


if (total === 0) {

    advice.textContent =
        "Complete a shooting session first. After your session, the app will use your results to give you advice.";

}

else if (
    accuracy < 50
) {

    advice.textContent =
        "Focus on your basic shooting form. Start close to the basket and work on your balance, hand placement, and follow-through.";

}

else if (
    accuracy < 70
) {

    advice.textContent =
        "Your accuracy is improving. Work on form shooting and spot shooting to become more consistent from different areas.";

}

else if (
    accuracy < goalAccuracy
) {

    advice.textContent =
        "You are getting close to your goal. Focus on consistency and try to reduce missed shots from your weaker shooting spots.";

}

else {

    advice.textContent =
        "You reached your goal. Try increasing the number of shots or working on shooting from different spots around the court.";

}


/**NEW SESSION**/

document
    .getElementById(
        "new-session"
    )
    .addEventListener(
        "click",
        function() {

            window.location.href =
                "../shooting/shooting.html";

        }
    );


/**BACK**/

document
    .getElementById(
        "results-back"
    )
    .addEventListener(
        "click",
        function() {

            window.location.href =
                "../shooting/shooting.html";

        }
    );