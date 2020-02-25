var game = function(){
    this.canvas = null;
    this.context = null;
    this.width = 288;
    this.height =512;
    this.gameOver = false;

    this.bird = null;
    this.background = null;
    this.base = null;
    this.pipe = null;

    var self = this;

    this.init = function(){
        this.canvas = document.createElement('canvas');        
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height =this.height;        
        var x = document.getElementById("gamescreen");        
        x.appendChild(this.canvas);

        //create new bird
        this.bird = new bird(this);
        this.bird.init();

        //create background
        this.background = new background(this);
        this.background.init();
        
        //create pipe
        this.pipe = new pipe(this);
        this.pipe.init();

        //create base
        this.base = new base(this);
        this.base.init();

        

        //Waiting for mouse click
        this.mouseEventListener();


        this.loop();
    }

    this.mouseEventListener = function(){
        this.canvas.addEventListener('click', function(){
            self.bird.flap();
        })
    }

    this.loop = function(){
        self.update();
        self.draw();
        setTimeout(self.loop, 33);
    }

    this.update = function(){
        if(!this.gameOver){
            this.bird.update();
            this.background.update();
            this.pipe.update();
            this.base.update();
        } 
    }

    this.draw = function(){
        this.background.draw();        
        this.pipe.draw();
        this.base.draw();
        this.bird.draw();
        
    }
}

var menu = function(){
    this.width = 288;
    this.height =512;
    

    this.init = function(){       
        this.mouseEventListener();
    }

    this.mouseEventListener = function(){
        var start = document.getElementById('menuscreen'); 
        var startImage = document.getElementById('menuimage');       
        startImage.addEventListener('click', function(){
            start.remove();
            var gameStart = new game();
            gameStart.init();
        })
    }
}

var menuScreen = new menu();
menuScreen.init();

