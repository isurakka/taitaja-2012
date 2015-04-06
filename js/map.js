document.observe("dom:loaded", function() {
	loadMap()
});

function loadMap()
{
    var pos = new google.maps.LatLng(60.196342,24.95717);
    
    var options = {
        center: pos,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map(document.getElementById("map"), options);
    
    var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title:"Hannan kakku ja pulla"
    });
}