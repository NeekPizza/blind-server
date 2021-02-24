const Game = require('../classes/Game');
const assert = require("chai").assert;

describe("Game", () => {
    const width = 10;
    const height = 10;
    const area = width * height;

    let game = new Game(width, height);

    it("should generate correctly sized map", () => {
        game.generateMap();
        assert.lengthOf(game.map, area, `game contains ${area} spaces`);
    })
})

