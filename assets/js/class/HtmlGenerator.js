class HtmlGenerator {
    viewGame(games, dom){
        for (const el of games){
            //initialisation des données de chaque match
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
            dom.innerHTML += '<li id="'+el.id+'"><img src="' + logoA + '" width=80/>' + teamA + "   " + scoreA + " - " + scoreB + "   " + teamB + '<img src="' + logoB + '" width=80/>' + statement + '</li>';
            
        }
    }
    
    viewStat(game, dom){
        for (let i = 0; i < game.length; i++){
            
        let homeFg = game[0].statistics[0].fgm +"/"+game[0].statistics[0].fga;
        let homeFgP = game[0].statistics[0].fgp;
        let homeFt = game[0].statistics[0].ftm +"/"+game[0].statistics[0].fta;
        let homeFtP = game[0].statistics[0].ftp;
        let homeTp = game[0].statistics[0].tpm +"/"+game[0].statistics[0].tpa;
        let homeTpP = game[0].statistics[0].tpp;
        let homeOffReb = game[0].statistics[0].offReb;
        let homeDefReb = game[0].statistics[0].defReb;
        let homeReb = game[0].statistics[0].totReb;
        let homeAssits = game[0].statistics[0].assists;
        let homeFouls = game[0].statistics[0].pFouls;
        let homeSteals = game[0].statistics[0].steals;
        let homeTurnovers = game[0].statistics[0].turnovers;
        let homeBlocks = game[0].statistics[0].blocks;
        
        let visitFg = game[1].statistics[0].fgm +"/"+game[1].statistics[0].fga;
        let visitFgP = game[1].statistics[0].fgp;
        let visitFt = game[1].statistics[0].ftm +"/"+game[1].statistics[0].fta;
        let visitFtP = game[1].statistics[0].ftp;
        let visitTp = game[1].statistics[0].tpm +"/"+game[1].statistics[0].tpa;
        let visitTpP = game[1].statistics[0].tpp;
        let visitOffReb = game[1].statistics[0].offReb;
        let visitDefReb = game[1].statistics[0].defReb;
        let visitReb = game[1].statistics[0].totReb;
        let visitAssits = game[1].statistics[0].assists;
        let visitFouls = game[1].statistics[0].pFouls;
        let visitSteals = game[1].statistics[0].steals;
        let visitTurnovers = game[1].statistics[0].turnovers;
        let visitBlocks = game[1].statistics[0].blocks;
        }
    }
}

export default HtmlGenerator