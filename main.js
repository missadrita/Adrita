canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
mars_images_array=["marslandscape.jpg","mars.jpg","images.jpg"];
randomnumber=Math.floor(Math.random()*3);
console.log(randomnumber);
rover_width=100;
rover_height=90;
roverX=10;
roverY=20;
background_image=mars_images_array[randomnumber];
rover_image="rover.png";
function add(){
    background_image_tag=new Image();
    background_image_tag.onload=uploadBackground;
    background_image_tag.src = background_image;
    rover_image_tag=new Image();
    rover_image_tag.onload=uploadRover;
    rover_image_tag.src=rover_image;   
}
function uploadBackground(){
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_image_tag,roverX,roverY,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="37"){
        left();
        console.log("left");
    }
    if(keypressed=="38"){
        up();
        console.log("up");
    }
    if(keypressed=="39"){
        right();
        console.log("right");
    }
    if(keypressed=="40"){
        down();
        console.log("down");
    }
}
function up(){
    if (roverY >= 0){
        roverY=roverY-10;
        console.log("when up arrow is pressed x="+roverX+",y="+roverY);
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if (roverY <= 500){
        roverY=roverY+10;
        console.log("when down arrow is pressed x="+roverX+",y="+roverY);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if (roverX >= 0){
        roverX=roverX-10;
        console.log("when left arrow is pressed x="+roverX+",y="+roverY);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if (roverX <= 700){
        roverX=roverX+10;
        console.log("when right arrow is pressed x="+roverX+",y="+roverY);
        uploadBackground();
        uploadRover();
    }
}