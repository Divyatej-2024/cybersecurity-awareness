const questions = [
    {
        question: "What is the strongest password?",
        choices: ["123456", "password", "P@ssw0rd123", "qwerty"],
        correctAnswer: "P@ssw0rd123"
    },
    {
        question: "What is phishing?",
        choices: ["Sending spam emails", "Tricking people to reveal personal information", "Installing malware on your system", "Setting up a fake website"],
        correctAnswer: "Tricking people to reveal personal information"
    },
    {
        question: "Why is it important to use a VPN?",
        choices: ["To make your internet speed faster", "To encrypt your internet connection", "To track your internet usage", "To avoid advertisements"],
        correctAnswer: "To encrypt your internet connection"
    },
    {
        question: "What does 'two-factor authentication' provide?",
        choices: ["An additional password", "Encryption for messages", "An extra layer of security", "Faster internet speed"],
        correctAnswer: "An extra layer of security"
    },
    {
        question: "What is malware?",
        choices: ["A type of virus", "A software that causes harm to a system", "A computer network", "A tool for faster browsing"],
        correctAnswer: "A software that causes harm to a system"
    },
    {
        question: "Which of the following is an example of a secure website?",
        choices: ["http://example.com", "ftp://example.com", "https://example.com", "www.example.com"],
        correctAnswer: "https://example.com"
    },
    {
        question: "What is a firewall used for?",
        choices: ["Preventing unauthorized access to a network", "Monitoring internet speed", "Backup of files", "Improving web page load speed"],
        correctAnswer: "Preventing unauthorized access to a network"
    },
    {
        question: "What is a strong sign of a phishing attempt?",
        choices: ["Generic email greeting", "Spelling errors", "Urgency to act immediately", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "Why should you update your software regularly?",
        choices: ["To get new features", "To fix security vulnerabilities", "To improve performance", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What does HTTPS stand for?",
        choices: ["HyperText Transfer Protocol Standard", "HyperText Transfer Protocol Secure", "Hyper Transfer Text Protocol Secure", "High Transfer Protocol Secure"],
        correctAnswer: "HyperText Transfer Protocol Secure"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const nextButton = document.getElementById('next-button');
    
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        
        let choicesHTML = '';
        currentQuestion.choices.forEach(choice => {
            choicesHTML += `
                <label>
                    <input type="radio" name="answer" value="${choice}">
                    ${choice}
                </label><br>
            `;
        });
        
        questionContainer.innerHTML = `
            <h2>${currentQuestion.question}</h2>
            ${choicesHTML}
        `;
        
        nextButton.disabled = true;
        
        // Enable the Next button only when a choice is selected
        const radioButtons = document.querySelectorAll('input[name="answer"]');
        radioButtons.forEach(button => {
            button.addEventListener('change', () => {
                nextButton.disabled = false;
            });
        });
    } else {
        displayResult();
    }
}

function displayResult() {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `You answered ${score} out of ${questions.length} questions correctly!`;
}

document.getElementById('next-button').addEventListener('click', () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    
    if (selectedAnswer) {
        const currentQuestion = questions[currentQuestionIndex];
        
        if (selectedAnswer.value === currentQuestion.correctAnswer) {
            score++;
        }
        
        currentQuestionIndex++;
        displayQuestion();
    }
});

displayQuestion();
