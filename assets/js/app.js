import ApiConnect from './class/ApiConnect.js'
import FetchData from './class/FetchData.js'
import HtmlGenerator from './class/HtmlGenerator.js'

document.addEventListener('DOMContentLoaded',function(){
    const options = new ApiConnect
    const gameDate = document.getElementById('gameDate');
    const form = document.getElementById('form');
    
    form.addEventListener('submit',function(e){
        e.preventDefault();
        const ul = document.getElementById('gameList');
        let gamesData = new FetchData();
        let content = gamesData.getGames(gameDate.value,options.param);
        
        console.log(gamesData.data) 
        
        let li = new HtmlGenerator("li",gamesData.data,gamesData.id)
        li.createEl(ul);   
        
            //Stat par match
            
        let gamesStats = new FetchData();
        let stats = gamesStats.getStats(options.param);
        console.log(gamesStats.data)
        
        
        
            // let gameSelect = document.getElementById(`${li.id}`);
            
        //     let gameStatTable = document.createElement("table");
        //     gameStatTable.innerHTML=
        //     	`<tbody>
        //     	<tr>
        //     		<td>${homeFg}</td>
        //     		<td>2PT</td>
        //     		<td>${visitFg}</td>
        //     	</tr>
        //     	<tr>
        //     		<td>${homeFgP}</td>
        //     		<td>2PT%</td>
        //     		<td>${visitFgP}</td>
        //     	</tr>
        //     	<tr>
        //     		<td>${homeFt}</td>
        //     		<td>FT</td>
        //     		<td>${visitFt}</td>
        //     	</tr>
        //     	<tr>
        //     		<td>${homeFtP}</td>
        //     		<td>FT%</td>
        //     		<td>${visitFtP}</td>
        //     	</tr>
        //     	<tr>
        //     		<td>${homeTp}</td>
        //     		<td>3PT</td>
        //     		<td>${visitTp}</td>
        //     	</tr>
        //     	<tr>
        //     		<td>${homeTpP}</td>
        //     		<td>3PT%</td>
        //     		<td>${visitTpP}</td>
        //     	</tr>
        //     	<tr>
        //     		<td>${homeOffReb}</td>
        //     		<td>REBONDS OFF</td>
        //     		<td>${visitOffReb}</td>
        //     	</tr>
        //     	<tr>
        //     		<td>${homeDefReb}</td>
        //     		<td>REBOND DEF</td>
        //     		<td>${visitDefReb}</td>
        //     	</tr>
        //     	<tr>
        //     		<td>${homeReb}</td>
        //     		<td>REBONDS</td>
        //     		<td>${visitReb}</td>
        //     	</tr>
        //     	<tr>
        //     		<td>${homeAssits}</td>
        //     		<td>ASSISTS</td>
        //     		<td>${visitAssits}</td>
        //     	</tr>
        //     	<tr>
        //     		<td>${homeFouls}</td>
        //     		<td>FAUTES</td>
        //     		<td>${visitFouls}</td>
        //     	</tr>
        //     	<tr>
        //     		<td>${homeSteals}</td>
        //     		<td>INT</td>
        //     		<td>${visitSteals}</td>
        //     	</tr>
        //     	<tr>
        //     		<td>${homeTurnovers}</td>
        //     		<td>BP</td>
        //     		<td>${visitTurnovers}</td>
        //     	</tr>
        //     	<tr>
        //     		<td>${homeBlocks}</td>
        //     		<td>CONTRES</td>
        //     		<td>${visitBlocks}</td>
        //     	</tr>
        //     	</tbody>`;
        //     	li.append(gameStatTable);
            	
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
            
            
            
            
        // }
        
    // })()}catch(e){
        // document.write(e);
    // }
    })
})



