//Media Queries variables
let $globalwidth=screen.width;
let $globaltop=0;
//Arrowimage Variables
let $globalArrows=["Pictures/ArrowDown.png","Pictures/ArrowLeft.png"];
let $globalArrow1=0;

//EndRoad Animals
let $globalAnimals=["Pictures/Lion.png","Pictures/Wolf.png","Pictures/Bear.png","Pictures/Cobra.png","Pictures/Woman.png",
					"Pictures/Bird.png","Pictures/Jason.png","Pictures/Shaggy&Scooby.gif"];
let $globalclicks=0;
let $globalvalidate=true;

//FigureImage Variables
let $globalPicturePath=["Pictures/EmberiAlak.jpg","Pictures/EmberiAlak2.jpg","Pictures/EmberiAlak3.jpg"];
let $globalSteper1=0;

//TimeConverter Variables
let $globalSeconds=0;
let $globalCounter1=0;
let $globalCounterForSeason=0;
let $globalbool1=true;
let $globalarray=["Sec","Min","Hour","Day","Week","Mounth","Sobeksec","Year","Decade","Generation","Century","Millenium","Sobekday"];

//Filter
let $globalbgimg=["Pictures/OtherPics/FilterBG1.jpg","Pictures/OtherPics/FilterBG2.jpg","Pictures/OtherPics/FilterBG3.jpg"];


