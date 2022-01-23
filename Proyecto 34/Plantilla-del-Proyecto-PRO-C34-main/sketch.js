/*Hola maestra buenas noches, aquí esta el resultado de este programa. Aún no he podido hacer mi cuestionario
ya que al momento de entrar en el no carga, pero quizá más tarde pueda cargar por completo. Le deseo una 
linda noche maestra nwn*/
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4, box5, box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var box21, box22, box23, box24, box25, box26, box27, box28, box29, box30;
var box31, box32, box33, box34, box35, box36, box37, box38, box39, box40;
var box41, box42, box43, box44, box45, box46, box47, box48, box49, box50;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");//se añade el fondo uwu
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 40, 40);//1
  box2 = new Box(900, 100, 40, 40);
  box3 = new Box(900, 100, 40, 40);
  box4 = new Box(900, 100, 40, 40);
  box38 = new Box(900, 100, 40, 40);
  box39 = new Box(900, 100, 40, 40);
  box40 = new Box(900, 100, 40, 40);
  box45 = new Box(900, 100, 50, 50);

  box6 = new Box(600, 100, 40, 40);
  box7 = new Box(600, 100, 40, 40);
  box8 = new Box(600, 100, 50, 50);
  box9 = new Box(600, 100, 40, 40);
  box10 = new Box(600, 100, 40, 40);
  box46 = new Box(600, 100, 50, 50);

  box5 = new Box(650, 100, 40, 40);
  box11 = new Box(650, 100, 40, 40);
  box12 = new Box(650, 100, 40, 40);
  box13 = new Box(650, 100, 50, 50);
  box14 = new Box(650, 100, 40, 40);
  box15 = new Box(650, 100, 40, 40);

  box50 = new Box(750, 90, 20, 30);
  box49 = new Box(750, 100, 40, 40);
  box47 = new Box(750, 100, 140, 30);
  box48 = new Box(750, 100, 50, 50);
  box16 = new Box(700, 100, 40, 40);
  box17 = new Box(700, 100, 40, 40);
  box18 = new Box(700, 100, 50, 50);
  box19 = new Box(700, 100, 40, 40);
  box20 = new Box(700, 100, 40, 40);
  box42 = new Box(700, 100, 40, 40);
  box43 = new Box(700, 100, 50, 50);

  box21 = new Box(750, 100, 40, 40);
  box22 = new Box(750, 100, 40, 40);
  box23 = new Box(750, 100, 40, 40);
  box24 = new Box(750, 100, 50, 50);
  box25 = new Box(750, 100, 40, 40);
  box41 = new Box(750, 100, 40, 40);

  box26 = new Box(800, 100, 40, 40);
  box27 = new Box(800, 100, 40, 40);
  box28 = new Box(800, 100, 50, 50);
  box29 = new Box(800, 100, 40, 40);
  box30 = new Box(800, 100, 40, 40);
  box31 = new Box(800, 100, 40, 40);
  box44 = new Box(800, 100, 50, 50);

  box32 = new Box(850, 100, 40, 40);
  box33 = new Box(850, 100, 40, 40);
  box34 = new Box(850, 100, 40, 40);
  box35 = new Box(850, 100, 50, 50);
  box36 = new Box(850, 100, 40, 40);
  box37 = new Box(850, 100, 40, 40);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
//torre7
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box38.display();
  box39.display();
  box40.display();
  box45.display();
//torre1
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box46.display();
//torre2
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
//torre3
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box42.display();
  box43.display();
  box49.display();
  box50.display();
  box47.display();
  box48.display();
//torre4
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box41.display();
//torre5
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box44.display();
//torre6
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();

  hero.display();
  rope.display();
  monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}
