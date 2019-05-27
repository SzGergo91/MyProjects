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
let $globalarray=["Sec","Min","Hour","Day","Week","Mounth","Sobeksec","Year","Decade","Generation","Century","Millenium","Sobekday"]

$(document).ready(()=>{
		//Menu settings
		$('li').on('mouseenter',event=>{
			$(event.currentTarget).css({
				backgroundColor: 'black',
				color: 'white',
				fontSize: '32px',
				//cursor: 'pointer'
			})
		})
		$('li').on('mouseleave',event=>{
			$(event.currentTarget).css({
				backgroundColor: 'white',
				color: 'black',
				fontSize: '30px',

			})
		})
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
			$('#EOR').css({
				opacity: "0.25",
				backgroundColor: "green",
				backgroundImage: "none",
				top:'550px',
				left: '550px',
				width: '200px',
				height: '200px'
			})
			$('#EORimg').fadeOut(1000);
			$('#EORimg').css({
				top: '0px',
				left: '0px',
				width: '200px',
				height: '200px',
			})
			$('#EORimg').attr('src',`Pictures/Erdo.jpg`)
			$globalclicks=0;
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
			$('#EORimg').fadeIn(2000, ()=>{
				$('#EOR').css({
					backgroundImage : `url('Pictures/ForestEnd.jpg')`

				})
				$('#EORimg').hide();
				$('#EORimg').attr('src',`${$globalAnimals[Math.floor(Math.random()*8)]}`);
				$('#EOR').animate({
					top: '350px',
					left: '350px',
					width: '550px',
					height: '550px',
				},1500, ()=>{
					$('#EORimg').show();
					$('#EORimg').css({
						position: 'relative',
						top: '275px',
						left: '180px',
						width: '50px',
						height: '50px'
					})
					
					$globalvalidate=true;
				})

			});
			}
			else {
				$globalclicks=0;
				$globalvalidate=true;
				location.reload();
			}
		})


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
			$('#ACButton').on('click',()=>{
				$('#AC0').fadeToggle(1000);
			})




		//2. Time Converter!
		//We start the labels first!
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

		$('#TCAction').on('click',()=>{
			$('#TimeConverterDiv').children().hide();
		})




		//4. Filter!
		$('#FSearch').on('focus',()=>{
			$('#FSearch').animate(({
				width: "100%",
				backgroundColor: "green"
			})
			,2000)
		})

})