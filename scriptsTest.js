let questionsGeography = [{
    "question": "which is the highest mountain in the world?",
    "answer_1": "Mount everest",
    "answer_2": "Zugspitze",
    "answer_3": "Tirich Mir",
    "answer_4": "K2",
    "right_answer": 1

},
{
    "question": "Which country has the longest coastline in the world?",
    "answer_1": "Russia",
    "answer_2": "Philippines",
    "answer_3": "Japan",
    "answer_4": "Canada",
    "right_answer": 4

},
{
    "question": "which is the longes River in the world?",
    "answer_1": "Nil",
    "answer_2": "Kongo",
    "answer_3": "Amazonas",
    "answer_4": "Donau",
    "right_answer": 3

},
{
    "question": "In which UK city would you find the river Clyde?",
    "answer_1": "Edinburgh",
    "answer_2": "Glasgow",
    "answer_3": "Manchester",
    "answer_4": "Birmingham",
    "right_answer": 2

},
{
    "question": "How many countries still have the shilling as currency?",
    "answer_1": "One",
    "answer_2": "Two",
    "answer_3": "Three",
    "answer_4": "Four",
    "right_answer": 4

},
{
    "question": "Which animal appears on the flag of Sri Lanka?",
    "answer_1": "A tiger",
    "answer_2": "A cow",
    "answer_3": "A lion",
    "answer_4": "A sheep",
    "right_answer": 3

}]
let questionsHistory = [{
    "question": "How many wives did Henry VIII have?",
    "answer_1": "three",
    "answer_2": "five",
    "answer_3": "six",
    "answer_4": "not enough",
    "right_answer": 3

},
{
    "question": "How long was Queen Victoria’s reign?",
    "answer_1": "52 years",
    "answer_2": "29 years",
    "answer_3": "63 years",
    "answer_4": "42 years",
    "right_answer": 3

},
{
    "question": "How old was Princess Diana when she died?",
    "answer_1": "42 years",
    "answer_2": "28 years",
    "answer_3": "31 years",
    "answer_4": "36 years",
    "right_answer": 4

},
{
    "question": "Who was the first President of the United States?",
    "answer_1": "George Washington",
    "answer_2": "William Henry Harrison",
    "answer_3": "Thomas Jefferson",
    "answer_4": "John Adams",
    "right_answer": 1

},
{
    "question": "Who was the first human to travel into space?",
    "answer_1": "Neil Amstrong",
    "answer_2": "Buzz Aldrin",
    "answer_3": "John Glenn",
    "answer_4": "Yuri Gagarin",
    "right_answer": 4

}

]
let questionsCoding = [{
    "question": "How do you find the minimum of x and y using JavaScript?",
    "answer_1": "min(x,y);",
    "answer_2": "Math.min(x,y)",
    "answer_3": "Math.min(xy)",
    "answer_4": "min(xy);",
    "right_answer": 2

},
{
    "question": "How many elements can you fit in an array?",
    "answer_1": "one",
    "answer_2": "ten",
    "answer_3": "hundred",
    "answer_4": "as many as you want",
    "right_answer": 4

},
{
    "question": "Who created Javascript?",
    "answer_1": "Yuri Gagarin",
    "answer_2": "Brendan Eich",
    "answer_3": "Håkon Wium Lie",
    "answer_4": "Junus Ergin",
    "right_answer": 2

},
{
    "question": "Which of the following writes “Hello World!” in an alert box? using JS",
    "answer_1": "alertBox(“Hello World!”);",
    "answer_2": "alert(Hello World!);",
    "answer_3": "msgAlert(“Hello World!”);",
    "answer_4": "alert(“Hello World!”);",
    "right_answer": 4

}]


let currentQuestion = 0;
let rightAnswers = 0;
let wrongAnswers = 0;
let AUDIO_SUCCESS = new Audio('sounds/success.mp3');
let AUDIO_Fail = new Audio('sounds/fail.mp3');

function defaultBorder() {
    document.getElementById('geography').classList.remove('clicked-border');
    document.getElementById('history').classList.remove('clicked-border');
    document.getElementById('coding').classList.remove('clicked-border');

}

function borderChange(id) {
    defaultBorder();
    document.getElementById(id).classList.add('clicked-border');

}

