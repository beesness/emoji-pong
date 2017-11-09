function setup() 
{
    // https://p5js.org/reference/#/p5/createCanvas
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    
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
    // TODO 
    
    // wallTop
    sprites.wallTop = createSprite(width/2, 1, width, 1)
    sprites.wallTop.immovable = true
    sprites.wallTop.shapeColor = '#ffde00'
        
    // wallBottom
    // TODO
}