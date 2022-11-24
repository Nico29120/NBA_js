class FetchNba{
    
    async getGames(gameDate,options){
        
        let getGame = await fetch(`https://api-nba-v1.p.rapidapi.com/games?date=${gameDate}`, options);
        let content = await getGame.json();
        // console.log(content)
        return content.response;
        
    }

    
    async getStats(options,id){
        
        let getGlobalStats = await fetch(`https://api-nba-v1.p.rapidapi.com/games/statistics?id=${id}`, options);
        let globalStats = await getGlobalStats.json();
        
        return globalStats.response;
    }
}
export default FetchNba