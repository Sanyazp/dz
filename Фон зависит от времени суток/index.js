var now = new Date();
var hours = now.getHours();
var sec = now.getSeconds();
var mins = now.getMinutes();
var morning = '#93bcff';
var night = '#000000';
var

function bacground_swap() {
    setTimeout(function() {
        if (hours < 6 && hours > 0) {
            document.body.innerHTML = `
            <style>
            
            body{
                background-image: url('${img}.jpg');
            }
            
            </style>
            `;
        }
        document.body.innerHTML = `
                <style>
                
                body{
                    background-image: url('${img}.jpg');
                    background-size: cover;
                }
                
                </style>
                `;
        i++;
        if (i < 10) { // Проверка условий счетчика
            background_swap(); // Перепризыв функции для рекурсии
        }
    }, 60000)
}