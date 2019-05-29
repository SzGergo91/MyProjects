let $globalStepper="";
let $globalInputValue="";
let $globalResult=0;
let $operatorActive=false;
let $operatorvalue="";

$(document).ready(()=>{
	$('.buttons').on('mousedown',event=>{
		$(event.currentTarget).css({
			width: "96px",
			paddingBottom: "106px",
			top: "-18px",
			left: "-3px",
			backgroundColor: "black",
			color: "white",
		})

	})
	$('.buttons').on('mouseup',event=>{
		$(event.currentTarget).css({
			width: "90px",
			paddingBottom: "100px",
			top: "-15px",
			left: "0px",
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
			width: "106px",
			backgroundColor :"black",
			color: "white",
			top:"851px",
			left:"527px",
		})
	})
	$('#Ac').on('mouseup',()=>{
		$('#Ac').css({
			width: "100px",
			backgroundColor :"red",
			color: "white",
			top:"854px",
			left:"530px",
		})
	})

		//Set the Buttons 
	$('#0').on('click',()=>{
		$globalInputValue="0";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
	})
	$('#1').on('click',()=>{
		$globalInputValue="1";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
	})
	$('#2').on('click',()=>{
		$globalInputValue="2";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
	})
	$('#3').on('click',()=>{
		$globalInputValue="3";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
	})
	$('#4').on('click',()=>{
		$globalInputValue="4";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
	})
	$('#5').on('click',()=>{
		$globalInputValue="5";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
	})
	$('#6').on('click',()=>{
		$globalInputValue="6";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
	})
	$('#7').on('click',()=>{
		$globalInputValue="7";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
	})
	$('#8').on('click',()=>{
		$globalInputValue="8";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
	})
	$('#9').on('click',()=>{
		$globalInputValue="9";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
	})

	//Setting the Operators
	$('#Ac').on('click',()=>{
		$globalStepper="";
		$globalInputValue="";
		$globalResult=0;
		$operatorActive=false;
		$('#Input').val(null);
		$('#Result').html("0");
	})

	$('#Equal').on('click',()=>{
		if(!$operatorActive){
			$globalResult=Number($('#Input').val());
			$('#Result').html(`${$globalResult}`);
			$operatorActive=false;
		}
		else {
			switch($operatorvalue){
				case "+" :
					$globalResult+=Number($('#Input').val());
					$('#Result').html(`${$globalResult}`);
					$operatorActive=false;
					break;
				case "-":
					$globalResult-=Number($('#Input').val());
					$('#Result').html(`${$globalResult}`);
					$operatorActive=false;
					break;
			}
					Number($('#Input').val(`${globalResult}`));
					$globalStepper=0;
		}
	})

	$('#plus').on('click',()=>{
		if($operatorActive){
			$globalResult+=Number($('#Input').val());
			$('#Result').html(`${$globalResult}`);
			$globalStepper="";
			Number($('#Input').val(null));
		}
		else
		{
		$globalResult=Number($('#Input').val());
		$('#Result').html(`${$globalResult}`);
		$globalStepper="";
		Number($('#Input').val(null));
		$operatorActive=true;
		$operatorvalue="+";
		}
	})

	$('#minus').on('click',()=>{
		if($operatorActive){
			$globalResult-=Number($('#Input').val());
			$('#Result').html(`${$globalResult}`);
			$globalStepper="";
			Number($('#Input').val(null));
		}
		else
		{
		$globalResult=Number($('#Input').val());
		$('#Result').html(`${$globalResult}`);
		$globalStepper="";
		Number($('#Input').val(null));
		$operatorActive=true;
		$operatorvalue="-";
		}
	})

})