

function draw() {
   var canvas = document.getElementById('canvas');
   if (canvas.getContext){
     var ctx = canvas.getContext('2d');
     
     ctx.strokeStyle="#FF0000";
     ctx.strokeRect(0,0,300,300);

     
     ctx.fillStyle = "rgb(200,0,0)";
     ctx.fillRect (100, 0, 5, 300);
     
     ctx.fillStyle = "rgb(200,0,0)";
     ctx.fillRect (200, 0, 5, 300);
     
     ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
     ctx.fillRect (0, 100, 300, 5);
     ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
     ctx.fillRect (0, 200, 300, 5);
      
   }
 }