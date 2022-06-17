var jogador = new player();
var parede = [];
var sprites;
var backgrounds = [];
var backinfo = [];
var faseAtual;
var tile = [];
var mobilemode = false;
var controles = [];
var arrow = [];
var tela = "NORMAL";
var cont = 0;
var vspeed;
var globalBound = false;
var item = [];
var chao;
var chaomaior;
var counter = 0;
var contadorImg = 73;
var loaded = false;
var right;
var left;
var down;
var up;
var icons;
var telas = 0;
var infoOff;
var infoOn;
var sprElevadorAgua;
var sprElevadorAr;
var nada;
var inventario;
var mostrar = false;
var fonte;
var elementos = [];
var posicoes = [];
var selecionado;
var SoundEfeito = [];
var buttonMap;
var buttonRelogio;
var buttonReload;
var particulas = [];
var ImgMaquina;
var circulos;
var textoIndex = 0;
var textoAtual = "";
var proximoTexto;
var anteriorTexto;
var dialogos = [];
var imgElementos = [];
var imgElementosGrandes = [];
var rightRelogio;
var leftRelogio;
var contadorAlerta = 0;
var leu = false; 
var imgDanger;
var imgMessage;
var reiniciou = false;
var message = true;
var lugares = [];
var imgLugares = [];
var imgCreditos;
var voltarCreditos;
var imgVoltarCreditos;
var textoIntrodutorio;
var outroTexto = "";
var introduziu = false;
var contIntro = 0;
var textoIntrodutorio = [];
var textoFinal = [];
var introIndex = 0;
var backAtivo;
var loadingText = [];
var scene = [];
//era preload
function loading(){
    loadingText[0] = [[1,1,1],
                      [1,0,1],
                      [1,0,1],
                      [1,0,1],
                      [1,1,1]];
    loadingText[1] = [[0,0,1],
                      [0,0,1],
                      [0,0,1],
                      [0,0,1],
                      [0,0,1]];
    loadingText[2] = [[1,1,1],
                      [0,0,1],
                      [0,1,0],
                      [1,0,0],
                      [1,1,1]];
    loadingText[3] = [[1,1,1],
                      [0,0,1],
                      [0,1,1],
                      [0,0,1],
                      [1,1,1]];
    loadingText[4] = [[1,0,1],
                      [1,0,1],
                      [1,1,1],
                      [0,0,1],
                      [0,0,1]];
    loadingText[5] = [[1,1,1],
                      [1,0,0],
                      [1,1,1],
                      [0,0,1],
                      [1,1,1]];
    loadingText[6] = [[1,1,1],
                      [1,0,0],
                      [1,1,1],
                      [1,0,1],
                      [1,1,1]];
    loadingText[7] = [[1,1,1],
                      [0,0,1],
                      [0,0,1],
                      [0,0,1],
                      [0,0,1]];
    loadingText[8] = [[1,1,1],
                      [1,0,1],
                      [1,1,1],
                      [1,0,1],
                      [1,1,1]];
    loadingText[9] = [[1,1,1],
                      [1,0,1],
                      [1,1,1],
                      [0,0,1],
                      [1,1,1]];
    loadingText[10] = [[1,0,0],
                       [0,0,1],
                       [0,1,0],
                       [1,0,0],
                       [0,0,1]];
    nada = createImage(16,16);
    SoundEfeito[0] = loadSound('Sounds/CaixaArrastando.mp3');
    SoundEfeito[1] = loadSound('Sounds/Andando.mp3');
    SoundEfeito[2] = loadSound('Sounds/Andando.mp3');
    SoundEfeito[3] = loadSound('Sounds/QuedaLeve.mp3');
    SoundEfeito[4] = loadSound('Sounds/ComecoElevador.mp3');

    imgElementos[0] = loadImage("imagens/elementos/ar.png",function() { counter++;});
    imgElementos[1] = loadImage("imagens/elementos/agua.png",function() { counter++;});
    imgElementos[2] = loadImage("imagens/elementos/terra.png",function() { counter++;});
    imgElementos[3] = loadImage("imagens/elementos/fogo.png",function() { counter++;});

    imgElementosGrandes[0] = loadImage("imagens/elementos/arGrande.png",function() { counter++;});
    imgElementosGrandes[1] = loadImage("imagens/elementos/aguaGrande.png",function() { counter++;});
    imgElementosGrandes[2] = loadImage("imagens/elementos/terraGrande.png",function() { counter++;});
    imgElementosGrandes[3] = loadImage("imagens/elementos/fogoGrande.png",function() { counter++;});

    sprites = loadImage("imagens/luiza.png",function() { counter++;});
    backgrounds[0] = loadImage("imagens/FaseFuturo/backgroundFuturo.png",function() { counter++;});
    backgrounds[1] = loadImage("imagens/FaseAr/backAr.png",function() { counter++;});
    backgrounds[2] = loadImage("imagens/FaseAgua/backAgua.png",function() { counter++;});
    backgrounds[3] = loadImage("imagens/FaseTerra/backTerra.png",function() { counter++;});
    backgrounds[4] = loadImage("imagens/FaseFogo/backFire.png",function() { counter++;});
    backgrounds[5] = loadImage("imagens/relogio/relogioBolas.png",function() { counter++;});

    backAtivo = loadImage("imagens/Infografico/backAtivo.png",function() { counter++;});

    right = loadImage("imagens/right.png",function() { counter++;});
    left = loadImage("imagens/left.png",function() { counter++;});
    up = loadImage("imagens/up.png",function() { counter++;});
    down = loadImage("imagens/down.png",function() { counter++;});
    botaoInativo = loadImage("imagens/FaseAgua/botaoInativo.png",function() { counter++;});
    botaoAr = loadImage("imagens/FaseAr/botaoAr.png",function() { counter++;});
    chaomaior = loadImage("imagens/chaomaior.png",function() { counter++;});
    inventario = loadImage("imagens/relogio/telaRelogio.png",function() { counter++;});

    infoOff = loadImage("imagens/Infografico/marcadorOff.png",function() { counter++;});
    infoOn = loadImage("imagens/Infografico/marcadorOn.png",function() { counter++;});
    icongame = loadImage("imagens/Infografico/botaoJogo.png",function() { counter++;});
    iconCreditos = loadImage("imagens/Infografico/botaoCreditos.png",function() { counter++;});
    overgame = loadImage("imagens/Infografico/overgame.png",function() { counter++;});

    backinfo[0] = loadImage("imagens/Infografico/backInfografico.png",function() { counter++;});
    backinfo[1] = loadImage("imagens/Infografico/infograficoFrente.png",function() { counter++;});

    imgLugares[0] = loadImage("imagens/elementos/arOFF.png",function() { counter++;});
    imgLugares[1] = loadImage("imagens/elementos/aguaOFF.png",function() { counter++;});
    imgLugares[2] = loadImage("imagens/elementos/terraOFF.png",function() { counter++;});
    imgLugares[3] = loadImage("imagens/elementos/fogoOFF.png",function() { counter++;});

    imgLugares[4] = loadImage("imagens/elementos/arON.png",function() { counter++;});
    imgLugares[5] = loadImage("imagens/elementos/aguaON.png",function() { counter++;});
    imgLugares[6] = loadImage("imagens/elementos/terraON.png",function() { counter++;});
    imgLugares[7] = loadImage("imagens/elementos/fogoON.png",function() { counter++;});

    buttonMap = loadImage("imagens/Infografico/ImgMap.png",function() { counter++;});
    buttonRelogio = loadImage("imagens/Infografico/ImgRelogio.png",function() { counter++;});
    buttonReload = loadImage("imagens/Infografico/ImgReload2.png",function() { counter++;});
    rightRelogio =  loadImage("imagens/Infografico/relogioRight.png",function() { counter++;});
    leftRelogio =  loadImage("imagens/Infografico/relogioLeft.png",function() { counter++;});
    imgCreditos =  loadImage("imagens/Infografico/creditos.png",function() { counter++;});

    tile[0] = loadImage("imagens/FaseAr/PlataformaArChao.png",function() { counter++;});
    tile[1] = loadImage("imagens/FaseAr/PlataformaArGrade.png",function() { counter++;});

    tile[2] = loadImage("imagens/FaseAgua/PlataformaAguaChao.png",function() { counter++;});
    tile[3] = loadImage("imagens/FaseAgua/PlataformaAguaChaoInferior.png",function() { counter++;});

    tile[4] = loadImage("imagens/FaseTerra/Plataforma.png",function() { counter++;});
    tile[5] = loadImage("imagens/FaseTerra/grass0Antigo.png",function() { counter++;});
    tile[6] = loadImage("imagens/FaseTerra/grass1.png",function() { counter++;});
    tile[7] = loadImage("imagens/FaseTerra/grass2.png",function() { counter++;});
    tile[8] = loadImage("imagens/FaseTerra/grass1Antigo.png",function() { counter++;});
    tile[9] = loadImage("imagens/FaseTerra/FaseTerra_water.png",function() { counter++;});

    tile[10] = loadImage("imagens/FaseFuturo/FaseFuturo_plataforma.png",function() { counter++;});
    tile[11] = loadImage("imagens/FaseFuturo/FaseFuturo_plataforma.png",function() { counter++;});

    tile[12] = loadImage("imagens/FaseFogo/blocomenor.png",function() { counter++;});
    tile[13] = loadImage("imagens/FaseFogo/primeiroBloco.png",function() { counter++;});
    tile[14] = loadImage("imagens/FaseFogo/segundoBloco.png",function() { counter++;});
    tile[15] = loadImage("imagens/FaseFogo/blococentral.png",function() { counter++;});

    sprElevadorAgua = loadImage("imagens/FaseAgua/elevadorAgua.png",function() { counter++;});
    sprElevadorAr = loadImage("imagens/FaseAr/elevadorAr.png",function() { counter++;});
    
    tile[16] = loadImage("imagens/FaseAgua/alcapaoleft2.png",function() { counter++;});
    tile[17] = loadImage("imagens/FaseAgua/alcapaoright2.png",function() { counter++;});
    tile[18] = loadImage("imagens/FaseAgua/alcapaoleft1.png",function() { counter++;});
    tile[19] = loadImage("imagens/FaseAgua/alcapaoright1.png",function() { counter++;});

    fonte = loadFont("imagens/OCRAEXT.TTF");
    //colocar um counter++ em criarIcons
    //colocar um counter++ em fonte
    ImgMaquina = loadImage("imagens/FaseFuturo/FaseFuturo_maquina.png",function() { counter++;});
    ImgMaquinaBase = loadImage("imagens/FaseFuturo/FaseFuturo_maquina_base.png",function() { counter++;});
    circulos = loadImage("imagens/FaseFuturo/bola.png",function() { counter++;});

    imgDanger = loadImage("imagens/FaseFogo/new_danger.png",function() { counter++;});
    imgMessage = loadImage("imagens/FaseFogo/new_message.png",function() { counter++;});

    imgVoltarCreditos =  loadImage("imagens/Infografico/botao_voltar.png",function() { counter++;});
    
    textoIntrodutorio[0] ="Fortaleza. Ano 2050. A cidade encontra-se em um estado deplorável por conta dos problemas advindos da poluição crescente e raríssimas zonas de flora preservada. Rios utilizados como repositórios de descarte de resíduos industriais e residenciais. Bairros inteiros parecendo lixões a céu aberto.\n";
    textoIntrodutorio[1] ="Pessoas passaram a sentir fome e sede a um nível jamais visto desde a Seca de 1915. Foi necessário uma ação governamental, logo, mais de dois terços da população foram evacuados para outras cidades.\n";
    textoIntrodutorio[2] ="Assim é o futuro da cidade do Sol.\n";
    textoIntrodutorio[3] ="Mas nem tudo estava perdido. O Instituto Verdeluz desenvolveu uma tecnologia capaz de retornar ao passado, mas devido a partes que faltavam, não conseguiram realizar o feito.\n";
    textoIntrodutorio[4] ="Até que uma jovem garota chamada Luiza, toma a tarefa para si de recuperar os quatro elementos e completar a tecnologia presente em seu relógio. E assim, conseguir voltar ao passado e remediar seu futuro.\n";
    
    textoFinal[0] = "    Através do poder das esferas reunidas, Luiza conseguiu a capacidade de retornar ao passado assim como ela desejava antes de aceitar a missão do Verdeluz.";
    textoFinal[1] = "    Graças a seus esforços quando jovem, seu futuro, então, foi mudado e ela pôde mudar o destino cruel não só de sua mãe como de todos os fortalezenses acometidos pela poluição.";
    textoFinal[2] = "    Agora Fortaleza cresce de modo sustentável, mas precisa ainda de mais gente como Luiza para manter esse crescimento e não se desviar do caminho.";
    textoFinal[3] = "    Luiza é do futuro, então você pode evitar esses acontecimentos fazendo um presente melhor. \n    Seja um voluntário. \n\n              Instituto Verde Luz";
    
    dialogos[0] = [];
    dialogos[0][0] ="Luiza, eu sou a cientista do Verdeluz e a nossa tarefa é salvar Fortaleza. Me chamo Gabriela, mas pode me chamar de Gabi se quiser.";
    dialogos[0][1] ="A sua tarefa é recuperar as quatro esferas elementares para poder voltar ao passado.";
    dialogos[0][2] ="Então, preste bem atenção no que eu te digo, pois vai ser necessário para completar nosso objetivo.";
    dialogos[0][3] ="Portanto, só assim nós poderemos mudar significamente o nosso presente, Luiza. Boa sorte!";
    dialogos[1] = [];
    dialogos[1][0] ="O ar poluído é resultado da queima de combustíveis fósseis, desmatamento e atividades industriais. Estas causas liberam grandes quantidades de dióxido de carbono para atmósfera.";
    dialogos[1][1] ="Portanto, a concentração crescente desse composto faz a temperatura terrestre aumentar. E isso gera diversas consequências catastróficas não só para o ser humano quanto para o meio ambiente.";
    dialogos[1][2] ="Nós ainda podemos contornar esse problema pegando o elemento Ar. Lembre-se, o ar está acima de nós.";
    dialogos[2] = [];
    dialogos[2][0] ="Água é o composto de suma importância à vida. Não há dúvidas sobre isso. Mas devido a atividade humana, esse recurso tornou-se cada vez mais raro.";
    dialogos[2][1] ="A expansão da agrícola e pecuária, aquecimento global, poluição por materiais pesados, maré negra e entre demais eventos. Foram várias fatores que permitiram o estado em que nossos recursos se encontram hoje. De severa escassez.";
    dialogos[2][2] ="Você precisa encontrar o símbolo da Água, pois é de suma importância. Recorde bem que as veredas da água vem do oeste.";
    dialogos[3] = [];
    dialogos[3][0] ="A terra é outro componente vital não só para o ser humano quanto para tudo que existe na terra. Infelizmente, hoje está bem deteriorado.";
    dialogos[3][1] ="Agora, temos dificuldade em plantar e há contaminação de tudo o que provém do solo. Além disso, ainda tem a erosão para piorar.";
    dialogos[3][2] ="O único modo para prevenir o estado da qual chegamos se foi. Não há alternativa senão retornar ao passado. Tanto é que criamos o relógio que você utiliza  para isso e demais problemas.";
    dialogos[3][3] ="Recorde-se que o elemento Terra está abaixo de nós. Vai ser importante isso mais pra frente.";
    dialogos[4] = [];
    dialogos[4][0] ="O fogo, quando descoberto pelo ser humano bem antigamente, foi uma revolução que impactou fortemente no nosso modo de vida.";
    dialogos[4][1] ="No entanto, pelo lado negativo, foi através dessa descoberta que as pessoas começaram a queimar árvores para diversos propósitos. É o problema das queimadas.";
    dialogos[4][2] ="Luiza, pegue o símbolo do Fogo! O Fogo vem do leste.";
    
    
    /*
    textoIntrodutorio[0] = "    Fortaleza. Ano 2100. A cidade encontra-se em um estado deplorável por conta dos problemas advindos da poluição crescente. Os descartes de lixo aumentaram em proporção com o aumento populacional. Bairros inteiros parecendo lixões a céu aberto. Estradas obstruídas de sacos de lixo. Raríssimas zonas de flora preservada. Rios utilizados como repositórios de descarte de resíduos industriais e residenciais.\n";  
    textoIntrodutorio[1] = "    A poluição de causa humana foi agravada por fenômenos ambientais. A estiagem agravou a miséria que já existia na cidade. Pessoas passaram a sentir fome e sede a um nível jamais visto desde a Seca de 1915. Então, foi necessário uma medida governamental por conta de milhares de subnutridos, mortos pela poluição e refugiados.\n";
    textoIntrodutorio[2] = "    Assim é o futuro da cidade do Sol.\n";
    textoIntrodutorio[3] = "    Devido ao cenário de difícil sobrevivência na cidade de Fortaleza, mais de ⅔ dos cidadãos tiveram que ser realocados para outras cidades próximas.\n";
    textoIntrodutorio[4] = "    Diversos cidadãos tiveram que ser mandados para outras regiões por questões já conhecidas. E isso não foi diferente para uma jovem determinada e corajosa chamada Luiza, de 20 anos.\n";
    textoIntrodutorio[5] = "    Luiza teve que enfrentar diversas complicações em sua vida desde criança, mas não conseguiu deixar passar um episódio que marcou sua trajetória. O adoecimento de sua mãe. Ela adoeceu devido a complicações respiratórios advindas da poluição atmosférica anormal da cidade. E isso foi uma perda imensa para a jovem.\n";
    textoIntrodutorio[6] = "    Dias após esse acontecimento, a família de Luiza foi ordenada a se retirar de sua habitação e morar por pouco tempo nos setores de apoio aos sofridos pelos problemas da cidade.\n";
    textoIntrodutorio[7] = "    Mas o destino da jovem garota era outro. Sua avó rapidamente pediu que ela fosse se encontrar com certas pessoas de muita confiança. As veredas de Luiza não podiam terminar em um refúgio. Sua avó sabia que uma tarefa especial era reservada a sua neta,  e esta assim o fez mesmo com preocupação por seus familiares.\n";
    textoIntrodutorio[8] = "    Luiza seguindo as dicas informadas por sua avó, encontra certas pessoas vestidas de capuz preto. Estas rapidam levam a jovem à um prédio e lá se identificam como membros de uma organização que querem uma mudança ambiental em Fortaleza. O Instituto Verdeluz.\n";
    textoIntrodutorio[9] = "    Nossa protagonista então se depara com pessoas comprometidas com a causa ambiental e através de muitas conversas, a ela é apresentada a proposta de se integrar ao instituto como forma de solucionar os problemas da cidade. Sendo a possibilidade de remediar radicalmente os rumos com um avanço tecnológico obtido pela organização.\n"; 
    textoIntrodutorio[10] = "   Luiza então aceita e se compromete com o objetivo nobre. E é agraciada por cientistas com um aparelho e mochila que possibilitam retornar ao passado. Assim sendo, o destino de nossa protagonista encontra rumos totalmente novos.\n";
    textoIntrodutorio[11] = "   A chave para a mudança está nas mãos de uma jovem determinada e corajosa.\n";
   
    dialogos[0] = [];
    dialogos[0][0] = "Luiza, eu sou a cientista do Verdeluz e minha tarefa é salvar Fortaleza. Me chamo Gabriela, mas pode me chamar de Gabi se quiser. Então, estarei me comunicando com você através de seu relógio sempre que precisar.";
    dialogos[0][1] = "Prepare-se para entender as causas que as atividades humanas levaram à essa cidade. Você tem que compreender os problemas atuais de Fortaleza para poder cumprir seu objetivo.";
    dialogos[0][2] = "Em várias partes desses lugares que passará, você precisa achar um símbolo representado por uma esfera para poder completar os componentes que faltam em seu relógio temporal.";
    dialogos[0][3] = "Portanto, só assim nós poderemos mudar significamente o nosso presente, Luiza. Entendeu tudinho? Estamos contigo. A humanidade está. Fique atenta ao avisos do relógio, atravez dele você poderar viajar no tempo e eu poderia me comunicar com você.";
    dialogos[1] = [];
    dialogos[1][0] = "O ar poluído que temos é senão o produto de processos como a queima de combustíveis fósseis, desmatamento e atividades industriais. Estas causas liberam grandes quantidades de dióxido de carbono para atmósfera.";
    dialogos[1][1] = "Portanto, a concentração crescente desse composto faz a temperatura terrestre aumentar pelo fato do CO² reter parte da energia dos raios solares que são refletidos em direção ao espaço.";
    dialogos[1][2] = "As consequências desse problema são diversas. Elevação do nível dos mares, acidificação dos oceanos, problemas de saúde nas pessoas, extinção de espécies sensíveis a temperatura e entre outros fatores.";
    dialogos[1][3] = "Luiza, o ser humano é culpado majoritariamente por tudo isso que você leu. Culpado pela situação que vivemos. Fortaleza era linda antigamente e o ar era mais limpo e saudável."; 
    dialogos[1][4] = "Mas, nós ainda podemos resolver esse problema. Ainda há esperança! Vamos dar o primeiro passo pegando o símbolo do Ar. E Luiza, o ar é o elemento situado na posição mais alta, pois compõe toda a atmosfera terrestre.";
    dialogos[2] = [];
    dialogos[2][0] = "Água é o composto de suma importância à vida. Não há dúvidas sobre isso. É o elemento mais essencial de todos quando se trata das condições para existência da vida.";
    dialogos[2][1] = "A partir da primeira Revolução Industrial, aliada a produção em massa, a poluição das águas cresceu gradativamente. Não só a produção de produtos causou isso como também diversos fatores.";
    dialogos[2][2] = "A expansão da agrícola e pecuária, aquecimento global, poluição por materiais pesados, maré negra e entre demais eventos. Foram várias fatores que permitiram o estado em que nossos recursos se encontram hoje. De severa escassez.";
    dialogos[2][3] = "Você precisa encontrar o símbolo da Água, pois é de suma importância. Água que constitui boa parte dos seres vivos, vem em abundancia dos rios do oeste";
    dialogos[3] = [];
    dialogos[3][0] = "A terra é outro componente vital não só para o ser humano quanto para tudo que existe na terra. Infelizmente, hoje está bem deteriorado.";
    dialogos[3][1] = "Devido ao crescente avanço da produção agrícola, árvores foram derrubadas, solos defeituosos foram corrigidos quimicamente com produtos corretivos, solos compactados, crescimento das cidades. Estas causas prejudicaram o solo.";
    dialogos[3][2] = "As gerações de hoje pagaram o preço cruel pelas ações de seus pais no passado. E para piorar, recuperar um solo degradado demora bilhões de anos. Fora da escala humana.  Vou listar algumas dificuldades de hoje em dia.";
    dialogos[3][3] = "Dificuldade em plantar qualquer tipo de planta, má nutrição dos alimentos que nascem. Contaminação de tudo o que provém do solo. Além disso, ainda tem a erosão para piorar.";
    dialogos[3][4] = "O único modo para prevenir o estado da qual chegamos se foi. Não há alternativa senão retornar ao passado. Tanto é que criamos o relógio que você utiliza  para isso e demais problemas. O solo sustenta toda a vida na terra abaixo dos nossos pés";
    dialogos[4] = [];
    dialogos[4][0] = "O fogo, quando descoberto pelo ser humano bem antigamente, foi uma revolução que impactou fortemente no nosso modo de vida.";
    dialogos[4][1] = "Por meio do fogo, a humanidade conseguiu superar diversos problemas, como a dificuldade em sobreviver em lugares frios. Até mesmo cozinhar se tornava mais prático.";
    dialogos[4][2] = "No entanto, pelo lado negativo, foi através dessa descoberta que as pessoas começaram a queimar árvores para diversos propósitos. É o problema das queimadas.";
    dialogos[4][3] = "As queimadas, quando feitas de modo desorganizado, podem evoluir para grandes paredões de fogo que consomem extensos campos de mata nativa. E isso é horrível para a preservação da natureza.";
    dialogos[4][4] = "As queimadas não só destroem o habitat de diversos animais como também prejudica o solo. ";
    dialogos[4][5] = "O fogo que renova a vida, sempre vem alimentando pelos ventos do leste. Luiza, pegue o símbolo do Fogo!";
    */
    
}

