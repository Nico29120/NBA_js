class ApiConnect{
    
    constructor(){
        this.param = {
    	    method: 'GET',
    	    headers: {
    		    'X-RapidAPI-Key': 'ad4abe0e0bmshfc3e60fbc82ae58p1180b3jsn60fba622397e',
    		    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    	    }
        };
    }
    get param(){
        return this._param;
    }
    
    set param(value){
       this._param = value
    }
}
export default ApiConnect