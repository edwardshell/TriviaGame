// Create number for countdown
// Create intervalId
// set timeouts
// decrement function
// functions that call the question div and start a clock 

var number = 90;

var userAnswer = $(".answers").click();

var right = 0;

var wrong = 0;

setTimeout(q1, 15);
setTimeout(q2, 1000 * 30);
setTimeout(q3, 1000 * 45);
setTimeout(q4, 1000 * 60);
setTimeout(q5, 1000 * 75);
setTimeout(q6, 1000 * 90);

// setTimeout(stop, 1000 * 90);


var intervalId;


function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;

    $(".timer").html("<h2>" + number + "</h2>");

    if (number === 0) {
        stop();
    }

}

function stop() {
    $(".container").text("Trivia is over!" + " Correct Answers= 1. c, 2. b, 3. a, 4. c, 5. b, 6. d");
}

function q1() {
    // $(".timer").html("<h2>" + number + "</h2>");
    run();
    $(".question").text("Chance the Rapper wears an iconic hat, what number is on the front?");
    $(".answers").html("<p>a. 4</p>" + "<br>" + "<p>b. 10</p>" + "<br>" + "<p>c. 3</p>" + "</br>" + "<p>d. 1/3</p>");

    $(".answers").on("click", function() {
        q2();
    })
}

function q2() {
    // $(".timer").text("You have 15 seconds for this question");
    $(".question").text("Which of the following rappers won a Nobel Prize in Literature?");
    $(".answers").html("<p>a. Lil Pump</p>" + "<br>" + "<p>b. Kendrick Lamar</p>" + "<br>" + "<p>c. J. Cole</p>" + "</br>" + "<p>d. Coolio</p>");

    $(".answers").on("click", function() {
        q3();
    })
}

function q3() {
    // $(".timer").text("You have 15 seconds for this question");
    $(".question").text("'Scalamoosh, Scalamoosh, will you do the fandango' is a famous lyric from which song?");
    $(".answers").html("<p>a. Bohemian Rhapsody</p>" + "<br>" + "<p>b. God's Plan</p>" + "<br>" + "<p>c. Romanian Phapody</p>" + "</br>" + "<p>d. Stairway to Heaven</p>");

    $(".answers").on("click", function() {
        q4();
    })
}

function q4() {
    // $(".timer").text("You have 15 seconds for this question");
    $(".question").text("Who loves it when you call him big Poppa?");
    $(".answers").html("<p>a. Pac</p>" + "<br>" + "<p>b. Kenny Chesneyr</p>" + "<br>" + "<p>c. Notorious B.I.G.</p>" + "</br>" + "<p>d. Mason Ramsey</p>");

    $(".answers").on("click", function() {
        q5();
    })
}

function q5() {
    // $(".timer").text("You have 15 seconds for this question");
    $(".question").text("What famous actor is also the lead singer for 30 Seconds to Mars?");
    $(".answers").html("<p>a. Millie Bobbie Brown</p>" + "<br>" + "<p>b. Jared Leto</p>" + "<br>" + "<p>c. Helen Meren</p>" + "</br>" + "<p>d. Seth Rogan</p>");

    $(".answers").on("click", function() {
        q6();
    })
}

function q6() {
    // $(".timer").text("You have 15 seconds for this question");
    $(".question").text("Imma let you finish, but who had the best music video of all time?");
    $(".answers").html("<p>a. T-Swift</p>" + "<br>" + "<p>b. Rebecca Black</p>" + "<br>" + "<p>c. Ye</p>" + "</br>" + "<p>d. Bey</p>");

    $(".answers").on("click", function() {
        stop();
    })
}

// function stop() {
//     $(".container").text("Your time is up");
// }

