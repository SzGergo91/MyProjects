let $globalchange=true;
//For a body id to make the colors different!
let $globalBG;
let $globalwidth=screen.width;

$(document).ready(()=>
	{


		//A.Settings(320px-480px)
		if(($globalwidth>=320)  && ($globalwidth<=480))
		{
			if(($globalwidth>=320)  && ($globalwidth<=400))
			{
				$('#tartalom').css({
					left: `${67.2-(screen.width-320)*0.015}vw`
				})
				$('#tartalom').children().css({
					right: `${12-(screen.width-320)*0.025}vw`
				})
			}
			else
			{
				$('#tartalom').css({
					left: `${66-(screen.width-400)*0.00625}vw`
				})
				$('#tartalom').children().css({
					right: `${10-(screen.width-400)*0.025}vw`
				})
			}
			
		}


		//(481px-767px)
		if(($globalwidth>=481)  && ($globalwidth<=767))
		{
			if(($globalwidth>=481)  && ($globalwidth<=624))
			{
				$('#tartalom').css({
					left: `${78.6-(screen.width-481)*0.0077}vw`
				})
				$('#tartalom').children().css({
					right: `${8-(screen.width-481)*0.0140}vw`
				})
			}
			else
			{
				$('#tartalom').css({
					left: `${77.7-(screen.width-624)*0.0042}vw`
				})
				$('#tartalom').children().css({
					right: `${6-(screen.width-624)*0.007}vw`
				})
			}
			
		}


		//(768px-1024px)
		if(($globalwidth>=768)  && ($globalwidth<=1024)){
			$('#tartalom').css({
					left: `${77.1-(screen.width-768)*0.0023}vw`
				})
				$('#tartalom').children().css({
					right: `${5-(screen.width-768)*0.00586}vw`
				})
		}



		//(1025px-1280px)
		if(($globalwidth>=1025)  && ($globalwidth<=1280)){
			$('#tartalom').css({
					left: `${76.4-(screen.width-1025)*0.0011}vw`
				})
				$('#tartalom').children().css({
					right: `${3.5-(screen.width-1025)*0.002}vw`
				})
		}

		//(1281px+)
		if($globalwidth>=1281){
			if(($globalwidth>=1281)  && ($globalwidth<=2100))
			{
				$('#tartalom').css({
					left: `${76-(screen.width-1281)*0.00061}vw`
				})
				$('#tartalom').children().css({
					right: `${2.2-(screen.width-1281)*0.000488}vw`
				})
			}
			else {
				if(($globalwidth>=2101)  && ($globalwidth<=3100))
				{	
					$('#tartalom').css({
					left: `${75.5-(screen.width-2101)*0.0003}vw`
					})

					$('#tartalom').children().css({
					right: `${1.8-(screen.width-2101)*0.0006}vw`
					})
				}
				else
				{
					$('#tartalom').css({
						left: `${75.2-(screen.width-2101)*0.0001}vw`
					})

					$('#tartalom').children().css({
						right: `${1.2-(screen.width-2101)*0.0004}vw`
					})
				}
			}

		}


		//B.Visibility for Other Projects(If Necessary)!
			$globalBG=document.getElementsByTagName('body')[0].style.background;
			$globalBG=$globalBG.slice(5);
				for(let i=0;i<$globalBG.length;i++)
				{
					if($globalBG.charAt(i)=== "."){
					$globalBG=$globalBG.slice(0,i);
					$globalBG=$globalBG.toLowerCase();
					break;
				}
			}

		//C. Basics
		$('#bgimg1').on('click',()=>{
			if($globalchange){
				if($globalBG === "universebg")
				{
					$('#bgimg1').css({
						backgroundColor: "white",
						color: "black",
					})
					$globalchange=false;
					$('#tartalom').slideToggle(500);
				}
				else
				{
					$('#bgimg1').css({
						backgroundColor: "black",
						color: "white",
					})
					$globalchange=false;
					$('#tartalom').slideToggle(500);
				}
			}
			else{
				if($globalBG === "universebg")
				{
					$('#tartalom').slideToggle(500,()=>{
						$('#bgimg1').css({
						backgroundColor: "transparent",
						color: "white",
					})

					$globalchange=true;
					});
				}
				else
				{
					$('#tartalom').slideToggle(500,()=>{
						$('#bgimg1').css({
						backgroundColor: "transparent",
						color: "black",
					})

					$globalchange=true;
					});
				}
			}
			
		})
});



//Tokeletes program visszateriti a hatterkep erteket mint string!


