function setup()
{
    // https://p5js.org/reference/#/p5/createCanvas
    canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    // move the canvas so it's inside our <div id="canvas">.
    canvas.parent('canvas')
    
    // ball, aka the press
    // http://p5play.molleindustria.org/docs/classes/p5.play.html#method-createSprite
    sprites.ball = createSprite(width/2, height/2, EMOJI_SIZE, EMOJI_SIZE)
//    sprites.ball.maxSpeed = BALL_SPEED
    sprites.ball.shapeColor = 'rgba(255, 255, 255, 0)' // transparent
    resetBall()
    
    // paddles, aka the parties
    createPaddle('left') // aka Labour
    createPaddle('right') // aka Tory 
    createPaddle('top') // aka Green
    createPaddle('bottom') // aka Lib-Dem
}

function createPaddle(name)
{
    var sprite, x, y, width, height, 
        data = players[name] 
    
    console.log('createPaddle ' + name)
    console.log(data)
    
    if (name == 'left')
    {
        x = EMOJI_SIZE / 2
        y = CANVAS_HEIGHT / 2
    }
    else if (name == 'right')
    {
        x = CANVAS_WIDTH - EMOJI_SIZE / 2
        y = CANVAS_HEIGHT / 2   
    }
    else if (name == 'top')
    {
        x = CANVAS_WIDTH / 2, 
        y = EMOJI_SIZE / 2   
    }
    else if (name == 'bottom')
    {
        x = CANVAS_WIDTH / 2
        y = CANVAS_HEIGHT - EMOJI_SIZE/2  
    }

    width = (data.direction == 'vertical') ? EMOJI_SIZE : EMOJI_SIZE * PADDLE_SIZE
    height = (data.direction == 'horizontal') ? EMOJI_SIZE : EMOJI_SIZE * PADDLE_SIZE
    // (condition) ? yes : no
    // this is another way to express if (condition) { yes } else { no }
        
    sprite = createSprite(x, y, width, height)
    sprite.immovable = true // this prevents the paddle from being moved by the ball
    sprite.shapeColor = data.color
    sprite.size = PADDLE_SIZE
    
    sprites.paddles[name] = sprite // store the sprite in the global sprites object
    
    return sprite // return the sprite, because why not
}