/** 
    * Any data that you need to access/manipulate throughout the program 
    * must be declared outside of a function
    *
    * Data which is not meant to change is "constant"
    * aka const
    * conventionally constant names are UPPERCASE
    */

const CANVAS_WIDTH = 630
const CANVAS_HEIGHT = 630

const BALL_SPEED = 4 //  pixels per frame
const BALL_SPEED_INCREMENT = 0.8 //  every time the ball hits a paddle, it speeds up
const BALL_SPEED_DECREMENT = 0.2 //  every time the ball hits a wall, it slows down
const PADDLE_SIZE = 5 // how many squares is a paddle
const PADDLE_MOVEMENT = 7 // how many pixels per frame do paddles move 
const SWING_FACTOR = 0.4 // the ball will bounce off paddles at an angle, the further from the paddle centre the bigger the angle


// emojis from https://github.com/iamcal/emoji-data
// emoji "coordinates" at https://unicodey.com/emoji-data/table.htm
const SPRITE_SHEET = 'assets/sheet_twitter_20_indexed_256.png'
const EMOJI_SIZE = 20
const EMOJI_FRAMES = 
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
    },
    {
        name: 'toxic',
        frame: 
        {
            x: 1*EMOJI_SIZE,
            y: 10*EMOJI_SIZE,
            width: EMOJI_SIZE,
            height: EMOJI_SIZE
        }
    }
]

/**
    * Data that changes while the program runs is "variable"
    * aka var
    */

var canvas = null // the canvas for the whole game
var swing = 0 // the angle at which the ball will take when bouncing off paddles
var spritesheets = {} // an object to collect all the spritesheets (images)
var sprites = // an object to collect all the sprites (ie the game pieces)
{
    ball: {},
    paddles: {}, // there will be 4 paddles
    walls: {} // there will be 4 walls
}
var players = // an object with data for each player
{
    left: 
    {
        nickname: 'Labour',
        isPlaying: false,
        score: 13,
        controlUp: 'a',
        controlDown: 'x',
        emoji: 'rose', 
        direction: 'vertical',
        color: 'rgba(255, 0, 0, 0.7)',
    },
    right: 
    {
        nickname: 'Tory',
        score: 16,
        isPlaying: false,
        controlUp: 38, // UP_ARROW
        controlDown: 40, // DOWN_ARROW
        emoji: 'oak', 
        direction: 'vertical',
        color: 'rgba(0, 0, 255, 0.7)'
    },
    top: 
    {
        nickname: 'Green',
        score: 1,
        isPlaying: false,
        controlLeft: '9',
        controlRight: '0',
        emoji: 'globe', 
        direction: 'horizontal',
        color: 'rgba(0, 255, 0, 0.7)'
    },
    bottom: 
    {
        nickname: 'Lib-Dem',
        score: 2,
        isPlaying: false,
        controlLeft: 'b',
        controlRight: 'm',
        emoji: 'dove', 
        direction: 'horizontal',
        color: 'rgba(255, 255, 0, 0.7)'
    }
}