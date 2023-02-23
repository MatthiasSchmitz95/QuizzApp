let questions = [{
    "question": "what is the highest mountain?",
    "answer_1": "Mount everest",
    "answer_2": "Zugspitze",
    "answer_3": "Tirich Mir",
    "answer_4": "K2",
    "right_answer": 1

},
{
    "question": "what is the longes River in the world?",
    "answer_1": "Nil",
    "answer_2": "Kongo",
    "answer_3": "Amazonas",
    "answer_4": "Donau",
    "right_answer": 3

},
{
    "question": "Who created Javascript?",
    "answer_1": "Mount everest",
    "answer_2": "Brendan Eich",
    "answer_3": "Håkon Wium Lie",
    "answer_4": "Junus Ergin",
    "right_answer": 2

}]
let currentQuestion = 0;
let rightAnswers = 0;
let wrongAnswers = 0;


function init() {
    document.getElementById('totalQuestions').innerHTML = questions.length;
}

function questionProgress() {
    document.getElementById('CurrentQustion').innerHTML = currentQuestion + 1;
}

function defaultBorder() {
    document.getElementById('geographic').classList.remove('clicked-border');
    document.getElementById('history').classList.remove('clicked-border');
    document.getElementById('codeing').classList.remove('clicked-border');

}

function borderChange(id) {
    defaultBorder();

    document.getElementById(id).classList.add('clicked-border');

}

function renderQuestionCard() {
    document.getElementById('container-content').innerHTML = '';
    templateCard();
}


function renderTask() {

    if (currentQuestion >= questions.length) {
        document.getElementById('question').innerHTML = '';
        
        document.getElementById('questionFooter').innerHTML = '';
        document.getElementById('taskContainer').innerHTML = `
    <div class="endgame">
    <h2>Du hast alle Fragen beantwortet. Du hattest ${rightAnswers}Antworten richtig und ${wrongAnswers} falsch.</h2>
    
    <span>${rightAnswers}/${questions.length}</span>
    </div>
    
    `;

    } else {
        document.getElementById('question').innerHTML = questions[currentQuestion]['question'];
        document.getElementById('answer1').innerHTML = questions[currentQuestion]['answer_1'];
        document.getElementById('answer2').innerHTML = questions[currentQuestion]['answer_2'];
        document.getElementById('answer3').innerHTML = questions[currentQuestion]['answer_3'];
        document.getElementById('answer4').innerHTML = questions[currentQuestion]['answer_4'];
    }
}


function selectAnswer(answer) {
    let lastChar = answer.at(-1);
    let idOfRightAnswer = `answer${questions[currentQuestion]['right_answer']}`;
    if (questions[currentQuestion]['right_answer'] == lastChar) {

        document.getElementById(answer).classList.add('right-answer');
        rightAnswers++;

    }
    else {
        document.getElementById(answer).classList.add('wrong-answer');
        document.getElementById(idOfRightAnswer).classList.add('right-answer');
        wrongAnswers++;

    }
    document.getElementById('next').disabled = false;
   

}

function resetAnswers() {
    document.getElementById('answer1').classList.remove('right-answer', 'wrong-answer')
    document.getElementById('answer2').classList.remove('right-answer', 'wrong-answer')
    document.getElementById('answer3').classList.remove('right-answer', 'wrong-answer')
    document.getElementById('answer4').classList.remove('right-answer', 'wrong-answer')


}

function nextQuestion() {
    let endgame = questions.length - 1;
    currentQuestion++;

     if (currentQuestion == endgame) {
         resetAnswers();
         renderTask();
         if (currentQuestion!=questions.length) {
            questionProgress();
        }
        document.getElementById('next').disabled = true;
         document.getElementById('next').innerHTML= 'Ergebnis';        
     ;

     } else {
        document.getElementById('next').disabled = true;
        resetAnswers();
        renderTask();
        if (currentQuestion!=questions.length) {
            questionProgress();
        }
        
    }
}

function templateCard() {
    document.getElementById('container-content').innerHTML +=
        `
    <div class="card">
    <img class="img-size" src="img/quizz.jpg">
    <h2 id="question">Question</h2>
    <div id="taskContainer" class="link-container">
        <div class="answers" id="answer1" onclick=" selectAnswer('answer1');return false;">Antwort_1</div>
        <div class="answers" id="answer2" onclick=" selectAnswer('answer2');return false;">Antwort_1</div>
        <div class="answers" id="answer3" onclick=" selectAnswer('answer3');return false;">Antwort_1</div>
        <div class="answers" id="answer4" onclick=" selectAnswer('answer4');return false;">Antwort_1</div>
    </div>
    <div id="questionFooter" class="question-footer">
        <span>
            <b id="CurrentQustion">1</b> von <b id="totalQuestions">${questions.length}</b>
        </span>
        <button class="next" id="next" disabled onclick="nextQuestion()">Next Question</button>


    </div>

</div>
    `;

}