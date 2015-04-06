var $j = jQuery.noConflict();

var modal;

var modalOpen = false;

document.observe("dom:loaded", function() {

    $$('body')[0].insert(new Element('div', { id:'tuoteOverlay' }).hide());

    $('tuote').setStyle({display:'visible'});
    
    modal = new Control.Modal($('tuote'),{  
        className: 'tuote',  
        fade: false,
        beforeOpen: function()
        {
            $('tuoteOverlay').show();
            modalOpen = true;
        },
        afterClose: function()
        {
            $('tuoteOverlay').hide();
            setHash("");
            modalOpen = false;
        }
    });
    
    if (getHash())
        showTuote(getHash());
});

window.onhashchange = function()
{
    if (!getHash()) return;

    showTuote(getHash());
};

function setHash(v)
{
    window.location.hash = v;
}

function getHash()
{
    var hash = window.location.hash.strip();
    
    if (hash.substr(0, 1) == "#")
        hash = hash.substr(1)

    return hash;
}

function showTuote(tuote)
{
    modal.open();
    $('tuote').innerHTML = "<h1>Ladataan tuotetta...</h1>";
    new Ajax.Request('include/kakku/' + tuote + '.html', {
            onSuccess: function(r) {
                $('tuote').innerHTML = r.responseText;
                $('tuote').insert(new Element('img', { id:'close', 'class':'shadow', src:'images/close.png' }).observe('click', function(e) { modal.close(); }));
                $j('.shadow').each(function(k, e) { $j(e).css('box-shadow', '0px 5px 10px -5px #000000'); });
            }
    });
}