function setup(){
    var canvas = createCanvas(768,448);
    canvas.id("canvas");
    canvas.parent("contener");
    //canvas.mouseClicked(telacheia);
    //carregando
    detectmob();
    loading();
    criarIcons();
    fase(0);
    for(var i = 0;i<100;i++)
        particulas.push(new particles(random(width),random(height),random(1,5),random(0.38,6.28)));
        
    elementos.push(new pecas(160,150,true,imgElementosGrandes[0]));
    elementos.push(new pecas(160,250,true,imgElementosGrandes[1]));
    elementos.push(new pecas(608,150,true,imgElementosGrandes[2]));
    elementos.push(new pecas(608,250,true,imgElementosGrandes[3]));
    posicoes.push(new pecas(384,100,false));
    posicoes.push(new pecas(300,200,false));
    posicoes.push(new pecas(384,300,false));
    posicoes.push(new pecas(468,200,false));
    
    lugares[0] = new controle(614,261,47,17,0,0,imgLugares[0]);
    lugares[0].elementar = 0;
    lugares[0].funcao = function(){
        fase(1);
    }
    lugares[1] = new controle(614,284,47,17,0,0,imgLugares[1]);
    lugares[1].elementar = 0;
    lugares[1].funcao = function(){
        fase(2);
    }
    lugares[2] = new controle(614,307,47,17,0,0,imgLugares[2]);
    lugares[2].elementar = 0;
    lugares[2].funcao = function(){
        fase(3);
    }
    lugares[3] = new controle(614,330,47,17,0,0,imgLugares[3]);
    lugares[3].elementar = 0;
    lugares[3].funcao = function(){
        fase(4);
    }
    lugares[0].img = imgLugares[4];
    //criando obstaculos
    //wall(solido,x,y,w,h,img,movel,atividade)
    /*
    //NORMAL
    parede[39] = new wall(true,12*32,1*32,32,32,chao,false);
    //DERRUBA
    parede[40] = new wall(false,23*32,10*32,32,32,down,false);
    parede[40].filho = parede[39];
    parede[40].atividade = (function(){this.filho.movel = true;});
    //ELEVADOR
    parede[41] = new wall(false,3*32,8*32,32,32,chao,false);
    parede[41].filho = parede[14];
    parede[41].filho.count = 32;
    parede[41].atividade = (function(){if(this.filho.count>0){this.filho.y--;this.filho.count--;}}),
    parede[41].inatividade = (function(){if(this.filho.count<32){this.filho.y+=0.5;this.filho.count+=0.5;}});
    //ELEVADOR AO CONTRARIO
    parede[42] = new wall(false,5*32,8*32,32,32,chao,false);
    parede[42].filho = parede[15];
    parede[42].filho.count = 0;
    parede[42].atividade = (function(){if(this.filho.count<32){this.filho.y+=0.1;this.filho.count+=0.1;}}),
    parede[42].inatividade = (function(){if(this.filho.count>0){this.filho.y-=0.1;this.filho.count-=0.1;}});
    //ALCAPAO
    parede[43] = new wall(false,7*32,8*32,32,32,chao,false);
    parede[43].filho = parede[32];
    parede[43].outrofilho = parede[33];
    parede[43].atividade = (function(){
        for(var i=0;i<parede.length;i++){
            if(parede[i]==this.filho){
                parede[i].x-=32;
                parede[i].y+=32;
            }
            if(parede[i]==this.outrofilho){
                parede[i].x+=32;
                parede[i].y+=32;
            }
        }
        this.atividade=undefined;
    });*/
    //controles
    while(scene.length < 600){
        armJogador = Object.assign({},jogador);
        armParede = [];
        for(var i=0;i<parede.length;i++) armParede[i] = Object.assign({},parede[i]);
        
        scene.push([armJogador,armParede]);
    }

    controladores();
}

