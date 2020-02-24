var game = function(){
    this.canvas = null;
    this.context = null;
    this.width = 288;
    this.height =512;

    this.bird = null;
    this.background = null;

    var self = this;

    this.init = function(){
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height =this.height;
        document.body.appendChild(this.canvas);

        //create new bird
        this.bird = new bird(this);
        this.bird.init();

        //create background
        this.background = new background(this);
        this.background.init();


        this.loop();

        

    }

    this.loop = function(){
        self.update();
        self.draw();
        setTimeout(self.loop, 33);
    }

    this.update = function(){
        this.bird.update();
        this.background.update();

    }

    this.draw = function(){
        this.bird.draw();
        this.background.draw();
    }
}

var gameStart = new game();
//gameStart.init();
