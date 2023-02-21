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

function renderQuestion() {
    
    document.getElementById('container-content').innerHTML = '';
    document.getElementById('container-content').innerHTML += `
    <div class="card">
    <img src="">
    <h2>Question</h2>
    <div>
        <a href="">Antwort_1</a>
        <a href="">Antwort_1</a>
        <a href="">Antwort_1</a>
        <a href="">Antwort_1</a>
    </div>
    <div class="question-footer">
        <span>
            <b>1</b>von<b id="question-footer">${questions.length}</b>
        </span>
        <button>Next Question</button>


    </div>

</div>
    
    
    
    `;
       
}