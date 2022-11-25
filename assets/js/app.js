import ApiConnect from './class/ApiConnect.js'
import FetchNba from './class/FetchNba.js'
import HtmlGenerator from './class/HtmlGenerator.js'

document.addEventListener('DOMContentLoaded',function(){
    
    const options = new ApiConnect
    // récupération de la date
    const gameDate = document.getElementById('gameDate');
    const form = document.getElementById('form');
    
    form.addEventListener('submit',async (e) => {
        // récupération et affichage des matchs en fonction de la date choisi
        e.preventDefault();
        const ul = document.getElementById('gameList');
        // reset de la liste des matchs lors d'un changement de date
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        const gamesData = new FetchNba();
        const games = await gamesData.getGames(gameDate.value,options.param);
        const htmlGenerator = new HtmlGenerator();
        htmlGenerator.viewGame(games, ul);
        
        // récupération et ajout d'écouteurs à chaque match
        for (let i = 0; i < games.length; i++){
            let gameId = games[i].id;
            const gameSelect = document.getElementById(`${gameId}`);
            
            // récupération et affichage du comparatif des stats de chaque équipe en fonction du match
            gameSelect.addEventListener('click', async ()=>{
                const stats = await gamesData.getStats(options.param, gameId);
                htmlGenerator.viewStat(stats, gameSelect);
                
                const globalStats = document.getElementById("globalStats");
                globalStats.classList.toggle('active');
            })
        }
        
    })
})



//     let getPlayersStats = await  fetch(`https://api-nba-v1.p.rapidapi.com/players/statistics?game=${li.id}`, options);
        //     let playersStats = await getPlayersStats.json();
            
        //     // stats de chaque joueur du matc
        //     for (const el2 of playersStats.response){
        //         let playerName = el2.player.firstname + " " + el2.player.lastname;
        //             let PlayerPoints = el2.points
        //             let playerFg = el2.fgm +"/"+el2.fga;
        //             let playerFt = el2.ftm +"/"+el2.fta;
        //             let playerTp = el2.tpm +"/"+el2.tpa;
        //             let playerOffReb = el2.offReb;
        //             let playerDefReb = el2.defReb;
        //             let playerAssits = el2.assists;
        //             let playerFouls = el2.pFouls;
        //             let playerteals = el2.steals;
        //             let playerTurnovers = el2.turnovers;
        //             let playerBlocks = el2.blocks;
        //         if(el2.team.id === el.teams.visitors.id){
                    
        //         }
        //         if(el2.team.id === el.teams.home.id){
                    
        //         }
        //     }
        //     gameSelect.addEventListener('click', ()=>{
        //     	gameStatTable.classList.toggle('active');
            	
        // })