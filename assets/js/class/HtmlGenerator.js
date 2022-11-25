class HtmlGenerator {
    
    viewGame(games, dom){
        
        for (const el of games){
            // initialisation des données de chaque match
            let logoA = el.teams.home.logo;
            let logoB = el.teams.visitors.logo;
            let teamA = el.teams.home.name;
            let teamB = el.teams.visitors.name;
            let scoreA = el.scores.home.points;
            let scoreB = el.scores.visitors.points;
            let statement = el.status.short;
            
            //gestion du score des matchs à venir
            if (scoreA === null){
                scoreA = 0
            }
            if (scoreB === null){
                scoreB = 0
            }
            //gestion du statut des matchs
            switch(statement){
                case 1 : statement = "À venir"
                break;
                case 2 : statement = "En cours";
                break;
                case 3 : statement = "Terminé"
                break;
            }
            
            // création des li avec chaque match de la date sélectionnée
            dom.innerHTML += 
                `<li id="${el.id}">
                    <div class="gameInfo">
                        <img src="${logoA}" width="80"/>
                        <p><strong>${teamA}</strong>${scoreA}-${scoreB}<strong>${teamB}</strong></p>
                        <img src="${logoB}" width="80"/>
                        <p><em>${statement}</em></p>
                    </div>
                </li>`;
            
        }
    }
    
    viewStat(game, dom){
        
        // initialisation des stats de chaque équipe
        const teams = [
            {team: '', 'fg': '', 'fgp': ''},
            {team: '', 'fg': '', 'fgp': ''},
            ]
        
        for (let i = 0; i < game.length; i++){
            
            const stat = game[i].statistics[0]
            
            teams[i].fg = stat.fgm + " / " + stat.fga;
            teams[i].fgp = stat.fgp+"%";
        }
        // création d'une ligne de tableau en fonction de la stat voulu
        function createRaw(teams, key){
            
            const stat =
                `<tr>
                    <td>${teams[0][key]}</td>
        	        <td>${key}</td>
        		    <td>${teams[1][key]}</td>
        		</tr>`;
        		
            return stat
        }
        // création du tableau comparatif des stats de chaque équipe
        dom.innerHTML += 
                `<table id="globalStats">
                    ${createRaw(teams, "fg")}
                    ${createRaw(teams, "fgp")}
                </table>`
    }
}

export default HtmlGenerator






            //{team: '', 'fg': '', 'fgp': '', 'ft': '', 'ftp': '', 'tp': '', 'tpp': '', 'offreb': '', 'defreb': '', 'reb': '', 'assits': '', 'fouls': '', 'steals': '', 'turnovers': '','blocks': '' },
            //{team: '', 'fg': '', 'fgp': '', 'ft': '', 'ftp': '', 'tp': '', 'tpp': '', 'offreb': '', 'defreb': '', 'reb': '', 'assits': '', 'fouls': '', 'steals': '', 'turnovers': '','blocks': '' },
            
            
//initialisation des stats de l'équipe home    
    // const homeFg = game[0].statistics[0].fgm + "/" + game[0].statistics[0].fga;
    // const homeFgP = game[0].statistics[0].fgp;
    // const homeFt = game[0].statistics[0].ftm + "/" + game[0].statistics[0].fta;
    // const homeFtP = game[0].statistics[0].ftp;
    // const homeTp = game[0].statistics[0].tpm + "/" + game[0].statistics[0].tpa;
    // const homeTpP = game[0].statistics[0].tpp;
    // const homeOffReb = game[0].statistics[0].offReb;
    // const homeDefReb = game[0].statistics[0].defReb;
    // const homeReb = game[0].statistics[0].totReb;
    // const homeAssits = game[0].statistics[0].assists;
    // const homeFouls = game[0].statistics[0].pFouls;
    // const homeSteals = game[0].statistics[0].steals;
    // const homeTurnovers = game[0].statistics[0].turnovers;
    // const homeBlocks = game[0].statistics[0].blocks;

    //initialisation des stats de l'équipe visiteur
    // const visitFg = game[1].statistics[0].fgm + "/" + game[1].statistics[0].fga;
    // const visitFgP = game[1].statistics[0].fgp;
    // const visitFt = game[1].statistics[0].ftm + "/" + game[1].statistics[0].fta;
    // const visitFtP = game[1].statistics[0].ftp;
    // const visitTp = game[1].statistics[0].tpm + "/" + game[1].statistics[0].tpa;
    // const visitTpP = game[1].statistics[0].tpp;
    // const visitOffReb = game[1].statistics[0].offReb;
    // const visitDefReb = game[1].statistics[0].defReb;
    // const visitReb = game[1].statistics[0].totReb;
    // const visitAssits = game[1].statistics[0].assists;
    // const visitFouls = game[1].statistics[0].pFouls;
    // const visitSteals = game[1].statistics[0].steals;
    // const visitTurnovers = game[1].statistics[0].turnovers;
    // const visitBlocks = game[1].statistics[0].blocks;

    //création d'un tableau comparatif des stats des 2 équipes
    
    // `<table id="globalStats">
    // 	<tbody>
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
    // 	</tbody>
    // </table>`;