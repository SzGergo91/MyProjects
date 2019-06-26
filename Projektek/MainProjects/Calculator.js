//Zoom variables for buttons!
const $globalZoomWidth=window.getComputedStyle(document.getElementsByClassName("buttons")[0]).getPropertyValue('width');
const $globalZoomPaddingBottom=window.getComputedStyle(document.getElementsByClassName("buttons")[0]).getPropertyValue('padding-bottom');
const $globalZoomTop=window.getComputedStyle(document.getElementsByClassName("buttons")[0]).getPropertyValue('top');
const $globalZoomLeft=window.getComputedStyle(document.getElementsByClassName("buttons")[0]).getPropertyValue('left');
let $globalZoomNumberValues={
	ZoomWidth: 0,
	ZoomPaddingBottom: 0,
	ZoomTop: 0,
	ZoomLeft: 0
};
let $globalZoomButtonAc={
	AcWidth: 0,
	AcTop: 0,
	AcLeft: 0,
};

//Other Variable
const $globalWidth=screen.width;


//Calculator Variables
let $globalInputStepper="";
let $globalInputValue="";
let $globalOperatorCorrectness=true;
let $globalDotOperatorTimes=true;
let $globalArrayItems=[];
let $globalHelperStrings="";
let $globalOperatorPriority=0;




//Helper functions!
const transform=string=>{
		string=string.slice(0,string.length-2);
		string=Number(string)*100/screen.width;
		return string;
}




