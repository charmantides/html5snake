// JavaScript Document
//detect when webpage has finished loading
window.onload = function()
{	
	//dynamically creates canvas on index called 'canvas'
	var canvas = document.createElement('canvas'),
	//create drawing object called ctx
	ctx = canvas.getContext('2d');
	
	//game variables
	score = 0,
	level = 0;
	
	
	//define canvas size
	canvas.width = 204;
	canvas.height = 224;
	
	drawGame();
	
	//function to draw game on canvas
	function drawGame() 
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawMain();
    }
	
	//reference <body> element in index.html (First body element returned in array)
	var body = document.getElementsByTagName('body')[0];
	//add canvas to the body element of index.html
	body.appendChild(canvas);
	
	//function to make sure the canvas boarder and score and level output remain present
	function drawMain()
	{
		//drawing a 2 pxl border around canvas with ctx object
		ctx.lineWidth = 2; // Our border will have a thickness of 2 pixels
		ctx.strokeStyle = 'black'; // The border will also be black
	
		// The border is drawn on the outside of the rectangle, so we'll
    	// need to move it a bit to the right and up. Also, we'll need
    	// to leave a 20 pixels space on the top to draw the interface.
    	ctx.strokeRect(2, 20, canvas.width - 4, canvas.height - 24);
		
		ctx.font = '12px sans-serif';
        ctx.fillText('Score: ' + score + ' - Level: ' + level, 2, 12);
	}
};

