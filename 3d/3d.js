var fov;
var cameraZ;
var x=0;
var y=0;
var z=40; 
var playerX = 0;
var playerZ = 0;
var anglex;
var angley;
var area =[];
var img; 
var img2;
var img3; 
var jogador = new player();
var paredes = [];
var modelo = [];
var texturamodelo;

function preload(){
    modelo[0] = loadModel('Low.obj');
    modelo[1] = loadModel('Low2.obj');
    modelo[2] = loadModel('Low3.obj');
    texturamodelo = loadImage("texturalistrada.png");
    img = loadImage("forja.png");
    img2 = loadImage("verdelus.jpeg");
    img3 = loadImage("chao.jpg");
}

function setup(){
    createCanvas(500, 500, WEBGL);
    area[0] = [0,0,0,0,0,0,0,0,0,0,0];
    area[1] = [0,0,0,0,0,0,0,0,0,0,0];
    area[2] = [0,1,0,0,0,2,0,0,0,1,0];
    area[3] = [0,1,0,0,0,0,0,0,0,1,0];
    area[4] = [0,1,0,0,1,0,1,0,0,1,0];
    area[5] = [0,1,1,1,0,0,0,1,1,1,0];
    area[6] = [0,0,0,0,0,0,0,0,0,0,0];
    area[7] = [0,0,0,0,0,0,0,0,0,0,0];
    area[8] = [0,0,0,0,0,0,0,0,0,0,0];
    area[9] = [0,0,0,0,0,0,0,0,0,0,0];
    anglex = 0.8;
    //anglex = 1.57;
    angley = 4.71;
    cameraZ = 0;
    for(var i = -5; i < 5; i++){
        for(var j = -5; j < 5; j++){
            var auxx = area.length/2+i;
            var auxy = area.length/2+j;
            if(area[auxx][auxy] == 0){
                push();
                translate(i*64-jogador.x,0,j*64-jogador.y);
                texture(img3);
                box(64,2,64);
                pop();
            }
            else if(area[auxx][auxy] == 1){
                paredes.push(new wall(i,j,"parede"));
            }
            else if(area[auxx][auxy] == 2){
                paredes.push(new wall(i,j,"arvore"));
            }
        }
    }
}

function draw(){
    background(0,255,255);
    camera(x,y,z);
    //rotateX(1.57);
    rotateX(anglex);
    rotateY(angley);
    jogador.update();
    for(var i=0;i<paredes.length;i++){
        paredes[i].criar();
    }
    for(var i = -5; i < 5; i++){
        for(var j = -5; j < 5; j++){
            var auxx = area.length/2+i;
            var auxy = area.length/2+j;
            if(area[auxx][auxy] == 0){
                push();
                translate(i*64-jogador.x,0,j*64-jogador.y);
                texture(img3);
                box(64,2,64);
                pop();
            }
        }
    }
}

function player(){
    this.x = 0;
    this.y = 0;
    this.width = 16;
    this.height = 16;
    this.mover = true;
    this.update = function(){
        push();
        translate(0,-16,0);
        rotateY(6.28-angley);
        texture(img);
        box(32,32,32);
        pop();
    }
    this.colisao = function(){
        var bound = false;
        var cont = 0;
        var aux = "";
        var direcao = "";
        for (i = 0; i < paredes.length; i += 1) {
            if(this.x + this.width < paredes[i].x - paredes[i].width || 
            this.x - this.width > paredes[i].x + paredes[i].width || 
            this.y - this.height > paredes[i].y + paredes[i].height || 
            this.y + this.height < paredes[i].y - paredes[i].height){
                cont++;
            }
            else{
                if(aux == ""){
                    aux = i;
                }
            }
        }
        if(cont != paredes.length){
            bound = true;
            //if(this.y - this.height < paredes[aux].y + paredes[aux].height){
            //    console.log(aux);
                //direcao = "x";
            //}
            //if(this.y + this.width > paredes[aux].y - paredes[aux].height){
            //    console.log(aux);
            //    direcao = "x";
            //}
            //if(this.x - this.height < paredes[aux].x + paredes[aux].height){
            //    console.log(aux);
            //    direcao = "y";
            //}
            //if(this.x + this.height > paredes[aux].x - paredes[aux].height){
            //    console.log(aux);
            //    direcao = "y";
            //}
        }
        return [bound,direcao];
    }
}

function wall(x,y,tipo){
    this.x = x*64;
    this.y = y*64;
    this.width = 32;
    this.height = 32;
    this.count = 0;
    this.criar = function(){
      if(tipo == "parede"){
        push();
        translate(this.x-jogador.x,-32,this.y-jogador.y);
        texture(img2);
        box(64,64,64);
        pop();
        //console.log(this.x);
      }
      else{
        push();
        translate(this.x-jogador.x,-32,this.y-jogador.y);
        texture(texturamodelo);
        model(modelo[this.count]);
        pop();
        this.count++;
        if(this.count > 2){
            this.count = 0;
        }
      }
    }
}

window.addEventListener("keydown", function(event) {
    //keyCode
    switch (event.keyCode) {
        case 39: 
            //UP_ARROW:
            angley+=0.04;
        break;
        case 37: 
            //UP_ARROW:
            angley-=0.04;
        break;
        case 38: 
            //UP_ARROW:
            for(var i=0;i<5;i++){
                var valores = jogador.colisao();
                if(valores[0] == true){
                    //jogador.x-=sin(angley);
                    //jogador.y+=cos(angley);
                    if(valores[1] == "x"){
                        jogador.x+=sin(angley);
                        jogador.y+=cos(angley);
                    }
                    if(valores[1] == "y"){
                        jogador.x-=sin(angley);
                        jogador.y-=cos(angley);
                    }
                }
                else{
                    jogador.x+=sin(angley);
                    jogador.y-=cos(angley);
                }
            }
        break;
        case 40: 
            //UP_ARROW:
            for(var i=0;i<5;i++){
                jogador.x-=sin(angley);
                jogador.y+=cos(angley);
                if(jogador.colisao()){
                    jogador.x+=sin(angley);
                    jogador.y-=cos(angley);
                }
            }
        break;
    }
});