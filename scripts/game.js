let notify = document.getElementById('notify');
let notifyType = document.getElementById('notifyType');

class Game {
    constructor(){
        this.cards = cards;
        this.winMatches = this.cards.length / 2;
        this.clickCounter = 0;
        this.openCards = [];
        this._setUpStats();
        this._setUpElements();
    }
    
    _setUpElements(){
        this.el = {};
        this.el.cards = $('.card');
        this.el.turns = $('#turn-output');
        this.el.matches = $('#match-output');
    }


    _setUpStats(){
        this.stats = {};
        this.stats.turns = 0;
        this.stats.matches = 0;
        this.stats.misses = 0;
    }

    
    init(){
       this._placeCards(); 
    }

    
    clickCards(el){        
        if(el.hasClass('open') || this.openCards.length == 2){
            return;
        }
        
        this.clickCounter++;

        this.openCards.push(el);

        el.addClass('open');

        if(this.clickCounter ==2){
            
            const cardNumber1 = this.openCards[0].data('number');
            const cardNumber2 = this.openCards[1].data('number');
            
            this.stats.turns++;
           
            this._updateElement(this.el.turns, this.stats.turns);
            this.clickCounter = 0;
            
        
            if(cardNumber1 === cardNumber2){
                notify.classList.add("active");
                notifyType.classList.add("matched");

                setTimeout(function(){
                notify.classList.remove("active");
                notifyType.classList.remove("matched");
                },2000);
            
                this.stats.matches++;
               
                this._updateElement(this.el.matches, this.stats.matches);
                
                this.openCards = [];
                
                if(this.stats.matches === this.winMatches){
                    this._endGame(true);
                }
            }else{
               
                this.stats.misses++;
                const that = this;
                setTimeout(function(){
                    that.openCards[0].removeClass('open');
                    that.openCards[1].removeClass('open');
                    
                    that.openCards = [];
                    
                    if(that.stats.turns >= 20) {
                        that._endGame(false);

                    }
                }, 1000)

                if(this.stats.turns === 10 ){
                    notify.classList.add("active");
                    notifyType.classList.add("tenturns");
    
                    setTimeout(function(){
                    notify.classList.remove("active");
                    notifyType.classList.remove("tenturns");
                    },2000);
                }

                if(this.stats.turns === 15 ){
                    notify.classList.add("active");
                    notifyType.classList.add("fifteenturns");
    
                    setTimeout(function(){
                    notify.classList.remove("active");
                    notifyType.classList.remove("fifteenturns");
                    },2000);
                }
            }
            
            
        }
    }

    _endGame(win){
        this.el.cards.off('click');
        if (win){
            setTimeout(function(){
                alert('You Won!');
            }, 300);
        }else{
            setTimeout(function(){
                alert('You lose! You have tried too many times!');
                location.reload();
            }, 300);
        }
    }

    _updateElement(el, text, className){
        if(text){
            el.text(text);
        }
        if(className){
            el.addClass(className);
        }
    }


    _placeCards(){

        const that = this;

        this._shuffle(this.cards);

        this.el.cards.each(function(index){
    
        const $img = $(this).children('.card-image').children('img');
           
        $img.attr({
                'src': that.cards[index].path,
                'alt': that.cards[index].alt
            });
            
            $(this).data('number', that.cards[index].number);
        });
    }
    
    _shuffle(a){
        let j, x, i;
        for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
        }

    }
}


playGame = true;
let game;

if (playGame){
    game = new Game();
    
    game.init();
   
    
    game.el.cards.click(function(){
      game.clickCards($(this));     
    });
    

}
