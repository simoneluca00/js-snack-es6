// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const bicycles = [
    {
        'nome': 'Argon',
        'pesoKg': 7
    },

    {
        'nome': 'Lapierre',
        'pesoKg': 6.5
    },

    {
        'nome': 'Kuota',
        'pesoKg': 8.5
    },

    {
        'nome': 'Stelbel',
        'pesoKg': 9
    },

    {
        'nome': 'Olympia',
        'pesoKg': 6
    }
]

let pesoMinore = bicycles[0];

for (let i = 0; i < bicycles.length; i++) {
    
    // singola bicicletta (oggetto) 
    let singleBike = bicycles[i];

    if (singleBike.pesoKg < pesoMinore.pesoKg) {
        pesoMinore = singleBike;
    }
}

// destructuring chiavi dell'oggetto che ha il peso minore
let {nome,pesoKg} = pesoMinore;

// stampa della bici che ha il peso minore
document.getElementById('container').innerHTML = 
`
    La bici da corsa 
    <span style="font-weight:bold;">
        ${nome}
    </span> 
    è quella che ha un peso minore: 
    <span style="font-weight:bold;">
        ${pesoKg}
    </span> kg.
`