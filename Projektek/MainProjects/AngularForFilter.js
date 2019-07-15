let elements=angular.module('FilterElements',[]);


//Species Animals,Creature,Demon,God,Human,Other,Undead!!
elements.directive('allSets',()=>{
	return{
		template: `	<div id="BigFilterMain">

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Fenrir</h1>
	  	<img src="Filter/Fenrir.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">2500</p>
	  	  <p class="health">375000</p>
	  	  <p id="FilterSpecies">Species: <i class="species">God</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Bear</h1>
	  	<img src="Filter/Bear.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">14</p>
	  	  <p class="health">180</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Amazon</h1>
	  	<img src="Filter/AmazonArcher.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">8</p>
	  	  <p class="health">42</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Human</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Lion</h1>
	  	<img src="Filter/AfricanLion.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">16</p>
	  	  <p class="health">180</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Crockodile</h1>
	  	<img src="Filter/Crockodile.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">18</p>
	  	  <p class="health">160</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Creature</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">GiantSpider</h1>
	  	<img src="Filter/GiantSpider.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">15</p>
	  	  <p class="health">190</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Creature</i></p>
	  	</div> 
	  </div>

	 <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Spartan</h1>
	  	<img src="Filter/Spartan.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">30</p>
	  	  <p class="health">65</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Human</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Rabbit</h1>
	  	<img src="Filter/Rabbit.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">1.5</p>
	  	  <p class="health">10</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">GiantCentipede</h1>
	  	<img src="Filter/GiantCentipede.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">20</p>
	  	  <p class="health">210</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Creature</i></p>
	  	</div> 
	  </div>

	 <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Skeleton</h1>
	  	<img src="Filter/Skeleton.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">13</p>
	  	  <p class="health">75</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Undead</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Mouse</h1>
	  	<img src="Filter/Mouse.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">0.5</p>
	  	  <p class="health">4</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Ares</h1>
	  	<img src="Filter/Ares.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">1870</p>
	  	  <p class="health">500000</p>
	  	  <p id="FilterSpecies">Species: <i class="species">God</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Jedi</h1>
	  	<img src="Filter/Jedi.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">90</p>
	  	  <p class="health">380</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Other</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Dragon</h1>
	  	<img src="Filter/Dragon.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">175</p>
	  	  <p class="health">1700</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Creature</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">T-Rex</h1>
	  	<img src="Filter/TRex.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">150</p>
	  	  <p class="health">1500</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Creature</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">GiantOctopus</h1>
	  	<img src="Filter/GiantOctopus.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">160</p>
	  	  <p class="health">1850</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Creature</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Rhino</h1>
	  	<img src="Filter/Rhino.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">75</p>
	  	  <p class="health">885</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Mammoth</h1>
	  	<img src="Filter/Mammoth.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">175</p>
	  	  <p class="health">1800</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Batman</h1>
	  	<img src="Filter/Batman.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">75</p>
	  	  <p class="health">1210</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Human</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Zombie</h1>
	  	<img src="Filter/Zombie.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">11</p>
	  	  <p class="health">85</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Undead</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Neith</h1>
	  	<img src="Filter/Neith.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">2285</p>
	  	  <p class="health">421050</p>
	  	  <p id="FilterSpecies">Species: <i class="species">God</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Monster</h1>
	  	<img src="Filter/Monster.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">90</p>
	  	  <p class="health">1300</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Other</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">GiantMantis</h1>
	  	<img src="Filter/Mantis.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">1500</p>
	  	  <p class="health">450</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Creature</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Chuck Norris</h1>
	  	<img src="Filter/ChuckNorris.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">500</p>
	  	  <p class="health">2000</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Human</i></p>
	  	</div> 
	  </div>


	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Zaraki Kenpachi</h1>
	  	<img src="Filter/Kenpachi.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">2700</p>
	  	  <p class="health">137500</p>
	  	  <p id="FilterSpecies">Species: <i class="species">God</i></p>
	  	</div> 
	  </div>


	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Hell Hound</h1>
	  	<img src="Filter/HellHound.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">65</p>
	  	  <p class="health">865</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Demon</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Hercules</h1>
	  	<img src="Filter/Hercules.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">950</p>
	  	  <p class="health">170000</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Other</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Ghost</h1>
	  	<img src="Filter/Ghost.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">120</p>
	  	  <p class="health">1400</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Undead</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Eagle</h1>
	  	<img src="Filter/Eagle.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">9</p>
	  	  <p class="health">75</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Michael Myers</h1>
	  	<img src="Filter/MichaelMyers.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">20</p>
	  	  <p class="health">1000</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Demon</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Knight</h1>
	  	<img src="Filter/Knight.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">11</p>
	  	  <p class="health">57</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Human</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Zeus</h1>
	  	<img src="Filter/Zeus.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">3500</p>
	  	  <p class="health">600000</p>
	  	  <p id="FilterSpecies">Species: <i class="species">God</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Banshee</h1>
	  	<img src="Filter/Banshee.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">250</p>
	  	  <p class="health">2800</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Undead</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Succubus</h1>
	  	<img src="Filter/Succubus.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">124</p>
	  	  <p class="health">38000</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Demon</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Elephant</h1>
	  	<img src="Filter/Elephant.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">80</p>
	  	  <p class="health">925</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Dog</h1>
	  	<img src="Filter/Dog.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">4</p>
	  	  <p class="health">32</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Thanos</h1>
	  	<img src="Filter/Thanos.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">3500</p>
	  	  <p class="health">250000</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Other</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Rat</h1>
	  	<img src="Filter/Rat.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">0.75</p>
	  	  <p class="health">6</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Freddy Krueger</h1>
	  	<img src="Filter/FreddyKrueger.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">15</p>
	  	  <p class="health">200</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Demon</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">SHCreature</h1>
	  	<img src="Filter/SHCreature.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">30</p>
	  	  <p class="health">570</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Creature</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Flash</h1>
	  	<img src="Filter/Flash.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">3000</p>
	  	  <p class="health">400</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Other</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Superman</h1>
	  	<img src="Filter/Superman.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">950</p>
	  	  <p class="health">75000</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Other</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Frog</h1>
	  	<img src="Filter/Frog.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">0.3</p>
	  	  <p class="health">3.25</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Pig</h1>
	  	<img src="Filter/Pig.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">4.5</p>
	  	  <p class="health">122</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Sauron</h1>
	  	<img src="Filter/Sauron.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">300</p>
	  	  <p class="health">5200</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Demon</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Butterfly</h1>
	  	<img src="Filter/Butterfly.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">0.1</p>
	  	  <p class="health">1.5</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Creature</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Cow Boy</h1>
	  	<img src="Filter/CowBoy.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">28</p>
	  	  <p class="health">55</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Human</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Ice Sorceress</h1>
	  	<img src="Filter/IceSorceress.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">56</p>
	  	  <p class="health">1003.5</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Human</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Horse</h1>
	  	<img src="Filter/Horse.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">12</p>
	  	  <p class="health">165</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Bone Dragon</h1>
	  	<img src="Filter/BoneDragon.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">350</p>
	  	  <p class="health">2900</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Undead</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">White Tiger</h1>
	  	<img src="Filter/WhiteTiger.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">30</p>
	  	  <p class="health">350</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Kraken</h1>
	  	<img src="Filter/Kraken.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">402</p>
	  	  <p class="health">3518</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Creature</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Spartacus</h1>
	  	<img src="Filter/Spartacus.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">45</p>
	  	  <p class="health">111</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Human</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Krystal Vixen</h1>
	  	<img src="Filter/Vixen.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">125</p>
	  	  <p class="health">1720</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Other</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Sobek</h1>
	  	<img src="Filter/Sobek.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">1821</p>
	  	  <p class="health">977981</p>
	  	  <p id="FilterSpecies">Species: <i class="species">God</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Ghoul</h1>
	  	<img src="Filter/Ghoul.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">43</p>
	  	  <p class="health">432</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Undead</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Cerberus</h1>
	  	<img src="Filter/Cerberus.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">100</p>
	  	  <p class="health">1213</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Demon</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Panther</h1>
	  	<img src="Filter/Panther.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">14</p>
	  	  <p class="health">170</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Giant Scorpion</h1>
	  	<img src="Filter/Scorpion.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">300</p>
	  	  <p class="health">225</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Creature</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Robin Hood</h1>
	  	<img src="Filter/RobinHood.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">13</p>
	  	  <p class="health">70</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Human</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Seraphin</h1>
	  	<img src="Filter/Seraphin.gif" class="img">
	  	<div class="details">
	  	  <p class="dmg">328</p>
	  	  <p class="health">7107</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Other</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Ra</h1>
	  	<img src="Filter/Ra.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">2900</p>
	  	  <p class="health">355000</p>
	  	  <p id="FilterSpecies">Species: <i class="species">God</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Hollow</h1>
	  	<img src="Filter/Hollow.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">112</p>
	  	  <p class="health">333</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Undead</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Lilith</h1>
	  	<img src="Filter/Lilith.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">550</p>
	  	  <p class="health">10251</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Demon</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Falcon</h1>
	  	<img src="Filter/Falcon.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">10</p>
	  	  <p class="health">45</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Vinegaroon</h1>
	  	<img src="Filter/Vinegaroon.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">240</p>
	  	  <p class="health">455</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Creature</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Xena</h1>
	  	<img src="Filter/Xena.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">900</p>
	  	  <p class="health">150000</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Human</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Wonder Woman</h1>
	  	<img src="Filter/WonderWoman.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">812</p>
	  	  <p class="health">103211</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Other</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Athena</h1>
	  	<img src="Filter/Athena.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">1646</p>
	  	  <p class="health">748000</p>
	  	  <p id="FilterSpecies">Species: <i class="species">God</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Headless Horseman</h1>
	  	<img src="Filter/HeadlessHorseman.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">90</p>
	  	  <p class="health">25000</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Undead</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Abaddon</h1>
	  	<img src="Filter/Abaddon.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">202</p>
	  	  <p class="health">13057</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Demon</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Crowley</h1>
	  	<img src="Filter/Crowley.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">415</p>
	  	  <p class="health">25250</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Demon</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Jason</h1>
	  	<img src="Filter/Jason.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">35</p>
	  	  <p class="health">1200</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Undead</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Aphrodite</h1>
	  	<img src="Filter/Aphrodite.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">2548</p>
	  	  <p class="health">485375</p>
	  	  <p id="FilterSpecies">Species: <i class="species">God</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Hulk</h1>
	  	<img src="Filter/Hulk.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">1500</p>
	  	  <p class="health">150000</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Other</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Michael Jackson</h1>
	  	<img src="Filter/MichaelJackson.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">14</p>
	  	  <p class="health">1001</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Human</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Polar Bear</h1>
	  	<img src="Filter/PolarBear.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">55</p>
	  	  <p class="health">725</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Stag Beetle</h1>
	  	<img src="Filter/StagBeetle.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">3015</p>
	  	  <p class="health">15811</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Creature</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Hawk</h1>
	  	<img src="Filter/Hawk.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">6</p>
	  	  <p class="health">50</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Medusa</h1>
	  	<img src="Filter/Medusa.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">30041</p>
	  	  <p class="health">31203</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Creature</i></p>
	  	</div> 
	  </div>

	   <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Fred Flinstone</h1>
	  	<img src="Filter/FredFlinstone.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">24</p>
	  	  <p class="health">312</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Human</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Wizard</h1>
	  	<img src="Filter/Wizard.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">18</p>
	  	  <p class="health">1315</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Other</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Artemis</h1>
	  	<img src="Filter/Artemis.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">3000</p>
	  	  <p class="health">390000</p>
	  	  <p id="FilterSpecies">Species: <i class="species">God</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Vampire</h1>
	  	<img src="Filter/Vampire.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">290</p>
	  	  <p class="health">8500</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Undead</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Demon Dog</h1>
	  	<img src="Filter/DemonDog.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">64</p>
	  	  <p class="health">31120</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Demon</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Kenguru</h1>
	  	<img src="Filter/Kenguru.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">20</p>
	  	  <p class="health">350</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Cyclops</h1>
	  	<img src="Filter/Cyclops.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">110</p>
	  	  <p class="health">1018</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Creature</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Samurai Jack</h1>
	  	<img src="Filter/SamuraiJack.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">1873</p>
	  	  <p class="health">45000</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Human</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Deadpool</h1>
	  	<img src="Filter/Deadpool.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">1272</p>
	  	  <p class="health">66875</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Other</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Hera</h1>
	  	<img src="Filter/Hera.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">2880</p>
	  	  <p class="health">550000</p>
	  	  <p id="FilterSpecies">Species: <i class="species">God</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Death Knight</h1>
	  	<img src="Filter/DeathKnight.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">1000</p>
	  	  <p class="health">39800</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Undead</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Gorilla</h1>
	  	<img src="Filter/Gorilla.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">12</p>
	  	  <p class="health">140</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Unicorn</h1>
	  	<img src="Filter/Unicorn.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">25</p>
	  	  <p class="health">295</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Other</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Fairy</h1>
	  	<img src="Filter/Fairy.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">235</p>
	  	  <p class="health">31</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Other</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Hydra</h1>
	  	<img src="Filter/Hydra.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">378</p>
	  	  <p class="health">4515</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Creature</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Panda</h1>
	  	<img src="Filter/Panda.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">10</p>
	  	  <p class="health">150</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Hades</h1>
	  	<img src="Filter/Hades.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">3000</p>
	  	  <p class="health">575000</p>
	  	  <p id="FilterSpecies">Species: <i class="species">God</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Naga</h1>
	  	<img src="Filter/Naga.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">147</p>
	  	  <p class="health">988</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Demon</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Squirrel</h1>
	  	<img src="Filter/Squirrel.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">1.75</p>
	  	  <p class="health">9</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Quan Chi</h1>
	  	<img src="Filter/QuanChi.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">275</p>
	  	  <p class="health">5800</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Other</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Zebra</h1>
	  	<img src="Filter/Zebra.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">11.3</p>
	  	  <p class="health">170</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Goblin</h1>
	  	<img src="Filter/Goblin.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">2.5</p>
	  	  <p class="health">28</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Creature</i></p>
	  	</div> 
	  </div>


	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">John Wick</h1>
	  	<img src="Filter/JohnWick.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">22</p>
	  	  <p class="health">1050</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Human</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Poseidon</h1>
	  	<img src="Filter/Poseidon.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">3150</p>
	  	  <p class="health">580000</p>
	  	  <p id="FilterSpecies">Species: <i class="species">God</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Spectre</h1>
	  	<img src="Filter/Spectre.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">198</p>
	  	  <p class="health">2337</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Undead</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Demon Warrior</h1>
	  	<img src="Filter/DemonWarrior.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">27.5</p>
	  	  <p class="health">2000</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Demon</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Odin</h1>
	  	<img src="Filter/Odin.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">2355</p>
	  	  <p class="health">800000</p>
	  	  <p id="FilterSpecies">Species: <i class="species">God</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Ariel</h1>
	  	<img src="Filter/Ariel.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">55</p>
	  	  <p class="health">2348</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Other</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Orc</h1>
	  	<img src="Filter/Orc.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">35</p>
	  	  <p class="health">225</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Creature</i></p>
	  	</div> 
	  </div>

	  <div class="BigFilterDivset">
	    <h1 class="BigFilterNames">Camel</h1>
	  	<img src="Filter/Camel.png" class="img">
	  	<div class="details">
	  	  <p class="dmg">11.5</p>
	  	  <p class="health">185</p>
	  	  <p id="FilterSpecies">Species: <i class="species">Animals</i></p>
	  	</div> 
	  </div>














	</div>`
	}
})