function fase(valor){
    switch(valor){
        case 0:
            parede = undefined;
            parede = [];
            faseAtual = 0;
            textoAtual = "";
            textoIndex = 0;
            primeiraFaseFuturo();
        break;
        case 1:
            parede = undefined;
            parede = [];
            faseAtual = 1;
            textoAtual = "";
            textoIndex = 0;
            primeirafase();
        break;
        case 2:
            parede = undefined;
            parede = [];
            faseAtual = 2;
            textoAtual = "";
            textoIndex = 0;
            segundafase();
        break;
        case 3:
            parede = undefined;
            parede = [];
            faseAtual = 3;
            textoAtual = "";
            textoIndex = 0;
            terceirafase();
        break;
        case 4:
            parede = undefined;
            parede = [];
            faseAtual = 4;
            textoAtual = "";
            textoIndex = 0;
            quartafase();
        break;
    }
}

function draw(){
    globalBound = false;
    switch(telas){
        case 0:
            carregamento();
        break;
        case 1:
            if(introduziu == false) introducao(); else game();
        break;
        case 2:
            infografico();
        break;
        case 3:
            montar();
        break;
        case 4: 
            infoativo();
        break;
        case 5: 
            creditos();
        break;
    }
    mouseCursor();
    //cancelaFullscreen();
}

