var positionY=0;
 const ball=document.getElementById("ball");

function moveball(){
  
   ball.style.top= positionY+'px';
   ball.style.left=positionY+'px';
   positionY++;
     
}
setInterval(moveball,100);