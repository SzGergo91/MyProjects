
let $globalExtras=0;
let $globalStringName="None";
let $globalString=`FilterBy: ${$globalStringName}`;
let $globalStringAttributes="";
let $globalStringSpecies="";


let $globalCurrentElementPositionContainer=[];
let $globalElementHelper=[];

let $globalDMG=0;
let $globalHealth=0;
let $globalName=0;

let $globalElementsDamage=[];
let $globalElementsHealth=[];

let $globalSpeciesTF=false;


//Sort methods

const descendingOrder=(str)=>{
				

				$globalElementsDamage=[];
				$globalElementsHealth=[];
				$globalElementsName=[];
				
				switch(str){
					case "Damage":
										//Push elements inside the array!!! Beletesszuk a pozicioszamot illetve az erteket is!
				let order={};						
				for(let i=0;i<$globalCurrentElementPositionContainer.length;i++){
					let object={
						name: `${document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].getElementsByClassName("BigFilterNames")[0].innerHTML}`,
						Position: `${$globalCurrentElementPositionContainer[i]}`,
						DamageValue: Number(document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].getElementsByClassName("dmg")[0].innerHTML),
					}
					$globalElementsDamage.push(object);

				}

				//Sort the pozition
				for(let i=0;i<$globalElementsDamage.length;i++){
					for(let j=i+1;j<$globalElementsDamage.length;j++){
						if($globalElementsDamage[i].DamageValue<$globalElementsDamage[j].DamageValue){
							order=$globalElementsDamage[j];
							$globalElementsDamage[j]=$globalElementsDamage[i];
							$globalElementsDamage[i]=order;
						}
					}
				}

				
				//Arranging the divs(Render)!
				for(let i=0;i<$globalElementsDamage.length;i++){

					let position=Number($globalElementsDamage[i].Position);
					document.getElementsByClassName("BigFilterDivset")[position].style.order=`${-$globalElementsDamage[i].DamageValue*100}`;
						
				//	console.log(-$globalElementsDamage[i].DamageValue);
				//	console.log(document.getElementsByClassName("BigFilterDivset")[position]);
				}
					
				break;

				case "Name":
				let order2={};
				let s=2;		
					for(let i=0;i<$globalCurrentElementPositionContainer.length;i++){
						let object={
							name: `${document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].getElementsByClassName("BigFilterNames")[0].innerHTML}`,
							position: $globalCurrentElementPositionContainer[i],
						}
						$globalElementsName.push(object);		
					}
					//Sort by name descending
					
					for(let i=0;i<$globalElementsName.length;i++){
						for(let j=i+1;j<$globalElementsName.length;j++){
							if($globalElementsName[i].name<$globalElementsName[j].name){
								order2=$globalElementsName[i];
								$globalElementsName[i]=$globalElementsName[j];
								$globalElementsName[j]=order2;

							}
						}
					}

					for(let i=0;i<$globalElementsName.length;i++){
						let position=$globalElementsName[i].position;
						document.getElementsByClassName("BigFilterDivset")[position].style.order=`${s}`;
						s+=1;
					}
					break;


				case "Health":
						let order3={}
						for(let i=0;i<$globalCurrentElementPositionContainer.length;i++){
							let object={
								Position: $globalCurrentElementPositionContainer[i],
								Health: document.getElementsByClassName('BigFilterDivset')[$globalCurrentElementPositionContainer[i]].getElementsByClassName("health")[0].innerHTML,
							}
							$globalElementsHealth.push(object);
						}

							for(let i=0;i<$globalElementsHealth.length;i++){
								for(let j=i+1;j<$globalElementsHealth.length;j++){
									if($globalElementsHealth[i].Health<$globalElementsHealth[j].Health){
										order3=$globalElementsHealth[i];
										$globalElementsHealth[i]=$globalElementsHealth[j];
										$globalElementsHealth[j]=order3;
									}
								}
							}

							for(let i=0;i<$globalElementsHealth.length;i++){
								let health=Number($globalElementsHealth[i].Health);
								let position=$globalElementsHealth[i].Position;
								document.getElementsByClassName('BigFilterDivset')[position].style.order=`${-health*100}`
								
							}
							break;
						
				}





					

		}

