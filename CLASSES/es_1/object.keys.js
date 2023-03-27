let rubrica = {
        utente1 : {
            nome : 'Antonio',
            cognome : 'L abbate',
            telefono : 3464709119,
            indirizzo : {
                casa : 'via caso 1'
            } 
        },
        utente2 : {
            nome : 'Luca',
            cognome : 'Baiada',
            telefono : 3463509178,
            indirizzo : {
                casa : 'via caso 2'
            }
        },
        utente3 : {
            nome : 'Stefano',
            cognome : 'Loconsole',
            telefono : 3464705487,
            indirizzo : {
                casa : 'via caso 3'
            }
        },
        utente4 : {
            nome : 'Stefano',
            cognome : 'Loconsole',
            telefono : 3464705487,
            indirizzo : {
                casa : 'via caso 3'
            }
        }
}

Object.keys(rubrica).splice(0,3).forEach(key => delete rubrica[key])
console.log(rubrica)



