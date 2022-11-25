class FetchNba{
    
    async getGames(gameDate,options){
        // appel à l'API pour récupérer les matchs en fonction de la date choisi
        let getGame = await fetch(`https://api-nba-v1.p.rapidapi.com/games?date=${gameDate}`, options);
        let content = await getGame.json();

        return content.response;
        
    }

    
    async getStats(options,id){
        // appel à l'API pour récupérer les stats en fonction du match choisi
        let getGlobalStats = await fetch(`https://api-nba-v1.p.rapidapi.com/games/statistics?id=${id}`, options);
        let globalStats = await getGlobalStats.json();
        
        return globalStats.response;
    }
}
export default FetchNba