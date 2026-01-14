const questions = [
    {
        question: "What is JavaScript?",
        options: ["Programming Language", "Database", "OS", "Browser"],
        answer: 0
    },
    {
        question: "Which keyword declares a variable?",
        options: ["var", "int", "float", "string"],
        answer: 0
    }
 

];

let current = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[current].question;
    document.querySelectorAll(".option").forEach((btn, index) => {
        btn.innerText = questions[current].options[index];
        btn.style.background = "#444";
        btn.disabled = false;
    });
    document.getElementById("nextBtn").style.display = "none";
}

function checkAnswer(index) {
    if(index === questions[current].answer) {
        score++;
        document.querySelectorAll(".option")[index].style.background = "green";
    } else {
        document.querySelectorAll(".option")[index].style.background = "red";
    }

    document.querySelectorAll(".option").forEach(btn => btn.disabled = true);
    document.getElementById("nextBtn").style.display = "block";
}

function nextQuestion() {
    current++;
    if(current < questions.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-container").innerHTML =
            `<h2>Your Score: ${score}/${questions.length}</h2>`;
    }
}

loadQuestion();
