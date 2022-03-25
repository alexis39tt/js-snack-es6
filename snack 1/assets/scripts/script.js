/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

let bikes = [
    {
        'name': 'Superspeed XR3',
        'weight': '27.3'
    },
    {
        'name': 'Bianchi Specialissima T4',
        'weight': '28.8'
    },
    {
        'name': 'Carrera SL7',
        'weight': '31.3'
    },
    {
        'name': 'Pininfarina model 2',
        'weight': '34.2'
    },
    {
        'name': 'Belador BR',
        'weight': '25.9'
    },
    {
        'name': 'Corratec CCT Evo',
        'weight': '29.6'
    },
    {
        'name': 'Boardman SLR 9.6',
        'weight': '30.5'
    },
];

let container = document.querySelector(`#container`);

for(i=0; i<bikes.length; i++){
    let {weight} = bikes[i];
    if(weight < weight[i-1]){
        container.innerHTML = `<h1>La bici più leggera pesa ${weight}kg</h1>`;
    }
}