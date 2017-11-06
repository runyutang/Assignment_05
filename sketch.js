var myImg = [];
var mySong;
var numImg = 0;
var analyser;

function preload(){
  mySong = loadSound('./assets/Don McLean - Vincent (1971).mp3');
  myImg[0] = loadImage("./assets/Starry_Night-01.jpg");
  myImg[1] = loadImage("./assets/Vase with Twelve Sunflowers-01.jpg");
  myImg[2] = loadImage("./assets/Café Terrace at Night-01.jpg");
}

function setup() {
  createCanvas(500,500);
  background(13,73,63,80);
  
  //song
  mySong.play();
  analyser = new p5.Amplitude();
  analyser.setInput(mySong);
  
  textFont('Satisfy');
  textAlign(CENTER);
  textSize(20);
  fill(255,255,255,100);
  text("Press mouse to pause",250,400);
  text("1 - 3 to choose image",250,430);
  
  }
  
function draw() {
  
  
  var x = random(0,width);;
  var y = random(0,height);
  
 if(mouseIsPressed){
    mySong.pause();
    } else {
    if(mySong.isPlaying() == false){
    mySong.play();
    //mySong.loop();
    }
  }

    var volume = analyser.getLevel();
    //text(volume,20,20);
    var myRadius = map(volume,0,1,0,400);

    var myPixel  = myImg[numImg].get(x,y);
    var value = saturation(myPixel);
    var r = red(myPixel);
    var g = green(myPixel);
    var b = blue(myPixel);
    var recth = random(0,myRadius);
    var rectw = random(0,myRadius);
  
    noStroke();
    fill(r,g,b,value);
    rect(x,y,recth,rectw);
}

//choose the image
function keyReleased() {
if (key == '1') {
    numImg = 0;
  }
  if (key == '2') {
    numImg = 1;
  }
  if (key == '3') {
    numImg = 2;
  }
  return false; 
}
