class Player {
    constructor(){
        this.name = null;
        this.distance = 0;
        this.px = 0;

        this.index = null;
    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }
    
    getSkin1(){
        var skinPlrRef = database.ref('players/player1/skin');
            skinPlrRef.on("value",function(data){
            skinp1 = data.val();
        })
    }
    getSkin2(){
        var skinPlrRef = database.ref('players/player2/skin');
            skinPlrRef.on("value",function(data){
            skinp2 = data.val();
        })
    }
    getSkin3(){
        var skinPlrRef = database.ref('players/player3/skin');
            skinPlrRef.on("value",function(data){
            skinp3 = data.val();
        })
    }
    getSkin4(){
        var skinPlrRef = database.ref('players/player4/skin');
            skinPlrRef.on("value",function(data){
            skinp4 = data.val();
        })
    }
    


    updateCount(count){
        database.ref('/').update({
            playerCount: count

        });
    }

    update(){
        var playerindex = "players/player"+ this.index;
        database.ref(playerindex).set({
            name: this.name,
            distance: this.distance,
            px: this.px,
            skin:skin
            
        });
        namee = this.name;
    }
    updatekill(){
        var playerindex = "players";
        database.ref(playerindex).set({
            player1:0,
            
        });
    }
    reset(){
        database.ref("/").update({
            gameState: 0,  
        });
        database.ref("/").update({
            playerCount: 0,  
        });
        database.ref("/").update({
            players: 0,  
        });
    
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val();
        })
    }


}

//< >