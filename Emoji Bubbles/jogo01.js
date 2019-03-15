var ang;
var x;
var y;
var nada;
var bola = [];
var area = [];
var obstaculos = [];
var jogadas;
var tipo;
var tipo2;
var lancamento;
var movercanhao;
var aux2;
//carinhas
var canhao;
var safado;
var piscando;
var bocafechada;
var beijinho;
var deoculos;
var dandolingua;
var troca;
var fase;
var tempo;
var descrescimo;
var valorbooster = 0;
var booster1 = 10;
var booster2 = 10;

function setup() {
    tempo=120;
    descrescimo=1/60;
    //console.log(descrescimo);
    fase = 1;
    loadImagens();
    loadMapa(fase);
    jogadas = 0;
    ang = 4.71;
    x = 250;
    y = 475;
    lancamento = true;
    movercanhao = false;
    //criar bolas no mapa
    tipo = 0;
    for(var i=0;i<10;i++){
        for(var j=0;j<10;j++){
            if(tipo > 4){
                tipo = 0;
            }
            if(obstaculos[i][j]==1){
                bola[jogadas] = new ball(0,0,tipo);
                if(i%2==0){
                    bola[jogadas].x = 25+50*j;
                }
                else{
                    bola[jogadas].x = 50+50*j;
                }
                bola[jogadas].y = 25+44*i;
                bola[jogadas].pode = false;
                bola[jogadas].colisao = true;
                jogadas++;
                //console.log(jogadas);
                tipo++;
            }
        }
    }
    tipo = int(random(5));
    tipo2 = int(random(5));
    posicoes();
    //aumentar para 700 quando necessario
    var canvas = createCanvas(600,500);
    canvas.parent("fala");
}

function draw() {
    background(255,0,255);
    var auxi = 0;
    for(var i=0;i<10;i++){
        for(var j=0;j<10;j++){
            if(j % 2 != 0){
                auxi = 25;
            }
            else{
                auxi=0;
            }
            //ellipse(i*50+25+auxi,j*44+25,50,50);
        }
    }
    //ellipse(250,500,50,50);b
    booster(valorbooster);
    for(var i=0;i<bola.length;i++){
        bola[i].update();
    }
    //se dê merda, tira esse sozinho
    sozinho();
    line(x,y,x+(50*cos(ang)),y+(50*sin(ang)));
    stroke(255,0,0);
    line(0,421,width,421);
    stroke(0);
    //checa os tipos das bolas, essa função era interna aos objetos, 
    //mas teve um problema por questão das ordens dos objetos
    testetipo();
    //checa as bolas a baixo quando a gravidade verdadeira,
    //essa função era interna aos objetos, mas teve um problema por questão das ordens dos objetos
    testeabaixo();
    //lanca a proxima bola
    lanca();
    //destroe o objeto quando passa de 650px
    destroe();
    tinta(tipo,x,y,50);
    tinta(tipo2,x-25,y+25,25);
    if(bola.length == 0){
        fase++;
        gameover();
    }
    if(int(tempo) == 0){
        gameover();
    }
    /*
    if(valorbooster == 1 && booster1 > 0){
        booster1-=descrescimo;
    }
    if(valorbooster == 2 && booster2 > 0){
        booster2-=descrescimo;
    }*/
    hud();
    tempo-=descrescimo;
}

