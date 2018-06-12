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
    $(".container").text("Trivia is over! " + "Correct: " + right + " Wrong: " + wrong);
}

function q1() {
    // $(".timer").html("<h2>" + number + "</h2>");
    run();
    $(".question").text("Chance the Rapper wears an iconic hat, what number is on the front?");
    $(".answers").text("a. 4");
    $(".answers2").text("b. 3");
    $(".answers3").text("c. 20");
    $(".answers4").text("b. 1/3");

    $(".answers2").on("click", function () {
        right++;
        console.log(right);
        q2();
    });

    $(".answers").on("click", function () {
        wrong++;
        console.log(wrong);
        q2();
    });

    $(".answers3").on("click", function () {
        wrong++;
        console.log(wrong);
        q2();
    });
    
    $(".answers4").on("click", function () {
        wrong++;
        console.log(wrong);
        q2();
    });
}

function q2() {
    // $(".timer").text("You have 15 seconds for this question");
    $(".question").text("Which of the following rappers won a Nobel Prize in Literature?");
    $(".answers").text("a. Kendrick Lamar");
    $(".answers2").text("b. Lil Pump");
    $(".answers3").text("c. J. Cole");
    $(".answers4").text("b. Chance the Rapper");

    $(".answers").on("click", function () {

        right++;
        console.log(right);
        q3();
    })

    $(".answers2").on("click", function () {

        wrong++;
        console.log(wrong);
        q3();
    })

    $(".answers4").on("click", function () {

        wrong++;
        console.log(wrong);
        q3();
    })
    $(".answers3").on("click", function () {

        wrong++;
        console.log(wrong);
        q3();
    })
}

function q3() {
    // $(".timer").text("You have 15 seconds for this question");
    $(".question").text("'Scalamoosh, Scalamoosh, will you do the fandango' is a famous lyric from which song?");
    $(".answers").text("a. Romanian Phapody");
    $(".answers2").text("b. God's Plan");
    $(".answers3").text("c. Bohemian Rhapsody");
    $(".answers4").text("b. Don't Stop Believin'");

    $(".answers3").on("click", function () {

        right++;
        console.log(right);
        q4();
    });

    $(".answers").on("click", function () {

        wrong++;
        console.log(wrong);
        q4();
    });

    $(".answers2").on("click", function () {

        wrong++;
        console.log(wrong);
        q4();
    });
    $(".answers4").on("click", function () {

        wrong++;
        console.log(wrong);
        q4();
    });
}

function q4() {
    // $(".timer").text("You have 15 seconds for this question");
    $(".question").text("Who loves it when you call him big Poppa?");
    $(".answers").text("a. Pac");
    $(".answers2").text("b. Kenny Chesney");
    $(".answers3").text("c. Mason Ramsey");
    $(".answers4").text("b. Notorious B.I.G.");

    $(".answers4").on("click", function () {

        right++;
        console.log(right);
        q5();
    });

    $(".answers").on("click", function () {

        wrong++;
        console.log(wrong);
        q5();
    });

    $(".answers3").on("click", function () {

        wrong++;
        console.log(wrong);
        q5();
    });

    $(".answers2").on("click", function () {

        wrong++;
        console.log(wrong);
        q5();
    });
}

function q5() {
    // $(".timer").text("You have 15 seconds for this question");
    $(".question").text("What famous actor is also the lead singer for 30 Seconds to Mars?");
    $(".answers").text("a. Helen Meren");
    $(".answers2").text("b. Jared Leto");
    $(".answers3").text("c. Millie Bobbie Brown");
    $(".answers4").text("b. Seth Rogan");

    $(".answers2").on("click", function () {

        right++;
        console.log(right);
        q6();
    });

    $(".answers").on("click", function () {

        wrong++;
        console.log(wrong);
        q6();
    });

    $(".answers3").on("click", function () {

        wrong++;
        console.log(wrong);
        q6();
    });

    $(".answers4").on("click", function () {

        wrong++;
        console.log(wrong);
        q6();
    });
}

function q6() {
    // $(".timer").text("You have 15 seconds for this question");
    $(".question").text("Imma let you finish, but who had the best music video of all time?");
    $(".answers").text("a. Ye");
    $(".answers2").text("b. T-Swift");
    $(".answers3").text("c. Bey");
    $(".answers4").text("b. Rebecca Black");

    $(".answers3").on("click", function () {

        right++;
        console.log(right);
        stop();
    });

    $(".answers").on("click", function () {

        wrong++;
        console.log(wrong);
        stop();
    });

    $(".answers2").on("click", function () {

        wrong++;
        console.log(wrong);
        stop();
    });

    $(".answers4").on("click", function () {

        wrong++;
        console.log(wrong);
        stop();
    });

}

// function stop() {
//     $(".container").text("Your time is up");
// }

