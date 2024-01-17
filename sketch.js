var starImg,bgImg;
var star, starBody;
var fada, fadaImg, vozFada;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");

    fadaImg = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png")
    vozFada = loadSound("sound/JoyMusic.mp3")
}

function setup() {
    createCanvas(800, 750);

    vozFada.play();

    fada = createSprite(150, 400)
    fada.addAnimation("fadinha", fadaImg)
    fada.scale = 0.15;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw(){
    background(bgImg)

    if (keyDown(LEFT_ARROW)){
        fada.x = fada.x-4;
    }

    if (keyDown(RIGHT_ARROW)){
        fada.x = fada.x+4;
    }

    if(star.y > 470 && starBody.position.y > 470){
        Matter.Body.setStatic(starBody, true)
    }

    if(keyDown(DOWN_ARROW)){
        Matter.Body.setStatic(starBody, false)
    }

    drawSprites();
}