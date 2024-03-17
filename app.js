function populate() {
    if(quiz.isEnded()) {
        showScores();
        if(quiz.score<=4){
            const newButton = document.createElement('button');
            newButton.classList.add('btn')
            newButton.textContent = 'Try Again';
            newButton.onclick = function() {
                location.href = "lev1.html";
            };

            document.getElementById('quiz').appendChild(newButton);
        }
        else{
            const newButton = document.createElement('button');
            newButton.classList.add('btn')
            newButton.textContent = 'Next Level';
            document.getElementById('quiz').appendChild(newButton);
        }
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Identify the sign<br> <img src='pic1 (1).jpg'/></br>", ["A", "D","N", "G"], "G"),
    new Question("Identify the sign<br> <img src='pic2.jpg'/></br>", ["E","B","L", "C"], "B"),
    new Question("Identify the sign<br> <img src='pic3.jpg'/></br>", ["Y", "G","K","S"], "Y"),
    new Question("Identify the sign<br> <img src='pic4.jpg'/></br>", ["Q", "W","T","I"], "T"),
    new Question("Identify the sign<br> <img src='pic5.jpg'/></br>", ["O","R","E", "P"], "R"),
        

];


var quiz = new Quiz(questions);


populate();
