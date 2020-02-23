var game = function(){
    this.canvas = null;
    this.context = null;
    this.width = 288;
    this.height =512;

    var self = this;

    this.init = function(){
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height =this.height;

        document.body.appendChild(this.canvas);
        this.loop();

    }

    this.loop = function(){
        console.log('loop');
        setTimeout(self.loop, 33);
    }

    this.update = function(){

    }

    this.draw = function(){

    }
}

var gameStart = new game();
//gameStart.init();