function introducao(){
    background(0);
    fill(255);
    noStroke();
    textFont(fonte,26);
    textAlign(LEFT,TOP);
    text(outroTexto,20,20,728,408);
    outroTexto += textoIntrodutorio[introIndex].charAt(outroTexto.length);

    if(outroTexto.length == textoIntrodutorio[introIndex].length && mouseIsPressed){
        introIndex++;
        outroTexto = "";
        contIntro = 0;
    }
    if(introIndex == textoIntrodutorio.length-1){
        introIndex = 0;
        introduziu = true;
    }
}

function desfecho(){
    background(0);
    fill(255);
    noStroke();
    textFont(fonte,26);
    textAlign(LEFT,TOP);
    text(outroTexto,20,20,728,408);
    outroTexto += textoFinal[introIndex].charAt(outroTexto.length);

    if(outroTexto.length == textoFinal[introIndex].length && mouseIsPressed){
        introIndex++;
        outroTexto = "";
        contIntro = 0;
    }
    if(introIndex == textoFinal.length-1){
        introIndex = 0;
        introduziu = true;
    }
}

function infoativo(){
    background(backAtivo);
    if(document.getElementById("imageOne").src != "")
        document.getElementById("imageOne").addEventListener("load",function(){ document.getElementById("imageOne").style.display = "block"; });
        
    if(document.getElementById("imageTwo").src != "")
        document.getElementById("imageTwo").addEventListener("load",function(){ document.getElementById("imageTwo").style.display = "block"; });

    if(document.getElementById("imageThree").src != "")
        document.getElementById("imageThree").addEventListener("load",function(){ document.getElementById("imageThree").style.display = "block"; });

    if(document.getElementById("imageFour").src != "")
        document.getElementById("imageFour").addEventListener("load",function(){ document.getElementById("imageFour").style.display = "block"; });
}

function creditos(){
    image(imgCreditos,0,0);
    voltarCreditos.update();
}

function montar(){
    background(backgrounds[5]);
    for(var i=0;i<posicoes.length;i++) posicoes[i].update();
    for(var i=0;i<elementos.length;i++) if(elementos[i].bounded() && mouseIsPressed && selecionado == null) selecionado = elementos[i];
    for(var i=0;i<elementos.length;i++) elementos[i].update();
    var certos = 0;
    for(var i=0;i<elementos.length;i++)
        if(elementos[i].x == posicoes[i].x && elementos[i].y == posicoes[i].y)
            certos++;
    if(certos == 4)
        desfecho();
}

function infografico(){
    background(backinfo[0]); 
    for(var i=0;i<particulas.length;i++)
        particulas[i].update()
    background(backinfo[1]);

    for(var i=0;i<icons.length;i++){
        if(!icons[i].bounded())
            icons[i].update();
        if(i<icons.length-2)
            icons[i].flutuacao();
    }

    for(var i=0;i<icons.length;i++){
        if(icons[i].bounded())
            icons[i].update();
    }
    //console.log(icons[4].funcao());
}

function carregamento(){
    fill(0);
    background(18,75,72);
    //rect(50,height/2+height/4,668,20);
    fill(255,255,0);
    noStroke();
    var tamanho = 668/contadorImg * counter;
    //rect(50,height/2+height/4,tamanho,20);
    var angulo = 6.28/10;
    var xLoading = width/2;
    var yLoading = height/2;
    var vezes = int(10/contadorImg * counter); 
    for(var i=0;i<vezes;i++){
        fill(i*(201/10)+20,i*(218/10)+21,i*(65/10)+6);
        strokeWeight(1);
        //triangle(xLoading,yLoading,xLoading+cos(angulo*i)*100,yLoading+sin(angulo*i)*100,xLoading+cos(angulo*(i+1))*100,yLoading+sin(angulo*(i+1))*100);
        arc(xLoading,yLoading,200,200,angulo*i,angulo*(i+1));
    }
    fill(18,75,72);
    ellipse(xLoading,yLoading,160,160);
    textAlign(CENTER,CENTER);
    //text(int(0 + 100/contadorImg * counter) + "%",xLoading,yLoading+120);
    var porcentagem = int(0 + 100/contadorImg * counter);
    var valores = [];
    valores[0] = int(porcentagem/100); //centenas
    valores[1] = int((porcentagem%100)/10); //dezenas
    valores[2]=  porcentagem - valores[0]*100 - valores[1]*10; //unidades
    for(var k=0;k<3;k++)
            for(var i=0;i<3;i++)
                    for(var j=0;j<5;j++)
                        if(loadingText[valores[k]][j][i] == 1){
                            fill(255);
                            rect(xLoading+5*i-40+20*k,yLoading+5*j-12,4,4);
                        }
    for(var i=0;i<3;i++)
        for(var j=0;j<5;j++)
            if(loadingText[10][j][i] == 1){
                fill(255);
                rect(xLoading+5*i-40+60,yLoading+5*j-12,4,4);
            }
    //arc(width/2,height/2,200,200,0,6.28/contadorImg*counter);
    if(counter == contadorImg){
        telas = 2;
        noStroke();
        noFill();
    }
}

