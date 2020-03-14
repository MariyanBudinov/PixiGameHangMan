'use strict';

const EventEmitter = require('events');
// const { TweenMax, TweenLite, Bounce, Power1 } = require('gsap');

const GameStage = require('./components/GameStage.js');

class GameManager extends EventEmitter {
    constructor(PIXI) {
        super();

        this.gameStage = new GameStage(PIXI, 'game-container');
    }

}

module.exports = GameManager;