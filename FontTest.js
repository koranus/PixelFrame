var Letters = require('./letters.js')
var PixelFrame = require('./PixelFrame');
var LedBitmap = require('./ledBitmap');
var Color =require('./color');

const pf = new PixelFrame(16,16);

var letters = new Letters();
var _ledBitmap = new LedBitmap();   
var positie;


//letterstest();
putString("Hallo Suske");

async function letterstest(){
    while(1){        
            for(var i=52;i<127;++i){
                for(var k= 0;k < pf.breedte;k++){
                    //pf.kleurVolledigFrame(new Color(255,0,0,1));                    
                    pf.setLedBitmap(letters.VerkrijgCharacterLedBitmap(String.fromCharCode(i),new Color(255,0,0,5)),k,k);  
                    //pf.setLedBitmap(letters.VerkrijgCharacterLedBitmap(String.fromCharCode(i),new Color(255,0,0,1)),0,k)                  
                    pf.show();
                    await sleep(50);
                    pf.blackout();                    
            }            
        };           
    }
};

  async function putString(boodschap){
    //boodschap string omzetten naar char array
    charArray = Array.from(boodschap);
    var start = true;
    var teller = 0; 
    while(start){
        for(var k = pf.breedte /*-1*/ ;k >=0;k--){
            //console.log(charArray);
            pf.setLedBitmap(letters.VerkrijgCharacterLedBitmap(charArray[teller],new Color(0,255,0,1)),4,k);
            if(k == pf.breedte - (letters.VerkrijgCharacterLedBitmap(charArray[teller].breedte +1) ))
                pf.setLedBitmap(letters.VerkrijgCharacterLedBitmap(charArray[teller + 1],new Color(0,255,0,1)),4,k);
            if(k == pf.breedte - (letters.VerkrijgCharacterLedBitmap(charArray[teller].breedte +1)*2 ))
                pf.setLedBitmap(letters.VerkrijgCharacterLedBitmap(charArray[teller + 2],new Color(0,255,0,1)),4,k);
            
            //teller++;
            
            pf.show();
            await sleep(25);
            pf.blackout()
        };
    }      
};


async function putString1(boodschap){
    //boodschap string omzetten naar char array
    charArray = Array.from(boodschap);
    var einde = false;    
    for(var i = 0;i < charArray.length; i++){
        for(var k = pf.breedte-1;k >=0;k--){
            console.log(charArray);
            pf.setLedBitmap(letters.VerkrijgCharacterLedBitmap(charArray[i],new Color(0,255,0,1)),0,k);  
            //pf.setLedBitmap(letters.VerkrijgCharacterLedBitmap(String.fromCharCode(i),new Color(255,0,0,1)),0,k)                  
            pf.show();
            await sleep(25);
            pf.blackout()
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