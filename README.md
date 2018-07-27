# Sudoku

## Description
Sudoku is a puzzle game designed for a single player, much like a crossword puzzle. The puzzle itself is nothing more than a grid of little boxes called “cells”. They are stacked nine high and nine wide, making 81 cells total.
## Table of Contents

* [Instructions](#instructions)
* [Dependencies](#dependencies)

## Installation
1. Download docs directory
2. Run index.html in browser

## Instructions
The object of the game is to place the numbers 1 to 9 in the empty squares so that each row, each column and each 3x3 box contains the same number only once.

## Dependencies
To run dev or production version you need browser with enabled JavaScript.

## Demo
https://wodawodawoda.github.io/Memory-game/

## Build setup
Project was developed using:
* Webpack 4.0
* Babel
* SASS
* ES6
* HTML5
```bash
# To install dev-dependencies, just go to the root folder and run
npm i

# To build production version run
npm run build

# To run on webpcak-server run
npm run start
```
## Important files and directories
* /src/js/containers contains all game React components
* /src/styles contains all game styles written in SASS

/docs contains production version of Sudoku game for presentation purpouse
