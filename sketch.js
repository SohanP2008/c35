//Create variables here
var dogLay, dogStand, database, foodS, foodStock;
var dogLayImg, dogStandImg;

function preload()
{
	//load images here
  dogLayImg = loadImage("images/dogImg1.png");
  dogStandImg = loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(500, 500);
  dogLay = createSprite(250,300,20,20)
  dogLay.addImage(dogLayImg)
  dogLay.scale = 0.3
  database = firebase.database();
  foodStock = database.ref("Food")
  foodStock.on("value",readStock)
}


function draw() { 
  background(46,139,87) 
  text(mouseX+","+mouseY,mouseX,mouseY)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dogLay.addImage(dogStandImg)
  }
  drawSprites();
  //add styles here
  textSize(20)
  fill("black")
  text("Food: "+writeStock,150,90)
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref("/").update({
    Food:x
  })
}