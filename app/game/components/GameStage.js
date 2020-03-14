'use strict';

const EventEmitter = require('events');

class GameStage extends EventEmitter {
    constructor(PIXI, cssClass) {
        super();

        this.container = document.querySelector(`.${cssClass}`);

        this.init(PIXI);
    }

    init(PIXI) {
        // Create the application
        const app = new PIXI.Application();

        // Add the view to the DOM
        this.container.appendChild(app.view);
    }
}

module.exports = GameStage;