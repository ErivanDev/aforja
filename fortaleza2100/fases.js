function primeirafase(){
    jogador.x = 0;
    jogador.y = 321;
    var objUm;
    var objDois;
    var objTres;
    var elevador;
    var alcapao;
    var derrubador;
    var area = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0],//1
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],//2
                [0,0,0,2,2,2,2,2,2,0,0,0,0,0,0,2,2,2,2,0,1,1,1,1],//3
                [0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0],//4
                [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//5
                [1,1,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//6
                [1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//7
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2],//8
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],//9
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//10
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//11
                [2,2,2,2,2,2,2,2,2,2,0,0,0,2,2,2,2,2,0,0,0,0,0,0],//12
                [1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0],//13
                [1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1]];//14
    for(i=0;i<area.length;i++)
        for(j=0;j<area[i].length;j++){
            if(area[i][j] == 1)
                parede.push(new wall(true,j,i,32,32,tile[0],false));
            if(area[i][j] == 2)
                parede.push(new wall(false,j,i,32,32,tile[1],false));
            if(area[i][j] == 9){
                //ELEMENTO
                objUm = new wall(false,j,i+0.3,32,32,imgElementos[0],false);
                objUm.atividade = (function(){lugares[1].img = imgLugares[5];jogador.numeroItens++;
                for(var i = 0;i<parede.length;i++)
                    if(parede[i] == this)
                        parede.splice(i,1);
                });
                objUm.ang = 0;
                objUm.contador = 0;
                objUm.yy = objUm.y;
                objUm.inatividade = (function(){this.y = this.yy + sin(this.ang)*3; this.ang+= 0.1;});
                parede.push(objUm);
            }                
        }
    //CAIXA MOVEL
    objUm = new wall(true,18,10,63,64,chaomaior,true);
    parede.push(objUm);

    //CAIXA MOVEL
    objUm =  new wall(true,4,0,63,64,chaomaior,true);
    parede.push(objUm);

    //ELEVADOR
    objUm = new wall(true,10,13,96,32,sprElevadorAr,false);
    objDois = new wall(true,12,12,32,32,tile[0],false);
    objTres = new wall(false,10,12,16,6,botaoAr,false);
    parede.push(objUm);
    parede.push(objDois);
    parede.push(objTres);

    elevador = new wall(false,10,13,16,6,nada,false);
    elevador.filho = objUm;
    elevador.outrofilho = objDois;
    elevador.anotherfilho = objTres;
    objDois = elevador;
    ///objUm.pai = elevador;
    elevador.filho.count = 161;
    elevador.sound = true;
    elevador.atividade = (function(){if(this.filho.count>0){this.y-=5;this.filho.y-=5;this.outrofilho.y-=5;this.anotherfilho.y-=5;this.filho.count-=5;
    if(!SoundEfeito[4].isPlaying()){
        SoundEfeito[4].play();
    }}});
    elevador.inatividade = (function(){if(this.filho.count<161){this.y+=5;this.filho.y+=5;this.outrofilho.y+=5;this.anotherfilho.y+=5;this.filho.count+=5;
    if(!SoundEfeito[4].isPlaying())
        SoundEfeito[4].play();
    }});
    parede.push(elevador);

    //ELEVADOR AO CONTRARIO
    objUm = new wall(true,18,13,96,32,sprElevadorAr,false);
    objDois = new wall(false,22,12,96,32,botaoAr,false);
    parede.push(objUm);
    parede.push(objDois);

    elevador = new wall(false,22,13,32,32,nada,false);
    elevador.filho = objUm;
    objUm.pai = elevador;
    elevador.filho.count = 32;
    elevador.sound = true;
    elevador.atividade = (function(){if(this.filho.count>0){this.filho.y-=2;this.filho.count-=2;
        if(!SoundEfeito[4].isPlaying()){
            SoundEfeito[4].play();
        }
    }
    else{this.atividade = undefined;}
    });
    parede.push(elevador);
}

