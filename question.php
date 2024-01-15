<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Euclidean Algorithm</title>
    <link rel="stylesheet" href="/style/question.css">
</head>

<body>

    <!-- Тест -->
    <div id="test">
        <div class="question" id="question1">
            <h2>Вопрос 1:</h2>
            <p>Что такое HTML?</p>
            <label><input type="radio" name="q1" value="a"> Язык программирования</label>
            <label><input type="radio" name="q1" value="b"> Гипертекстовая разметка</label>
            <label><input type="radio" name="q1" value="c"> Графический редактор</label>
        </div>

        <div class="question" id="question2">
            <h2>Вопрос 2:</h2>
            <p>Какие теги используются для создания таблицы в HTML?</p>
            <label><input type="checkbox" name="q2" value="a"> &lt;table&gt;</label>
            <label><input type="checkbox" name="q2" value="b"> &lt;tr&gt;</label>
            <label><input type="checkbox" name="q2" value="c"> &lt;td&gt;</label>
        </div>

        <div class="question" id="question3">
            <h2>Вопрос 3:</h2>
            <p>Что такое HTML?</p>
            <label><input type="radio" name="q3" value="a"> Язык программирования</label>
            <label><input type="radio" name="q3" value="b"> Гипертекстовая разметка</label>
            <label><input type="radio" name="q3" value="c"> Графический редактор</label>
        </div>

        <div class="question" id="question4">
            <h2>Вопрос 4:</h2>
            <p>Какие теги используются для создания таблицы в HTML?</p>
            <label><input type="checkbox" name="q4" value="a"> &lt;table&gt;</label>
            <label><input type="checkbox" name="q4" value="b"> &lt;tr&gt;</label>
            <label><input type="checkbox" name="q4" value="c"> &lt;td&gt;</label>
        </div>

        <button id="nextButton" onclick="nextQuestion()">Далее</button>
        <button id="homeButton" onclick="goHome()">Вернуться на главную</button>

        <div id="result"></div>
    </div>

    <script src="/js/quer.js"></script>
</body>

</html>