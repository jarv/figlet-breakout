# Figlet Breakout

## [Play the demo!](https://jarv.gitlab.io/figlet-breakout)

## What is Figlet?

Figlet is a tool for generating banners with ASCII characters. There are a large
number of contributed fonts, all of which can be used to turn a banner into a
game of break-out. For more information about figlet, see any of the following pages:
* http://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20
* http://www.figlet.org/

## What is Figlet Breakout?

Creates a Breakout game from a Figlet ascii banner. [(Demo)](https://jarv.gitlab.io/figlet-breakout)

## Why?

Why not?

This is an old project that I had from awhile back that I dusted off to use as the winning screen for the site [cmdchallenge](https://cmdchallenge.com).

## Installation

```
bower install figlet-breakout
```

### HTML for the game

See the example [index.html](https://gitlab.com/jarv/figlet-breakout/blob/master/index.html).

```
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
There are many other settings that can be overridden, auto word wrapping and line breaks
are also supported. See the [default settings](https://gitlab.com/jarv/figlet-breakout/blob/master/js/figlet-breakout-src.js#L765)
