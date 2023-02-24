let questionsGeographic = [{
    "question": "what is the highest mountain?",
    "answer_1": "Mount everest",
    "answer_2": "Zugspitze",
    "answer_3": "Tirich Mir",
    "answer_4": "K2",
    "right_answer": 1

},
{
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
let questionsHistory = [{
    "question": "what is the highest Test?",
    "answer_1": "Mount everest Test",
    "answer_2": "Zugspitze Test",
    "answer_3": "Tirich Mir Test",
    "answer_4": "K2 Test",
    "right_answer": 1

},
{
    "question": "what is the longes River in the world? Test2",
    "answer_1": "NilTest2",
    "answer_2": "KongoTest2",
    "answer_3": "AmazonasTest2",
    "answer_4": "DonauTest2",
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
let questionsCoding = [{
    "question": "what is the highest mountain coding?",
    "answer_1": "Mount everest coding",
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

function init(topic) {
    document.getElementById('totalQuestions').innerHTML = topic.length;
}
function showCard(){
    document.getElementById('container-content').innerHTML='';
    document.getElementById('card').style ='';
}



function questionProgress() {
    document.getElementById('CurrentQustion').innerHTML = currentQuestion + 1;
}

function defaultBorder() {
    document.getElementById('geographic').classList.remove('clicked-border');
    document.getElementById('history').classList.remove('clicked-border');
    document.getElementById('coding').classList.remove('clicked-border');

}

function borderChange(id) {
    defaultBorder();
    document.getElementById(id).classList.add('clicked-border');

}


function renderTask(topic) {

    if (currentQuestion >= topic.length) {
        document.getElementById('question').innerHTML = '';
        document.getElementById('questionFooter').innerHTML = '';
        document.getElementById('taskContainer').innerHTML = `
    <div class="endgame">
    <h2>Du hast alle Fragen beantwortet. Du hattest ${rightAnswers}Antworten richtig und ${wrongAnswers} falsch.</h2>
    
    <span>${rightAnswers}/${topic.length}</span>
    </div>
    
    `;

    } else {
        let percent= (currentQuestion+1)/topic.length;
        percent = Math.round(percent*100);
        document.getElementById('progress-bar').innerHTML =`${percent}%`;
        document.getElementById('progress-bar').style = `width:${percent}%`;

        document.getElementById('question').innerHTML = topic[currentQuestion]['question'];
        document.getElementById('answer1').innerHTML = topic[currentQuestion]['answer_1'];
        document.getElementById('answer2').innerHTML = topic[currentQuestion]['answer_2'];
        document.getElementById('answer3').innerHTML = topic[currentQuestion]['answer_3'];
        document.getElementById('answer4').innerHTML = topic[currentQuestion]['answer_4'];
    }
}


function selectAnswer(answer,topic) {
    let lastChar = answer.at(-1);
    let idOfRightAnswer = `answer${topic[currentQuestion]['right_answer']}`;
    stopClicking();
    if (topic[currentQuestion]['right_answer'] == lastChar) {
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

function stopClicking(){
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
        document.getElementById('next').disabled = true;
        document.getElementById('next').innerHTML = 'Ergebnis';
        ;

    } else {
        document.getElementById('next').disabled = true;
        resetAnswers();
        renderTask(topic);
        if (currentQuestion != topic.length) {
            questionProgress();
        }

    }
}

// function templateCard(topic) {
//     document.getElementById('container-content').innerHTML +=
//         `
//     <div class="card">
//     <img class="img-size" src="img/quizz.jpg">
//     <div class="bar" id="bar"></div>
//     <h2 id="question">Question</h2>
//     <div id="taskContainer" class="link-container">
//         <div class="answers" id="answer1" onclick=" selectAnswer('answer1',topic)">Antwort_1</div>
//         <div class="answers" id="answer2" onclick=" selectAnswer('answer2',topic)">Antwort_1</div>
//         <div class="answers" id="answer3" onclick=" selectAnswer('answer3',topic)">Antwort_1</div>
//         <div class="answers" id="answer4" onclick=" selectAnswer('answer4',topic)">Antwort_1</div>
//     </div>
    
//     <div id="questionFooter" class="question-footer">
   
//         <span>
//             <b id="CurrentQustion">1</b> von <b id="totalQuestions"></b>
//         </span>
//         <button class="next" id="next" disabled onclick="nextQuestion()">Next Question</button>


//     </div>

// </div>
//     `;

// }