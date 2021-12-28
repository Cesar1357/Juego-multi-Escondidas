var canvas, bgi;
var gameState = 0;
var distance = 0;
var px = 0;
var playerCount;
var database;
var form, player, game;
var allPlayers;
var car1,car2,car3,car4,cars;
var player1_img,player2_img,player3_img,player4_img;
var bullets;
var namee = null;
var tzname = 22;
var posynamees = 75;
var pared1,pared2,pared3,pared4;
var skin1,skin2,skin3,skin4;
var skin = 1;
var qjugador = 0;
var playerCount2;
var starting = 1;
var skinp1,skinp2,skinp3,skinp4;
var bg,bgs;
var sgsstart = 1;


function preload(){
    skin1 = loadImage("Skin1.png");
    skin2 = loadImage("skin2.png");
    bg = loadImage("backgr.png");

}


function setup(){
    canvas = createCanvas(windowWidth-7,windowHeight-45);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    camera.zoom = 0.04;
    


}

function draw(){

    if(playerCount === 4){
        game.update(1);

    }
    

    if(gameState === 1){
        clear();
        game.play();

    }

}