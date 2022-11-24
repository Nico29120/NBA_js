class HtmlGenerator {
    
    constructor(el,data,id=null){
        this.el = el;
        this.data = data;
        this.id = id
    }
    
    createEl(child){
        let DomEl = document.createElement(`${this.el}`);
        DomEl.id=`${this.id}`;
        DomEl.innerHTML= `${this.data}`;
        child.append(DomEl);
    }
    
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
            dom.innerHTML += '<li><img src="' + logoA + '" width=80/>' + teamA + "   " + scoreA + " - " + scoreB + "   " + teamB + '<img src="' + logoB + '" width=80/>' + statement + '</li>';
            
        }
    }
}

export default HtmlGenerator