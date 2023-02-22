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
let currentQuestion = questions[0];

function init() {
    document.getElementById('question-footer').innerHTML = questions.length;
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
    document.getElementById('container-content').innerHTML += `
    <div class="card">
    <img class="img-size" src="img/quizz.jpg">
    <h2 id="question">Question</h2>
    <div class="link-container">
        <a id="answer1" onclick="selectAnswer('answer1');return false;">Antwort_1</a>
        <a id="answer2" onclick="selectAnswer('answer2');return false;">Antwort_1</a>
        <a id="answer3" onclick="selectAnswer('answer3');return false;">Antwort_1</a>
        <a id="answer4" onclick="selectAnswer('answer4');return false;">Antwort_1</a>
    </div>
    <div class="question-footer">
        <span>
            <b>1</b> von <b id="question-footer">${questions.length}</b>
        </span>
        <button>Next Question</button>


    </div>

</div>
    `;

}



function renderTask(question, answer1, answer2, answer3, answer4) {
    document.getElementById(question).innerHTML = currentQuestion['question'];
    document.getElementById(answer1).innerHTML = currentQuestion['answer_1'];
    document.getElementById(answer2).innerHTML = currentQuestion['answer_2'];
    document.getElementById(answer3).innerHTML = currentQuestion['answer_3'];
    document.getElementById(answer4).innerHTML = currentQuestion['answer_4'];



}

function selectAnswer(answer) {
    let lastChar = answer.at(-1);
    let idOfRightAnswer = `answer${currentQuestion['right_answer']}`;
    if (currentQuestion['right_answer'] == lastChar) {
        console.log('richtige Antwort');
         document.getElementById(answer).classList.add('right-answer');
        // renderQuestionCard();
    }
    else {
        document.getElementById(answer).classList.add('wrong-answer');
        document.getElementById(idOfRightAnswer).classList.add('right-answer');
        // renderQuestionCard();
        console.log('falsche Antwort');
    }


}