const ascendingOrder=(str)=>{
				let order={};
				$globalElementsDamage=[];
				$globalElementsHealth=[];
				$globalElementsName=[];
				
				//Push elements inside the array!!! Beletesszuk a pozicioszamot illetve az erteket is!
				switch(str){
					case "Damage" :
						for(let i=0;i<$globalCurrentElementPositionContainer.length;i++){
					let object={
						name: `${document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].getElementsByClassName("BigFilterNames")[0].innerHTML}`,
						Position: `${$globalCurrentElementPositionContainer[i]}`,
						DamageValue: Number(document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].getElementsByClassName("dmg")[0].innerHTML),
					}
					$globalElementsDamage.push(object);

				}

				//Sort the pozition
				for(let i=0;i<$globalElementsDamage.length;i++){
					for(let j=i+1;j<$globalElementsDamage.length;j++){
						if($globalElementsDamage[i].DamageValue<$globalElementsDamage[j].DamageValue){
							order=$globalElementsDamage[j];
							$globalElementsDamage[j]=$globalElementsDamage[i];
							$globalElementsDamage[i]=order;
						}
					}
				}
		
				//Arranging the divs(Render)!
				for(let i=0;i<$globalElementsDamage.length;i++){
					let position=Number($globalElementsDamage[i].Position);
					document.getElementsByClassName("BigFilterDivset")[position].style.order=`${$globalElementsDamage[i].DamageValue*100}`;
					//console.log(-$globalElementsDamage[i].DamageValue);
					//console.log(document.getElementsByClassName("BigFilterDivset")[position]);
				}
				break;

				case "Name":
				let order2={};
				let s=-2;		
					for(let i=0;i<$globalCurrentElementPositionContainer.length;i++){
						let object={
							name: `${document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].getElementsByClassName("BigFilterNames")[0].innerHTML}`,
							position: $globalCurrentElementPositionContainer[i],
						}
						$globalElementsName.push(object);		
					}
					//Sort by name descending
					
					for(let i=0;i<$globalElementsName.length;i++){
						for(let j=i+1;j<$globalElementsName.length;j++){
							if($globalElementsName[i].name<$globalElementsName[j].name){
								order2=$globalElementsName[i];
								$globalElementsName[i]=$globalElementsName[j];
								$globalElementsName[j]=order2;

							}
						}
					}

					for(let i=0;i<$globalElementsName.length;i++){
						let position=$globalElementsName[i].position;
						document.getElementsByClassName("BigFilterDivset")[position].style.order=`${s}`;
						s-=1;
					}
					break;

					case "Health":
						let order3={}
						for(let i=0;i<$globalCurrentElementPositionContainer.length;i++){
							let object={
								Position: $globalCurrentElementPositionContainer[i],
								Health: document.getElementsByClassName('BigFilterDivset')[$globalCurrentElementPositionContainer[i]].getElementsByClassName("health")[0].innerHTML,
							}
							$globalElementsHealth.push(object);
						}

							for(let i=0;i<$globalElementsHealth.length;i++){
								for(let j=i+1;j<$globalElementsHealth.length;j++){
									if($globalElementsHealth[i].Health<$globalElementsHealth[j].Health){
										order3=$globalElementsHealth[i];
										$globalElementsHealth[i]=$globalElementsHealth[j];
										$globalElementsHealth[j]=order3;
									}
								}
							}

							for(let i=0;i<$globalElementsHealth.length;i++){
								let health=Number($globalElementsHealth[i].Health);
								let position=$globalElementsHealth[i].Position;
								document.getElementsByClassName('BigFilterDivset')[position].style.order=`${health*100}`
								
							}
					break;


				}
				

			

}

//Ket reszre osztani!
//I. Elobb filter aztan animal!
//Mukodik!!!

//II. resz elobb animal aztan filter!
//Mukodik!!!