function hud(){
    textSize(32);
    textAlign(CENTER);
    fill(0);
    rect(500,0,600,500)
    fill(255);
    text(int(tempo),550,30);
    textSize(16);
    text("NIVEL: "+fase,550,70);
    text("LIMITE",550,421);
    /*if(booster1 > 0){
        fill(0,255,0);
    }
    else{
        valorbooster = 0;
        fill(255,0,0);
    }
    ellipse(550,120,80,80);
    if(booster2 > 0){
        fill(0,255,0);
    }
    else{
        valorbooster = 0;
        movercanhao = false;
        fill(255,0,0);
    }
    ellipse(550,205,80,80);
    fill(0);
    textSize(20);
    text(int(booster1),550,125);
    text(int(booster2),550,210);*/
}
//keyPressed()
window.addEventListener("keydown", function(event) {
    //keyCode
    switch (event.keyCode) {
        case 39: 
            //RIGHT_ARROW
            if(ang<6.1 && movercanhao == false){
                ang+=0.05;
            }
            else if(movercanhao == true && x < 500-30){
                x+=20;
            }
        break;
        case 37: 
            //LEFT_ARROW
            if(ang>3.3 && movercanhao == false){
                ang-=0.05;
            }
            else if(movercanhao == true && x > 50){
                x-=20;
            }
        break;
        case 38: 
            //UP_ARROW:
            if(movercanhao == true){
                movercanhao = false;
            }
            else{
                movercanhao = true;
            }
        break;
        case 13: 
            //ENTER
            //lançamento
            if(lancamento == true){
                bola[bola.length] = new ball(cos(ang),sin(ang),tipo);
                tipo = tipo2;
                tipo2 = int(random(5));
                lancamento = false;
            }
        break;
        case 32: 
            //SPACEBER = 32 troca bolas
            troca = tipo;
            tipo = tipo2;
            tipo2 = troca;
        break;
        case 90: 
            //Z = 90
            //valorbooster = 2;
        break;
        case 88: 
            //X = 88
            valorbooster = 1;
        break;
    }
});

function ball(hspeed,vspeed,tipo){
    this.hspeed = hspeed;
    this.vspeed = vspeed;
    this.tipo = tipo;
    this.colisao = false;
    this.x = x;
    this.y = y;
    this.pode = true;
    this.permissao = true;
    this.gravidade = false;
    this.once = true;
    this.update = function(){
        //var xx = this.x/50; var yy = this.y/44;
        tinta(this.tipo,this.x,this.y,50);
        //ellipse(this.x,this.y,50,50);
        //não tinha esse loop, e era this.hspeed * 10
        for(let i=0;i<10;i++){
            if(this.colisao == false){
                this.colidido();
            }
            if(this.colisao == false){
                this.x+=this.hspeed;
                this.y+=this.vspeed;
            }
            if(this.x+25>500){
                this.hspeed=-this.hspeed;
            }
            else if(this.x-25<0){
                this.hspeed=-this.hspeed;
            }
        }
        if(this.y-25<0){
            this.colisao = true;
            lancamento = true;
        }
        if(this.colisao == true && this.pode == true){
            this.newpos();
            lancamento = true;
            this.vspeed = 0;
            this.hspeed = 0;
            this.pode = false;
        }
        //vê se está solto
        //var teste=0;
        //for(var i=0;i<bola.length;i++){
          //  distancia = sqrt(pow(this.x - bola[i].x,2)+pow(this.y - bola[i].y,2));
           // if(abs(int(distancia)) == 50){
             //   if(bola[i].y <= this.y){
               //     teste++;
               //     console.log(aux2);
                //}
            //}
        ///}
        //if(teste == 0 && this.y > 50 && this.pode == false){
            //this.gravidade = true;
        //}
        if(this.gravidade == false && this.y == 421){
            gameover();
        }
        if(this.gravidade == true){
            this.tipo = 5;
            this.y+=3;
        }
    }
    this.newpos = function(){
        var posicaox;
        var posicaoy;
        var aux = 0;
        //determinar posicao vertical
        for(var i=0;i<10;i++){
            if(area[2][i]-(this.y-25)<=44 && area[2][i]-(this.y-25)>0){
                posicaoy = area[2][i];
            }
            if((this.y+25)-area[2][i]<=44 && (this.y+25)-area[2][i]>0){
                posicaoy = area[2][i];
            }
        }
        //console.log((posicaoy-25)/44);
        //console.log(this.tipo);
        if((posicaoy-25)/44 % 2 != 0){
            aux = 1;
        }
        for(var i=0;i<10-aux;i++){
            if(area[aux][i]-this.x<=25 && area[aux][i]-this.x>0){
                posicaox = area[aux][i];
            }
            if(this.x-area[aux][i]<=25 && this.x-area[aux][i]>0){
                posicaox = area[aux][i];
            }
        }
        this.x = posicaox;
        this.y = posicaoy;
    }
    this.colidido = function(){
        var distancia;
        var pos;
        //era apenas jogadas, mas coloque -1 para não checar com o atual
        for(var i=0;i<bola.length-1;i++){
            //era hspeed * 10, não hspeed * 5, mas resolveu um bug
            distancia = sqrt(pow((this.x + this.hspeed) - bola[i].x,2)+pow((this.y + this.vspeed) - bola[i].y,2));
            //distancia = sqrt(pow(bola[bola.length-1].x - bola[i].x,2)+pow(bola[bola.length-1].y - bola[i].y,2));
            //&& int(distancia) > 10
            //era < 51
            if(abs(int(distancia)) <= 50){
                this.colisao = true;
            }
        }
    }
}

