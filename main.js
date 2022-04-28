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
            elements.push(this.ball);
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
        this.board.bars.push(this);
        this.kind = "rectangle";
        this.speed = 10;
    }
    //funciones que le dan movimiento.
    self.Bar.prototype = {
        down: function() {
            this.y += this.speed;
        },
        up: function(){
            this.y -= this.speed;
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

    self.BoardView.prototype = {
        draw: function(){
            for (var i = this.board.elements.length -1; i >= 0; i--){
                var el = this.board.elements[i];

                draw(this.ctx,el);
            };
        }

    }

    //funcion encargada de dibujar los elementos.
    function draw(ctx, element){
        console.log(element);
        if(element != null && element.hasOwnProperty("kind")){
            switch(element.kind){
                case "rectangle":
                    ctx.fillRect(element.x, element.y,element.width, element.height);
                    break;
            }
        }        
    }
})();

var board = new Board(800,400);
var bar = new Bar(20,100,40,100, board);
var bar = new Bar(735,100,40,100, board);
var canvas = document.getElementById('canvas');
var board_view = new BoardView(canvas,board);

document.addEventListener("keydown", function(ev){
    console.log(ev.keyCode);
    if(ev.KeyCode == 38){
        bar.up();
    }
    else if(ev.keyCode == 40){
        bar.down();
    }
});



//para ejecutar el main cuando se cargue la ventana.
self.addEventListener("load",main); 

function main(){
   board_view.draw();
}