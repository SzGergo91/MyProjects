let app=angular.module('Forfilter',[]);


app.directive("frames",()=>{
	return{
		restrict: "A",
		template: `<div id="inDiv">
		  			 <div class="frame">
		  	           <img src="Pictures/Countries/Albania.jpg" height="300px" width="100%">
		  	           <p>"Albania"</p> 
		             </div>
		             <div class="frame">
		  	           <img src="Pictures/Countries/Andorra.jpg" height="300px" width="100%">
		  	           <p>"Andorra"</p> 
		             </div>
		             <div class="frame">
		  	           <img src="Pictures/Countries/ArmeniaPNG.PNG" height="300px" width="100%">
		  	           <p>"Armenia"</p> 
		             </div>
		             <div class="frame">
		  	           <img src="Pictures/Countries/AustriaPNG.png" height="300px" width="100%">
		  	           <p>"Austria"</p> 
		             </div>
		             <div class="frame">
		  	           <img src="Pictures/Countries/Belarus.jpg" height="300px" width="100%">
		  	           <p>"Belarus"</p> 
		             </div>
		             <div class="frame">
		  	           <img src="Pictures/Countries/BulgariaPNG.png" height="300px" width="100%">
		  	           <p>"Bulgaria"</p> 
		             </div>
		             <div class="frame">
		  	           <img src="Pictures/Countries/Croatia.jpg" height="300px" width="100%">
		  	           <p>"Croatia"</p> 
		             </div>
		             <div class="frame">
		  	           <img src="Pictures/Countries/Cyprus.jpg" height="300px" width="100%">
		  	           <p>"Cyprus"</p> 		  	           
		             </div>
		             <div class="frame">
		  	           <img src="Pictures/Countries/Czech.jpg" height="300px" width="100%">
		  	           <p>"Czech"</p> 
		             </div>
	                <div class="frame">
		  	           <img src="Pictures/Countries/DenmarkPNG.png" height="300px" width="100%">
		  	           <p>"Denmark"</p> 
		             </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Estonia.jpg" height="300px" width="100%">
		  	           <p>"Estonia"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Finland.jpg" height="300px" width="100%">
		  	           <p>"Finland"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/FrancePNG.png" height="300px" width="100%">
		  	           <p>"France"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Georgia.jpg" height="300px" width="100%">
		  	           <p>"Georgia"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/GermanyPNG.png" height="300px" width="100%">
		  	           <p>"Germany"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Greece.jpg" height="300px" width="100%">
		  	           <p>"Greece"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Hungary.jpg" height="300px" width="100%">
		  	           <p>"Hungary"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Iceland.jpg" height="300px" width="100%">
		  	           <p>"Iceland"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Ireland.jpg" height="300px" width="100%">
		  	           <p>"Ireland"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Italy.jpg" height="300px" width="100%">
		  	           <p>"Italy"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Kazakhstan.jpg" height="300px" width="100%">
		  	           <p>"Kazakhstan"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Kosovo.jpg" height="300px" width="100%">
		  	           <p>"Kosovo"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Latvia.jpg" height="300px" width="100%">
		  	           <p>"Latvia"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/LithuaniaPNG.png" height="300px" width="100%">
		  	           <p>"Lithuania"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Luxembourg.jpg" height="300px" width="100%">
		  	           <p>"Luxembourg"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Malta.jpg" height="300px" width="100%">
		  	           <p>"Malta"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Moldova.jpg" height="300px" width="100%">
		  	           <p>"Moldova"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Monaco.jpg" height="300px" width="100%">
		  	           <p>"Monaco"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Netherlands.jpg" height="300px" width="100%">
		  	           <p>"Netherlands"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Norway.jpg" height="300px" width="100%">
		  	           <p>"Norway"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/PolandPNG.png" height="300px" width="100%">
		  	           <p>"Poland"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Portugal.jpg" height="300px" width="100%">
		  	           <p>"Portugal"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Romania.jpg" height="300px" width="100%">
		  	           <p>"Romania"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Russia.jpg" height="300px" width="100%">
		  	           <p>"Russia"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/SerbiaPNG.png" height="300px" width="100%">
		  	           <p>"Serbia"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/SlovakiaPNG.png" height="300px" width="100%">
		  	           <p>"Slovakia"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/SloveniaPNG.png" height="300px" width="100%">
		  	           <p>"Slovenia"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/SpainPNG.png" height="300px" width="100%">
		  	           <p>"Spain"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/SwedenPNG.png" height="300px" width="100%">
		  	           <p>"Sweden"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/TurkeyPNG.png" height="300px" width="100%">
		  	           <p>"Turkey"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/UK.jpg" height="300px" width="100%">
		  	           <p>"UK"</p> 
		            </div>
		            <div class="frame">
		  	           <img src="Pictures/Countries/Ukraine.jpg" height="300px" width="100%">
		  	           <p>"Ukraine"</p> 
		            </div>
		           </div>`
	}
});



/*app.controller('DivController', ['$scope', function($scope){
}])*/
