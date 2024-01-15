var currentQuestion = 1;
var correctAnswers = 0;

// Функция для перехода к следующему вопросу
function nextQuestion() {
    var currentQuestionElement = document.getElementById('question' + currentQuestion);
    var answers = currentQuestionElement.querySelectorAll('input:checked');

    if (answers.length > 0) {
        checkAnswers(answers);
        currentQuestionElement.style.display = 'none';
        currentQuestion++;

        var nextQuestionElement = document.getElementById('question' + currentQuestion);

        if (nextQuestionElement) {
            nextQuestionElement.style.display = 'block';
        } else {
            showResult();
        }
    } else {
        alert('Пожалуйста, ответьте на вопрос');
    }
}

// Функция для проверки правильных ответов
function checkAnswers(answers) {
    if (currentQuestion === 1 && answers[0].value === 'a') {
        correctAnswers++;
    } else if (currentQuestion === 2 && answers.length === 1 && answers[0].value === 'a') {
        correctAnswers++;
    } else if (currentQuestion === 3 && answers.length === 1 && answers[0].value === 'a') {
        correctAnswers++;
    } else if (currentQuestion === 4 && answers.length === 1 && answers[0].value === 'a') {
        correctAnswers++;
    }
    
}

// Функция для вывода результатов
function showResult() {
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = '<h2>Результаты теста:</h2>';
    resultElement.innerHTML += '<p>Вы правильно ответили на ' + correctAnswers + ' из 4 вопросов.</p>';

    // Показываем кнопку "Вернуться на главную" после вывода результатов
    var homeButton = document.getElementById('homeButton');
    homeButton.style.display = 'block';

    // Скрываем кнопку "Далее"
    var nextButton = document.getElementById('nextButton');
    nextButton.style.display = 'none';
}

// Функция для возврата на главную страницу
function goHome() {
    window.location.href = 'index.php';
}
// Функция для открытия теста (вызывается при загрузке страницы)
window.onload = function () {
    var firstQuestionElement = document.getElementById('question1');
    firstQuestionElement.style.display = 'block';
};
