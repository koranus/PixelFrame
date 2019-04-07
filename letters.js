var PixelFrame = require('./PixelFrame');
var Color = require('./color');
var LedBitmap = require('./ledBitmap');
var fs = require('fs');

const fontpath = 'f4x5.json';

module.exports = class Letter{
    constructor(){
        let fontRaw = fs.readFileSync(fontpath);
        this.font = JSON.parse(fontRaw);
        this.breedte = this.font.Size.Dx;
        this.hoogte = this.font.Size.Dy;
    };

    VerkrijgCharacterLedBitmap(karakter,achtergrondKleur,letterKleur){
        var charset =   this.font.CharSet.find(i => i.Character == karakter);
        
        if(charset != undefined){            
            var bitmap = charset.Bitmap     
            var ledBitmap = new LedBitmap(bitmap.length,bitmap[0].length);  
            ledBitmap.letterKleur = letterKleur;
            ledBitmap.achtergrondKleur = achtergrondKleur;
            // Het karakter opzoeken in de json en de bitmap setten 
            return ledBitmap.GetLedBitmapFromFont(bitmap);     
        }
        else{
            //DEes Fixen--> gewoon weg doen ? 
            console.log("Tis hier te doen")
            return ledBitmap.GetLedBitmapFromFont(this.font.CharSet.find(i => i.Character == 'a').Bitmap);
        }        
    };
};