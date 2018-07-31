var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var num= 6;


easyBtn.addEventListener("click",function(){
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    easy(num);
    resetScreen(num);
    
    }); 

hardBtn.addEventListener("click",function(){
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    hard(num);
    resetScreen(num);
});

var colors = generateRandomColors(num);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("RGBColor");
colorDisplay.textContent = pickedColor;
var message = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
 
reset.addEventListener("click",function(){
    resetScreen(num);  
});

function resetScreen(num){
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0 ; i<num ; i++){
    squares[i].style.backgroundColor = colors[i];
   }
   if(num<squares.length){
   for(var i=num ; i< squares.length; i++){
       squares[i].style.backgroundColor="#232323";
   }

   }
        h1.style.backgroundColor="#232323"; 
}
function hard(num){
    
    num = 6; 
for(var i=0 ; i< num ; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
       var clickedColor = this.style.backgroundColor;
             
       if(clickedColor === pickedColor){
           message.textContent = "Correct!!";
           console.log(clickedColor);
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            reset.textContent ="Play Again ??";
       }
       else{
           this.style.dislay="#232323";
           message.textContent = "Try Again";
       }
    });
  }
  }
  
  function easy(num){
      
      num = 3;
      for(var i=0 ; i<num ; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
       var clickedColor = this.style.backgroundColor;
             
       if(clickedColor === pickedColor){
           message.textContent = "Correct!!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            reset.textContent ="Play Again ??";
       }
       else{
           this.style.backgroundColor="#232323";
           message.textContent = "Try Again";
       }
    });
  } 
  }
  function changeColors(color){
      for(var i=0 ;i<squares.length; i++ ){
          squares[i].style.backgroundColor = color;
      }
  }

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
        for(var i = 0; i<num ; i++){
        arr.push(randomColor());
      }
      return arr;
}
function randomColor(){
    
    var r = Math.floor(Math.random() * 256 );
    var g = Math.floor(Math.random() * 256 );
    var b = Math.floor(Math.random() * 256 );
    return "rgb(" + r + ", " + g + ", " + b + ")";
    
}