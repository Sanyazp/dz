function genery_figure() {
    var type = prompt('Введите тип фигуры', 'Прямоугольник, треугольник, ромб, квадрат');
    if (type === 'квадрат') {
        var heigth = prompt("Введите сторону квадрата");
        document.body.innerHTML += `
        <style>
        
        <div class="kvadrat">
        </div>

        </style>
        `;
    }

}