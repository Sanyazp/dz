var line = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var random = 0;
var bufferX = 0;
var bufferO = 0;

function create_game() {
    for (var i = 0; i < line.length; i++) {
        random = Math.random();
        if (random > 0.5) {
            if (bufferX === 5) {
                line[i] = 'O';
                continue;
            }
            line[i] = 'X';
            bufferX += 1;
        } else if (random < 0.5) {
            bufferO += 1;
            if (bufferO === 4) {
                line[i] = 'X';
                continue;
            }
            line[i] = 'O';
        }
    }
}

function check_game() {
    if (line[0] === 'X' &&
        line[1] === 'X' &&
        line[2] === 'X') {
        document.body.firstChild.innerHTML += `<span style = "animation: anim1 linear 2s infinite alternate;"></span>`;
        return ("X - WIN");
    } else if (line[3] === 'X' &&
        line[4] === 'X' &&
        line[5] === 'X') {
        document.body.firstChild.innerHTML += `<span style = "animation: anim2 linear 2s infinite alternate;"></span>`;
        return ("X - WIN");
    } else if (line[6] === 'X' &&
        line[7] === 'X' &&
        line[8] === 'X') {
        document.body.firstChild.innerHTML += `<span style = "animation: anim3 linear 2s infinite alternate;"></span>`;
        return ("X - WIN");
    } else if (line[0] === 'X' &&
        line[3] === 'X' &&
        line[6] === 'X') {
        document.body.firstChild.innerHTML += `<span style = "animation: anim4 linear 2s infinite alternate;"></span>`;
        return ("X - WIN");
    } else if (line[1] === 'X' &&
        line[4] === 'X' &&
        line[7] === 'X') {
        document.body.firstChild.innerHTML += `<span style = "animation: anim5 linear 2s infinite alternate;"></span>`;
        return ("X - WIN");
    } else if (line[2] === 'X' &&
        line[5] === 'X' &&
        line[8] === 'X') {
        document.body.firstChild.innerHTML += `<span style = "animation: anim6 linear 2s infinite alternate;"></span>`;
        return ("X - WIN");
    } else if (line[0] === 'X' &&
        line[4] === 'X' &&
        line[8] === 'X') {
        document.body.firstChild.innerHTML += `<span style = "animation: anim7 linear 2s infinite alternate;"></span>`;
        return ("X - WIN");
    } else if (
        line[6] === 'X' &&
        line[4] === 'X' &&
        line[2] === 'X') {
        document.body.firstChild.innerHTML += `<span style = "animation: anim8 linear 2s infinite alternate;"></span>`;
        return ("X - WIN");
    } else if (line[0] === 'O' &&
        line[1] === 'O' &&
        line[2] === 'O' ||
        line[3] === 'O' &&
        line[4] === 'O' &&
        line[5] === 'O' ||
        line[6] === 'O' &&
        line[7] === 'O' &&
        line[8] === 'O' ||
        line[0] === 'O' &&
        line[3] === 'O' &&
        line[6] === 'O' ||
        line[1] === 'O' &&
        line[4] === 'O' &&
        line[7] === 'O' ||
        line[2] === 'O' &&
        line[5] === 'O' &&
        line[8] === 'O' ||
        line[0] === 'O' &&
        line[4] === 'O' &&
        line[8] === 'O' ||
        line[6] === 'O' &&
        line[4] === 'O' &&
        line[2] === 'O') {
        return 'O - Win';
    } else {
        return 'Ничья';
    }
}

create_game()

for (var y = 0; y < line.length; y++) {
    document.getElementById(`${y}`).innerHTML = line[y];
}

document.body.innerHTML += (check_game())