function segundafase(){
    jogador.x = 0;
    jogador.y = 32;
    var objUm;
    var objDois;
    var objTres;
    var elevador;
    var alcapao;
    var derrubador;
    var area = [[0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0],//1
                [0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0],//2
                [0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0],//3
                [1,1,1,1,0,0,1,1,1,1,1,2,2,0,0,0,0,0,0,0,0,0,0,0],//4
                [0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,9,0,0],//5
                [0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,1],//6
                [0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,1,1,0],//7
                [0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,1,1,0,0,0],//8
                [1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0],//9
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//10
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],//11
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//12
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//14
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]];//14
    for(i=0;i<area.length;i++)
        for(j=0;j<area[i].length;j++){
            if(area[i][j] == 1)
                parede.push(new wall(true,j,i,32,32,tile[2],false));
            if(area[i][j] == 2)
                parede.push(new wall(true,j,i,32,32,nada,false));
            if(area[i][j] == 3)
                parede.push(new wall(true,j,i,32,32,tile[3],false));
            if(area[i][j] == 9){
                //ELEMENTO
                objUm = new wall(false,j,i+0.3,32,32,imgElementos[1],false);
                objUm.atividade = (function(){lugares[2].img = imgLugares[6];jogador.numeroItens++;
                for(var i = 0;i<parede.length;i++)
                    if(parede[i] == this)
                        parede.splice(i,1);
                });
                objUm.ang = 0;
                objUm.contador = 0;
                objUm.yy = objUm.y;
                objUm.inatividade = (function(){this.y = this.yy + sin(this.ang)*3; this.ang+= 0.1;});
                parede.push(objUm);
            }     
        }
    //CAIXA MOVEL
    objUm = new wall(true,2,0,63,64,chaomaior,true);
    parede.push(objUm);

    //ALCAPAO
    objUm = new wall(true,4,4,32,32,tile[16],false);
    objDois = new wall(true,5,4,32,32,tile[17],false);
    parede.push(objUm);
    parede.push(objDois);

    objTres = new wall(false,9,2,32,32,botaoInativo,false);
    parede.push(objTres);

    alcapao = new wall(false,9,3,32,32,nada,false);
    alcapao.filho = objUm;
    alcapao.outrofilho = objDois;
    alcapao.atividade = (function(){
        for(var i=0;i<parede.length;i++){
            if(parede[i]==this.filho){
                parede[i].x-=32;
                parede[i].solido = false;
                parede[i].img = tile[19];
            }
            if(parede[i]==this.outrofilho){
                parede[i].x+=32;
                parede[i].solido = false;
                parede[i].img = tile[18];
            }
        }
        this.atividade=undefined;
    });
    parede.push(alcapao);

    //ELEVADOR
    objUm = new wall(true,17,13,96,32,sprElevadorAgua,false);
    parede.push(objUm);

    objTres = new wall(false,0,7,32,32,botaoInativo,false);
    parede.push(objTres);

    elevador = new wall(false,0,8,16,6,nada,false);
    elevador.filho = objUm;
    elevador.filho.count = 32;
    elevador.sound = true;
    elevador.atividade = (function(){if(this.filho.count>0){this.filho.y-=2;this.filho.count-=2;
    if(!SoundEfeito[4].isPlaying()){
        SoundEfeito[4].play();
    }}});
    parede.push(elevador);

    //ELEVADOR AO CONTRARIO
    objUm = new wall(true,8,8,96,32,sprElevadorAgua,false);
    parede.push(objUm);

    objTres = new wall(false,7,7,32,32,botaoInativo,false);
    parede.push(objTres);

    elevador = new wall(false,7,8,16,6,nada,false);
    elevador.filho = objUm;
    objUm.pai = elevador;
    elevador.filho.count = 0;
    elevador.atividade = (function(){if(this.filho.count<127){this.filho.y+=0.80;this.filho.count+=0.80;
    if(!SoundEfeito[4].isPlaying())
        SoundEfeito[4].play();
    }});
    elevador.inatividade = (function(){if(this.filho.count>0){this.filho.y-=0.20;this.filho.count-=0.20;
    if(!SoundEfeito[4].isPlaying())
        SoundEfeito[4].play();
    }});
    parede.push(elevador);

    objTres = new wall(false,11,12,32,32,botaoInativo,false);
    parede.push(objTres);

    //ELEVADOR AO CONTRARIO
    elevador = new wall(false,11,13,16,6,nada,false);
    elevador.filho = objUm;
    elevador.filho.count = 0;
    elevador.atividade = (function(){if(this.filho.count<127){this.filho.y+=0.80;this.filho.count+=0.80}});
    elevador.inatividade = (function(){if(this.filho.count>0){this.filho.y-=0.20;this.filho.count-=0.20;}});
    parede.push(elevador);

    //ELEVADOR AO CONTRARIO
    objUm = new wall(true,14,8,96,32,sprElevadorAgua,false);
    parede.push(objUm);

    objTres = new wall(false,23,9,32,32,botaoInativo,false);
    parede.push(objTres);

    elevador = new wall(false,23,10,16,6,nada,false);
    elevador.filho = objUm;
    objUm.pai = elevador;
    elevador.filho.count = 0;
    elevador.atividade = (function(){if(this.filho.count<127){this.filho.y+=0.40;this.filho.count+=0.40}});
    elevador.inatividade = (function(){if(this.filho.count>0){this.filho.y-=0.40;this.filho.count-=0.40;}});
    parede.push(elevador);

    //DERRUBA
    objUm = new wall(true,4,8,63,64,chaomaior,false);
    parede.push(objUm);

    objTres = new wall(false,23,12,32,32,botaoInativo,false);
    parede.push(objTres);

    derrubador = new wall(false,23,13,16,6,nada,false);
    derrubador.filho = objUm;
    derrubador.outrofilho = objDois;
    derrubador.atividade = (function(){this.filho.movel = true;});
    parede.push(derrubador);
}

