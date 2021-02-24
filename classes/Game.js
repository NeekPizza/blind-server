class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.map = [];
    }

    generateMap() {
        let map = [];
        for (var y = this.height; y > 0; y-- ) {
            for (var x = 1; x <= this.width; x++ ) {
                map.push({x: x, y: y});
            }
        }
        this.map = map;
    }
}

module.exports = Game;