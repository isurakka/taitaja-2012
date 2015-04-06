<?php include("include/header.php") ?>

<script type="text/javascript"
    src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDBk1yMVXLhH_O7GRiYOh_L585z1E03xt4&amp;sensor=false">
</script>
<script type="text/javascript" src="js/lib/prototype.js"></script>
<script type="text/javascript" src="js/map.js"></script>

<div class='textContent'>
    <h1>Yhteystiedot</h1>
    <address><p>Hattulantie 2<br />
    00510 Helsinki<br />
    GSM +358 50 3451234<br />
    <a href="mailto:yhteys@hkp.fi">yhteys@hkp.fi</a></p></address>
    <br />
    <table class='window shadow leftFloat'>
        <tr>
            <td class='windowTitle'><a href="http://www.facebook.com/hannankakkujapulla" ><img class="windowIcon" src="images/fb.png" alt="" /></a><h2>Sosiaaliset mediat</h2></td>
        </tr>
        <tr>
            <td class='windowContent paddedM'><iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.facebook.com%2Fhannankakkujapulla&amp;send=false&amp;layout=standard&amp;width=210&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font=tahoma&amp;height=45" ></iframe></td>
        </tr>
    </table>
</div>

<table class='window shadow mapWindow rightFloat'>
    <tr>
        <td class='windowTitle'><h2>Kartta</h2></td>
    </tr>
    <tr>
        <td class='windowContent paddedM'><div id='map'></div></td>
    </tr>
</table>



<?php include("include/footer.php") ?>