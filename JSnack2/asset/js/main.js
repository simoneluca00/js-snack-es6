// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console

const footballTeams = [
    {
        'nome': 'Inter',
        'puntiFatti': 0,
        'falliSubiti': 0
    },

    {
        'nome': 'Milan',
        'puntiFatti': 0,
        'falliSubiti': 0
    },

    {
        'nome': 'Juventus',
        'puntiFatti': 0,
        'falliSubiti': 0
    },

    {
        'nome': 'Napoli',
        'puntiFatti': 0,
        'falliSubiti': 0
    },

    {
        'nome': 'Atalanta',
        'puntiFatti': 0,
        'falliSubiti': 0
    },

    {
        'nome': 'Fiorentina',
        'puntiFatti': 0,
        'falliSubiti': 0
    },

    {
        'nome': 'Roma',
        'puntiFatti': 0,
        'falliSubiti': 0
    }
]

for (let i = 0; i < footballTeams.length; i++) {
    
    let numeroRandomFalli = getRandomInt(2,60);
    let numeroRandomPunti = getRandomInt(2,100);
    
    const team = footballTeams[i];

    team.falliSubiti = numeroRandomFalli;
    team.puntiFatti = numeroRandomPunti;

}

const newArrayTeams = [];

for (let i = 0; i < footballTeams.length; i++) {
    
    const element = footballTeams[i];

    const {nome, falliSubiti} = element;

    newArrayTeams.push(
        {
            nome,
            falliSubiti
        }
    )

        
    document.getElementById('container').innerHTML += 
    `
        <li>
            La squadra
            <span style="font-weight: bold;">${nome}</span> 
            ha subito 
            <span style="font-weight: bold;">${falliSubiti}</span> 
            falli.
        </li>
    `

    console.log(`La squadra ${nome} ha subito ${falliSubiti} falli`)

}

console.log(newArrayTeams)


// funzione per generare numeri random
function getRandomInt(min, max) {
    return Math.floor((Math.random() * max)+ min);
}