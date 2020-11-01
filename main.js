canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

mouse_event = "empty";

var last_x_position, last_y_position ; 

color = "blue";
width = 2 ; 
 canvas.addEventListener("mousedown", my_mousedown);
 
 function my_mousedown(e){
     mouse_event = "mousedown" ; 
 }

 canvas.addEventListener("mouseup", my_mouseup);

 function my_mouseup(e){
     mouse_event = "mouseup";
 }

 canvas.addEventListener("mouseleave", my_mouseleave);

 function my_mouseleave(e){
     mouse_event = "mouseleave" ; 
 }

 canvas.addEventListener("mousemove", my_mousemove);

 function my_mousemove(e) {
     current_x_position = e.clientX - canvas.getBoundingClientRect().left;
     current_y_position = e.clientY - canvas.getBoundingClientRect().top;

     if (mouse_event == "mousedown"){
         ctx.beginPath();
         ctx.strokeStyle = color;
         ctx.lineWidth = width ; 

         console.log("last position of x and y coordinates are ");
         console.log("x = " + last_x_position + ", y = " + last_y_position);
         ctx.moveTo(last_x_position, last_y_position);

         console.log("current position of x and y coordinates are ");
         console.log("x = " + current_x_position + ", y = " + current_y_position);
         ctx.lineTo(current_x_position, current_y_position);

         ctx.stroke();

        }
        last_x_position = current_x_position;
        last_y_position = current_y_position;
 }

