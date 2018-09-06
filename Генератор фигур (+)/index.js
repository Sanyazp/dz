function genery_figure() {
    var type = prompt('Введите тип фигуры', 'Прямоугольник, треугольник, ромб, квадрат');
    if (type === 'квадрат') {
        var heigth = prompt("Введите сторону квадрата");
        var color = prompt("Введите цвет квадрата, (например - #000000) , ENTER - по умолчанию ( черный )");
        if (!color) {
            color = '#000000';
        }
        document.body.innerHTML += `
        <style>
        div{
            height: ${heigth}px;
            width: ${heigth}px;
            background: ${color};
        }

        </style>
        <div>
        </div>
        `;
    } else if (type === 'треугольник') {
        var heigth = prompt("Введите высоту треугольника");
        var width = prompt("Введите ширину треугольника");
        var color = prompt("Введите цвет треугольника, (например - #000000) , ENTER - по умолчанию ( черный )");
        if (!color) {
            color = '#000000';
        }
        document.body.innerHTML += `
        <style>
        
        div{
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 ${width/2}px ${heigth}px ${width/2}px;
            border-color: transparent transparent ${color} transparent;
        }
        </style>
        <div>
        </div>
        
        `;

    } else if (type === 'ромб') {
        var heigth = prompt("Введите большую диагональ ромба");
        var width = prompt("Введите меньшую диагональ ромба");
        var color = prompt("Введите цвет ромба, (например - #000000) , ENTER - по умолчанию ( черный )");
        if (!color) {
            color = '#000000';
        }
        document.body.innerHTML += `
        <style>
        
        div{
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 ${width/2}px ${heigth/2}px ${width/2}px;
            border-color: transparent transparent ${color} transparent;
        }
        div:last-child{
            transform: rotate(180deg);
        }
        </style>
        <div>
        </div>
        <div>
        </div>
        `;

    } else if (type === 'прямоугольник') {
        var width = prompt("Введите ширину прямоугольника");
        var heigth = prompt("Введите высоту прямоугольника");
        var color = prompt("Введите цвет прямоугольника, (например - #000000) , ENTER - по умолчанию ( черный )");
        if (!color) {
            color = '#000000';
        }
        document.body.innerHTML += `
        <style>
        div{
            height: ${heigth}px;
            width: ${width}px;
            background: ${color};
        }

        </style>
        <div>
        </div>
        `;

    } else {
        alert("Вы неправильно ввели тип фигуры");
    }
}
genery_figure();