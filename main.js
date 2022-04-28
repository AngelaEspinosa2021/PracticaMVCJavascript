//función anonima que se ejecuta a si misma.
(function(){
    self.Board = function(width,height){
        this.width = width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars = [];
        this.ball = null;
    }
    //retorna tanto las barras como la pelota que estan dentro del tablero.
    self.Board.prototype = {
        get elements(){                     
            var elements = this.bars;
            elements.push(ball);
            return elements;
        }
    }
})(); 
//funcion anonima que nos crea las barras para el juego.
(function(){
    self.Bar = function(x,y,width,height,board){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.board = board;
        this.board.push(this);
        this.kind = "rectangle";
    }
    //funciones que le dan movimiento.
    self.Board.prototype = {
        down: function() {

        },
        up: function(){

        }
    }
})();

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
//para ejecutar el main cuando se cargue la ventana.
window.addEventListener("load",main); 

function main(){
    var board = new Board(800,400);
    var canvas = document.getElementById('canvas');
    var board_view = new BoardView(canvas,board);
}