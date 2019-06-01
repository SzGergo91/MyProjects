let $globalStepper="";
let $globalInputValue="";
let $globalResult=0;
let $globalOperators=false;

let $globalContainer=[];
let $globalpart1="";
let $globalpart2="";
let $globaleredmeny=0;
let $globalB="";
let $globalA=[];

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
		$globalOperators=false;
	})
	$('#1').on('click',()=>{
		$globalInputValue="1";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
		$globalOperators=false;
	})
	$('#2').on('click',()=>{
		$globalInputValue="2";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
		$globalOperators=false;
	})
	$('#3').on('click',()=>{
		$globalInputValue="3";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
		$globalOperators=false;
	})
	$('#4').on('click',()=>{
		$globalInputValue="4";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
		$globalOperators=false;
	})
	$('#5').on('click',()=>{
		$globalInputValue="5";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
		$globalOperators=false;
	})
	$('#6').on('click',()=>{
		$globalInputValue="6";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
		$globalOperators=false;
	})
	$('#7').on('click',()=>{
		$globalInputValue="7";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
		$globalOperators=false;
	})
	$('#8').on('click',()=>{
		$globalInputValue="8";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
		$globalOperators=false;
	})
	$('#9').on('click',()=>{
		$globalInputValue="9";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
		$globalOperators=false;
	})

	//Setting the Operators
	$('#plus').on('click',()=>{
		if(!$globalOperators)
		{
		$globalInputValue="+";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
		$globalOperators=true;
		}
	})
    $('#minus').on('click',()=>{
    	if(!$globalOperators)
    	{
		$globalInputValue="-";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
		$globalOperators=true;
		}
	})
	$('#times').on('click',()=>{
		if(!$globalOperators)
		{
		$globalInputValue="*";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
		$globalOperators=true;
		}
	})
	$('#division').on('click',()=>{
		if(!$globalOperators)
		{
		$globalInputValue="/";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
		$globalOperators=true;
		}
	})
	$('#dot').on('click',()=>{
		if(!$globalOperators)
		{
		$globalInputValue=".";
		$globalStepper+=$globalInputValue;
		$('#Input').val($globalStepper);
		$globalInputValue="";
		$globalOperators=true;
		}
	})

	$('#Ac').on('click',()=>
	{
		$globalStepper="";
		$globalInputValue="";
		$globalResult=0;
		$('#Input').val(null);
		$('#Result').html("0");
		$globalContainer=[];
		$globalpart1="";
		$globalpart2="";
		$globalB="";
		$globaleredmeny=0;
	})

	//Setting the Main

	//Ezt maskepp kell csialni! A karakterekbol allo tombot atkell alakitani u hogy szamok es operatorokbol alljanak!
	$('#Equal').on('click',()=>{
		if($globalStepper.length === 0){
			$('#Result').html("0");
		}
		else
		{
			for(let i=0;i<$globalStepper.length;i++)
			{
				let c=Number($globalStepper.charAt(i));
				if (isNaN(c))
				{
					$globalContainer.push($globalStepper.charAt(i));
				}
				else
				{
					$globalContainer.push(c);
				}
			}
					//Verifikalni hany . szerepel benne mert nem lehet osszeadni 2 tizedes szamot! 
					//Ahol van pont atalakitsuk szamma es ugy hasznaljuk!
					$globalStepper="";
					$globalInputValue="";
					$('#Input').val(null);


					//Atalakitsuk a tombot, U hogy csak teliszamok es ertekado operatorok legyenek(pontot kiveszem)
						for(let i=0;i<$globalContainer.length;i++)
						{
							if($globalContainer[i] === ".")
							{
								$globalpart2+=".";
								for(j=i;j<$globalContainer.length;j++)
								{
									if(typeof($globalContainer[j]) === "number")
									{
										$globalpart2+=$globalContainer[j];
									}
									else {
										break;
									}

									
								}
							}
							else
							{
							//Nem pont akkor hozzaadom
								if((typeof($globalContainer[i])!== "number") && ($globalContainer[i]!== "."))
								{
								//Eddig volt ertek a part2ben!
								//Azt hozza kell adjam az operatorral egyutt!
									$globalA.push(Number($globalpart2));
									$globalA.push($globalContainer[i]);
									$globalpart2="";
								}
								else {
									$globalpart2+=$globalContainer[i];
								}
							}

							
						}
						$globalA.push(Number($globalpart2));
						//Ha vege a muveleteknek akkor kiirjuk Mukodik tokeletesen!
						$globalContainer=$globalA;
						$globalA=[];
						$globalpart2="";


					for(let i=0;i<$globalContainer.length;i++)
					{
						//Mergeles
							//console.log($globalContainer[i]);
						if(typeof($globalContainer[i]) === "number")
						{
							//Megkell nezni hogy vege van-e az ertekeknek!if(!$globalContainer[i].length)
							if(i!==$globalContainer.length-1)
							{	
								$globalpart1+=$globalContainer[i];
							}
							else
							{
								$globalpart1+=$globalContainer[i];
								switch($globalB)
								{
									case "" :
										$globaleredmeny=Number($globalpart1);
										break;
									case "+": 
							  			$globaleredmeny=Number($globalpart2)+Number($globalpart1);
							  			break;
							  		case "-": 
							  			$globaleredmeny=Number($globalpart2)-Number($globalpart1);
							  			break;
							  		case "*": 
							  			$globaleredmeny=Number($globalpart2)*Number($globalpart1);
							  			break;
							  		case "/": 
							  			$globaleredmeny=Number($globalpart2)/Number($globalpart1);
							  			break;

								}
							}
						}

				
						else
						{
							if($globalB ==="")
							{
								//If its first operator and last operator!
								//A Containeres if mukodik!
								if(i === $globalContainer.length-1)
								{	
									$globaleredmeny=Number($globalpart1);	
								}
								//Ebbe az else agba nem lep bele!
								else
								{
									$globalB=$globalContainer[i];
									$globalpart2=$globalpart1;
									$globalpart1="";
								}
								
							}
							else
							  {
							  	//if its not the first operator but last!
							  	//Megcsinalni tombbel!
							  	if(i!==$globalContainer.length-1)
							  	{
							  	switch($globalB)
							  	{
							  		case "+": 
							  			$globaleredmeny=Number($globalpart2)+Number($globalpart1);
							  		break;
							  		case "-": 
							  			$globaleredmeny=Number($globalpart2)-Number($globalpart1);
							  		break;
							  		case "*": 
							  			$globaleredmeny=Number($globalpart2)*Number($globalpart1);
							  		break;
							  		case "/": 
							  			$globaleredmeny=Number($globalpart2)/Number($globalpart1);
							  		break;
							  	}

							  		$globalpart2=String($globaleredmeny);
							  		$globalpart1="";
							  		$globalB=$globalContainer[i];
							  	}


							}
						}
						
					}


					$globalContainer=[];
					$('#Result').html(`${$globaleredmeny}`);
					$('#Input').val(`${$globaleredmeny}`);
					$globalStepper=String($globaleredmeny);
					$globalpart1="";
					$globalpart2="";
					$globalB="";
					$globalInputValue="";
					
		}
	})











})