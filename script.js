// PLANNING

/*

MILESTONE 2:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 3:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede (allego qualche immagine per darvi ispirazione
 */

/*
INFORMAZIONI

Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg 
*/


// # STAGING

const teamBoard = document.getElementById('teamboard');
let boardContent = ' '

// * MILESTONE 1: Creare l’array di oggetti con le informazioni fornite.


const ourTeam = [

    {
        fullName: 'Wayne Barnett' ,
        role: 'Founder & CEO' ,
        photo: "../img/wayne-barnett-founder-ceo.jpg"
    },
    {
        fullName: 'Angela Caroll',
        role: 'Chief Editor',
        photo: "../img/angela-caroll-chief-editor.jpg"
    },
    {
        fullName: 'Walter Gordon',
        role: 'Office Manager',
        photo: "../img/walter-gordon-office-manager.jpg"
    },
    {
        fullName: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: "../img/angela-lopez-social-media-manager.jpg" 
    },
    {
        fullName: 'Scott Estrada',
        role: 'Developer',
        photo: "../img/scott-estrada-developer.jpg" 
    },
    {
        fullName: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: "../img/barbara-ramos-graphic-designer.jpg" 
    },

];

// *MILESTONE 2: Stampare su console le informazioni di nome, ruolo e la stringa della foto

console.table(ourTeam);

// * MILESTONE 3: Stampare le stesse informazioni su DOM sottoforma di stringhe

// # OUTPUT 

for (let i = 0; i < ourTeam.length; i++){
    let teamMember = ourTeam[i];

    boardContent += 
    `<div class="col">
        <div class = "card">
            <ul>
            <img src= ${teamMember.photo} alt="team_member_photo_${i}">
            <li><h2> ${teamMember.fullName} </h2></li>
            <li><h4> ${teamMember.role} </h4></li>
            </ul>
        </div>
    </div>`

}

teamBoard.innerHTML = boardContent;



// for (let i = 0; i < membersNumber; i++) {
    //     let teamMember = ourTeam[i];
    
    //     teamMember = {
        //         name: ' ',
        //         role: ' ',
        //         photo: ' '
        //     }
        
        //     ourTeam.push(teamMember);
        // }
        
      //  ourTeam[0].teamMember = 'Wayne Barnett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg';
        
        //console.log(ourTeam);