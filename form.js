class Form {
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.waiting = createElement('h3');
        this.skin1 = createButton('Skin 1');
        this.skin2 = createButton('Skin 2');
        this.reset = createButton('Reset');

    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
        this.waiting.hide();
        this.skin1.hide();
        this.skin2.hide();
    }
    display(){
        
        this.title.html("Juego Online");
        this.title.position((displayWidth/2)-40,0);

        this.waiting.html("Waiting for other players..."+playerCount+"/"+"4");
        this.waiting.position((displayWidth/2)-70,500);

        this.input.position((displayWidth/2)-40,(displayHeight/2)-80);
        this.button.position((displayWidth/2)+30,(displayHeight/2));

        
        this.skin1.position((displayWidth/2)-50,(displayHeight/2)+160);
        this.skin2.position((displayWidth/2)+50,(displayHeight/2)+160);
        this.reset.position((displayWidth-60),displayHeight/20);

        this.skin1.mousePressed(() =>{
            skin = 1;
        });
        this.skin2.mousePressed(() =>{
            skin = 2;
        });
        this.reset.mousePressed(() =>{
            player.reset();
        });
       
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.skin1.hide();
            this.skin2.hide();
            

            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+ player.name);
            this.greeting.position((displayWidth/2)-70,(displayHeight/4));
            this.waiting.html("Waiting for other players..."+playerCount+"/"+"4");
            starting = 0;
        });
        
    }
    
}
////< >