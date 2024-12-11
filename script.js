const questions = [
    // Perguntas fáceis
    {
        question: "A qual país pertence esta bandeira?",
        image: "bandeira.jpg",
        options: ["Portugal", "Espanha", "Itália", "França"],
        answer: 0
    },
    {
        question: "Qual é a capital da Alemanha?",
        image: "perlimpimpim.jpg",
        options: ["Munique", "Frankfurt", "Berlim", "Düsseldorf"],
        answer: 2
    },
    {
        question: "A qual país pertence este mapa?",
        image: "mapa.jpg",
        options: ["Argentina", "Brasil", "Peru", "Colômbia"],
        answer: 1
    },
    {
        question: "Em que continente fica localizada Cuba?",
        image: "cuba.jpg",
        options: ["América do Norte", "América Central", "Oceania", "Ásia"],
        answer: 1
    },
    {
        question: "Qual é a capital de Espanha?",
        image: "barça.jpg",
        options: ["Barcelona", "Madrid", "Sevilha", "Bilbao"],
        answer: 1
    },

    // Perguntas moderadas
    {
        question: "Qual destes países é conhecido como 'Terra do Sol Nascente'?",
        image: "sol.jpg",
        options: ["China", "Coreia do Sul", "Japão", "Filipinas"],
        answer: 2
    },
    {
        question: "Qual é a capital do Egito?",
        image: "piramide.jpg",
        options: ["Cairo", "Alexandria", "Luxor", "Hurghada"],
        answer: 0
    },
    {
        question: "Qual destes países tem a maior área territorial?",
        image: "canada.jpg",
        options: ["Rússia", "Canadá", "China", "Estados Unidos"],
        answer: 0
    },
    {
        question: "Qual destes rios é o mais longo do mundo?",
        image: "amazon.jpg",
        options: ["Nilo", "Amazonas", "Yangtzé", "Mississípi"],
        answer: 1
    },
    {
        question: "Qual destes países não faz fronteira com a Rússia?",
        image: "mosc.jpg",
        options: ["Turquia", "Bielorrússia", "Mongólia", "Cazaquistão"],
        answer: 0
    },

    // Perguntas desafiadoras
    {
        question: "Qual destes países nunca fez parte do Império Romano?",
        image: "roma.jpeg",
        options: ["Portugal", "França", "Alemanha", "Noruega"],
        answer: 3
    },
    {
        question: "Qual é o país mais populoso do mundo?",
        image: "india.jpg",
        options: ["Índia", "Estados Unidos", "China", "Indonésia"],
        answer: 2
    },
    {
        question: "Qual é o ponto mais alto do planeta Terra?",
        image: "ever.jpg",
        options: ["Everest", "K2", "Kilimanjaro", "Mont Blanc"],
        answer: 0
    },
    {
        question: "Qual é o deserto mais quente do mundo?",
        image: "deserto.jpg",
        options: ["Sahara", "Deserto da Arábia", "Kalahari", "Atacama"],
        answer: 0
    },
    {
        question: "Qual destes países não se situa na Ásia?",
        image: "china.jpg",
        options: ["Vietnam", "Somália", "Síria", "Bangladesh"],
        answer: 1
    },

    // Perguntas avançadas
    {
        question: "Qual é a capital da Nova Zelândia?",
        image: "nova.jpg",
        options: ["Auckland", "Christchurch", "Wellington", "Hamilton"],
        answer: 2
    },
    {
        question: "Qual país tem a maior quantidade de fusos horários?",
        image: "paris.jpg",
        options: ["Estados Unidos", "Rússia", "China", "França"],
        answer: 3
    },
    {
        question: "Qual é o maior arquipélago do mundo?",
        image: "arqui.jpg",
        options: ["Indonésia", "Filipinas", "Japão", "Maldivas"],
        answer: 0
    },
    {
        question: "Qual é o menor país do mundo por área?",
        image: "monaco.jpg",
        options: ["Mónaco", "San Marino", "Vaticano", "Liechtenstein"],
        answer: 2
    },
    {
        question: "Qual destes países tem a menor densidade populacional?",
        image: "densidade.jpg",
        options: ["Mongólia", "Groenlândia", "Namíbia", "Austrália"],
        answer: 1
    },

    // Perguntas extremamente difíceis
    {
        question: "Qual é o país com mais línguas faladas?",
        image: "papua.jpg",
        options: ["Índia", "Nigéria", "Papua Nova Guiné", "Indonésia"],
        answer: 2
    },
    {
        question: "Qual destes países conta com uma folha de plátano como símbolo da sua bandeira?",
        image: "folha.jpg",
        options: ["Hong Kong", "Nicarágua", "Albânia", "Canadá"],
        answer: 3
    },
    {
        question: "A qual país pertence esta bandeira?",
        image: "uganda.png",
        options: ["Uganda", "Etiópia", "Madagáscar", "Zimbabué"],
        answer: 0
    },
    {
        question: "Qual é a capital do Butão?",
        image: "butão.jpg",
        options: ["Thimphu", "Katmandu", "Paro", "Phuntsholing"],
        answer: 0
    },
    {
        question: "Qual é o rio que atravessa a cidade de Bagdade?",
        image: "bag.jpg",
        options: ["Tigre", "Eufrates", "Ganges", "Indo"],
        answer: 0
    }
];




