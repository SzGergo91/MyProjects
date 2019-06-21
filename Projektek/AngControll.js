let app=angular.module('Forfilter',[]);


app.directive("frames",()=>{
	return{
		restrict: "A",
		template: `<div id="inDiv">
		  			 <div class="frame">
		  	           <img src="Pictures/Countries/Albania.jpg" width="100%">
		  	           <p>"Albania"</p> 
		             </div>
		             <div class="frame">
		  	           <img src="Pictures/Countries/Andorra.jpg" width="100%">
		  	           <p>"Andorra"</p> 
		             </div>
		             <div class="frame">
		  	           <img src="Pictures/Countries/ArmeniaPNG.PNG" width="100%">
		  	           <p>"Armenia"</p> 
		             </div>
		             <div class="frame">
		  	           <img src="Pictures/Countries/AustriaPNG.png" width="100%">
		  	           <p>"Austria"</p> 
		             </div>
		             <div class="frame">
		  	           <img src="Pictures/Countries/Belarus.jpg" width="100%">
		  	           <p>"Belarus"</p> 
		             </div>
		             <div class="frame">
		  	           <img src="Pictures/Countries/BulgariaPNG.png" width="100%">
		  	           <p>"Bulgaria"</p> 
		             </div>
		             <div class="frame">
		  	           <img src="Pictures/Countries/Croatia.jpg" width="100%">
		  	           <p>"Croatia"</p> 
		             </div>
		             <div class="frame">
		  	           <img src="Pictures/Countries/Cyprus.jpg" width="100%">
		  	           <p>"Cyprus"</p> 		  	           
		             </div>
		             <div class="frame">
		  	           <img src="Pictures/Countries/Czech.jpg" width="100%">
		  	           <p>"Czech"</p> 
		             </div>
	                <div class="frame">
		  	           <img src="Pictures/Countries/DenmarkPNG.png" width="100%">
		  	           <p>"Denmark"</p> 
		             </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Estonia.jpg" width="100%">
		  	           <p>"Estonia"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Finland.jpg" width="100%">
		  	           <p>"Finland"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/FrancePNG.png" width="100%">
		  	           <p>"France"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Georgia.jpg" width="100%">
		  	           <p>"Georgia"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/GermanyPNG.png" width="100%">
		  	           <p>"Germany"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Greece.jpg" width="100%">
		  	           <p>"Greece"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Hungary.jpg" width="100%">
		  	           <p>"Hungary"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Iceland.jpg" width="100%">
		  	           <p>"Iceland"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Ireland.jpg" width="100%">
		  	           <p>"Ireland"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Italy.jpg" width="100%">
		  	           <p>"Italy"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Kazakhstan.jpg" width="100%">
		  	           <p>"Kazakhstan"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Kosovo.jpg" width="100%">
		  	           <p>"Kosovo"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Latvia.jpg" width="100%">
		  	           <p>"Latvia"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/LithuaniaPNG.png" width="100%">
		  	           <p>"Lithuania"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Luxembourg.jpg" width="100%">
		  	           <p>"Luxembourg"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Malta.jpg" width="100%">
		  	           <p>"Malta"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Moldova.jpg" width="100%">
		  	           <p>"Moldova"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Monaco.jpg" width="100%">
		  	           <p>"Monaco"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Netherlands.jpg" width="100%">
		  	           <p>"Netherlands"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Norway.jpg" width="100%">
		  	           <p>"Norway"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/PolandPNG.png" width="100%">
		  	           <p>"Poland"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Portugal.jpg" width="100%">
		  	           <p>"Portugal"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Romania.jpg" width="100%">
		  	           <p>"Romania"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Russia.jpg" width="100%">
		  	           <p>"Russia"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/SerbiaPNG.png" width="100%">
		  	           <p>"Serbia"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/SlovakiaPNG.png" width="100%">
		  	           <p>"Slovakia"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/SloveniaPNG.png" width="100%">
		  	           <p>"Slovenia"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/SpainPNG.png" width="100%">
		  	           <p>"Spain"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/SwedenPNG.png" width="100%">
		  	           <p>"Sweden"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/TurkeyPNG.png" width="100%">
		  	           <p>"Turkey"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/UK.jpg" width="100%">
		  	           <p>"UK"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Ukraine.jpg" width="100%">
		  	           <p>"Ukraine"</p> 
		            </div>
		           </div>`
	}
});



/*app.controller('DivController', ['$scope', function($scope){
}])*/
