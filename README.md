# Figlet Breakout

See the demo!

## What is Figlet?

Figlet is a tool for generating banners with ASCII characters. There is quite
a large collection of fonts, for more information see any of the following pages:
* http://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20
* http://www.figlet.org/

## What is Figlet Breakout?

Creates a Breakout game from a Figlet ascii banner.

## Why?

Why not?

Actually this is an old project that I had from awhile back that I dusted off to use as the winning screen for the site [cmdchallenge](https://cmdchallenge.com).

## Installation

```
bower install figlet-breakout
```

### HTML for the game


```
    <script src="bower_components/lodash/dist/lodash.min.js"></script>
    <script src="bower_components/howler.js/dist/howler.min.js"></script>
    <script src="bower_components/rectangle/rectangles.min.js"></script>
    <script src="bower_components/figlet-breakout/js/figlet-1.0.0.min.js"></script>
    <script src="bower_components/figlet-breakout/js/figlet-breakout-1.0.0.min.js"></script>

    <div id="breakout-box">
        <div id="msg-flash"></div>
        <div id="breakout"></div>
    </div>
```

### Initializing the Board

```
FigletBreakout.init({
    font_size:  8,     // font size for the bricks
    p_font_size: 12,   // font size for the paddle
    game_str: "Play Figlet Breakout!" // what text to display
});
```

### Starting the game

Once the board is initialized it can be either call play() or reset()

Reset will return everything to the default settings:
```
    FigletBreakout.reset();
```
Play will start the game:
```
        FigletBreakout.play();
```

There are many other settings, automatic word wrapping and line breaks
are also supported.

See the [example index.html](https://github.com/figlet-breakout/index.html).

#### Play