const groupSelection=(str)=>{
	$globalSpeciesTF=true;
	$globalElementHelper=[];
	switch(str){
		case ",Animals only":
			//console.log("ok");
			//for(let i=0;i<document.getElementsByClassName('BigFilterDivset').length;i++) 
			for(let i=0;i<$globalCurrentElementPositionContainer.length;i++){
				let species=document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].getElementsByClassName("species")[0].innerHTML;
					if(species === "Animals"){
						$globalElementHelper.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="inline-block";
					}
					else{
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="none";
					}
			}
			//kiiras
			$globalCurrentElementPositionContainer=$globalElementHelper;
			$globalElementHelper=[];
			break;

		case ",Creatures only":
			for(let i=0;i<$globalCurrentElementPositionContainer.length;i++){
				let species=document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].getElementsByClassName("species")[0].innerHTML;
					if(species === "Creature"){
						$globalElementHelper.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="inline-block";
					}
					else{
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="none";
					}
			}
			$globalCurrentElementPositionContainer=$globalElementHelper;
			$globalElementHelper=[];
			break;

	}

}



$(document).ready(()=>{

		//Basic settings for DOM

		for(let i=0;i<document.getElementsByClassName('BigFilterDivset').length;i++){
			$globalCurrentElementPositionContainer.push(i);
			
		}

		$('#BigFilterExtras').on('click',()=>{
			$('#BigFilterSelectionList').hide();
		if($globalExtras === 0){
			$('#BigFilterExtras').css({
				transform: "rotate(45deg)",
				transition: "1s",
			})
			$('#BigFilterFilterMenu').css({
				visibility: "visible",
			})
			$('#BigFilterFilterMenu').animate({
				left: "40px",
				opacity: "1",
			},500)
			$globalExtras=1;

		}
		else
		{
			$('#BigFilterExtras').css({
				transform: "rotate(0deg)",
				transition: "1s",
			})
			$('#BigFilterFilterMenu').css({
				visibility: "hidden",
			})
			$('#BigFilterFilterMenu').animate({
				left: "500px",
				opacity: "0",
			},500)
			$globalExtras=0;
		}
	})

	//Setting the Species MenuSlide!
	$('#BigFilterSpecies').children().on('click',()=>{
		$('#BigFilterSelectionList').slideToggle(1000);
	})

	//Setting the controllers


	//default (name)
	$('#BigFilterByName').on('click',()=>{
			$globalString="FilterBy: ";
			if($globalName === 0){
				$globalStringAttributes="Name-Ascending";
				$('#BigFilterFilterByLabel').html(`${$globalString}${$globalStringAttributes}${$globalStringSpecies}`);
				$globalDMG=0;
				$GlobalHealth=0;
				$('#BigFilterHealth').children().attr("src","Filter/Hearts.png");
				$('#BigFilterDMG').css({
				transform: "rotate(0deg)",
			})
			$globalName+=1;
			ascendingOrder("Name");
		}
		else{
				$globalStringAttributes="Name-Descending";
				$('#BigFilterFilterByLabel').html(`${$globalString}${$globalStringAttributes}${$globalStringSpecies}`);
				$globalDMG=0;
				$GlobalHealth=0;
				$('#BigFilterHealth').children().attr("src","Filter/Hearts.png");
				$('#BigFilterDMG').css({
				transform: "rotate(0deg)",
			})
			$globalName=0;
			descendingOrder("Name");	

		}
		

	})

	//Damage
	$('#BigFilterDMG').on('click',()=>{
		$globalHealth=0;
		$('#BigFilterHealth').children().attr("src","Filter/Hearts.png");
		$globalString="FilterBy: ";
		if($globalDMG ===0)
		{
			$globalStringAttributes="Damage-Descending";
			$('#BigFilterFilterByLabel').html(`${$globalString}${$globalStringAttributes}${$globalStringSpecies}`);
			$('#BigFilterDMG').css({
				transform: "rotate(0deg)",
			})
			$globalDMG=1;
			descendingOrder("Damage");
			
		}
		else{
			$globalStringAttributes="Damage-Ascending";
			$('#BigFilterFilterByLabel').html(`${$globalString}${$globalStringAttributes}${$globalStringSpecies}`);
			$('#BigFilterDMG').css({
				transform: "rotate(180deg)",
			})
			$globalDMG=0;
			ascendingOrder("Damage");
		}
	})

	//heath	
		$('#BigFilterHealth').on('click',()=>{
			$globalDMG=0;
			$('#BigFilterDMG').css({
				transform: "rotate(0deg)",
			})
			$globalString="FilterBy: ";

		if($globalHealth ===0)
		{
			$globalStringAttributes="Health-Descending";
			$('#BigFilterFilterByLabel').html(`${$globalString}${$globalStringAttributes}${$globalStringSpecies}`);
			$('#BigFilterHealth').children().attr("src","Filter/Hearts.png");
			$globalHealth=1;
			descendingOrder("Health");
		}
		else{
			$globalStringAttributes="Health-Ascending";
			$('#BigFilterFilterByLabel').html(`${$globalString}${$globalStringAttributes}${$globalStringSpecies}`);
			$('#BigFilterHealth').children().attr("src","Filter/HeartsASC.png");
			$globalHealth=0;
			ascendingOrder("Health");
		}
	})

	//Species special!

		$('#BigFilterSelectionAnimals').on('click',()=>{
			$globalStringSpecies=",Animals only";
			$('#BigFilterFilterByLabel').html(`${$globalString}${$globalStringAttributes}${$globalStringSpecies}`);
			$('#BigFilterSelectionList').hide();
			groupSelection($globalStringSpecies);
		})

		$('#BigFilterSelectionCreatures').on('click',()=>{
			$globalStringSpecies=",Creatures only";
			$('#BigFilterFilterByLabel').html(`${$globalString}${$globalStringAttributes}${$globalStringSpecies}`);
			$('#BigFilterSelectionList').hide();
			groupSelection($globalStringSpecies);
		})



	//All images
	$('.img').on('mouseenter',event=>{
		$(event.currentTarget).css({
			width: "100%",
			height: "200px"
		})
	}).on('mouseleave',event=>{
		$(event.currentTarget).css({
			width: "95%",
			height: "185px"
		})
	})


	//Image views!
	$('.img').on('click',event=>{
		$(event.currentTarget).next().toggle();
		$(event.currentTarget).parent().toggleClass('BigFilterBorder');

	})

	//DOM search!
	

	$('#BigFilterInput').on('input',()=>{
		if($('#BigFilterInput').val().length!=0)
		{
			if($globalSpeciesTF === false)
			{
			let value=document.getElementById('BigFilterInput').value;
			$globalCurrentElementPositionContainer=[];
			value=value.toLowerCase();
			value=value.charAt(0).toUpperCase()+value.slice(1);
			for(let i=0;i<document.getElementsByClassName('BigFilterDivset').length;i++)
			{
				let str=document.getElementsByClassName('BigFilterNames')[i].innerHTML;
				if(str.startsWith(value))
				{
					$globalCurrentElementPositionContainer.push(i);
					document.getElementsByClassName('BigFilterDivset')[i].style.display="inline-block";

				}
				else
				{
					document.getElementsByClassName('BigFilterDivset')[i].style.display="none";
				}
			}
			}
			else{
					$globalElementHelper=[];
					let value=document.getElementById('BigFilterInput').value;
					value=value.toLowerCase();
					value=value.charAt(0).toUpperCase()+value.slice(1);

					for(let i=0;i<$globalCurrentElementPositionContainer.length;i++)
					{		
						let str=document.getElementsByClassName('BigFilterNames')[$globalCurrentElementPositionContainer[i]].innerHTML;
						//console.log(str);
						if(str.startsWith(value))
					{
						$globalElementHelper.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName('BigFilterDivset')[$globalCurrentElementPositionContainer[i]].style.display="inline-block";

					}
					else
					{
						document.getElementsByClassName('BigFilterDivset')[$globalCurrentElementPositionContainer[i]].style.display="none";
					}
				}
				$globalCurrentElementPositionContainer=$globalElementHelper;
				$globalElementHelper=[];
			}
		}

		else{
			$globalElementHelper=[];
			$globalSpeciesTF=false;
			$globalCurrentElementPositionContainer=[];
				$globalString=`FilterBy: None`;
				$('#BigFilterFilterByLabel').html($globalString);
				$globalDMG=0;
				$GlobalHealth=0;
				$globalStringAttributes="";
				$globalStringSpecies="";
				$('#BigFilterHealth').children().attr("src","Filter/Hearts.png");
				$('#BigFilterDMG').css({
				transform: "rotate(0deg)",
			})			
			for(let i=0;i<document.getElementsByClassName('BigFilterDivset').length;i++){
				$globalCurrentElementPositionContainer.push(i);
				document.getElementsByClassName('BigFilterDivset')[i].style.display="inline-block";
				document.getElementsByClassName('BigFilterDivset')[i].style.order="1"
			
		}
		}

		
	})






})