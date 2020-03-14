'use strict';

const PIXI = require('pixi.js');
const GameManager = require('./game/GameManager.js');

class GameLauncher {
    static load() {
        let type = "WebGL";
        if (!PIXI.utils.isWebGLSupported()) type = "canvas"
        PIXI.utils.sayHello(type);

        let gameManager = new GameManager(PIXI);

        return gameManager;
    }
}


module.exports = GameLauncher;