//function colisao(){
  //  var distancia;
  //  var pos;
    //era apenas jogadas, mas coloque -1 para não checar com o atual
  //  for(var i=0;i<bola.length-1;i++){
        //era hspeed * 10, não hspeed * 5, mas resolveu um bug
    //    distancia = sqrt(pow((bola[bola.length-1].x + bola[bola.length-1].hspeed * 5) - bola[i].x,2)+pow((bola[bola.length-1].y + bola[bola.length-1].vspeed * 5) - bola[i].y,2));
        //distancia = sqrt(pow(bola[bola.length-1].x - bola[i].x,2)+pow(bola[bola.length-1].y - bola[i].y,2));
        //&& int(distancia) > 10
        //era < 51
      //  if(abs(int(distancia)) <= 50){
        //    bola[bola.length-1].colisao = true;
        //}
    //}
//}

function sozinho(){
    var distancia;
    var vetor = [];
    for(let i=0;i<bola.length;i++){
        if(bola[i].y == 25){
            vetor.push(i);
        }
    }
    var valor = vetor;
    var novovetor = [];
    novovetor = novovetor.concat(vetor);
    var bool = true;
    //no começo era 15, depois 20, agora 90
    for(let h=0;h<90;h++){
        var newvetor = [];
        for(let i=0;i<valor.length;i++){
            for(let j=0;j<bola.length;j++){
                distancia = sqrt(pow(bola[valor[i]].x - bola[j].x,2)+pow(bola[valor[i]].y - bola[j].y,2));
                if(abs(int(distancia)) == 50){
                    var bool = true;
                    for(let g=0;g<novovetor.length;g++){
                        if(novovetor[g] == j){
                            bool = false;
                        }
                    }
                    if(bool == true){
                        newvetor.push(j);
                    }
                }
            }
        }
        novovetor = novovetor.concat(newvetor);
        valor = newvetor;
    }
    var final = [];
    for(let i=0;i<novovetor.length;i++){
        var bool = true;
        for(var j=0;j<final.length;j++){
            if(final[j] == novovetor[i]){
                bool = false;
            }
        }
        if(bool == true){
            final.push(novovetor[i]);
        }
    }
    for(let i=0;i<bola.length;i++){
        var boole = true;
        for(var j=0;j<final.length;j++){
            if(i == final[j]){
                boole = false;
            }
        }
        if(boole == true && bola[i].colisao == true){
            bola[i].gravidade = true;
        }
    }
    //console.log(final);
}

function testetipo(){
    var contador = 0;
    var arredo = [];
    for(var j=0;j<bola.length;j++){
        if(bola[j].colisao == true){
            contador=0;
            for(var i=0;i<bola.length;i++){
                distancia = sqrt(pow(bola[j].x - bola[i].x,2)+pow(bola[j].y - bola[i].y,2));
                if(abs(int(distancia)) == 50){
                    if(bola[i].tipo == bola[j].tipo){
                        arredo[contador] = i;
                        contador++;
                    }
                }
            }
            if(contador > 1){
                //console.log("conjunto");
                for(var h=0;h<contador;h++){
                    bola[arredo[h]].gravidade = true;
                }
                bola[j].gravidade = true;
            }
        }
    }
}

