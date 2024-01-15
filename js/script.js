function calculateGCD() {
    const a = parseInt(document.getElementById('numberA').value);
    const b = parseInt(document.getElementById('numberB').value);
    const nokNum = document.getElementById('nok-num');
    const nodNum = document.getElementById('nod-num');

    if (!isNaN(a) && !isNaN(b) && a > 0 && b > 0) {
        nokNum.innerText = `НОК: ${a}, ${b} = ${NOK(a, b)}`;
        nodNum.innerText = `НОД: ${a}, ${b} = ${NOD(a, b)}`;
    } else {
        nokNum.innerText = 'Пожалуйста введите числа';
        nodNum.innerText = '';
    }
}
// javascript code
//вычесляет НОД
function NOD(a, b) {
    while (a != b) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }
    return (a);
}
//вычесляет НОК
function NOK(a, b) {
    return Math.abs(a * b) / NOD(a, b);
}

function copyTextToClipboard() {
    // Получаем элемент с текстом, который нужно скопировать
    var textToCopy = document.getElementById("textToCopy");

    // Создаем новый элемент для временного хранения выделенного текста
    var tempInput = document.createElement("input");
    
    // Присваиваем значение текста, который нужно скопировать
    tempInput.value = textToCopy.textContent;

    // Добавляем временный элемент в DOM
    document.body.appendChild(tempInput);

    // Выделяем текст во временном элементе
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Для поддержки мобильных устройств

    // Копируем выделенный текст в буфер обмена
    document.execCommand("copy");

    // Удаляем временный элемент из DOM
    document.body.removeChild(tempInput);
}


