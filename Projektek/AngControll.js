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
		           </div>`
	}
});



/*app.controller('DivController', ['$scope', function($scope){
	$scope.Pictures=[
		{
		image: "Pictures/Countries/Albania.jpg",
		name:  "Albania",
		image2: "Pictures/Countries/Andorra.jpg",
		name2:  "Andorra",
		image3: "Pictures/Countries/ArmeniaPNG.png",
		name3:  "Armenia",
		},
		{
		image: "Pictures/Countries/AustriaPNG.png",
		name:  "Austria",
		image2: "Pictures/Countries/Belarus.jpg",
		name2:  "Belarus",
		image3: "Pictures/Countries/BulgariaPNG.png",
		name3:  "Bulgaria",
		},
		{
		image: "Pictures/Countries/Croatia.jpg",
		name:  "Croatia",
		image2: "Pictures/Countries/Cyprus.jpg",
		name2:  "Cyprus",
		image3: "Pictures/Countries/Czech.jpg",
		name3:  "Czech",
		},
		{
		image: "Pictures/Countries/DenmarkPNG.png",
		name:  "Denmark",
		image2: "Pictures/Countries/Estonia.jpg",
		name2:  "Estonia",
		image3: "Pictures/Countries/Finland.jpg",
		name3:  "Finland",
		},
		{
		image: "Pictures/Countries/FrancePNG.png",
		name:  "France",
		image2: "Pictures/Countries/Georgia.jpg",
		name2:  "Georgia",
		image3: "Pictures/Countries/GermanyPNG.png",
		name3:  "Germany",
		},
		{
		image: "Pictures/Countries/Greece.jpg",
		name:  "Greece",
		image2: "Pictures/Countries/Hungary.jpg",
		name2:  "Hungary",
		image3: "Pictures/Countries/Iceland.jpg",
		name3:  "Iceland",
		},
		{
		image: "Pictures/Countries/Ireland.jpg",
		name:  "Ireland",
		image2: "Pictures/Countries/Italy.jpg",
		name2:  "Italy",
		image3: "Pictures/Countries/Kazakhstan.jpg",
		name3:  "Kazakhstan",
		},
		{
		image: "Pictures/Countries/Kosovo.jpg",
		name:  "Kosovo",
		image2: "Pictures/Countries/Latvia.jpg",
		name2:  "Latvia",
		image3: "Pictures/Countries/LithuaniaPNG.png",
		name3:  "Lithuania",
		},
		{
		image: "Pictures/Countries/Luxembourg.jpg",
		name:  "Luxembourg",
		image2: "Pictures/Countries/Malta.jpg",
		name2:  "Malta",
		image3: "Pictures/Countries/Moldova.jpg",
		name3:  "Moldova",
		},
		{
		image: "Pictures/Countries/Monaco.jpg",
		name:  "Monaco",
		image2: "Pictures/Countries/Netherlands.jpg",
		name2:  "Netherlands",
		image3: "Pictures/Countries/Norway.jpg",
		name3:  "Norway",
		},
		{
		image: "Pictures/Countries/PolandPNG.png",
		name:  "Poland",
		image2: "Pictures/Countries/Portugal.jpg",
		name2:  "Portugal",
		image3: "Pictures/Countries/Romania.jpg",
		name3:  "Romania",
		},
		{
		image: "Pictures/Countries/Russia.jpg",
		name:  "Russia",
		image2: "Pictures/Countries/SerbiaPNG.png",
		name2:  "Serbia",
		image3: "Pictures/Countries/SlovakiaPNG.png",
		name3:  "Slovakia",
		},
		{
		image: "Pictures/Countries/SloveniaPNG.png",
		name:  "Slovenia",
		image2: "Pictures/Countries/SpainPNG.png",
		name2:  "Spain",
		image3: "Pictures/Countries/SwedenPNG.png",
		name3:  "Sweden",
		},
		{
		image: "Pictures/Countries/TurkeyPNG.png",
		name:  "Turkey",
		image2: "Pictures/Countries/UK.jpg",
		name2:  "UK",
		image3: "Pictures/Countries/Ukraine.jpg",
		name3:  "Ukraine",
		},

	];
}])*/
