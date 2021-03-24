//Create variables here
var dog;
var happydog;
var foodS;
var foodstock;
var foodRef;
var database;
var dogImg;
var dogImg2;


function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
 dogImg2 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  database = firebase.database();

  dog = createSprite(250,250,5,5);
  dog.addImage(dogImg2);
  dog.scale = 0.3;
  

  foodRef = database.ref("food");
  foodRef.on("value",readstock);

  foodRef.set(20)
}


function draw() {  
  background(46, 139, 87);

  if(keyWentUp(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg);
    dog.scale = 0.3
  }

  drawSprites();
  //add styles here
  textSize(32);
  fill("blue");
  text("Bones in the Stock: " + foodstock ,50 ,100);
  dog.display();

}

function readstock(data){
  foodS = data.val();
}

function writeStock(x){

  database.ref('/').update({
    food:x
  });
}
