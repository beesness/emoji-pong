function setup() 
{
    // https://p5js.org/reference/#/p5/createCanvas
    createCanvas(CANVAS_WIDTH,CANVAS_HEIGHT)
    
    // ball
    // http://p5play.molleindustria.org/docs/classes/p5.play.html#method-createSprite    
    sprites.ball = createSprite(width/2, height/2, EMOJI_SIZE, EMOJI_SIZE)
    sprites.ball.addAnimation('newspaper', animations.ball)
    sprites.ball.maxSpeed = BALL_SPEED
    sprites.ball.setSpeed(BALL_SPEED, -180) // TODO RANDOM
    
    // paddleLeft, aka Labour
    sprites.paddleLeft = createSprite(EMOJI_SIZE/2, height/2, EMOJI_SIZE, EMOJI_SIZE*PADDLE_SIZE)
    sprites.paddleLeft.immovable = true // this prevents the paddle from being moved by the ball
    sprites.paddleLeft.shapeColor = 'rgba(255, 0, 0, 0.5)'
    sprites.paddleLeft.size = PADDLE_SIZE
        
    // paddleRight, aka Tory
    sprites.paddleRight = createSprite(width-EMOJI_SIZE/2, height/2, EMOJI_SIZE, EMOJI_SIZE*PADDLE_SIZE)
    sprites.paddleRight.immovable = true
    sprites.paddleRight.shapeColor = 'rgba(0, 0, 255, 0.5)'
    sprites.paddleRight.size = PADDLE_SIZE
    
    // paddleTop, aka Green
    sprites.paddleTop = createSprite(width/2, EMOJI_SIZE/2, EMOJI_SIZE*PADDLE_SIZE, EMOJI_SIZE)
    sprites.paddleTop.immovable = true
    sprites.paddleTop.shapeColor = 'rgba(0, 255, 0, 0.5)'
    sprites.paddleTop.size = PADDLE_SIZE
    
    // paddleBottom, aka LibDem
    sprites.paddleBottom = createSprite(width/2, height-EMOJI_SIZE/2, EMOJI_SIZE*PADDLE_SIZE, EMOJI_SIZE)
    sprites.paddleBottom.immovable = true
    sprites.paddleBottom.shapeColor = 'rgba(255, 255, 0, 0.5)'
    sprites.paddleBottom.size = PADDLE_SIZE
    
    /*
  sprites.wallTop = createSprite(width/2, 1, width, 1)
  sprites.wallTop.immovable = true

  sprites.wallBottom = createSprite(width/2, height-1, width, 1)
  sprites.wallBottom.immovable = true
  
  // all white
  sprites.wallTop.shapeColor = 
  sprites.wallBottom.shapeColor = color(255,255,255)
*/
  

}