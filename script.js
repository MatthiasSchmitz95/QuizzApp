let questions=[{
    "question":"what is the highest mountain?",
    "answer_1":"Mount everest",
    "answer_2":"Zugspitze",
    "answer_3":"Tirich Mir",
    "answer_4":"K2",
    "right_answer":1

},
{
    "question":"what is the longes River in the world?",
    "answer_1":"Nil",
    "answer_2":"Kongo",
    "answer_3":"Amazonas",
    "answer_4":"Donau",
    "right_answer":3

},
{
    "question":"Who created Javascript?",
    "answer_1":"Mount everest",
    "answer_2":"Brendan Eich",
    "answer_3":"Håkon Wium Lie",
    "answer_4":"Junus Ergin",
    "right_answer":2

}]

function intit(){
    document.getElementById('question-footer').innerHTML = questions.length;
    

}