function terceirafase(){
    jogador.x = 0;
    jogador.y = 352;
    var objUm;
    var objDois;
    var objTres;
    var elevador;
    var alcapao;
    var derrubador;
    var area = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//1
                [0,0,0,0,0,0,0,2,3,4,2,0,0,0,0,0,0,0,0,0,0,0,0,9],//2
                [0,0,0,0,0,0,2,1,1,1,1,0,0,0,0,0,0,2,3,0,0,2,3,4],//3
                [2,0,0,0,4,2,1,1,1,1,1,2,3,4,0,0,2,1,1,0,0,1,1,1],//4
                [1,2,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1],//5
                [1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],//6
                [1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//7
                [1,1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//8
                [1,1,1,1,1,2,0,0,2,3,0,0,2,0,2,3,4,2,3,4,0,0,0,2],//9
                [1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,2,1],//10
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1],//11
                [2,3,4,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1,1],//12
                [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],//13
                [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]];//14
    for(i=0;i<area.length;i++)
        for(j=0;j<area[i].length;j++){
            if(area[i][j] == 1)
                parede.push(new wall(true,j,i,32,32,tile[4],false));
            if(area[i][j] == 2)
                parede.push(new wall(false,j,i,32,32,tile[5],false));
            if(area[i][j] == 3)
                parede.push(new wall(false,j,i,32,32,tile[6],false));
            if(area[i][j] == 4)
                parede.push(new wall(false,j,i,32,32,tile[7],false));
            if(area[i][j] == 6)
                parede.push(new wall(false,j-0.2,i-0.2,32,32,tile[9],false));
            if(area[i][j] == 9){
                //ELEMENTO
                objUm = new wall(false,j,i+0.3,32,32,imgElementos[2],false);
                objUm.atividade = (function(){lugares[3].img = imgLugares[7];jogador.numeroItens++;
                for(var i = 0;i<parede.length;i++)
                    if(parede[i] == this)
                        parede.splice(i,1);
                });
                objUm.ang = 0;
                objUm.contador = 0;
                objUm.yy = objUm.y;
                objUm.inatividade = (function(){this.y = this.yy + sin(this.ang)*3; this.ang+= 0.1;});
                parede.push(objUm);
            }  
        }

    //DERRUBA
    var objs = [];
    for(var i=0;i<16;i++){
        objUm = new wall(true,4+i,12,32,32,tile[4],false);
        objs.push(objUm);
        parede.push(objUm);
        console.log(parede.length);
    }
    derrubador = new wall(false,5,12,32,32,nada,false);
    derrubador.filho = [];
    derrubador.conteiro = 0;
    derrubador.velocidade = 0;
    for(var i=0;i<objs.length-1;i++){
        derrubador.filho.push(objs[i]);
    }
    derrubador.atividade = (function(){this.inatividade=this.atividade;this.filho[this.conteiro].movel = true;this.velocidade++;
    if(this.velocidade%18==0 && this.conteiro < this.filho.length-1){this.conteiro++}});
    parede.push(derrubador);

    //DERRUBA
    objUm = new wall(true,13,9,32,32,tile[4],false);
    parede.push(objUm);

    derrubador = new wall(false,13,9,16,6,nada,false);
    derrubador.filho = objUm;
    derrubador.atividade = (function(){this.filho.movel = true;});
    parede.push(derrubador);

    //DERRUBA
    objUm = new wall(true,6,9,32,32,tile[4],false);
    objDois = new wall(true,7,9,32,32,tile[4],false);
    parede.push(objUm);
    parede.push(objDois);

    derrubador = new wall(false,7,9,16,6,nada,false);
    derrubador.filho = objUm;
    derrubador.outrofilho = objDois;
    derrubador.atividade = (function(){this.filho.movel = true;this.outrofilho.movel = true;});
    parede.push(derrubador);

    //DERRUBA
    objUm = new wall(true,10,9,32,32,tile[4],false);
    objDois = new wall(true,11,9,32,32,tile[4],false);
    parede.push(objUm);
    parede.push(objDois);

    derrubador = new wall(false,10,9,16,6,nada,false);
    derrubador.filho = objUm;
    derrubador.outrofilho = objDois;
    derrubador.atividade = (function(){this.filho.movel = true;this.outrofilho.movel = true;});
    parede.push(derrubador);

    //DERRUBA
    objUm = new wall(true,14,4,32,32,tile[4],false);
    objDois = new wall(true,15,4,32,32,tile[4],false);
    parede.push(objUm);
    parede.push(objDois);

    derrubador = new wall(false,14,4,16,6,nada,false);
    derrubador.filho = objUm;
    derrubador.outrofilho = objDois;
    derrubador.atividade = (function(){this.filho.movel = true;this.outrofilho.movel = true;});
    parede.push(derrubador);

    //DERRUBA
    objUm = new wall(true,19,2,32,32,tile[4],false);
    objDois = new wall(true,19,3,32,32,tile[4],false);
    objTres = new wall(true,19,4,32,32,tile[4],false);
    parede.push(objUm);
    parede.push(objDois);
    parede.push(objTres);

    derrubador = new wall(false,19,2,16,6,nada,false);
    derrubador.filho = objUm;
    derrubador.outrofilho = objDois;
    derrubador.anotherfilho = objTres;
    derrubador.atividade = (function(){this.filho.movel = true;this.outrofilho.movel = true;this.anotherfilho.movel = true;});
    parede.push(derrubador);
}

