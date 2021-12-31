canvas = new fabric.canvas('cnvs');


ball_image_width = 5;
ball_image_height = 5;

ball_x=0;
ball_y=0;

hole_x=400
hole_y=800

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img)
hole_obj = Img;
hole_obj.scaleToWidth(50);
hole_obj.scaleToHeight(50);
	hole_obj.set({
		top:hole_y;
		left:hole_x;
		new_image();
	});
	canvas.add(hole_obj);
});

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
			new_image();
			ball_obj.set({
				top:ball_y
				left:ball_x
			});
			canvas.add(ball_obj);
		
})

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
}
	if (ball_x==hole_x) && (ball_y==hole_x) {
document.getElementById("cnvs").change.InnerHTML="Game Over";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("when Up arrow is pressed ball's x axis ="+ ball_x +"and y axis="+ ball_y );
		}
		if(keyPressed == '40')
		{
			down();
			console.log("when Down arrow is pressed ball's x axis ="+ ball_x +"and y axis="+ ball_y);
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		ball_x=ball_x-10;
		canvas.remove(ball_obj);
		new_image();
	}

	function down()
	{
		ball_x=ball_x+10;
		canvas.remove(ball_obj);
		new_image();
	}

	function left()
	{
	    if (keyPressed==37)
		if(ball_x >=0)
		{
			ball_x=ball_x-10;
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1100)
		{
			ball_x=ball_x+10;
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}
