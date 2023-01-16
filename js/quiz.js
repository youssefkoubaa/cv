const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "How do you select elements with class name 'test'?",
        a: "#test ",
        b: ".test  ",
        c: "test",
        d: "*test",
        correct: "b",
    },
    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        a: "In the <head> section  ",
        b: "In the <body> section",
        c: "At the end of the document",
        correct: "a ",
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        a: "styles  ",
        b: "font",
        c: "class",
        d: "style  ",
        correct: "d",
    },
    {
        question: "Which is the correct CSS syntax?",
        a: "body:color=black;  ",
        b: "{body:color=black;}",
        c: "{body;color:black;}",
        d: "body {color: black;}  ",
        correct: "d",
    },
    {
        question: "How do you insert a comment in a CSS file?",
        a: "// this is a comment  ",
        b: "// this is a comment //",
        c: "/* this is a comment */  ",
        d: "' this is a comment",
        correct: "c",
    },
    {
        question: "Which CSS property controls the text size?",
        a: "text-size",
        b: "font-size  ",
        c: "font-style",
        d: "text-style",
        correct: "b",
    },
    {
        question: "What is the default value of the position property?",
        a: "static    ",
        b: "absolute",
        c: "fixed ",
        d: "relative",
        correct: "a  ",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Recharger</button>
           `
       }
    }
})