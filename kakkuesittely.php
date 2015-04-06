<?php include("include/header.php") ?>

<script type="text/javascript" src="js/lib/prototype.js"></script>
<script type="text/javascript" src="js/lib/scriptaculous.js"></script>
<script type="text/javascript" src="js/lib/livepipe.js"></script>
<script type="text/javascript" src="js/lib/window.js"></script>
<script type="text/javascript" src="js/lib/jquery.js"></script>
<script type="text/javascript" src="js/tuote.js"></script>

<script type="text/javascript" src="js/esittely.js"></script>

<div id="tuote" class="paddedM shadow"></div>

<div class='textContent'>
    <h1>Kakkuesittely</h1>
    <p>Näet lisätietoja kuvaa painamalla.</p>
    <div id='esittely' class='shadow'>
		<?php 
			foreach(glob('images/kakku/{*.jpg,*.png,*.gif}', GLOB_BRACE) as $img)  
			{ 
				echo "<img src=\"" . $img . "\" alt=\"\" >";  
			}
		?>
    </div>
</div>

<?php include("include/tuotteet.php") ?>

<?php include("include/footer.php") ?>