function init(topic) {
    document.getElementById('totalQuestions').innerHTML = topic.length;
}

function questionProgress() {
    document.getElementById('CurrentQustion').innerHTML = currentQuestion + 1;
}

function showCard() {
    document.getElementById('container-content').style = `display:none`;
    document.getElementById('card').style = '';
}

function renderTask(topic) {

    if (gameIsOver(topic)) {
        renderEndScreen(topic);

    } else {
        updateProgressBar(topic);
        renderQuestion(topic);

    }
}

function renderQuestion(topic){
    document.getElementById('question').innerHTML = topic[currentQuestion]['question'];
    document.getElementById('answer1').innerHTML = topic[currentQuestion]['answer_1'];
    document.getElementById('answer2').innerHTML = topic[currentQuestion]['answer_2'];
    document.getElementById('answer3').innerHTML = topic[currentQuestion]['answer_3'];
    document.getElementById('answer4').innerHTML = topic[currentQuestion]['answer_4'];
}

function updateProgressBar(topic){
    let percent = (currentQuestion ) / topic.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width:${percent}%`;
}

function gameIsOver(topic) {
    return currentQuestion >= topic.length;
}

function renderEndScreen(topic) {
    document.getElementById('card').style = `display:none`;
    document.getElementById('container-content').style = '';
    document.getElementById('share').style = '';
    document.getElementById('restartGame').style = '';
    document.getElementById('right-container').innerHTML = `
<img class="fixed" src="img/tropy.png">
<div class="endgame">
<img src="img/brain result.png">
<div class="bar">
<div class="bar progress" role="progressbar" style="width: 100%;">100%</div>
</div>
<h2>completed Quiz</h2>
<p><b>Your Score ${rightAnswers}/${topic.length}</b></p>
</div>
`;
}


function selectAnswer(answer, topic) {
    let lastChar = answer.at(-1);
    let idOfRightAnswer = `answer${topic[currentQuestion]['right_answer']}`;
    stopClicking();
    if (topic[currentQuestion]['right_answer'] == lastChar) {
        document.getElementById(answer).classList.add('right-answer');
        AUDIO_SUCCESS.play();
        rightAnswers++;
    }
    else {
        document.getElementById(answer).classList.add('wrong-answer');
        document.getElementById(idOfRightAnswer).classList.add('right-answer');
        AUDIO_Fail.play();
        wrongAnswers++;
    }
    document.getElementById('next').disabled = false;
}

function stopClicking() {
    document.getElementById('answer1').classList.add('no-pointer');
    document.getElementById('answer2').classList.add('no-pointer');
    document.getElementById('answer3').classList.add('no-pointer');
    document.getElementById('answer4').classList.add('no-pointer');
}

function resetAnswers() {
    document.getElementById('answer1').classList.remove('right-answer', 'wrong-answer', 'no-pointer')
    document.getElementById('answer2').classList.remove('right-answer', 'wrong-answer', 'no-pointer')
    document.getElementById('answer3').classList.remove('right-answer', 'wrong-answer', 'no-pointer')
    document.getElementById('answer4').classList.remove('right-answer', 'wrong-answer', 'no-pointer')
}

function nextQuestion(topic) {
    let endgame = topic.length - 1;
    currentQuestion++;
    if (currentQuestion == endgame) {
        resetAnswers();
        renderTask(topic);
        if (currentQuestion != topic.length) {
            questionProgress();
        }
        updateButton();

    } else {
        document.getElementById('next').disabled = true;
        resetAnswers();
        renderTask(topic);
        if (currentQuestion != topic.length) {
            questionProgress();
        }

    }
}

function updateButton(){
    document.getElementById('next').disabled = true;
    document.getElementById('next').innerHTML = 'Ergebnis';
    
}

function restart(topic) {
    currentQuestion = 0;
    rightAnswers = 0;
    wrongAnswers = 0;

    document.getElementById('next').innerHTML = 'Next Question';
    document.getElementById('share').style = `display:none`;
    document.getElementById('restartGame').style = `display:none`;
    document.getElementById('container-content').style = `display:none`;
    document.getElementById('card').style = '';
    renderTask(topic);
    questionProgress(topic);
    init(topic);
}

