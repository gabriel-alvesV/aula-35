var ball;
var posicao;
var bancodd;



function setup(){
    createCanvas(500,500);
    bancodd=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballposition=bancodd.ref('bola/posicao');
    ballposition.on('value',ler,mostrar);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
bancodd.ref('bola/posicao').set({
    'x':posicao.x+x,
    'y':posicao.y+y,
})
}

function mostrar(){
    console.log('erro,conexão ruim');
}

function ler(dd){
    posicao=dd.val();
    ball.x=posicao.x;
    ball.y=posicao.y;
}