var div = document.querySelector('div');


div.className += 'class1 class2';


function contains(class_name) {
    var index = div.className.indexOf(class_name);
    if (index >= 0) {
        return true;
    } else {
        return false;
    }
}
contains('class1'); // True
contains('class3'); // False

function add(class_name) {
    var index = div.className.indexOf(class_name);
    if (index >= 0) {
        return;
    } else {
        div.className += ' ' + class_name;
        div.className = div.className.trim();
        return;
    }
}

add('class1'); // Ничего не происходит
add('class10'); // Добавит класс, потому что такого еще нет

function remove(class_name) {
    var index = div.className.indexOf(class_name);
    if (index >= 0) {
        div.className = div.className.replace(class_name, '');
        div.className = div.className.trim();
    } else {
        return;
    }
}

remove('class1'); // Удалит класс

function toggle(class_name, bool) {
    var index = div.className.indexOf(class_name);
    if (!bool) {
        if (index >= 0) {
            remove(class_name);
        } else {
            add(class_name);
        }

    } else if (bool == true) {
        add(class_name);
    } else if (bool == false) {
        remove(class_name);
    }
}

toggle('class2'); // Удалит класс1
toggle('class1231231'); // Добавит класс 1231231

console.log(contains('class10'));
console.log(contains('class1231231'));

// Конечный результат : Классы 1 и 2, добавили класс 10, удалили класс 1, удалили класс 2, добавили 1231231
// Конечный результат : class10 class1231231
// В консоли - 
// True
// True