function mostrarmochila(){
    image(inventario,84,24);
    fill(255);
    noStroke();
    textAlign(LEFT, TOP);
    textoAtual += dialogos[faseAtual][textoIndex].charAt(textoAtual.length);
    textFont(fonte,16);
    text(textoAtual,240,160,340,200);
    noFill();
    if(textoIndex < dialogos[faseAtual].length - 1)
        proximoTexto.update();
    if(textoIndex > 0)
        anteriorTexto.update();
    if(leu == false) leu = true;
    if(textoIndex < dialogos[faseAtual].length - 1) message = true; else message = false;
    for(var i=0;i<jogador.numeroItens;i++)
        image(imgElementos[i],162+i*120,122,22,22);
    for(var i=0;i<lugares.length;i++)
        lugares[i].update();
}

var frames = 0, contador = 0, voltatempo = 0;

function game(){
    //parede.sort(ordenar);
    if(keyIsPressed && keyCode == ENTER){
        //console.log(scene[scene.length-1]);
        //if(voltatempo % 30 == 0){
            background(backgrounds[faseAtual]);
            jogador.update();
            for(var i=0;i<parede.length;i++){
                parede[i].criar();
            }  
        
            if(scene.length > 0){
                jogador = scene[scene.length-1][0];
                parede = scene[scene.length-1][1];
                //console.log(scene[scene.length-1]);

                scene.pop();
            }
        //}
        fill(200,200,0,50);
        rect(0,0,width,height);

        voltatempo++;
    }
    else{
    //noTint();
    background(backgrounds[faseAtual]);
    jogador.update();
    move();
    for(var i=0;i<parede.length;i++){
        parede[i].criar();
    }   

    while(scene.length < 600){
        armJogador = Object.assign({},jogador);
        armParede = [];
        for(var i=0;i<parede.length;i++) armParede[i] = Object.assign({},parede[i]);
        //console.log(armParede);
        
        scene.push([armJogador,armParede]);
    }

    //if(frames % 30 == 0){
        scene.splice(0,1);
        
        armJogador = Object.assign({},jogador);
        armParede = [];
        for(var i=0;i<parede.length;i++) armParede[i] = Object.assign({},parede[i]);
        
        scene.push([armJogador,armParede]);
    //}
    //frames++;

    presa(jogador,parede);
    //move();
    //item[0].criar();
    alerta();
    if(mostrar == true) mostrarmochila();

    strokeWeight(4);
    fill(74,49,35,80);
    stroke(255,80);
    quad(20,395,77,395,87,448,10,448);
    quad(308,0,318,53,427,53,437,0);

    for(var i=0;i<controles.length;i++) controles[i].update();
    //x/y == 6.28
    fill(255,255,0,50+50*sin((frameCount % 157)/25));
    if(leu == false) ellipse(380+37/2,8+37/2,37,37,);

    if(mobilemode){
        var k = 0;
        for(k in arrow){
            arrow[k].update();
        }
        var k = 0;
        for(k in arrow)
            for(var i=0;i<touches.length;i++)
                if(arrow[k].arrowBounded(touches[i].x,touches[i].y))
                    arrow[k].funcao();
    }

    efeitoSonoros();

    }
}

function alerta(){
    if(message == true){
        image(imgMessage,460,370);
    }
    if(reiniciou == true){
        if(contadorAlerta < 180){
            image(imgDanger,460,370);
            contadorAlerta++;
        }
        else{
            reiniciou = false;
            contadorAlerta = 0;
        }
    }
}

function efeitoSonoros(){
    if(vspeed != 0){
        if(jogador.movendo == "RIGHT" || jogador.movendo == "LEFT"){
            if(vspeed != 1){
                //Andando
                if(!SoundEfeito[1].isPlaying())
                    SoundEfeito[1].play();
                //Enpurando
                SoundEfeito[0].pause();
            }
            else{
                //Enpurando
                if(!SoundEfeito[0].isPlaying())
                        SoundEfeito[0].play();
                //Andando
                SoundEfeito[1].pause();
            }
        }
    }
    else{
        SoundEfeito[0].pause();
        SoundEfeito[1].pause();
    }
}

function mouseCursor(){
    if(mobilemode == false)
        if(globalBound == true){
            document.getElementById("canvas").style.cursor = "pointer";
        }
        else{
            document.getElementById("canvas").style.cursor = "default";
        }
}

function player(){
    this.solido = true;
    this.width = 31;
    this.height = 64;
    this.x = 0;
    this.y = 0;
    this.index = 0;
    this.direcao = 0;
    this.movendo = "PARADO";
    this.tempo = 0;
    this.pulo = false;
    this.colidido = true;
    this.gravidade = 0.2;
    this.auxgra = 0;
    this.vspeed = 0;
    this.hspeed = 3;
    this.queda = 0.3;
    this.mochila = [];
    this.indice = 0;
    this.soundBound = true;
    this.numeroItens = 0;
    //era 0.3
    this.update = function(){
        //fill(0,255,0);
        //image(sprites[this.direcao],0,this.y,125,98,0+125*int(this.index),0,125,98);
        //translate(width/2-this.x,height/2-this.y);
        this.y+=this.vspeed;
        this.vspeed+=this.gravidade;
        
        var colididos = 0;
        for(var i=0;i<parede.length;i++){
            if(boundingBox(this,parede[i]) && this != parede[i]){
                if(parede[i].solido == true){
                    if(this.y < parede[i].y) this.y = parede[i].y - this.height; 
                    if(this.y > parede[i].y) this.y = parede[i].y + parede[i].height + 1; 
                    this.pulo = false;
                    this.colidido = true;
                    this.vspeed = 0;
                    colididos++;
                }
            }
        }
        if(colididos == 0) this.colidido = false;

        //if(this.pulo==true && this.colidido == false){
            //this.colidido = false;
            //this.queda+=0.7;
        //if(14-this.queda > 0) this.y-=14-this.queda;
            //console.log(this.queda);
            
        //if(14-this.queda - 12 < 0) this.index = 1;
        //if(14-this.queda - 6 < 0) this.index = 2;
        //if(14-this.queda - 2 < 0) this.index = 0;
        if(this.vspeed < 0){ 
            if(this.vspeed < -3) this.index = 1;
            else if(this.vspeed < -2) this.index = 2;
            else if(this.vspeed < -1) this.index = 0;
            if(this.indice == 0 || this.indice == 2) this.indice = 4;
            if(this.indice == 1 || this.indice == 3) this.indice = 5;
        }
        if(this.vspeed > 0){ 
            this.index = 0;
            if(this.indice == 0 || this.indice == 2) this.indice = 4;
            if(this.indice == 1 || this.indice == 3) this.indice = 5;
        }
        var auxAnimate = 0;
        if(this.indice == 2 || this.indice == 3) auxAnimate += 4;
        if((this.index + auxAnimate) * 32 > sprites.width) this.index = 0;

        if(this.pulo == false){ this.index+=0.05; }
        
        image(sprites,width/2+this.x-jogador.x,height/2+this.y-jogador.y,32,64,32*int(this.index),64*this.indice,32,64);
        //}
        /*if(!this.colidido){
            this.y+=this.gravidade;
            if(this.pulo != true){
                if(this.indice == 0 || this.indice == 2)
                    this.indice = 4;
                if(this.indice == 1 || this.indice == 3)
                    this.indice = 5;
                this.index = 0;
            }
            this.soundBound = true;
            //this.gravidade+=0.3;
        }
        else{
            this.queda=0.3;
            if(!SoundEfeito[3].isPlaying() && this.soundBound){
                SoundEfeito[3].play();
                this.soundBound = false;
            }
        }*/
        //bound(this,parede);
        //image(sprites[0],this.x,this.y,32,64);
        if(this.x+this.width>width) this.x=width-this.width;
        else if(this.x<0) this.x=0;
        
        if(this.y<0) this.y=0;
        else if(jogador.y>height){ fase(faseAtual); reiniciou = true;}


        if(!keyIsPressed && mobilemode == false){
            if(jogador.indice % 2 == 0) jogador.indice = 0; else jogador.indice = 1;
                jogador.index = 0;
                jogador.movendo = "PARADO";
            }
        else if(touches.length == 0 && mobilemode == true){
            if(jogador.indice % 2 == 0) jogador.indice = 0; else jogador.indice = 1;
                jogador.index = 0;
                jogador.movendo = "PARADO";
        }
    }
}

