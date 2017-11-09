/* 
    Any data that you need to access/manipulate throughout the program 
    must be declared outside of a function
*/

/* 
    Data which is not meant to change is "constant"
    aka const
    conventionally constant names are UPPERCASE
*/

const CANVAS_WIDTH = 800 // in pixels
const CANVAS_HEIGHT = 600 // in pixels

const BALL_SIZE = 20
const BALL_SPEED = 3
const PADDLE_SIZE = 5
const PADDLE_MOVEMENT = 7 // how many pixels do paddles move
const SWING_FACTOR = 0.4 // the ball will bounce off paddles at an angle, the further from the paddle centre the bigger the angle

/*
    Data that changes while the program runs is "variable"
    aka var
*/    

var sprites = {} // an object to collect all the sprites (ie the game pieces)
var swing = 0 // the angle the ball will take when bouncing off paddles