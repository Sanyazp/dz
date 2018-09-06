function random_jjj(a, b) { // Наше домашнее задание в начале JS ))))))
    var random1 = Math.random();
    var random = Math.floor(random1 * (a - b) + b);
    return random;
}
var i = 1; // Счетчик рекурсии функций
var img = 0; // Счетчик изображений 

var time = 0; // Чтобы первый фон применялся моментально, 
// а следующая задержка высчитывается уже в рекурсивной функции

function background_image() {
    setTimeout(function() {
        document.body.innerHTML = `
                <style>
                
                body{
                    background-image: url('${img}.jpg');
                    background-size: cover;
                }
                
                </style>
                `
        i++;
        if (i < 10) { // Проверка условий счетчика
            background_image(); // Перепризыв функции для рекурсии
            img = random_jjj(0, 10); // Случайная картинка
            time = random_jjj(60000, (60000 * 5)); // Случайное время от 1 минуты до 5 минут
        }
    }, time)
}



background_image(); // Вызов функции