function wall(solido,x,y,w,h,img,movel){
    this.solido = solido;
    this.x = x * 32;
    this.y = y * 32;
    this.width = w;
    this.height = h;
    this.img = img;
    this.movel = movel;
    this.colidido = false;
    this.gravidade = 10;
    this.fazer = false;
    this.resertar = false;
    this.soundBound = true;
    this.criar = function(){
        if(this.resertar == true){
            this.solido = solido;
            this.x = x * 32;
            this.y = y * 32;
            this.width = w;
            this.height = h;
            this.img = img;
            this.movel = movel;
            this.colidido = false;
            this.gravidade = 10;
            this.fazer = false;
            this.resertar = false;
            reiniciou = true
        }
        if(movel == true){
            this.movel = movel;
        }
        //fill(255,0,0);
        if(this.movel == true){
            if(!this.colidido){
                this.y+=this.gravidade;
                this.soundBound = true;
                //this.gravidade+=0.3;
            }
            else{
                if(!SoundEfeito[2].isPlaying() && this.soundBound){
                    SoundEfeito[2].play();
                    this.soundBound = false;
                }
            }
            presa(this,parede);

            var colididos = 0;
            for(var i=0;i<parede.length;i++){
                if(boundingBox(this,parede[i]) && this != parede[i]){
                    if(parede[i].solido == true){
                        this.y = parede[i].y - this.height; 
                        this.pulo = false;
                        this.colidido = true;
                        this.gravidade = 5;
                        colididos++;
                    }
                }
            }
            if(colididos == 0) this.colidido = false;
            //bound(this,parede);
        }
        if(this.y>height){
            this.y = height+100;
            this.x = width+100;
            //console.log(x,y);
        }
        if(this.fazer == true && this.atividade != undefined){
            //this.atividade();
            this.fazer = false;
        }
        else if(this.inatividade != undefined){
            //this.inatividade();
        }
 
        var colididos = 0;
        for(var i=0;i<parede.length;i++){
            if(boundingBox(this,parede[i]) && this != parede[i]){
                //if(this.atividade != undefined && parede[i].movel == true){
                    this.y--;
                    colididos++;
                //}
            }
        }
        if(colididos == 0 && boundingBox(this,jogador) && this.atividade != undefined) this.atividade();

        image(this.img,width/2+this.x-jogador.x,height/2+this.y-jogador.y);
        if(this.y > 448){
            for(var i=0;i<parede.length;i++)
                if(parede[i] == this)
                    parede.splice(i,1);
        }
        //rect(this.x,this.y,this.width,this.height);
    }
}

function controle(x,y,largura,altura,raio,id,img,plataforma,texto){
    this.x = x;
    this.y = y;
    this.id = id;
    this.img = img;
    this.largura = largura;
    this.altura = altura;
    this.raio = raio;
    this.plataforma = plataforma;
    this.texto = texto;
    this.ang = 0;
    this.yy = y;
    this.update = function(){
        /*rect(this.x+this.raio,this.y,this.largura-this.raio*2,this.altura);//172 e 100
        rect(this.x,this.y+this.raio,this.largura,this.altura-this.raio*2);//200 e 72
        ellipse(this.x+this.raio,this.y+this.raio,this.raio*2,this.raio*2);
        ellipse(this.x+this.largura-this.raio,this.y+this.raio,this.raio*2,this.raio*2);
        ellipse(this.x+this.raio,this.y+this.altura-this.raio,this.raio*2,this.raio*2);
        ellipse(this.x+this.largura-this.raio,this.y+this.altura-this.raio,this.raio*2,this.raio*2);
        fill(0);*/
        //-40 para posicionar no centro do circulo de colisao
        if(this.bounded()){
            globalBound = true;
            if(this.titulo != undefined){
                this.img = this.outraImg;
                fill(229,38,73);
                noStroke();
                rect(this.x+this.img.width/2,this.y+4,textWidth(this.titulo)+this.img.width/2+4,40,7);
                fill(255);
                textFont(fonte,25);
                textAlign(LEFT, CENTER);
                text(this.titulo,this.x+this.img.width,this.y+24);
                fill(0);
            }
        }
        else if(this.elementar == undefined){
            this.img = img;
        }
        image(this.img,this.x,this.y,this.largura,this.altura);
    }
    this.checar = function(){
        if(this.bounded()){
            //fill(255);
            globalBound = true;
            this.funcao();
        }
        //-40 para posicionar no centro do circulo de colisao
        //image(this.img,this.x,this.y,this.largura,this.altura);
    }
    this.bounded = function(){
        var bound = false;
        if(mouseX >= this.x+this.raio && mouseY >= this.y && distancia1D(this.x+this.raio,mouseX) <= this.largura-this.raio*2 && distancia1D(this.y,mouseY) <= this.altura
        || mouseX >= this.x && mouseY >= this.y+this.raio && distancia1D(this.x,mouseX) <= this.largura && distancia1D(this.y+this.raio,mouseY) <= this.altura-this.raio*2 
        || distancia2D(this.x+this.raio,this.y+this.raio,mouseX,mouseY) <= this.raio || distancia2D(this.x+this.largura-this.raio,this.y+this.raio,mouseX,mouseY) <= this.raio 
        || distancia2D(this.x+this.raio,this.y+this.altura-this.raio,mouseX,mouseY) <= raio || distancia2D(this.x+this.largura-this.raio,this.y+this.altura-this.raio,mouseX,mouseY) <= this.raio)
            bound = true;
        return bound;
    }
    this.flutuacao = function(){
        this.y+=sin(this.ang)/14;
        this.ang+=0.01;
        fill(0);
        stroke(0);
        ellipse(this.x+this.img.width/2,this.yy+(this.img.height*1.4),10+abs(sin(this.ang/2))*20,6);
        if(this.ang>6.28)
            this.ang = 0;
        //console.log(this.ang);
    }
    this.arrowBounded = function(valorX,valorY){
        var bound = false;
        if(valorX >= this.x+this.raio && valorY >= this.y && distancia1D(this.x+this.raio,valorX) <= this.largura-this.raio*2 && distancia1D(this.y,valorY) <= this.altura
        || valorX >= this.x && valorY >= this.y+this.raio && distancia1D(this.x,valorX) <= this.largura && distancia1D(this.y+this.raio,valorY) <= this.altura-this.raio*2 
        || distancia2D(this.x+this.raio,this.y+this.raio,valorX,valorY) <= this.raio || distancia2D(this.x+this.largura-this.raio,this.y+this.raio,valorX,valorY) <= this.raio 
        || distancia2D(this.x+this.raio,this.y+this.altura-this.raio,valorX,valorY) <= raio || distancia2D(this.x+this.largura-this.raio,this.y+this.altura-this.raio,valorX,valorY) <= this.raio)
            bound = true;
        return bound;
    }
}

function pecas(x,y,movel,img){
    this.x = x;
    this.y = y;
    this.movel = movel;
    this.img = img; 
    this.raio = 64;
    this.permissao = false;
    this.posX = [];
    this.posY = [];
    this.cont = 0;
    this.encaixo = false;
    this.iniciar = true;
    this.velocidade = 10;
    this.preenchido = false;
    this.update = function(){
        if(movel == true){ 
            if(this.iniciar == true){ 
                while(this.posX.length < this.velocidade){
                    this.posX.push(x);
                    this.posY.push(y);
                } 
                this.iniciar = false; 
            }
            if(mouseIsPressed && selecionado == this){
                this.posX[this.cont % this.velocidade] = mouseX; 
                this.posY[this.cont % this.velocidade] = mouseY; 
                this.cont++;
                this.x = this.medioX();
                this.y = this.medioY();
                this.encaixo = false;
                var auxBool = true;
                for(var i=0;i<elementos.length;i++){
                    if(elementos[i] != this && distancia2D(this.x,this.y,elementos[i].x,elementos[i].y) <= this.raio/2)
                        auxBool = false;
                }
                for(var i=0;i<posicoes.length;i++){
                    if(distancia2D(this.x,this.y,posicoes[i].x,posicoes[i].y) <= this.raio/2 && auxBool == true){
                        this.x = posicoes[i].x;
                        this.y = posicoes[i].y;
                        this.encaixo = true;
                    }
                }
            }
            else if(!mouseIsPressed && selecionado == this){
                selecionado = null;
            }
            else{
                this.permissao = false;
                if(this.encaixo == false){
                    this.x = x;
                    this.y = y;
                    this.posX = [];
                    this.posY = [];
                    while(this.posX.length < this.velocidade){
                        this.posX.push(x);
                        this.posY.push(y);
                    }
                }
            }
            fill(0);
            image(this.img,this.x-this.img.width/2,this.y-this.img.height/2);
        }
    }
    this.bounded = function(){
        var bound = false;
        if(distancia2D(this.x,this.y,mouseX,mouseY) <= this.raio/2)
            bound = true;
        return bound;
    }
    this.medioX = function(){
        var soma = 0;  
        for (var i=0; i<this.velocidade; i++)    
            soma += this.posX[i];  
        return int(soma/this.velocidade);
    }  
    this.medioY = function(){
        var soma = 0;  
        for (var i=0; i<this.velocidade; i++)    
            soma += this.posY[i];  
        return int(soma/this.velocidade);
    }  
}

