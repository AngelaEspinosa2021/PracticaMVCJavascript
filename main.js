(function(){
    self.Board = function(width,height){
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

//funcion anonima que declara una nueva clase que dibuja los elementos en la vista
(function(){
    self.BoardView = function(canvas, board){
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.ctx = canvas.getContext("2d");
    }
})();

window.addEventListener("load",main); //para ejecutar el main cuando se cargue la ventana.

function main(){
    var board = new Board(800,400);
    console.log(board);
    var canvas = document.getElementById('canvas');
    var board_view = new BoardView(canvas,board);
}