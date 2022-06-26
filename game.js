class Game {
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
    }

    update(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        Player.getPlayerInfo();
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
           
            }
            form = new Form();
            form.display();
        }
        

        player.getSkin1();
        player.getSkin2();
        player.getSkin3();
        player.getSkin4();
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);  

        car1.setCollider("rectangle",0,0,100,100);
        car2.setCollider("rectangle",0,0,100,100);
        car3.setCollider("rectangle",0,0,100,100);
        car4.setCollider("rectangle",0,0,100,100);

            
        
    
        cars = [car1,car2,car3,car4];
        
    
        
        
}


    play(){

        form.hide();
       //textSize(30);
        //text("Game Start",120,100);
        Player.getPlayerInfo();
        if(gameState === 1){
            if(keyIsDown(UP_ARROW)){
                camera.position.y = camera.position.y -200;
            }
            if(keyIsDown(DOWN_ARROW)){
                camera.position.y = camera.position.y +200;
            }
            if(keyIsDown(LEFT_ARROW)){
                camera.position.x = camera.position.x -200;
            }
            
            if(keyIsDown(RIGHT_ARROW)){
                camera.position.x = camera.position.x +200;
            }
            if(keyIsDown(16)){
                camera.zoom = camera.zoom + 0.01;
            }
            if(keyIsDown(17)){
                camera.zoom = camera.zoom - 0.01;
            }
            if(camera.zoom <= 0.02999999999999997 ){
                camera.zoom = 0.02999999999999997;
            }
            if(camera.zoom >= 0.24000000000000005 ){
                tzname = 40;
                posynamees = 100;
            }
            if(camera.zoom <= 0.24000000000000005 ){
                tzname = 250;
                posynamees = 300;
            }
    if(sgsstart === 1){
        player.getSkin1();
        player.getSkin2();
        player.getSkin3();
        player.getSkin4();

        if(skinp1 === 1){
            car1.addImage('car1',skin1);
        }
    
        if(skinp2 === 1){
            car2.addImage('car2',skin1);
        }
    
        if(skinp3 === 1){
            car3.addImage('car3',skin1);            
        }
    
        if(skinp4 === 1){
            car4.addImage('car4',skin1);            
        }
    
        if(skinp1 === 2){
            car1.addImage('car1',skin2);            
        }
    
        if(skinp2 === 2){
            car2.addImage('car2',skin2);
        }
    
        if(skinp3 === 2){
            car3.addImage('car3',skin2);
        }
        if(skinp4 === 2){
            car4.addImage('car4',skin2);
        }
        sgsstart = 0;
    }

    
            
            textSize(1000);
            text("Mapa" ,-500,-8000);
            }

        if(allPlayers !== undefined){
            //var display_position = 130;
            var index = 0;
            var x;
            var y;
            
            for(var plr in allPlayers){
                index = index + 1;
                x = displayWidth-allPlayers[plr].px;
                y = displayHeight-allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                fill("black");
                
            
                if(camera.zoom === 1){
                    tzname = 22;
                    posynamees = 75;

                }
                textSize(tzname);
                text(allPlayers[plr].name ,x-25,y+posynamees);
                pared1 = createSprite(-10000,0,50,20010);
                pared2 = createSprite(10000,0,50,20010);
                pared3 = createSprite(0,-9990,20000,50);
                pared4 = createSprite(0,9990,20000,50);
                car1.setCollider("rectangle",0,0,100,100);
                car2.setCollider("rectangle",0,0,100,100);
                car3.setCollider("rectangle",0,0,100,100);
                car4.setCollider("rectangle",0,0,100,100);
                /*if(keyIsDown(32)){
                    var balas = createSprite(camera.position.x,camera.position.y,10,10);
                    balas.debug=false;
                    balas.setCollider("rectangle",0,0,100,170);
                    balas.velocityX = 2;
                    balas.lifetime = width+5;
                    balasgroup.add(balas);
                  }
                  */

                
                
                if(index===player.index){
                    player.getSkin1();
                    player.getSkin2();
                    player.getSkin3();
                    player.getSkin4();

                    camera.zoom = 1;
                    tzname = 22;
                    posynamees = 75;
                    camera.position.x = cars[index-1].x;
                    camera.position.y = cars[index-1].y;
                    
                   
                    
                    
                    
                }

                
            }

        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 25;
            player.update();
        }
        if(keyIsDown(DOWN_ARROW) && player.index !== null){
            player.distance -= 25;
            player.update();
        }
        if(keyIsDown(LEFT_ARROW) && player.index !== null){
            player.px = player.px + 25;
            player.update();
        }
        if(keyIsDown(RIGHT_ARROW) && player.index !== null){
            player.px = player.px - 25;
            player.update();
        }

        if(keyIsDown(87) && player.index !== null){
            player.distance += 25;
            player.update();
        }
        if(keyIsDown(83) && player.index !== null){
            player.distance -= 25;
            player.update();
        }
        if(keyIsDown(65) && player.index !== null){
            player.px = player.px + 25;
            player.update();
        }
        if(keyIsDown(68) && player.index !== null){
            player.px = player.px - 25;
            player.update();
        }
        drawSprites();
    }


}
