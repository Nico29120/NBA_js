import HtmlGenerator from './HtmlGenerator.js';

class FetchData{
    
    async getGames(gameDate,options){
        let getGame = await fetch(`https://api-nba-v1.p.rapidapi.com/games?date=${gameDate}`, options);
        let content = await getGame.json();
        console.log(content.response.id)
        console.log(content.response)
        const table = [{user : "nicolas"}]
        console.log(table)
        console.log(table.user)
        for (const el of content.response){
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
            this.data = '<img src="' + logoA + '" width=80/>' + teamA + "   " + scoreA + " - " + scoreB + "   " + teamB + '<img src="' + logoB + '" width=80/>' + statement;
            
        }
        // return this.id=content.response.id
    }
    async getStats(options,id){
        let getGlobalStats = await fetch(`https://api-nba-v1.p.rapidapi.com/games/statistics?id=${id}`, options);
        let globalStats = await getGlobalStats.json();
            
            
        let homeFg = globalStats.response[0].statistics[0].fgm +"/"+globalStats.response[0].statistics[0].fga;
        let homeFgP = globalStats.response[0].statistics[0].fgp;
        let homeFt = globalStats.response[0].statistics[0].ftm +"/"+globalStats.response[0].statistics[0].fta;
        let homeFtP = globalStats.response[0].statistics[0].ftp;
        let homeTp = globalStats.response[0].statistics[0].tpm +"/"+globalStats.response[0].statistics[0].tpa;
        let homeTpP = globalStats.response[0].statistics[0].tpp;
        let homeOffReb = globalStats.response[0].statistics[0].offReb;
        let homeDefReb = globalStats.response[0].statistics[0].defReb;
        let homeReb = globalStats.response[0].statistics[0].totReb;
        let homeAssits = globalStats.response[0].statistics[0].assists;
        let homeFouls = globalStats.response[0].statistics[0].pFouls;
        let homeSteals = globalStats.response[0].statistics[0].steals;
        let homeTurnovers = globalStats.response[0].statistics[0].turnovers;
        let homeBlocks = globalStats.response[0].statistics[0].blocks;
        
        let visitFg = globalStats.response[1].statistics[0].fgm +"/"+globalStats.response[1].statistics[0].fga;
        let visitFgP = globalStats.response[1].statistics[0].fgp;
        let visitFt = globalStats.response[1].statistics[0].ftm +"/"+globalStats.response[1].statistics[0].fta;
        let visitFtP = globalStats.response[1].statistics[0].ftp;
        let visitTp = globalStats.response[1].statistics[0].tpm +"/"+globalStats.response[1].statistics[0].tpa;
        let visitTpP = globalStats.response[1].statistics[0].tpp;
        let visitOffReb = globalStats.response[1].statistics[0].offReb;
        let visitDefReb = globalStats.response[1].statistics[0].defReb;
        let visitReb = globalStats.response[1].statistics[0].totReb;
        let visitAssits = globalStats.response[1].statistics[0].assists;
        let visitFouls = globalStats.response[1].statistics[0].pFouls;
        let visitSteals = globalStats.response[1].statistics[0].steals;
        let visitTurnovers = globalStats.response[1].statistics[0].turnovers;
        let visitBlocks = globalStats.response[1].statistics[0].blocks;
    }
}
export default FetchData