function testeabaixo(){
    for(var j=0;j<bola.length;j++){
        if(bola[j].gravidade == true && bola[j].permissao == true){
            for(var i=0;i<bola.length;i++){
                distancia = sqrt(pow(bola[j].x - bola[i].x,2)+pow(bola[j].y - bola[i].y,2));
                if(abs(int(distancia)) == 50){
                    if(bola[i].y > bola[j].y){
                        bola[i].gravidade = true;
                    }
                }
            }
            bola[j].permissao = false;
        }
    }
}

function lanca(){
    for(var i=0;i<bola.length-1;i++){
        if(bola[i].gravidade == true && bola[i].y<550){
            lancamento = false;
        }
        else if(bola[i].gravidade == true &&  bola[i].once == true){
            lancamento = true;
            bola[i].once = false;
        }
    }
}

function tinta(cor,x,y,tamanho){
    switch(cor){
        case 0:
            //fill(255,0,0);
            image(safado, x-25, y-25,tamanho,tamanho);
        break;
        case 1:
            //fill(0,255,0);
            image(piscando, x-25, y-25,tamanho,tamanho);
        break;
        case 2:
            //fill(0,0,255);
            image(bocafechada, x-25, y-25,tamanho,tamanho);
        break;
        case 3:
            //fill(255,255,0);
            image(beijinho, x-25, y-25,tamanho,tamanho);
        break;
        case 4:
            //fill(0,255,255);
            image(deoculos, x-25, y-25,tamanho,tamanho);
        break;
        case 5:
            //fill(0,255,255);
            image(dandolingua, x-25, y-25,tamanho,tamanho);
        break;
    }
}

function loadImagens(){
    safado = loadImage("imagens/1f60f.png");
    piscando = loadImage("imagens/1f609.png");
    bocafechada = loadImage("imagens/1f636.png")
    beijinho = loadImage("imagens/1f618.png");
    deoculos = loadImage("imagens/1f60e.png");
    dandolingua = loadImage("imagens/1f61d.png");
}

function loadMapa(nivel){
    if(nivel == 1){
    obstaculos[0]=[0,0,0,0,1,0,1,0,0,0];
    obstaculos[1]= [0,0,0,1,1,1,1,0,0];
    obstaculos[2]=[0,0,0,0,1,1,1,0,0,0];
    obstaculos[3]= [0,0,0,0,1,1,0,0,0];
    obstaculos[4]=[0,0,0,0,0,1,0,0,0,0];
    obstaculos[5]= [0,0,0,0,0,0,0,0,0];
    obstaculos[6]=[0,0,0,0,0,0,0,0,0,0];
    obstaculos[7]= [0,0,0,0,0,0,0,0,0];
    obstaculos[8]=[0,0,0,0,0,0,0,0,0,0];
    obstaculos[9]= [0,0,0,0,0,0,0,0,0];
    }
    if(nivel == 2){
    obstaculos[0]=[0,0,1,0,0,0,0,1,0,0];
    obstaculos[1]= [0,0,1,0,0,0,1,0,0];
    obstaculos[2]=[0,0,0,1,1,1,1,0,0,0];
    obstaculos[3]= [0,0,0,1,1,1,0,0,0];
    obstaculos[4]=[0,0,0,0,1,1,0,0,0,0];
    obstaculos[5]= [0,0,0,0,0,0,0,0,0];
    obstaculos[6]=[0,0,0,0,0,0,0,0,0,0];
    obstaculos[7]= [0,0,0,0,0,0,0,0,0];
    obstaculos[8]=[0,0,0,0,0,0,0,0,0,0];
    obstaculos[9]= [0,0,0,0,0,0,0,0,0];
    }
    if(nivel == 3){
    obstaculos[0]=[0,1,0,1,0,1,0,1,0,0];
    obstaculos[1]= [0,1,1,1,1,1,1,0,0];
    obstaculos[2]=[0,0,1,0,0,0,1,0,0,0];
    obstaculos[3]= [0,0,0,0,0,0,0,0,0];
    obstaculos[4]=[0,0,0,0,0,0,0,0,0,0];
    obstaculos[5]= [0,0,0,0,0,0,0,0,0];
    obstaculos[6]=[0,0,0,0,0,0,0,0,0,0];
    obstaculos[7]= [0,0,0,0,0,0,0,0,0];
    obstaculos[8]=[0,0,0,0,0,0,0,0,0,0];
    obstaculos[9]= [0,0,0,0,0,0,0,0,0];
    }   
    if(nivel == 4){
    obstaculos[0]=[0,0,0,1,0,1,0,1,0,0];
    obstaculos[1]= [0,0,0,1,1,1,1,0,0];
    obstaculos[2]=[0,0,0,0,1,0,1,0,0,0];
    obstaculos[3]= [0,0,0,1,1,1,1,0,0];
    obstaculos[4]=[0,0,0,0,1,0,1,0,0,0];
    obstaculos[5]= [0,0,0,1,1,1,1,0,0];
    obstaculos[6]=[0,0,0,0,0,0,0,0,0,0];
    obstaculos[7]= [0,0,0,0,0,0,0,0,0];
    obstaculos[8]=[0,0,0,0,0,0,0,0,0,0];
    obstaculos[9]= [0,0,0,0,0,0,0,0,0];
    }
    if(nivel == 5){
    obstaculos[0]=[0,0,0,1,0,1,0,1,0,0];
    obstaculos[1]= [0,0,0,1,1,1,1,0,0];
    obstaculos[2]=[0,0,1,1,0,0,1,1,0,0];
    obstaculos[3]= [0,1,1,0,0,0,1,1,0];
    obstaculos[4]=[0,0,1,1,0,0,0,1,0,0];
    obstaculos[5]= [0,1,1,1,1,1,1,1,0];
    obstaculos[6]=[0,0,0,0,0,0,0,0,0,0];
    obstaculos[7]= [0,0,0,0,0,0,0,0,0];
    obstaculos[8]=[0,0,0,0,0,0,0,0,0,0];
    obstaculos[9]= [0,0,0,0,0,0,0,0,0];
    }
}