//!!!!It does not arrange the sets properly this way!!!!!!
/*
elements.controller('ElementController',function($scope){
	$scope.sets=[
		{
			E1Name: "Flash",
			E1Img: "Filter/Flash.png",
			E1DMG: 3000,
			E1Heath: 400,
			E1Species: "Other",
			E2Name: "Superman",
			E2Img: "Filter/Superman.png",
			E2DMG: 950,
			E2Heath: 75000,
			E2Species: "Other",
			E3Name: "Frog",
			E3Img: "Filter/Frog.png",
			E3DMG: 0.3,
			E3Heath: 3.2,
			E3Species: "Animals",
			E4Name: "Pig",
			E4Img: "Filter/Pig.png",
			E4DMG: 4.5,
			E4Heath: 120,
			E4Species: "Animals",
			E5Name: "Sauron",
			E5Img: "Filter/Sauron.png",
			E5DMG: 300,
			E5Heath: 5200,
			E5Species: "Other",
		},
		{
			E1Name: "Butterfly",
			E1Img: "Filter/Butterfly.png",
			E1DMG: 1,
			E1Heath: 20,
			E1Species: "Creature",
			E2Name: "CowBoy",
			E2Img: "Filter/CowBoy.png",
			E2DMG: 28,
			E2Heath: 55,
			E2Species: "Human",
			E3Name: "Ice Sorceress",
			E3Img: "Filter/IceSorceress.png",
			E3DMG: 1003.5,
			E3Heath: 56,
			E3Species: "Human",
			E4Name: "Horse",
			E4Img: "Filter/Horse.png",
			E4DMG: 12,
			E4Heath: 160,
			E4Species: "Animals",
			E5Name: "Bone Dragon",
			E5Img: "Filter/BoneDragon.png",
			E5DMG: 350,
			E5Heath: 1500,
			E5Species: "Undead",
		},
	]
})*/