let currentQuestion = 0;
let score = 0;

const questionTitle = document.getElementById("question-title");
const questionImage = document.getElementById("question-image");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const scoreDisplay = document.getElementById("score");

// Sons de correto e errado
const correctSound = new Audio("correct.mp3");
correctSound.volume = 0.6; // Ajuste de volume
const wrongSound = new Audio("wrong.mp3");
wrongSound.volume = 0.6;

function loadQuestion() {
    const question = questions[currentQuestion];
    questionTitle.textContent = question.question;
    questionImage.src = question.image;
    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    nextButton.classList.add("hidden");
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    const options = optionsContainer.querySelectorAll(".option");

    if (selectedIndex === question.answer) {
        options[selectedIndex].classList.add("correct");
        correctSound.play(); // Toca som correto
        score++;
    } else {
        options[selectedIndex].classList.add("wrong");
        options[question.answer].classList.add("correct");
        wrongSound.play(); // Toca som errado
    }

    options.forEach(option => (option.onclick = null));
    nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    let finalMessage = "";
    if (score === 25) {
        finalMessage = "Parabéns! Acertaste todas as perguntas! 🎉";
    } else if (score >= 20) {
        finalMessage = "Excelente! Acertaste " + score + " de 25 perguntas! 🌟";
    } else if (score >= 15) {
        finalMessage = "Bom trabalho! Acertaste " + score + " de 25 perguntas! 👍";
    } else if (score >= 10) {
        finalMessage = "Acertaste " + score + " de 25 perguntas. Ainda há espaço para melhorar! 😊";
    } else if (score >= 5) {
        finalMessage = "Acertaste " + score + " de 25 perguntas. Não desanimes! Tenta novamente! 💪";
    } else {
        finalMessage = "Não acertaste nenhuma pergunta. Mas não desistas! Tenta novamente! 🙌";
    }

    questionTitle.textContent = "Fim do Quiz!";
    questionImage.src = "animaniacs.gif"; // Caminho do GIF final
    questionImage.classList.add("end-animation");
    optionsContainer.innerHTML = `<p>${finalMessage}</p>`;
    nextButton.classList.add("hidden");

    // Botão de jogar novamente
    const retryButton = document.createElement("button");
    retryButton.textContent = "Jogar Novamente";
    retryButton.className = "retry-button";
    retryButton.addEventListener("click", restartQuiz);
    optionsContainer.appendChild(retryButton);
}

// Reinicia o quiz
function restartQuiz() {
    document.body.classList.add("fade-out");
    setTimeout(() => {
        location.reload();
    }, 1000); // Tempo da animação
}

loadQuestion();