function setup() 
{
    // https://p5js.org/reference/#/p5/createCanvas
    createCanvas(CANVAS_WIDTH,CANVAS_HEIGHT)
    
    // ball
    // http://p5play.molleindustria.org/docs/classes/p5.play.html#method-createSprite 
    sprites.ball = createSprite(width/2, height/2, BALL_SIZE, BALL_SIZE)
    sprites.ball.shapeColor = 'white'
    sprites.ball.maxSpeed = BALL_SPEED
    sprites.ball.setSpeed(BALL_SPEED, random(0,360))
    
    // paddleLeft
    sprites.paddleLeft = createSprite(BALL_SIZE/2, height/2, BALL_SIZE, BALL_SIZE*PADDLE_SIZE)
    sprites.paddleLeft.immovable = true // this prevents the paddle from being moved by the ball
    sprites.paddleLeft.shapeColor = 'rgba(255, 0, 0, 0.5)'
    sprites.paddleLeft.size = PADDLE_SIZE
        
    // paddleRight
    sprites.paddleRight = createSprite(width-BALL_SIZE/2, height/2, BALL_SIZE, BALL_SIZE*PADDLE_SIZE)
    sprites.paddleRight.immovable = true
    sprites.paddleRight.shapeColor = 'rgba(0, 0, 255, 0.5)'
    sprites.paddleRight.size = PADDLE_SIZE
    
    // wallTop
    sprites.wallTop = createSprite(width/2, 1, width, 1)
    sprites.wallTop.immovable = true
    sprites.wallTop.shapeColor = '#ffde00'
        
    // wallBottom
    sprites.wallBottom = createSprite(width/2, height-1, width, 1)
    sprites.wallBottom.immovable = true
    sprites.wallBottom.shapeColor = '#ffde00'
}