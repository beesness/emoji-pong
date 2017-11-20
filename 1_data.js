/** 
    * Any data that you need to access/manipulate throughout the program 
    * must be declared outside of a function

    * Data which is not meant to change is "constant"
    * aka const
    * conventionally constant names are UPPERCASE
    */

const CANVAS_WIDTH = 630
const CANVAS_HEIGHT = 630

const BALL_SPEED = 3 //  pixels per frame
const PADDLE_SIZE = 5 // how many squares is a paddle
const PADDLE_MOVEMENT = 7 // how many pixels per frame do paddles move 
const SWING_FACTOR = 0.4 // the ball will bounce off paddles at an angle, the further from the paddle centre the bigger the angle


// emojis from https://github.com/iamcal/emoji-data
// emoji "coordinates" at https://unicodey.com/emoji-data/table.htm
const SPRITE_SHEET = 'assets/sheet_twitter_20_indexed_256.png'
const EMOJI_SIZE = 20


/**
    * Data that changes while the program runs is "variable"
    * aka var
    */

var canvas = null // the canvas for the whole game
var sprites = {} // an object to collect all the sprites (ie the game pieces)
var swing = 0 // the angle at which the ball will take when bouncing off paddles

var spritesheets = {}
var animations = {}

var FRAMES = 
[
    {
        name: 'newspaper',
        frame: 
        {
            x: 18*EMOJI_SIZE,
            y: 48*EMOJI_SIZE,
            width: EMOJI_SIZE,
            height: EMOJI_SIZE
        }
    },
    {
        name: 'rose',
        frame: 
        {
            x: 5*EMOJI_SIZE,
            y: 39*EMOJI_SIZE,
            width: EMOJI_SIZE,
            height: EMOJI_SIZE
        }
    },
    {
        name: 'oak',
        frame: 
        {
            x: 5*EMOJI_SIZE,
            y: 33*EMOJI_SIZE,
            width: EMOJI_SIZE,
            height: EMOJI_SIZE
        }
    },
    {
        name: 'globe',
        frame: 
        {
            x: 4*EMOJI_SIZE,
            y: 46*EMOJI_SIZE,
            width: EMOJI_SIZE,
            height: EMOJI_SIZE
        }
    },
    {
        name: 'dove',
        frame: 
        {
            x: 20*EMOJI_SIZE,
            y: 28*EMOJI_SIZE,
            width: EMOJI_SIZE,
            height: EMOJI_SIZE
        }
    }
]    