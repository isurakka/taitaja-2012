var tekstit = 
    {
        "karhu": "Karhu 20 €",
        "kukat": "Kukat 25 €",
        "leppakerttu": "Leppäkerttu 30 €",
        "porkkanat": "Porkkanat 20 €",
        "ruusut": "Ruusut 25 €"
    };

document.observe("dom:loaded", function() {
	startAnim()
});

var curImg = 0;

var esittely;
var curDiv;
var nextDiv;

var teksti;
var ccImg;

var kuvat;

Array.prototype.shuffle = function()
{
    var l = this.length, r, t
    for(var i = 0; i < l; i++)
    {
        r = Math.floor(Math.random() * l);
        t = this[i];
        this[i] = this[r];
        this[r] = t;
    }
};

function startAnim()
{
	esittely = $('esittely');
	kuvat = esittely.childElements();
    kuvat.shuffle();
	kuvat.each(function(e) { e.hide(); });
	
	curDiv = new Element('div', { 'class': 'esittelyK' } );
    curDiv.insert(kuvat[curImg]);
    curDiv.writeAttribute('onClick', "setHash(getImgName($$('.esittelyK img').find(function(v) { return v.getStyle('display') != 'none' && !v.hasClassName('esittelyCC'); })))");
    kuvat[curImg].show();
    
    teksti = new Element('h1', { 'class': 'esittelyTeksti' });
    teksti.insert(getImgText(kuvat[curImg]));
    curDiv.insert(teksti);
    
    ccImg = new Element('img', { 'class': 'esittelyCC', 'src':'images/cc.gif' });
    curDiv.insert(ccImg);
    
    nextDiv = new Element('div', { 'class': 'esittelyV' } );
    nextDiv.insert(kuvat[nextImg(curImg)]);
    nextDiv.writeAttribute('onClick', "setHash(getImgName($$('.esittelyV img').find(function(v) { return v.getStyle('display') != 'none' && !v.hasClassName('esittelyCC'); })))");
    
	esittely.insert(curDiv);
    esittely.insert(nextDiv);
    
    repeater();
}

var curTime = 0;
function repeater()
{
    setTimeout(repeater, 100);

    if (modalOpen || moving) return;

    curTime += 100;
    if (curTime >= 6000)
    {
        moveAnim();
        curTime -= 6000;
    }
}

var moving = false;

function moveAnim()
{
    kuvat[nextImg(curImg)].show();

    curImg = nextImg(curImg);
    
    moving = true;

    new Effect.Move(curDiv,     { x: 500, mode: 'absolute', fps: 60, duration: 2,
        transition: Effect.Transitions.sinoidal,
        afterFinish: function() { 
            curDiv.childElements().each(function(e) { if(e.hasClassName('esittelyTeksti')) return; e.hide(); });
            //curDiv.remove($$('.esittelyK img'));
            var img = kuvat[curImg].show();
            curDiv.insert(img);
            teksti.setOpacity(0);
            teksti.innerHTML = getImgText(img);
            ccImg.setOpacity(0);
            curDiv.style['left'] = '0px';
            teksti.appear();
            ccImg.appear();
            moving = false;
        } });
        
    new Effect.Move(nextDiv,     { x: 0, mode: 'absolute', fps: 60, duration: 2,
        transition: Effect.Transitions.sinoidal,
        afterFinish: function() { 
            nextDiv.innerHTML = "";
            nextDiv.insert(kuvat[nextImg(curImg)].show());
            nextDiv.style['left'] = '-500px';
        } });
}

function getImgName(img)
{
    var one = img.readAttribute('src').substr(img.readAttribute('src').lastIndexOf("/") + 1);
    return one.substr(0, one.length - 4);
}

function getImgText(img)
{
    var one = img.readAttribute('src').substr(img.readAttribute('src').lastIndexOf("/") + 1);
    return tekstit[one.substr(0, one.length - 4)];
}

function nextImg(num)
{
	if (kuvat[num + 1])
		return num + 1;
	else
		return 0;
}

function prevImg(num)
{
	if (kuvat[num - 1])
		return num - 1;
	else
		return kuvat.size() - 1;
}