function maquina(x,y,img,anotherImg,imgFilho){
    this.x = x;
    this.y = y;
    this.yFixo = y;
    this.img = img;
    this.base = anotherImg;
    this.raio = 88;
    this.ang = 0;
    this.filho = [];
    this.imgFilho = imgFilho;
    this.iniciar = false;
    this.update = function(){
        if(this.iniciar == false){
            this.filho[0] = new pedaco(this,6,0,this.imgFilho);
            this.filho[1] = new pedaco(this,6,1,this.imgFilho);
            this.filho[2] = new pedaco(this,6,2,this.imgFilho);
            this.filho[3] = new pedaco(this,6,3,this.imgFilho);
            this.filho[4] = new pedaco(this,6,4,this.imgFilho);
            this.filho[5] = new pedaco(this,6,5,this.imgFilho);
            this.iniciar = true; 
        }
        image(this.base,this.x-this.base.width/2,this.yFixo+16);
        image(this.img,this.x-this.img.width/2,this.y-this.img.height/2+10);
        for(var i =0; i < this.filho.length;i++)
            this.filho[i].update();
        this.flutuacao();
    }
    this.flutuacao = function(){
        this.y+=sin(this.ang)/9;
        this.ang+=0.06;
        if(this.ang>6.28)
            this.ang = 0;
    }
}

function pedaco(pai,ang,pos,img){
    this.pai = pai;
    this.ang = (2*PI/ang)*pos;
    this.img = img;
    this.update = function(){
        image(this.img,(this.pai.x+cos(this.ang)*this.pai.raio)-this.img.width/2,(this.pai.y+sin(this.ang)*this.pai.raio)-this.img.height/2);
        this.ang+=0.01;
    }
}

function bound(objum,objdois){
    var me = objum;
    var aux = [];
    if(objdois.length == undefined){
        aux[0] = objdois;
    }
    else{
        aux = objdois; 
    }
    var count = 0;
    for(var i=0;i<aux.length;i++){
        if(aux[i] != me)
            //era <= e >=
            if(me.x + me.width > aux[i].x && me.x < aux[i].x + aux[i].width){
                if(me.y + me.height > aux[i].y && me.y < aux[i].y + aux[i].height){
                    if(aux[i].solido == true){
                        count++;
                        me.pulo = false;
                        me.colidido = true;
                        me.gravidade = 5;
                        //if(me == jogador && aux[i].item != undefined){
                            //jogador.mochila.push(aux[i].item);
                            ///aux.splice(i,1);
                            //break;
                        //}
                        //abaixo estÃƒÂ¡ uma soluÃƒÂ§ÃƒÂ£o criativa (-1)
                        while(me.y+me.height - 1 > aux[i].y && me.y <= aux[i].y){
                            me.y--;
                        }
                    }
                    else{
                        if(aux[i].atividade != undefined && aux[i].fazer == false){
                            aux[i].fazer = true;
                        }
                    }
                }
                while(me.y < aux[i].y + aux[i].height && me.y > aux[i].y){
                    if(aux[i].solido == true){
                        if(me.movel == true){
                            //me.movel = false;
                            //console.log(me);
                        }
                        me.y++;
                    }
                    else{
                        if(aux[i].atividade != undefined && aux[i].fazer == false){
                            aux[i].fazer = true;
                        }
                        break;
                    }
                }
            }
    }
    if(count == 0){
        me.colidido = false;
    }
}

function boundingBox(me,aux){
    if(me.x + me.width > aux.x && me.x < aux.x + aux.width 
    && me.y + me.height >= aux.y && me.y <= aux.y + aux.height)
        return true;
}

function bounding(me,aux){
    if(me.x + me.width >= aux.x && me.x <= aux.x + aux.width 
    && me.y + me.height > aux.y && me.y < aux.y + aux.height)
        return true;
}
//criar parametros
function direita(objum,objdois){
    var me = objum;
    var aux = [];
    if(objdois.length == undefined){
        aux[0] = objdois;
    }
    else{
        aux = objdois; 
    }
    var pode = true;
    for(var i=0;i<aux.length;i++){
        if(aux[i] != me){
        //abaixo estÃƒÂ¡ uma soluÃƒÂ§ÃƒÂ£o criativa (-1)
            if(me.x + 1 + me.width >= aux[i].x && me.x + 1 <= aux[i].x + aux[i].width 
            && me.y + me.height - 1 > aux[i].y && me.y < aux[i].y + aux[i].height){
                if(aux[i].solido == true){
                    if(aux[i].movel==false){
                        pode = false;
                        if(me == jogador && aux[i].item != undefined){
                            jogador.mochila.push(aux[i].item);
                            aux.splice(i,1);
                            break;
                        }
                    }
                    else if(direita(aux[i],objdois) && aux[i].x + aux[i].width < width){
                        vspeed = 1;
                        if(me == jogador)
                            aux[i].x++;
                        else{
                            pode = false;
                        }
                    }
                    else{
                        pode = false;
                    }
                }
                else{
                    if(aux[i].atividade != undefined && aux[i].fazer == false){
                        aux[i].fazer = true;
                    }
                }
            }
        }
    }
    return pode;
}

function esquerda(objum,objdois){
    var me = objum;
    var aux = [];
    if(objdois.length == undefined){
        aux[0] = objdois;
    }
    else{
        aux = objdois; 
    }
    var pode = true;
    for(var i=0;i<aux.length;i++){
        if(aux[i] != me){
        //abaixo estÃƒÂ¡ uma soluÃƒÂ§ÃƒÂ£o criativa (-1)
            if(me.x - 1 + me.width >= aux[i].x && me.x - 1 <= aux[i].x + aux[i].width 
            && me.y + me.height - 1 > aux[i].y && me.y < aux[i].y + aux[i].height){
                if(aux[i].solido == true){
                    if(aux[i].movel==false){
                        pode = false;
                        if(me == jogador && aux[i].item != undefined){
                            jogador.mochila.push(aux[i].item);
                            aux.splice(i,1);
                            break;
                        }
                    }
                    else if(esquerda(aux[i],objdois)){
                        vspeed = 1;
                        if(me == jogador && aux[i].x > 0)
                            aux[i].x--;
                        else{
                            pode = false;
                        }
                    }
                    else{
                        pode = false;
                    }
                }
                else{
                    if(aux[i].atividade != undefined && aux[i].fazer == false){
                        aux[i].fazer = true;
                    }
                }
            }
        }
    }
    return pode;
}

function presa(objum,objdois){
    var me = objum;
    var aux = [];
    if(objdois.length == undefined){
        aux[0] = objdois;
    }
    else{
        aux = objdois; 
    }
    var above = false;
    var under = false;
    var objAbove;
    var objDown;
    for(var i=0;i<aux.length;i++){
        if(aux[i] != me){
            if(me.x + me.width > aux[i].x && me.x  < aux[i].x + aux[i].width 
            && me.y + me.height > aux[i].y && me.y < aux[i].y + aux[i].height){
                if(me.y < aux[i].y){
                    under = true;
                    objDown = aux[i];
                }
                if(me.y > aux[i].y){
                    above = true;
                    objAbove = aux[i];
                }
            }
        }
    }
    if(above == true && under == true){
        if(objAbove.pai != undefined){
            objAbove.resertar = true;
            objAbove.pai.resertar = true;
            objAbove.count = 0;
        }
        if(objDown.pai != undefined){
            objDown.resertar = true;
            objDown.pai.resertar = true;
            objDown.count = 0;
        }
    }
}

function keyPressed(){
    switch (keyCode) {
        case 39: 
            jogador.movendo = "RIGHT";
        break;
        case 37: 
            jogador.movendo = "LEFT";
        break;
        case 38: 
            if(jogador.colidido == true) jogador.vspeed = -4;
                //jogador.pulo = true;
        break;
        case 32: 
            if(jogador.colidido == true)
                jogador.pulo = true;
        break;
        case 40:
            jogador.movendo = "UP";
        break;
    }
}

function empurrar(me,aux,passos){
    me.x+=passos;
    for(var i=0;i<aux.length;i++){
        if(bounding(me,aux[i]) && me != aux[i] && aux[i].solido == true){
            me.x-=passos;
        }
    }
}

