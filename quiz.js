let qno = 1
let scr = 0

let q1 = {
    question: "What is the capital of India?",
    op1: "1. Delhi",
    op2: "2. Mumbai",
    op3: "3. Bangalore",
    correct: 2
}

let q2 = {
    question: "What is the capital of Maharashtra?",
    op1: "1. Pune",
    op2: "2. Mumbai",
    op3: "3. Nashik",
    correct: 2
}

let q3 = {
    question: "What is the capital of Punjab?",
    op1: "1. Ludhiana",
    op2: "2. Patiala",
    op3: "3. Chandigarh",
    correct: 3
}

let ques = [q1, q2, q3]

let qEl = document.getElementById("q-el")
let QuestionEl = document.getElementById("question-el")
let o1El = document.getElementById("o1-el")
let o2El = document.getElementById("o2-el")
let o3El = document.getElementById("o3-el")

let scoreEl = document.getElementById("score-el")

qEl.innerText = "Question" + qno
QuestionEl.innerText = "" + ques[qno - 1].question
o1El.innerText = "" + ques[qno - 1].op1
o2El.innerText = "" + ques[qno - 1].op2
o3El.innerText = "" + ques[qno - 1].op3

function changeText() {
    qEl.innerText = "Question" + qno
    QuestionEl.innerText = "" + ques[qno - 1].question
    o1El.innerText = "" + ques[qno - 1].op1
    o2El.innerText = "" + ques[qno - 1].op2
    o3El.innerText = "" + ques[qno - 1].op3
}

function update_score() {
    scoreEl.innerText = "Score " + scr + "/3"
}

function update_qno() {
    if (qno == 3) { }
    else {
        qno += 1
        changeText()
    }
    update_score()
}

function opt1_click() {
    if (ques[qno - 1].correct == 1) {
        scr = scr + 1
    }

    update_qno()
    changeText()
    update_score()
}

function opt2_click() {
    if (ques[qno - 1].correct == 2) {
        scr = scr + 1
    }

    update_qno()
    changeText()
    update_score()
}

function opt3_click() {
    if (ques[qno - 1].correct == 3) {
        scr = scr + 1
    }

    update_qno()

}