function quartafase(){
    jogador.x = 0;
    jogador.y = 320;
    var objUm;
    var objDois;
    var elevador;
    var alcapao;
    var derrubador;
    var area = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//1
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0],//2
                [0,0,0,0,0,0,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//3
                [0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0],//4
                [0,1,0,0,0,,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0],//5
                [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//6
                [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],//7
                [1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],//8
                [0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0],//9
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],//10
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,2,4,3,0,0],//11
                [1,0,0,0,0,0,0,1,0,0,0,0,0,2,4,3,0,0,0,0,0,0,0,0],//12
                [0,0,1,0,0,1,0,0,0,0,2,3,0,0,0,0,0,0,0,0,0,0,0,0],//14
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];//14
    for(i=0;i<area.length;i++)
        for(j=0;j<area[i].length;j++){
            if(area[i][j] == 1)
                parede.push(new wall(true,j,i,32,32,tile[12],false));
            if(area[i][j] == 2)
                parede.push(new wall(true,j,i,32,32,tile[13],false));
            if(area[i][j] == 3)
                parede.push(new wall(true,j,i,32,32,tile[14],false));
            if(area[i][j] == 4)
                parede.push(new wall(true,j,i,32,32,tile[15],false));
            if(area[i][j] == 9){
                //ELEMENTO
                objUm = new wall(false,j,i+0.3,32,32,imgElementos[3],false);
                objUm.atividade = (function(){fase(0);jogador.numeroItens++;
                for(var i = 0;i<parede.length;i++)
                    if(parede[i] == this)
                        parede.splice(i,1);
                });
                objUm.ang = 0;
                objUm.contador = 0;
                objUm.yy = objUm.y;
                objUm.inatividade = (function(){this.y = this.yy + sin(this.ang)*3; this.ang+= 0.1;});
                parede.push(objUm);
            }     
        }
}

function primeiraFaseFuturo(){
    jogador.x = 0;
    jogador.y = 321;
    var objUm;
    var objDois;
    var elevador;
    var alcapao;
    var derrubador;
    var area = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//1
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//2
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//3
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//4
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//5
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//6
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//7
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//8
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//9
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//10
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//11
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//12
                [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],//13
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];//14
    for(i=0;i<area.length;i++)
        for(j=0;j<area[i].length;j++){
            if(area[i][j] == 1)
                parede.push(new wall(true,j,i,32,32,tile[10],false));
            if(area[i][j] == 2)
                parede.push(new wall(true,j,i,32,32,tile[11],false));
        }

    objUm = new maquina(12*32,9*32-8,ImgMaquina,ImgMaquinaBase,circulos);
    
    objDois = new wall(false,-1,-1,0,0,nada,false);
    objDois.filho = objUm;
    objDois.inatividade = (function(){this.filho.update();});
    parede.push(objDois);

    derrubador = new wall(false,11.5,11,16,6,nada,false);
    derrubador.atividade = (function(){
        if(jogador.numeroItens == 4) telas = 3;
    });
    parede.push(derrubador);
}

