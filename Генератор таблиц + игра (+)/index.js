var name = prompt("Введите имя!"); // Имя пользователя 
var comp_number = parseInt(Math.random() * 10.5); // Рандом число от 0 до 10
var obj = JSON.parse(localStorage.getItem(name)) || { // Получаем данные игрока по имени, или создаем
    name: name,
    wins: 0,
    loses: 0
};
var wins = obj.wins;
var loses = obj.loses;
for (var i = 0; i < 3; i++) {
    var user_number = +prompt("Попробуйте угадать число, которое загадал компьютер ( от 0 до 10 ) ");
    if (user_number === comp_number) {
        wins++; // Увеличили счетчик побед
        localStorage.setItem(name, JSON.stringify({
                name: name,
                wins: wins,
                loses: loses
            })) // Сохранили результат в localstorage
        alert("Вы выиграли, ваш результат сохранен");
        break;
    } else if (i === 2) {
        loses++; // Увеличили счетчик Проигрышей
        localStorage.setItem(name, JSON.stringify({
                name: name,
                wins: wins,
                loses: loses
            })) // Сохранили результат в localstorage
        alert("Вы проиграли, ваш результат сохранен");
    } else {
        alert("Неверно, у вас еще попыток - " + (2 - i));
    }
}

var arr = []; // Создаем массив объектов пользователей

function forEachKey() { // Перебирает все ключи в локальном хранилище и пушит в массив
    for (var i = 0; i < localStorage.length; i++) {
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
}
forEachKey(); // Вызов функции

var el = document.body;
var ok = el.children[0];

function add_gamer(name) {
    var buffer = {
        name: name,
        wins: parseInt(Math.random() * 10),
        loses: parseInt(Math.random() * 10),
    }
    arr.push(buffer);
    return arr;
}


function tr_genery() {
    ok.children[0].innerHTML += `
        <tr>
        <td>Name</td>
        <td>Win</td>
        <td>Lose</td>
        <td>Winrate</td>
        </tr> `;
    for (var i = 0; i < arr.length; i++) {
        ok.children[1].innerHTML += `
        <tr>
        <td>${arr[i].name}</td>
        <td>${arr[i].wins}</td>
        <td>${arr[i].loses}</td>
        <td>${parseInt(arr[i].wins / (arr[i].wins + arr[i].loses) * 100)} % </td>
        </tr> `;
    }
}
tr_genery();