function posicoes(){
    area[0]=[25,75,125,175,225,275,325,375,425,475];
    area[1]=[50,100,150,200,250,300,350,400,450];
    area[2]=[25,69,113,157,201,245,289,333,377,421];
}

function destroe(){
    for(var i=0;i<bola.length;i++){
        if(bola[i].y>600){
            bola.splice(i,1);
        }
    }
}

function gameover(){
    for(var i=0;i<bola.length;i++){
        bola.splice(i,1);
    }
    loadMapa(fase);
    tempo=120;
    jogadas = 0;
    ang = 4.71;
    x =250;
    y =475;
    lancamento = true;
    movercanhao = false;
    //criar bolas no mapa
    tipo = 0;
    for(var i=0;i<10;i++){
        for(var j=0;j<10;j++){
            if(tipo > 4){
                tipo = 0;
            }
            if(obstaculos[i][j]==1){
                bola[jogadas] = new ball(0,0,tipo);
                if(i%2==0){
                    bola[jogadas].x = 25+50*j;
                }
                else{
                    bola[jogadas].x = 50+50*j;
                }
                bola[jogadas].y = 25+44*i;
                bola[jogadas].pode = false;
                bola[jogadas].colisao = true;
                jogadas++;
                //console.log(jogadas);
                tipo++;
            }
        }
    }
}

function booster(choose){
    var xbooster = x;
    var ybooster = y; 
    var hbooster = cos(ang);
    var parar = false;
    switch(choose){
        case 1:
        while(parar == false){
            fill(0,255,0)
            ellipse(xbooster,ybooster,5,5);
            if(xbooster - 25 < 0 || xbooster + 25 > 500){
                hbooster=-hbooster;
            }
            xbooster+=hbooster*10;
            ybooster+=sin(ang)*10;
            for(var i=0;i<bola.length;i++){
                distancia = sqrt(pow(xbooster - bola[i].x,2)+pow(ybooster - bola[i].y,2));
                if(abs(int(distancia)) <= 50){
                    parar = true;
                }
            }
            if(ybooster < 0){
                parar = true;
            }
        }
        break;
        case 2:
            //movercanhao = true;
        break;
    }
}