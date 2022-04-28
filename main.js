(function(){
    var self.Board = function(width,height){
        this.width = width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars = [];
        this.ball = null;
    }

    self.Board.prototype = {
        get elements(){                     //retorna tanto las barras como la pelota que estan dentro del tablero.
            var elements = this.bars;
            elements.push(ball);
            return elements;
        }
    }

})(); //función anonima que se ejecuta a si misma.

function main(){

}