var $j = jQuery.noConflict();

$j(document).ready(function() {
    //box-shadow validation hack
    $j('.shadow').each(function(k, e) { $j(e).css('box-shadow', '0px 5px 10px -5px #000000'); });
});