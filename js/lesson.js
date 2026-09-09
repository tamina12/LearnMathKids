let currentQuestion = 0;
let xp = 0;

const questions = [
    {
        question: "7 + 5 = ?",
        answers: [10, 12, 13, 15],
        correct: 12
    },

    {
        question: "9 + 6 = ?",
        answers: [14, 15, 16, 17],
        correct: 15
    },

    {
        question: "8 + 7 = ?",
        answers: [13, 14, 15, 16],
        correct: 15
    },

    {
        question: "12 + 5 = ?",
        answers: [15, 16, 17, 18],
        correct: 17
    },

    {
        question: "14 + 6 = ?",
        answers: [18, 19, 20, 21],
        correct: 20
    }
];


function checkAnswer(answer) {

    const correctAnswer = questions[currentQuestion].correct;

    const feedback = document.getElementById("feedback");
    const nextButton = document.getElementById("nextButton");

    const buttons = document.querySelectorAll(".answer");

    buttons.forEach(button => {
        button.disabled = true;
    });


    if (answer === correctAnswer) {

        xp += 10;

        document.getElementById("xp").textContent = xp;

        feedback.textContent = "🎉 Great job! +10 XP";
        feedback.className = "feedback correct";

    } else {

        feedback.textContent = "💡 Almost! Try the next one.";
        feedback.className = "feedback wrong";
    }

    nextButton.style.display = "block";
}


function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        finishLesson();

        return;
    }

    loadQuestion();
}


function loadQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        currentQuestion + 1;

    document.getElementById("question").textContent =
        question.question;


    const buttons = document.querySelectorAll(".answer");

    buttons.forEach((button, index) => {

        button.textContent = question.answers[index];

        button.disabled = false;

        button.onclick = function () {
            checkAnswer(question.answers[index]);
        };

    });


    document.getElementById("feedback").textContent = "";

    document.getElementById("feedback").className =
        "feedback";


    document.getElementById("nextButton").style.display =
        "none";


    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    document.getElementById("lessonProgress").style.width =
        progress + "%";
}


function finishLesson() {

    document.querySelector(".question-card").innerHTML = `

        <div class="completion">

            <div class="completion-icon">
                🏆
            </div>

            <h1>Adventure complete!</h1>

            <p>
                You finished the lesson!
            </p>

            <div class="final-xp">
                ⭐ ${xp} XP
            </div>

            <a href="dashboard.html" class="hero-button">
                Back to dashboard
            </a>

        </div>

    `;
}
