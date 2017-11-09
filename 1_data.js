/* 
    Any data that you need to access/manipulate throughout the program 
    must be declared outside of a function
*/

/* 
    Data which is not meant to change is "constant"
    aka const
    conventionally constant names are UPPERCASE
*/

const CANVAS_WIDTH = 630
const CANVAS_HEIGHT = 630

const BALL_SPEED = 3
const PADDLE_SIZE = 5
const PADDLE_MOVEMENT = 7 // how many pixels do paddle move 

// emojis from https://github.com/iamcal/emoji-data
// emoji "coordinates" at https://unicodey.com/emoji-data/table.htm
const SPRITE_SHEET = 'assets/sheet_twitter_20_indexed_256.png'
const EMOJI_SIZE = 20


/*
    Data that changes while the program runs is "variable"
    aka var
*/    

var frames = {}
var spritesheets = {}
var images = {}
var animations = {}
var sprites = {}
var groups = {}


frames.ball = 
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
  }
]

frames.paddleLeft = 
[
  {
    name: 'rose',
    frame: 
    {
        x: 5*EMOJI_SIZE,
        y: 39*EMOJI_SIZE,
        width: EMOJI_SIZE,
        height: EMOJI_SIZE
    }
  }
]

frames.emojis = 
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