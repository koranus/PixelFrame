var Letters = require('./letters.js')
var PixelFrame = require('./PixelFrame');
var Color =require('./color');
var Zin = require('./zin.js');

const pf = new PixelFrame(16,16);

var achtergrondKleur = new Color(0,255,0,1);
var letterKleur = new Color(255,0,0,1);
var letters = new Letters()

//letterstest();
//putString1("Hallo Suske Ik zie u heel graag ");
//basic("Hallo Suske Ik zie u heel graag ")
var zin = new Zin("Hallo suske",letters,achtergrondKleur,letterKleur);





async function letterstest(){   
    while(1){        
            for(var i=52;i<127;++i){
                    for(var k= pf.breedte-1;k >= 0;k--){   
                        pf.setLedBitmap(
                            letters.VerkrijgCharacterLedBitmap(String.fromCharCode(i),achtergrondKleur,letterKleur),
                            k,
                            k);               
                    pf.show();
                    await sleep(40);   
            }            
        };           
    }
};

  async function putString(boodschap){
    //boodschap string omzetten naar char array
    charArray = Array.from(boodschap);
    var start = true;
    var teller = 0; 
    var ledBitmapArray = [];
    const spaties = 1;
    var aantalFrames = 0;
    var frames;

    //Lijst met karakters in ledbitmaps maken
    for (var i = 0; i < charArray.length; i++) {
        ledBitmapArray[i] = letters.VerkrijgCharacterLedBitmap(charArray[i],achtergrondKleur,letterKleur);
    }

    //berekenen hoeveel frames er moeten getoond worden
    for (var i = 0; i < ledBitmapArray.length; i++){
        aantalFrames += (ledBitmapArray[i].breedte + spaties);        
    }

    //Maak 1 lang frame

    console.log(aantalFrames);

    while(start){
        for(var k = pf.breedte-1;k >=0;k--){
            pf.setLedBitmap(ledBitmapArray[teller],4,k)
            if(k == 4)
            pf.setLedBitmap(ledBitmapArray[teller+1],4,k)
        }
    }

    for (var i = 0; i < ledBitmapArray.length; i++){
        for(var k = pf.breedte-1;k >=0;k--){
            
        }
    }

};

async function basic(boodschap){
    charArray = Array.from(boodschap);
    for(var i = 0;i < charArray.length; i++){
        for(var k = pf.breedte-1;k >=0;k--){
            pf.setLedBitmap(letters.VerkrijgCharacterLedBitmap(charArray[i]),achtergrondKleur,letterKleur);  
            //pf.setLedBitmap(letters.VerkrijgCharacterLedBitmap(String.fromCharCode(i),new Color(255,0,0,1)),0,k)                  
            pf.show();
            await sleep(25);
            pf.blackout()
        };
    };
}

async function putString2(boodschap){
    //boodschap string omzetten naar char array
    charArray = Array.from(boodschap);
    var einde = false;    
    for(var i = 0;i < charArray.length; i++){
        for(var k = pf.breedte-1;k >=0;k--){
            console.log(charArray);
            pf.setLedBitmap(letters.VerkrijgCharacterLedBitmap(charArray[i],achtergrondKleur,letterKleur),4,k); 
            
            pf.show();
            await sleep(25);
        };
    };
      
};

async function putString1(boodschap){
    //boodschap string omzetten naar char array
    charArray = Array.from(boodschap);
    var einde = false;    
    for(var i = 0;i < charArray.length; i++){
        for(var k = pf.breedte-1;k >=0;k--){
            console.log(charArray);
            pf.setLedBitmap(letters.VerkrijgCharacterLedBitmap(charArray[i],achtergrondKleur,letterKleur),4,k);  
            //pf.setLedBitmap(letters.VerkrijgCharacterLedBitmap(String.fromCharCode(i),new Color(255,0,0,1)),0,k)                  
            pf.show();
            await sleep(25);
        };
    };
      
};
       
  
function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
};
  
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};