/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

let teams = [
    {
        'name': 'Juventus FC',
        'points': 0,
        'fouls': 0
    },
    {
        'name': 'AS Roma',
        'points': 0,
        'fouls': 0
    },
    {
        'name': 'SS Lazio',
        'points': 0,
        'fouls': 0
    },
    {
        'name': 'AC Milan',
        'points': 0,
        'fouls': 0
    },
    {
        'name': 'FC Inter',
        'points': 0,
        'fouls': 0
    },
    {
        'name': 'SSC Napoli',
        'points': 0,
        'fouls': 0
    },
    {
        'name': 'US Salernitana',
        'points': 0,
        'fouls': 0
    },
];

let teamparam = [];
let teamprint = [];
let table = document.querySelector(`#table`);

for (i = 0; i < teams.length; i++) {
    let points = Math.round(Math.random() * 100);
    let fouls = Math.round(Math.random() * 10);

    teamparam[i] = { ...teams[i], 'points': points, 'fouls': fouls };
    teamprint[i] = {
        'name': teams[i].name,
        'fouls': teamparam[i].fouls
    };
    table.innerHTML += `
    <tr>
        <td>${teamprint[i].name}</td>
        <td>${teamprint[i].fouls}</td>
    </tr>`
        
}

console.log(teamprint)