//The Main things!
$(document).ready(()=>{

	$globalZoomNumberValues.ZoomWidth=transform($globalZoomWidth);
	$globalZoomNumberValues.ZoomPaddingBottom=transform($globalZoomPaddingBottom);
	$globalZoomNumberValues.ZoomTop=transform($globalZoomTop);
	$globalZoomNumberValues.ZoomLeft=transform($globalZoomLeft);



	//A.Settings
	if(($globalWidth>=320) && ($globalWidth<=480)){
		$('#Ac').css({
			left: `${46.5-(screen.width-320)*0.0043}vw`
		})
		if(($globalWidth>=320) && ($globalWidth<400)){
			$('#CalculatorBrokenNeighbour').css({
				backgroundPosition: `25vw ${170-(screen.width-320)*0.425}vw`
			})
		}
		else{
			$('#CalculatorBrokenNeighbour').css({
				backgroundPosition: `25vw ${136-(screen.width-400)*0.375}vw`
			})
		}
	}


	//481px-767px
	if(($globalWidth>=481) && ($globalWidth<=767)){
		$('#CalculatorContainerDiv').css({
			height: `${81-(screen.width-481)*0.021}vw`
		});
			if(($globalWidth>=481) && ($globalWidth<624)){
				$('#Ac').css({
					left: `${40-(screen.width-481)*0.0035}vw`
				})
			}
			else
			{
				$('#Ac').css({
					left: `${39.5-(screen.width-624)*0.0021}vw`
				})
			}
	}

	$globalZoomButtonAc.AcWidth=transform(window.getComputedStyle(document.getElementById('Ac')).getPropertyValue('width'));
	$globalZoomButtonAc.AcTop=transform(window.getComputedStyle(document.getElementById('Ac')).getPropertyValue('top'));
	$globalZoomButtonAc.AcLeft=transform(window.getComputedStyle(document.getElementById('Ac')).getPropertyValue('left'));


	//B.Controll Buttons
	$('.buttons').on('mousedown',event=>{
		$(event.currentTarget).css({
			width: `${$globalZoomNumberValues.ZoomWidth*1.0606}vw`,
			paddingBottom: `${$globalZoomNumberValues.ZoomPaddingBottom*1.0601}vw`,
			top: `${$globalZoomNumberValues.ZoomTop*1.1909}vw`,
			left: `${$globalZoomNumberValues.ZoomLeft*(-2.2)}vw`,
			backgroundColor: "black",
			color: "white",
		})

	}).on('mouseleave',event=>{
		let a=$(event.currentTarget).html();
		if(a === "="){
			$(event.currentTarget).css({
			width: `${$globalZoomNumberValues.ZoomWidth}vw`,
			paddingBottom: `${$globalZoomNumberValues.ZoomPaddingBottom}vw`,
			top: `${$globalZoomNumberValues.ZoomTop}vw`,
			left: `${$globalZoomNumberValues.ZoomLeft}vw`,
			backgroundColor: "orange",
			color: "white",
		});
		}
		else
		{
		$(event.currentTarget).css({
			width: `${$globalZoomNumberValues.ZoomWidth}vw`,
			paddingBottom: `${$globalZoomNumberValues.ZoomPaddingBottom}vw`,
			top: `${$globalZoomNumberValues.ZoomTop}vw`,
			left: `${$globalZoomNumberValues.ZoomLeft}vw`,
			backgroundColor: "white",
			color: "black",
		});
		}
	})

	$('.buttons').on('mouseup',event=>{
		$(event.currentTarget).css({
			width: `${$globalZoomNumberValues.ZoomWidth}vw`,
			paddingBottom: `${$globalZoomNumberValues.ZoomPaddingBottom}vw`,
			top: `${$globalZoomNumberValues.ZoomTop}vw`,
			left: `${$globalZoomNumberValues.ZoomLeft}vw`,
			backgroundColor: "white",
			color: "black",
		})

	$('#Equal').on('mouseup',()=>{
		$('#Equal').css({
			backgroundColor :"orange",
			color: "white",
		})
	})	
	})


	$('#Ac').on('mousedown',()=>{
		$('#Ac').css({
			width: `${$globalZoomButtonAc.AcWidth*1.0601}vw`,
			backgroundColor :"black",
			color: "white",
			top:`${$globalZoomButtonAc.AcTop*0.997}vw`,
			left:`${$globalZoomButtonAc.AcLeft*0.995}vw`,
		})
	}).on('mouseleave',()=>{
		$('#Ac').css({
			width: `${$globalZoomButtonAc.AcWidth}vw`,
			backgroundColor :"red",
			color: "white",
			top:`${$globalZoomButtonAc.AcTop}vw`,
			left:`${$globalZoomButtonAc.AcLeft}vw`,
		})
	})

	$('#Ac').on('mouseup',()=>{
		$('#Ac').css({
			width: `${$globalZoomButtonAc.AcWidth}vw`,
			backgroundColor :"red",
			color: "white",
			top:`${$globalZoomButtonAc.AcTop}vw`,
			left:`${$globalZoomButtonAc.AcLeft}vw`,
		})
	})



	//C. The control of buttons!
		//1.Numbers!
	$('#C0').on('click',()=>{
		$globalInputStepper="0";
		$globalInputValue+=$globalInputStepper;
		$('#Input').val($globalInputValue);
		$globalInputStepper="";
		$globalOperatorCorrectness=true;
	})
	$('#C1').on('click',()=>{
		$globalInputStepper="1";
		$globalInputValue+=$globalInputStepper;
		$('#Input').val($globalInputValue);
		$globalInputStepper="";
		$globalOperatorCorrectness=true;
	})
	$('#C2').on('click',()=>{
		$globalInputStepper="2";
		$globalInputValue+=$globalInputStepper;
		$('#Input').val($globalInputValue);
		$globalInputStepper="";
		$globalOperatorCorrectness=true;
	})
	$('#C3').on('click',()=>{
		$globalInputStepper="3";
		$globalInputValue+=$globalInputStepper;
		$('#Input').val($globalInputValue);
		$globalInputStepper="";
		$globalOperatorCorrectness=true;
	})
	$('#C4').on('click',()=>{
		$globalInputStepper="4";
		$globalInputValue+=$globalInputStepper;
		$('#Input').val($globalInputValue);
		$globalInputStepper="";
		$globalOperatorCorrectness=true;
	})
	$('#C5').on('click',()=>{
		$globalInputStepper="5";
		$globalInputValue+=$globalInputStepper;
		$('#Input').val($globalInputValue);
		$globalInputStepper="";
		$globalOperatorCorrectness=true;
	})
	$('#C6').on('click',()=>{
		$globalInputStepper="6";
		$globalInputValue+=$globalInputStepper;
		$('#Input').val($globalInputValue);
		$globalInputStepper="";
		$globalOperatorCorrectness=true;
	})
	$('#C7').on('click',()=>{
		$globalInputStepper="7";
		$globalInputValue+=$globalInputStepper;
		$('#Input').val($globalInputValue);
		$globalInputStepper="";
		$globalOperatorCorrectness=true;
	})
	$('#C8').on('click',()=>{
		$globalInputStepper="8";
		$globalInputValue+=$globalInputStepper;
		$('#Input').val($globalInputValue);
		$globalInputStepper="";
		$globalOperatorCorrectness=true;
	})
	$('#C9').on('click',()=>{
		$globalInputStepper="9";
		$globalInputValue+=$globalInputStepper;
		$('#Input').val($globalInputValue);
		$globalInputStepper="";
		$globalOperatorCorrectness=true;
	})


	//Operators
	$('#dot').on('click',()=>{
		if (($globalOperatorCorrectness) && ($globalDotOperatorTimes))
		{
			$globalInputStepper=".";
			$globalInputValue+=$globalInputStepper;
			$('#Input').val($globalInputValue);
			$globalInputStepper="";
			$globalOperatorCorrectness=false;
			$globalDotOperatorTimes=false;
		}
	})

	$('#plus').on('click',()=>{
		if ($globalOperatorCorrectness)
		{
			$globalInputStepper="+";
			$globalInputValue+=$globalInputStepper;
			$('#Input').val($globalInputValue);
			$globalInputStepper="";
			$globalOperatorCorrectness=false;
			$globalDotOperatorTimes=true;
		}
	})

	$('#minus').on('click',()=>{
		if ($globalOperatorCorrectness)
		{
			$globalInputStepper="-";
			$globalInputValue+=$globalInputStepper;
			$('#Input').val($globalInputValue);
			$globalInputStepper="";
			$globalOperatorCorrectness=false;
			$globalDotOperatorTimes=true;
		}
	})

	$('#times').on('click',()=>{
		if ($globalOperatorCorrectness)
		{
			$globalInputStepper="*";
			$globalInputValue+=$globalInputStepper;
			$('#Input').val($globalInputValue);
			$globalInputStepper="";
			$globalOperatorCorrectness=false;
			$globalDotOperatorTimes=true;
		}
	})
	$('#division').on('click',()=>{
		if ($globalOperatorCorrectness)
		{
			$globalInputStepper="/";
			$globalInputValue+=$globalInputStepper;
			$('#Input').val($globalInputValue);
			$globalInputStepper="";
			$globalOperatorCorrectness=false;
			$globalDotOperatorTimes=true;
		}
	})

	$('#Equal').on('click',()=>{

		if($globalInputValue.length!==0){
		//Changeing our array a bit!
		for(let i=0;i<$globalInputValue.length;i++){
			let str=$globalInputValue.charAt(i);
			if((str!="+") && (str!="-") && (str!="*") && (str!="/")){
				$globalHelperStrings+=str;
			}
			else{
				//CheckingForHigherRankOperators 
				if((str==="*") || (str==='/')){
					$globalOperatorPriority=1;
				}

				$globalArrayItems.push(Number($globalHelperStrings));
				$globalArrayItems.push(str);
				$globalHelperStrings="";
				
			}
			if(i === $globalInputValue.length-1)
			{
				$globalArrayItems.push(Number($globalHelperStrings));
				$globalHelperStrings="";

			}
		}

		if($globalOperatorPriority === 1){
			let i=0;
			while (i<$globalArrayItems.length)
			{
				if(($globalArrayItems[i]=== "*") || ($globalArrayItems[i]==="/"))
				{
					switch($globalArrayItems[i]){
						case "*":
							let a=$globalArrayItems[i-1]*$globalArrayItems[i+1];
							$globalArrayItems.splice(i,1,a);
							$globalArrayItems.splice(i-1,1);
							$globalArrayItems.splice(i,1);
							i=-1;			
							break;
						case "/":
							let b=$globalArrayItems[i-1]/$globalArrayItems[i+1];
							$globalArrayItems.splice(i,1,b);
							$globalArrayItems.splice(i-1,1);
							$globalArrayItems.splice(i,1);	
							i=-1;	
							break;
					}
					i+=1;

				}
				else{
					i+=1;
				}
				
			}
			$globalOperatorPriority=0;		
		}

		if($globalOperatorPriority===0){
			let i=0;
			while (i<$globalArrayItems.length)
			{
				if(($globalArrayItems[i]=== "+") || ($globalArrayItems[i]==="-"))
				{
					switch($globalArrayItems[i]){
						case "+":
							let a=$globalArrayItems[i-1]+$globalArrayItems[i+1];
							$globalArrayItems.splice(i,1,a);
							$globalArrayItems.splice(i-1,1);
							$globalArrayItems.splice(i,1);
							i=-1;			
							break;
						case "-":
							let b=$globalArrayItems[i-1]-$globalArrayItems[i+1];
							$globalArrayItems.splice(i,1,b);
							$globalArrayItems.splice(i-1,1);
							$globalArrayItems.splice(i,1);	
							i=-1;	
							break;
					}
					i+=1;

				}
				else{
					i+=1;
				}
				
			}
		}

		if(isNaN($globalArrayItems[0])){
			$('#Result').html(`${$globalArrayItems[0]}`);
			$globalInputValue="";
		}
		else{	
			$('#Result').html(`${$globalArrayItems[0]}`);
			$globalInputValue=`${$globalArrayItems[0]}`;
		}


		$globalOperatorCorrectness=true;
		$globalDotOperatorTimes=true;
		$globalArrayItems=[];

	}
	})

	$('#Ac').on('click',()=>{
			$globalInputStepper="";
			$globalInputValue="";
			$globalOperatorCorrectness=true;
			$globalDotOperatorTimes=true;
			$globalArrayItems=[];
			$globalHelperStrings="";
			$globalOperatorPriority=0;
			$('#Result').html('0');
			$('#Input').val(null);
	})











})