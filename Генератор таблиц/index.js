var el = document.body;
var ok = el.children[0];
var arr = [{
    name: 'Ivan',
    wins: parseInt(Math.random() * 10.5),
    loses: parseInt(Math.random() * 10.5),
}, {
    name: 'Sanya',
    wins: parseInt(Math.random() * 10),
    loses: parseInt(Math.random() * 10),
}, {
    name: 'Lexa',
    wins: parseInt(Math.random() * 10),
    loses: parseInt(Math.random() * 10),
}];

function add_gamer(name) {
    var buffer = {
        name: name,
        wins: parseInt(Math.random() * 10),
        loses: parseInt(Math.random() * 10),
    }
    arr.push(buffer);
    return arr;
}

function delete_gamer(name) {
    for (var i = 0; i < arr.length; i++) {
        var index = arr.name.indexOf(name);
        return index;
    }
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
add_gamer('Sanyochek');
add_gamer('Sanyochek');
add_gamer('Sanyochek');
add_gamer('Sanyochek');
tr_genery();