function move(){
    //keyCode
    switch (jogador.movendo){
        case "RIGHT": 
            var bool = false;
            jogador.x+=jogador.hspeed;

            for(var i=0;i<parede.length;i++){
                if(bounding(jogador,parede[i]) && this != parede[i]){
                    if(parede[i].solido == true){
                        jogador.x = parede[i].x - jogador.width - 1;
                        if(parede[i].movel == true){ empurrar(parede[i],parede,1); bool = true;}
                    }
                }
            }

            if(bool && jogador.pulo == false) jogador.indice = 2; else if(jogador.pulo == false) jogador.indice = 0; else jogador.indice = 4;
        break;
        case "LEFT": 
            var bool = false;
            jogador.x-=jogador.hspeed;

            for(var i=0;i<parede.length;i++){
                if(bounding(jogador,parede[i]) && this != parede[i]){
                    if(parede[i].solido == true){
                        jogador.x = parede[i].x + parede[i].width + 1;
                        if(parede[i].movel == true){ empurrar(parede[i],parede,-1); bool = true;}
                    }
                }
            }

            if(bool && jogador.pulo == false) jogador.indice = 3; else if(jogador.pulo == false) jogador.indice = 1; else jogador.indice = 5;
        break;
    }
    var novoX = jogador.x;
    //if(xAtual - novoX == 0) vspeed = 0;
}

function mouseClicked(){
    switch(telas){
        case 2:
        for(var i=0;i<icons.length;i++){
            icons[i].checar();
            //console.log(i);
        }
        break;
        case 1:
        for(var i=0;i<controles.length;i++){
            controles[i].checar();
        }
        if(mostrar == true){
            if(textoIndex < dialogos[faseAtual].length - 1)
                proximoTexto.checar();
            if(textoIndex > 0)
                anteriorTexto.checar();
            for(var i=0;i<jogador.numeroItens+1;i++)
                lugares[i].checar();
        }
        break;
        case 5:
             voltarCreditos.checar();
        break;
    }
}

function distancia2D(x1,y1,x2,y2){
  var distancia = sqrt(pow(distancia1D(x2,x1),2)+pow(distancia1D(y2,y1),2));
  return distancia;
}

function distancia1D(n1,n2){
  var distancia = abs(n2 - n1);
  return distancia;
}

function ordenar(a,b) {
    if (a.y < b.y)
        return -1;
    if (a.y > b.y)
        return 1;
    return 0;
}

function criarIcons(){
    $.get("test.txt", function(data) {
        icons = JSON.parse(data);
        //icons = [{"button":{},"x":271,"y":32,"identificador":0,"texto":"    ESCREVA AQUI...\n    "},{"button":{},"x":354,"y":125,"identificador":1,"texto":"    ESCREVA AQUI...\n    "},{"button":{},"x":220,"y":176,"identificador":2,"texto":"    ESCREVA AQUI...\n    "},{"button":{},"x":372,"y":213,"identificador":3,"texto":"    ESCREVA AQUI...\n    "}]
        //console.log(JSON.parse(data));
        for(var i=0;i<icons.length;i++){
            //controle(x,y,largura,altura,raio,id,img,plataforma)
            //width: 34px; height: 53px;
            //40,40
             var objAntigo = icons[i];
            icons[i] = new controle(icons[i].x,icons[i].y,40,59,20,0,infoOff,undefined,icons[i].texto);
            icons[i].src = objAntigo.url;
            icons[i].titulo = objAntigo.titulo;
            icons[i].sliderOne = objAntigo.primeiroSlider;
            icons[i].sliderTwo = objAntigo.segundoSlider;
            icons[i].sliderThree = objAntigo.terceiroSlider;
            icons[i].sliderFour = objAntigo.quartoSlider;
            icons[i].outraImg = infoOn;
            icons[i].funcao = function(){
                //if(document.getElementById("tela").style.display == "none")
                document.getElementById("tela").style.display = "block";
                if(this.texto != undefined){
                    document.getElementById("myiframe").src = this.src;
                    document.getElementById("title").innerHTML = this.titulo;
                    document.getElementById("informacao").innerHTML = this.texto;
                    document.getElementById("imageOne").src = this.sliderOne;
                    document.getElementById("imageTwo").src = this.sliderTwo;
                    document.getElementById("imageThree").src = this.sliderThree;
                    document.getElementById("imageFour").src = this.sliderFour;
                    telas = 4;
                }
                //else document.getElementById("tela").style.display = "none";
            };
            //icons[i].button = document.createElement("BUTTON");
            //icons[i].button.style.left = icons[i].x;
            //icons[i].button.style.top = icons[i].y;
            //icons[i].button.setAttribute("class", "botao");
            //icons[i].button.setAttribute("onclick", "mostrarValor("+ icons[i].identificador +")");
            //document.body.appendChild(icons[i].button);
        }
        var newicon;
        newicon = new controle(640,380,60,60,20,4,icongame);
        newicon.funcao = function(){ telas = 1;}
        icons.push(newicon);
        
        newicon = new controle(710,390,42,42,20,4,iconCreditos);
        newicon.funcao = function(){ telas = 5;}
        icons.push(newicon);
        //icons[icons.length - 1].titulo = "PLAY";
        icons.sort(ordenar);
    });
}

function voltar(){
    if(document.getElementById("tela").style.display == "none"){
        document.getElementById("tela").style.display = "block";
    }
    else{
        document.getElementById("tela").style.display = "none";
        document.getElementById("imageOne").style.display = "none"; 
        document.getElementById("imageTwo").style.display = "none";
        document.getElementById("imageThree").style.display = "none";
        document.getElementById("imageFour").style.display = "none";
        var f = document.getElementById('myiframe');
        f.src = "";
        telas = 2;
    }
}

function controladores(){
    arrow[0] = new controle(700,350,50,50,25,4,right);
    arrow[0].funcao = function(){
        jogador.movendo = "RIGHT";
    }
    arrow[1] = new controle(600,350,50,50,25,4,left);
    arrow[1].funcao = function(){
        jogador.movendo = "LEFT";
    }
    arrow[2] = new controle(650,300,50,50,25,4,up);
    arrow[2].funcao = function(){
        if(jogador.colidido == true)
                jogador.pulo = true;
    }
    controles[0] = new controle(30,404,37,37,20,4,buttonMap);
    controles[0].funcao = function(){
        telas = 2;
    }
    768
    controles[1] = new controle(380,8,37,37,20,4,buttonRelogio);
    controles[1].funcao = function(){
        //telacheia();
        mostrar = !mostrar;
    }
    controles[2] = new controle(328,8,37,37,20,4,buttonReload);
    controles[2].funcao = function(){
        fase(faseAtual);
    }
    proximoTexto = new controle(520,320,24,24,8,4,rightRelogio);
    proximoTexto.funcao = function(){
       textoAtual = "";
       textoIndex++;
    }
    anteriorTexto = new controle(480,320,24,24,8,4,leftRelogio);
    anteriorTexto.funcao = function(){
       textoAtual = "";
       textoIndex--;
    }
    voltarCreditos = new controle(10,396,42,42,20,4,imgVoltarCreditos);
    voltarCreditos.funcao = function(){ telas = 2;}
}

function detectmob() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
        mobilemode = true;
    }
}

function particles(x,y,raio,ang){
    this.x = x;
    this.y = y;
    this.raio = raio;
    this.ang = ang; 
    this.update = function(){
        strokeWeight(1);
        stroke(50,70,179);
        var distancia
        for(var i = 0; i< particulas.length;i++){
            distancia = distancia2D(this.x,this.y,particulas[i].x,particulas[i].y);
            if(particulas[i] != this && distancia < 100){
                stroke(255,100-distancia);
                line(this.x,this.y,particulas[i].x,particulas[i].y);
                this.x += cos(particulas[i].ang)/50;
                this.y += sin(particulas[i].ang)/50;
            }
        }
        distancia = distancia2D(this.x,this.y,mouseX,mouseY);
        if(distancia < 100){
            stroke(43,160,112,100-distancia);
            line(this.x,this.y,mouseX,mouseY);
            if(mouseIsPressed){
               var yy = mouseY - this.y;
               var xx = mouseX - this.x;
               var t;
               if (xx != 0) {
                    a = yy/xx;
                    t = atan(a);
                    if (xx<0)
                        t+=PI;
                    else if (xx>0 && yy<0)
                        t+=TWO_PI;
                }
                this.x -= cos(t)*10;
                this.y -= sin(t)*10;
            }
        }
        fill(43,160,112);
        ellipse(this.x,this.y,this.raio,this.raio); 
        this.x += cos(this.ang);
        this.y += cos(this.ang);
        if(this.x > width){
            this.y = random(height);
            this.x = 0;
        }
        else if(this.y > height){
            this.x = random(width);
            this.y = 0;
        }
        else if(this.x < 0){
            this.y = random(height);
            this.x = width;
        }
        else if(this.y < 0){
            this.x = random(width);
            this.y = height;
        }
    }
}