/*function segundaAntigafase(){
    jogador.x = 0;
    jogador.y = 32;
    var objUm;
    var objDois;
    var elevador;
    var alcapao;
    var derrubador;
    var area = [[0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0],//1
                [0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0],//2
                [0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0],//3
                [1,1,1,1,0,0,1,1,1,1,1,2,2,0,0,0,0,0,0,0,0,0,0,0],//4
                [0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,9,0,0],//5
                [0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,1],//6
                [0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,1,1,0],//7
                [0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,1,1,0,0,0],//8
                [1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0],//9
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//10
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],//11
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//12
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1],//13
                [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]];//14
    for(i=0;i<area.length;i++)
        for(j=0;j<area[i].length;j++){
            if(area[i][j] == 1)
                parede.push(new wall(true,j,i,32,32,tile[2],false));
            if(area[i][j] == 2)
                parede.push(new wall(true,j,i,32,32,nada,false));
            if(area[i][j] == 3)
                parede.push(new wall(true,j,i,32,32,tile[3],false));
            if(area[i][j] == 9){
                //ELEMENTO
                objUm = new wall(false,j,i+0.3,32,32,imgElementos[1],false);
                objUm.atividade = (function(){fase(3);});
                objUm.ang = 0;
                objUm.contador = 0;
                objUm.yy = objUm.y;
                objUm.inatividade = (function(){this.y = this.yy + sin(this.ang)*3; this.ang+= 0.1;});
                parede.push(objUm);
            }     
        }
    //CAIXA MOVEL
    objUm = new wall(true,2,0,63,64,chaomaior,true);
    parede.push(objUm);

    //ALCAPAO
    objUm = new wall(true,4,4,32,32,botaoInativo,false);
    objDois = new wall(true,5,4,32,32,botaoInativo,false);;
    parede.push(objUm);
    parede.push(objDois);

    alcapao = new wall(false,9,2,32,32,botaoInativo,false);
    alcapao.filho = objUm;
    alcapao.outrofilho = objDois;
    alcapao.atividade = (function(){
        for(var i=0;i<parede.length;i++){
            if(parede[i]==this.filho){
                parede[i].x-=32;
                parede[i].solido = false;
            }
            if(parede[i]==this.outrofilho){
                parede[i].x+=32;
                parede[i].solido = false;
            }
        }
        this.atividade=undefined;
    });
    parede.push(alcapao);

    //ELEVADOR AO CONTRARIO
    objUm = new wall(true,7,8,96,32,sprElevador,false);
    parede.push(objUm);

    elevador = new wall(false,6,8,16,6,nada,false);
    elevador.filho = objUm;
    objUm.pai = elevador;
    elevador.filho.count = 0;
    elevador.atividade = (function(){if(this.filho.count<127){this.filho.y+=0.80;this.filho.count+=0.80;
    if(!SoundEfeito[4].isPlaying())
        SoundEfeito[4].play();
    }});
    elevador.inatividade = (function(){if(this.filho.count>0){this.filho.y-=0.20;this.filho.count-=0.20;
    if(!SoundEfeito[4].isPlaying())
        SoundEfeito[4].play();
    }});
    parede.push(elevador);

    //ELEVADOR AO CONTRARIO
    elevador = new wall(false,11,12,16,6,nada,false);
    elevador.filho = objUm;
    elevador.filho.count = 0;
    elevador.atividade = (function(){if(this.filho.count<127){this.filho.y+=0.80;this.filho.count+=0.80}});
    elevador.inatividade = (function(){if(this.filho.count>0){this.filho.y-=0.20;this.filho.count-=0.20;}});
    parede.push(elevador);

    //ELEVADOR AO CONTRARIO
    objUm = new wall(true,16,8,96,32,sprElevador,false);
    parede.push(objUm);

    elevador = new wall(false,23,10,16,6,nada,false);
    elevador.filho = objUm;
    objUm.pai = elevador;
    elevador.filho.count = 0;
    elevador.atividade = (function(){if(this.filho.count<127){this.filho.y+=0.40;this.filho.count+=0.40}});
    elevador.inatividade = (function(){if(this.filho.count>0){this.filho.y-=0.40;this.filho.count-=0.40;}});
    parede.push(elevador);

    //DERRUBA
    objUm = new wall(true,2,8,32,32,botaoInativo,false);
    objDois = new wall(true,3,8,63,64,chaomaior,false);
    parede.push(objUm);
    parede.push(objDois);

    derrubador = new wall(false,21,12,16,6,nada,false);
    derrubador.filho = objUm;
    derrubador.outrofilho = objDois;
    derrubador.atividade = (function(){this.filho.movel = true;this.outrofilho.movel = true;});
    parede.push(derrubador);
}*/