$(document).ready(()=>{
		//Menu settings
		$('li').on('mouseenter',event=>{
			if(($globalwidth>=320) && ($globalwidth<=480))
			{
			  $(event.currentTarget).css({
					backgroundColor: 'black',
					color: 'white',
					fontSize: '4.6vw',
				//cursor: 'pointer'
			  })
			}
			else
			{
			  if(($globalwidth>=481) && ($globalwidth<=767))
			  {
			  	$(event.currentTarget).css({
					backgroundColor: 'black',
					color: 'white',
					fontSize: '3.3vw',
				//cursor: 'pointer'
			  	})
			  }
			  else
			  {
			  	if(($globalwidth>=768) && ($globalwidth<=1024))
			  	{
			  		$(event.currentTarget).css({
					backgroundColor: 'black',
					color: 'white',
					fontSize: '3.3vw',
					//cursor: 'pointer'
			  		})
			  	}
			  	else
			  	{
			  	if(($globalwidth>=1025) && ($globalwidth<=1280))
			  	{
			  		$(event.currentTarget).css({
					backgroundColor: 'black',
					color: 'white',
					fontSize: '3.3vw',
					//cursor: 'pointer'
			  		})
			  	}
			  	else
			  	{
			  	$(event.currentTarget).css({
					backgroundColor: 'black',
					color: 'white',
					fontSize: '3.3vw',
					//cursor: 'pointer'
			    })
			  	}
			    }
			  }
			}
		})


		$('li').on('mouseleave',event=>{
			if(($globalwidth>=320) && ($globalwidth<=480))
			{
			  	$(event.currentTarget).css({
					backgroundColor: 'white',
					color: 'black',
					fontSize: '4.5vw',

			  })
			}
			else
			{
			  if(($globalwidth>=481) && ($globalwidth<=767))
			  {
			  	  $(event.currentTarget).css({
				  	backgroundColor: 'white',
				 	color: 'black',
				  	fontSize: '3.1vw',

			    })
			  }
			  else
			  {
			  	if(($globalwidth>=768) && ($globalwidth<=1024))
			  	{
			  		$(event.currentTarget).css({
				  	backgroundColor: 'white',
				 	color: 'black',
				  	fontSize: '3.1vw',

			   	 })
			  	}
			  	else
			  	{
			  		if(($globalwidth>=1025) && ($globalwidth<=1280))
			  		{
			  			$(event.currentTarget).css({
						backgroundColor: 'black',
						color: 'white',
						fontSize: '3.1vw',
						//cursor: 'pointer'
			  			})
			  		}
			  	else
			  	  {
			  		$(event.currentTarget).css({
						backgroundColor: 'white',
						color: 'black',
						fontSize: '3.1vw',

			 	 	})
				  }
			  	}
			  }
			}
		})

		//Setting the content of the menu!
			if(($globalwidth>=320) && ($globalwidth<=480)){
				$('#tartalom ').css({
					top: `${28+(screen.width-320)*0.025}vw`,
				})
			}

			if($globalwidth>=1281){
				
			}

		$('#bgimg1').on('click',()=>{
			$('#tartalom').slideToggle('slow');
			$('#helpdiv1').fadeToggle('slow');
			$globalArrow1+=1;
			if($globalArrow1>1){
				$globalArrow1=0;
			}
			$('#bgimg1').css({
				backgroundImage: `url('${$globalArrows[$globalArrow1]}')`
			})
		})


		//Road-end settings


		$('#EOR').on('mouseenter',()=>{
			$('#EOR').css({
				opacity: "0.35",
				backgroundColor: "transparent",
				cursor: 'pointer'
			})
		})
	



		$('#EOR').on('mouseleave',()=>{
			if($globalvalidate)
			{
			  //MediaQuery for 320px-480px!Mobiles,Iphones etc.
			  if(($globalwidth>=320) && ($globalwidth<=480))
			  {
				$('#EOR').css({
					opacity: "0.25",
					backgroundColor: "green",
					backgroundImage: "none",
					top:'44vw',
					left: '42%',
					width: '15%',
					height: '15vw'
			    })
			    $('#EORimg').fadeOut(1000);
				$('#EORimg').css({
					top: '0px',
					left: '0px',
					width: '15vw',
					height: '15vw',
				})
				$('#EORimg').attr('src',`Pictures/Erdo.jpg`)
				$globalclicks=0;

			  }
			else
			{
				//MediaQuery for Width (481-767px) Low Resolution tablets, Mobiles(Landscape)
			  	if(($globalwidth>=481) && ($globalwidth<=767))
			  	{
					$('#EOR').css({
						opacity: "0.25",
						backgroundColor: "green",
						backgroundImage: "none",
						top:'44vw',
						left: '42%',
						width: '15%',
						height: '15vw'
			    	})
			   	    $('#EORimg').fadeOut(1000);
					$('#EORimg').css({
						top: '0px',
						left: '0px',
						width: '15vw',
						height: '15vw',
					})
					$('#EORimg').attr('src',`Pictures/Erdo.jpg`)
					$globalclicks=0;
			  	}

			  	//MediaQuery for Width (1281px+) Desktops!
			  	else
			  	{
			  		if(($globalwidth>=768) && ($globalwidth<=1024))
			  		{
			  			$('#EOR').css({
						opacity: "0.25",
						backgroundColor: "green",
						backgroundImage: "none",
						top:'44vw',
						left: '42%',
						width: '15%',
						height: '15vw'
			    	})
			   	    $('#EORimg').fadeOut(1000);
					$('#EORimg').css({
						top: '0px',
						left: '0px',
						width: '15vw',
						height: '15vw',
					})
					$('#EORimg').attr('src',`Pictures/Erdo.jpg`)
					$globalclicks=0;
			  		}


			  		else
			  		{
			  			if(($globalwidth>=1025) && ($globalwidth<=1280))
			  			{

			  			$('#EOR').css({
							opacity: "0.25",
							backgroundColor: "green",
							backgroundImage: "none",
							top:'44vw',
							left: '42%',
							width: '15%',
							height: '15vw'
						})
						$('#EORimg').fadeOut(1000);
						$('#EORimg').css({
							top: '0px',
							left: '0px',
							width: '15vw',
							height: '15vw',
						})
						$('#EORimg').attr('src',`Pictures/Erdo.jpg`)
						$globalclicks=0;

			  			}
			  			else
			  			{

						$('#EOR').css({
							opacity: "0.25",
							backgroundColor: "green",
							backgroundImage: "none",
							top:'44vw',
							left: '42%',
							width: '15%',
							height: '200px'
						})
						$('#EORimg').fadeOut(1000);
						$('#EORimg').css({
							top: '0px',
							left: '0px',
							width: '15vw',
							height: '15vw',
						})
						$('#EORimg').attr('src',`Pictures/Erdo.jpg`)
						$globalclicks=0;
						}
					}
				}
			}
		   }
		})



		$('#EOR').on('click',()=>{
			if($globalclicks===0){
				$globalclicks+=1;
				$globalvalidate=false;
			$('#EOR').css({
				opacity: "1",
				backgroundColor: "transparent",
				cursor: 'pointer'
			})
			if(($globalwidth>=320) && ($globalwidth<=480))
			{
				$('#EORimg').fadeIn(2000, ()=>{
				  $('#EOR').css({
					backgroundImage : `url('Pictures/ForestEnd.jpg')`,
					backgroundSize: `40vw 35vw`

				  })
				  $('#EORimg').hide();
				  $('#EORimg').attr('src',`${$globalAnimals[Math.floor(Math.random()*8)]}`);
				  $('#EOR').animate({
					  top: '30vw',
					  left: '30%',
					  width: '40%',
					  height: '35vw',
				  },1500, ()=>{
					  $('#EORimg').show();
					  $('#EORimg').css({
					  	  position: 'relative',
						  top: '20vw',
						  left: '12vw',
						  width: '20px',
						  height: '20px'
					  })
					
					  $globalvalidate=true;
				  })

			});
			}
			  //MediaQuery for Width (1281px+) Desktops!
			  else
			  {
			  	if(($globalwidth>=481) && ($globalwidth<=767))
			  	{
			  	  $('#EORimg').fadeIn(2000, ()=>{
				  $('#EOR').css({
					backgroundImage : `url('Pictures/ForestEnd.jpg')`,
					backgroundSize: `40vw 35vw`

				  })
				  $('#EORimg').hide();
				  $('#EORimg').attr('src',`${$globalAnimals[Math.floor(Math.random()*8)]}`);
				  $('#EOR').animate({
					  top: '30vw',
					  left: '30%',
					  width: '40%',
					  height: '35vw',
				  },1500, ()=>{
					  $('#EORimg').show();
					  $('#EORimg').css({
					  	  position: 'relative',
						  top: '20vw',
						  left: '12vw',
						  width: '5vw',
						  height: '5vw'
					  })
					
					  $globalvalidate=true;
				  })

				});
			  	}
			  	else
			  	{
			  		if(($globalwidth>=768) && ($globalwidth<=1024))
			  		{
			  		  $('#EORimg').fadeIn(2000, ()=>{
				 	  $('#EOR').css({
							backgroundImage : `url('Pictures/ForestEnd.jpg')`,
							backgroundSize: `40vw 35vw`

				 	 })
				 	 $('#EORimg').hide();
				 	 $('#EORimg').attr('src',`${$globalAnimals[Math.floor(Math.random()*8)]}`);
				     $('#EOR').animate({
						  top: '30vw',
						  left: '30%',
						  width: '40%',
						  height: '35vw',
				 	 },1500, ()=>{
						  $('#EORimg').show();
					 	  $('#EORimg').css({
					  		  position: 'relative',
							  top: '20vw',
						 	  left: '12vw',
							  width: '5vw',
						 	  height: '5vw'
					  })
					
					 	 $globalvalidate=true;
				  	})

					});
			  		}
			  		else
			  		{
			  				if(($globalwidth>=1025) && ($globalwidth<=1280))
			  				{
			  					$('#EORimg').fadeIn(2000, ()=>{
				 	  	 		   $('#EOR').css({
							       backgroundImage : `url('Pictures/ForestEnd.jpg')`,
							       backgroundSize: `40vw 35vw`

				 			 })
				 	 			$('#EORimg').hide();
				 	 			$('#EORimg').attr('src',`${$globalAnimals[Math.floor(Math.random()*8)]}`);
				     			$('#EOR').animate({
						 			 top: '30vw',
						  			 left: '30%',
						  			 width: '40%',
						  			 height: '35vw',
				 			 },1500, ()=>{
						 		 $('#EORimg').show();
					 	  		 $('#EORimg').css({
					  		 		 position: 'relative',
							 		 top: '20vw',
						 	 		 left: '12vw',
							  		 width: '5vw',
						 	  		 height: '5vw'
					 			 })
					
					 		 	$globalvalidate=true;
				  				})

								});
			  				}
			  				else
			  				{
			   		 		$('#EORimg').fadeIn(2000, ()=>{
				 				 $('#EOR').css({
						 		backgroundImage : `url('Pictures/ForestEnd.jpg')`

				  				})
				  				$('#EORimg').hide();
				  				$('#EORimg').attr('src',`${$globalAnimals[Math.floor(Math.random()*8)]}`);
				  				$('#EOR').animate({
					 				 top: '30vw',
					 				 left: '30%',
					 				 width: '40%',
					 				 height: '35vw',
				 				 },1500, ()=>{
					  				$('#EORimg').show();
					 	  		    $('#EORimg').css({
					  	 				 position: 'relative',
						 				 top: '20vw',
						 				 left: '12vw',
						 				 width: '5vw',
						 		 		 height: '5vw'
					 				 })
					
					 				 $globalvalidate=true;
				  				})

								});
			   		 		}
			   			
			   		}
				}
			}
			}

			else {
				$globalclicks=0;
				$globalvalidate=true;
				location.reload();
			}
		});


		//Picture Settings(About me!)!
		$('#Kepek').on('mouseenter',()=>{
			$('#Kepek').children().fadeToggle(1000);
			$('#Kepek').children().css({
				cursor : "pointer",
			})
		})
		$('#Kepek').on('mouseleave',()=>{
			$('#Kepek').children().fadeToggle(1500);
		})

		$('#left').on('click',()=>{
				if($globalSteper1 > 2){
					$globalSteper1-=1;
				}
				if($globalSteper1 === 0){
					$globalSteper1=3;
				}
				$globalSteper1-=1;
				$('#Kepek').css({
					backgroundImage : `url('${$globalPicturePath[$globalSteper1]}')`,
				})
				

		})
		$('#right').on('click',()=>{
				if($globalSteper1 < 0){
					$globalSteper1+=1;
				}
				if($globalSteper1 === 2){
					$globalSteper1=-1;
				}
				$globalSteper1+=1;
				$('#Kepek').css({
					backgroundImage : `url('${$globalPicturePath[$globalSteper1]}')`,
				})

		})




		//1. Calculator
			//A) Settings
			for(let i=0;i<document.getElementsByClassName("calculator").length;i++)
			{
				  let a=window.getComputedStyle(document.getElementsByClassName("calculator")[i]).getPropertyValue('top');
				  $globaltop=Number(a.substr(0,a.length-2))*100/$globalwidth;

				if(($globalwidth>=481) && ($globalwidth<=767)){
					if(($globalwidth>=481) && ($globalwidth<=624)){
						document.getElementsByClassName("calculator")[i].style.top=`${$globaltop+(624-screen.width)*0.0084}vw`
					}
					else {
						document.getElementsByClassName("calculator")[i].style.top=`${$globaltop-(screen.width-624)*0.0105}vw`
					}
				}
				if(($globalwidth>=768) && ($globalwidth<=1024)){
					document.getElementsByClassName("calculator")[i].style.top=`${$globaltop-(screen.width-768)*0.0043}vw`
				}
			}
			

				

			//B) The 0 on the calculator!
			$('#ACButton').on('click',()=>{
				if(($globalwidth>=481) && ($globalwidth<=767)){
					//I. Part 1(2vw less diff diff=0.014vw/px)
					if(($globalwidth>=481) && ($globalwidth<=624)){
						$('#AC0').css({
							top: `${303.8-(screen.width-481)*0.014}vw`,

						})
					}
					//part 2 (1.5vw less diff! diff=0.0105)
					else 
					{
						$('#AC0').css({
							top: `${301.8-(screen.width-624)*0.0104}vw`,
						})
					}
				}
				else{
					if(($globalwidth>=768) && ($globalwidth<=1024)){
						//768 196.5vw 1024 195.3vw (0.005vw/px)
						$('#AC0').css({
							top: `${196.5-(screen.width-768)*0.005}vw`,
						})

					}
					else
					{
						if(($globalwidth>=1025) && ($globalwidth<=1280)){
							$('#AC0').css({
								top: `${195-(screen.width-1025)*0.002}vw`,
							})
						}
						else
						{
							if($globalwidth>=1281)
							{
							$('#AC0').css({
							top: "195vw",
							left: "39vw",
							})
							}
						}
					}
				}
				
				$('#AC0').fadeToggle(1000);
				
			})







		//2. Time Converter!

			

			//A I start the labels first!
		setInterval(function(){

			if($globalbool1){
				if($globalSeconds===28){
					$globalbool1=false;
				}

				if($globalSeconds===14){
					$globalSeconds+=1;
				}

				$globalSeconds+=1;
				$globalCounter1+=1;
				$('#TCsec').html(`${$globalSeconds} Sec`)
			}
			else {
				if($globalCounter1<31){
				$globalCounter1+=1;
				}
				else
				{
					$globalCounter1=-1;
					$globalbool1=true;
					$globalSeconds=-1;
				}
			}	
		},1000)

		setInterval(function(){
			$globalCounterForSeason+=0.25;
			$('#TCseason').html(`${$globalCounterForSeason} Years`)
		},4000)

		setInterval(function(){
			let a=Math.floor(Math.random()*13);
			let b=Math.floor(Math.random()*13);
			if(a === b){
				if(a === 0){
					b=Math.floor(Math.random()*12)+1;
				}
				else {
					if(a === 12){
						b=Math.floor(Math.random()*12);
					}
					else{
						return;
					}
				}
			}
			$('#TCcomercial').html(`${$globalarray[a]} to ${$globalarray[b]}s`); 
		},2000)

		$('#TimeConverterDiv').on('mouseleave',()=>{
			$('#TimeConverterDiv').children().show();
		})




		//3. Universe 
			//A) Setting the sizes!
			if(($globalwidth>=481) && ($globalwidth<=767)){
				//
				if(($globalwidth>=481) && ($globalwidth<=624))
				{
					$('#UniverseTemperatureText').css({
						top: `${24+(screen.width-481)*0.014}vw`,
					})
					$('#UniverseSunSun').css({
						top: `${625.5+(screen.width-481)*0.014}vw`,
					})
					$('#UniverseTemperature').css({
						top: `${28+(screen.width-481)*0.014}vw`,
						left: `${40+(screen.width-481)*0.0021}vw`
					})
				}
				else{
					$('#UniverseTemperatureText').css({
						top: `${26+(screen.width-624)*0.007}vw`,
					})
					$('#UniverseSunSun').css({
						top: `${627.5+(screen.width-624)*0.007}vw`,
					})
					$('#UniverseTemperature').css({
						top: `${30+(screen.width-624)*0.007}vw`,
						left: `${40.3+(screen.width-624)*0.0021}vw`
					})
				}
				
			}
			else {
				if(($globalwidth>=768) && ($globalwidth<=1024)){
					$('#UniverseTemperature').css({
						top: `${17+(screen.width-768)*0.0039}vw`
					})
				}
			}



		//4. Filter!(With DOM!)
		$('#DivFilter').css({
			background: `url('${$globalbgimg[Math.floor(Math.random()*3)]}') center fixed`,
			backgroundSize: 'cover',
		})

		$('#FSearch').on('input',()=>{
			let elements=document.getElementsByClassName('frame');
			if($('#FSearch').val().length!=0)
			{
				for(let i=0;i<elements.length;i++)
				{
					let CountryNames=elements[i].getElementsByTagName('p')[0].innerHTML.slice(1,elements[i].getElementsByTagName('p')[0].innerHTML.length-1);
					let Lowercase=$('#FSearch').val().toLowerCase();
					let InputCapitalize=Lowercase.charAt(0).toUpperCase()+Lowercase.slice(1);
					if(CountryNames.startsWith(InputCapitalize)){
							elements[i].style.display="inline-block";
					}
					else {
						elements[i].style.display="none";
					}		

				}
				
			}
			else {
				for(let i=0;i<elements.length;i++)
				{
				elements[i].style.display="inline-block";
				}
			}
		})

});					



	