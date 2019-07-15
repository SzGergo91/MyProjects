let $globalExtras=0;
let $globalStringName="None";
let $globalString=`FilterBy: ${$globalStringName}`;
let $globalStringAttributes="";
let $globalStringSpecies="";

let $globalWidth=screen.width;
let $globalHeight=0;
let $globalCurrentElementPositionContainer=[];
let $globalElementHelper=[];
let $globalElementComplementer=[];

let $globalDMG=0;
let $globalHealth=0;
let $globalName=0;

let $globalElementsDamage=[];
let $globalElementsHealth=[];

let $globalSpeciesTF=false;
let $globalSpeciesCommunication=false;

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


//I.resz Amikor beirod, es aztan valasztol mukodik!
//II.Elobb valasztol, aztan beirod nem mukodik!

//Reszeletesen Vesszuk a G-betuvel kezdodoeket!(amiben van 5 creature es 1 animals)
const groupSelection=(str)=>{
	$globalSpeciesTF=true;
	$globalElementHelper=[];
	switch(str){
		case ",Animals only":
			if($globalSpeciesCommunication)
			{
				$globalCurrentElementPositionContainer=$globalElementComplementer;
				$globalElementComplementer=[];
				for(let i=0;i<$globalCurrentElementPositionContainer.length;i++){
				let species=document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].getElementsByClassName("species")[0].innerHTML;
					if(species === "Animals"){
						$globalElementHelper.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="inline-block";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName('BigFilterDivset')[$globalCurrentElementPositionContainer[i]].style.order=`1`;
					}
					else{
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="none";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName('BigFilterDivset')[$globalCurrentElementPositionContainer[i]].style.order=`1`;
					}
			}
			//kiiras
			$globalCurrentElementPositionContainer=$globalElementHelper;
			$globalElementHelper=[];
			$globalString=`FilterBy: None`;
			$globalStringAttributes="";
			$('#BigFilterFilterByLabel').html(`${$globalString}${$globalStringAttributes}${$globalStringSpecies}`);
			$('#BigFilterHealth').children().attr("src","Filter/Hearts.png");
				$('#BigFilterDMG').css({
				transform: "rotate(0deg)",
			})	
				$globalDMG=0;
				$GlobalHealth=0;
			}
			else
			{
			for(let i=0;i<$globalCurrentElementPositionContainer.length;i++){
				let species=document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].getElementsByClassName("species")[0].innerHTML;
					if(species === "Animals"){
						$globalElementHelper.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="inline-block";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
					}
					else{
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="none";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
					}
			}
			//kiiras
			$globalCurrentElementPositionContainer=$globalElementHelper;
			$globalElementHelper=[];
			$globalSpeciesCommunication=true;
			}
			break;

		case ",Creatures only":
			if($globalSpeciesCommunication){
				$globalCurrentElementPositionContainer=$globalElementComplementer;
				$globalElementComplementer=[];
				for(let i=0;i<$globalCurrentElementPositionContainer.length;i++){
				let species=document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].getElementsByClassName("species")[0].innerHTML;
					if(species === "Creature"){
						$globalElementHelper.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="inline-block";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName('BigFilterDivset')[$globalCurrentElementPositionContainer[i]].style.order=`1`;
					}
					else{
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="none";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName('BigFilterDivset')[$globalCurrentElementPositionContainer[i]].style.order=`1`;
					}
				}
				$globalCurrentElementPositionContainer=$globalElementHelper;
				$globalElementHelper=[];
				$globalString=`FilterBy: None`;
				$globalStringAttributes="";
				$('#BigFilterFilterByLabel').html(`${$globalString}${$globalStringAttributes}${$globalStringSpecies}`);
				$('#BigFilterHealth').children().attr("src","Filter/Hearts.png");
				$('#BigFilterDMG').css({
				transform: "rotate(0deg)",
			})	
				$globalDMG=0;
				$GlobalHealth=0;
				}
			else
			{
			for(let i=0;i<$globalCurrentElementPositionContainer.length;i++){
				let species=document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].getElementsByClassName("species")[0].innerHTML;
					if(species === "Creature"){
						$globalElementHelper.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="inline-block";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
					}
					else{
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="none";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
					}
			}
			$globalCurrentElementPositionContainer=$globalElementHelper;
			$globalElementHelper=[];
			$globalSpeciesCommunication=true;
			}
			break;

			case ",Demons only":
			if($globalSpeciesCommunication){
				$globalCurrentElementPositionContainer=$globalElementComplementer;
				$globalElementComplementer=[];
				for(let i=0;i<$globalCurrentElementPositionContainer.length;i++){
				let species=document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].getElementsByClassName("species")[0].innerHTML;
					if(species === "Demon"){
						$globalElementHelper.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="inline-block";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
					}
					else{
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="none";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
					}
			}
			//kiiras
			$globalCurrentElementPositionContainer=$globalElementHelper;
			$globalElementHelper=[];
			$globalString=`FilterBy: None`;
			$globalStringAttributes="";
			$('#BigFilterFilterByLabel').html(`${$globalString}${$globalStringAttributes}${$globalStringSpecies}`);
			$('#BigFilterHealth').children().attr("src","Filter/Hearts.png");
				$('#BigFilterDMG').css({
				transform: "rotate(0deg)",
			})	
				$globalDMG=0;
				$GlobalHealth=0;
			
			}
			else
			{
			for(let i=0;i<$globalCurrentElementPositionContainer.length;i++){
				let species=document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].getElementsByClassName("species")[0].innerHTML;
					if(species === "Demon"){
						$globalElementHelper.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="inline-block";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
					}
					else{
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="none";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
					}
			}
			//kiiras
			$globalCurrentElementPositionContainer=$globalElementHelper;
			$globalElementHelper=[];
			$globalSpeciesCommunication=true;
			}
			break;

			case ",Gods only":
			if($globalSpeciesCommunication){
				$globalCurrentElementPositionContainer=$globalElementComplementer;
				$globalElementComplementer=[];
				for(let i=0;i<$globalCurrentElementPositionContainer.length;i++){
				let species=document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].getElementsByClassName("species")[0].innerHTML;
					if(species === "God"){
						$globalElementHelper.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="inline-block";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName('BigFilterDivset')[$globalCurrentElementPositionContainer[i]].style.order=`1`;
					}
					else{
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="none";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName('BigFilterDivset')[$globalCurrentElementPositionContainer[i]].style.order=`1`;
					}
			}
			//kiiras
			$globalCurrentElementPositionContainer=$globalElementHelper;
			$globalElementHelper=[];
			$globalString=`FilterBy: None`;
			$globalStringAttributes="";
			$('#BigFilterFilterByLabel').html(`${$globalString}${$globalStringAttributes}${$globalStringSpecies}`);
			$('#BigFilterHealth').children().attr("src","Filter/Hearts.png");
				$('#BigFilterDMG').css({
				transform: "rotate(0deg)",
			})	
				$globalDMG=0;
				$GlobalHealth=0;
			}
			else
			{
			for(let i=0;i<$globalCurrentElementPositionContainer.length;i++){
				let species=document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].getElementsByClassName("species")[0].innerHTML;
					if(species === "God"){
						$globalElementHelper.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="inline-block";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
					}
					else{
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="none";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
					}
			}
			//kiiras
			$globalCurrentElementPositionContainer=$globalElementHelper;
			$globalElementHelper=[];
			$globalSpeciesCommunication=true;
			}
			break;
			case ",Humans only":
			if($globalSpeciesCommunication){
				$globalCurrentElementPositionContainer=$globalElementComplementer;
				$globalElementComplementer=[];
				for(let i=0;i<$globalCurrentElementPositionContainer.length;i++){
				let species=document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].getElementsByClassName("species")[0].innerHTML;
					if(species === "Human"){
						$globalElementHelper.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="inline-block";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName('BigFilterDivset')[$globalCurrentElementPositionContainer[i]].style.order=`1`;
					}
					else{
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="none";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName('BigFilterDivset')[$globalCurrentElementPositionContainer[i]].style.order=`1`;
					}
			}
			//kiiras
			$globalCurrentElementPositionContainer=$globalElementHelper;
			$globalElementHelper=[];
			$globalString=`FilterBy: None`;
			$globalStringAttributes="";
			$('#BigFilterFilterByLabel').html(`${$globalString}${$globalStringAttributes}${$globalStringSpecies}`);
			$('#BigFilterHealth').children().attr("src","Filter/Hearts.png");
				$('#BigFilterDMG').css({
				transform: "rotate(0deg)",
			})	
				$globalDMG=0;
				$GlobalHealth=0;
			
			}
			else
			{
			for(let i=0;i<$globalCurrentElementPositionContainer.length;i++){
				let species=document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].getElementsByClassName("species")[0].innerHTML;
					if(species === "Human"){
						$globalElementHelper.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="inline-block";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
					}
					else{
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="none";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
					}
			}
			//kiiras
			$globalCurrentElementPositionContainer=$globalElementHelper;
			$globalElementHelper=[];
			$globalSpeciesCommunication=true;
			}
			break;
			case ",Others only":
			if($globalSpeciesCommunication){
				$globalCurrentElementPositionContainer=$globalElementComplementer;
				$globalElementComplementer=[];
				for(let i=0;i<$globalCurrentElementPositionContainer.length;i++){
				let species=document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].getElementsByClassName("species")[0].innerHTML;
					if(species === "Other"){
						$globalElementHelper.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="inline-block";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName('BigFilterDivset')[$globalCurrentElementPositionContainer[i]].style.order=`1`;
					}
					else{
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="none";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName('BigFilterDivset')[$globalCurrentElementPositionContainer[i]].style.order=`1`;
					}
			}
			//kiiras
			$globalCurrentElementPositionContainer=$globalElementHelper;
			$globalElementHelper=[];
			$globalString=`FilterBy: None`;
			$globalStringAttributes="";
			$('#BigFilterFilterByLabel').html(`${$globalString}${$globalStringAttributes}${$globalStringSpecies}`);
			$('#BigFilterHealth').children().attr("src","Filter/Hearts.png");
				$('#BigFilterDMG').css({
				transform: "rotate(0deg)",
			})	
				$globalDMG=0;
				$GlobalHealth=0;
			
			}
			else
			{
			for(let i=0;i<$globalCurrentElementPositionContainer.length;i++){
				let species=document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].getElementsByClassName("species")[0].innerHTML;
					if(species === "Other"){
						$globalElementHelper.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="inline-block";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
					}
					else{
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="none";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
					}
			}
			//kiiras
			$globalCurrentElementPositionContainer=$globalElementHelper;
			$globalElementHelper=[];
			$globalSpeciesCommunication=true;
			}
			break;
			case ",Undeads only":
			if($globalSpeciesCommunication){
				$globalCurrentElementPositionContainer=$globalElementComplementer;
				$globalElementComplementer=[];
				for(let i=0;i<$globalCurrentElementPositionContainer.length;i++){
				let species=document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].getElementsByClassName("species")[0].innerHTML;
					if(species === "Undead"){
						$globalElementHelper.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="inline-block";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName('BigFilterDivset')[$globalCurrentElementPositionContainer[i]].style.order=`1`;
					}
					else{
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="none";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName('BigFilterDivset')[$globalCurrentElementPositionContainer[i]].style.order=`1`;
					}
			}
			//kiiras
			$globalCurrentElementPositionContainer=$globalElementHelper;
			$globalElementHelper=[];
			$globalString=`FilterBy: None`;
			$globalStringAttributes="";
			$('#BigFilterFilterByLabel').html(`${$globalString}${$globalStringAttributes}${$globalStringSpecies}`);
			$('#BigFilterHealth').children().attr("src","Filter/Hearts.png");
				$('#BigFilterDMG').css({
				transform: "rotate(0deg)",
			})	
				$globalDMG=0;
				$GlobalHealth=0;
			
			}
			else
			{
			for(let i=0;i<$globalCurrentElementPositionContainer.length;i++){
				let species=document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].getElementsByClassName("species")[0].innerHTML;
					if(species === "Undead"){
						$globalElementHelper.push($globalCurrentElementPositionContainer[i]);
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="inline-block";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
					}
					else{
						document.getElementsByClassName("BigFilterDivset")[$globalCurrentElementPositionContainer[i]].style.display="none";
						$globalElementComplementer.push($globalCurrentElementPositionContainer[i]);
					}
			}
			//kiiras
			$globalCurrentElementPositionContainer=$globalElementHelper;
			$globalElementHelper=[];
			$globalSpeciesCommunication=true;
			}
			break;

	}

}



$(document).ready(()=>{

		//Basic settings for DOM

		for(let i=0;i<document.getElementsByClassName('BigFilterDivset').length;i++){
			$globalCurrentElementPositionContainer.push(i);
			
		}

	//All images
	if(($globalWidth>=320) && ($globalWidth<=480)){
		$globalHeight=22.6;
	}
	else{
		if(($globalWidth>=481) && ($globalWidth<=767)){
			$globalHeight=17;
		}
		else{
		$globalHeight=13.54;
		}
	}
	$('.img').on('mouseenter',event=>{
		$(event.currentTarget).css({
			width: "100%",
			height: `${$globalHeight*1.08}vw`
		})
	}).on('mouseleave',event=>{
		$(event.currentTarget).css({
			width: "95%",
			height: `${$globalHeight}vw`
		})
	})


	//Image views!
	$('.img').on('click',event=>{
		$(event.currentTarget).next().toggle();
		$(event.currentTarget).parent().toggleClass('BigFilterBorder');

	})



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
				left: "2.93vw",
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
				left: "36.6vw",
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

		$('#BigFilterSelectionDemons').on('click',()=>{
			$globalStringSpecies=",Demons only";
			$('#BigFilterFilterByLabel').html(`${$globalString}${$globalStringAttributes}${$globalStringSpecies}`);
			$('#BigFilterSelectionList').hide();
			groupSelection($globalStringSpecies);
		})

		$('#BigFilterSelectionGods').on('click',()=>{
			$globalStringSpecies=",Gods only";
			$('#BigFilterFilterByLabel').html(`${$globalString}${$globalStringAttributes}${$globalStringSpecies}`);
			$('#BigFilterSelectionList').hide();
			groupSelection($globalStringSpecies);
		})

		$('#BigFilterSelectionHumans').on('click',()=>{
			$globalStringSpecies=",Humans only";
			$('#BigFilterFilterByLabel').html(`${$globalString}${$globalStringAttributes}${$globalStringSpecies}`);
			$('#BigFilterSelectionList').hide();
			groupSelection($globalStringSpecies);
		})
		$('#BigFilterSelectionOthers').on('click',()=>{
			$globalStringSpecies=",Others only";
			$('#BigFilterFilterByLabel').html(`${$globalString}${$globalStringAttributes}${$globalStringSpecies}`);
			$('#BigFilterSelectionList').hide();
			groupSelection($globalStringSpecies);
		})
		$('#BigFilterSelectionUndeads').on('click',()=>{
			$globalStringSpecies=",Undeads only";
			$('#BigFilterFilterByLabel').html(`${$globalString}${$globalStringAttributes}${$globalStringSpecies}`);
			$('#BigFilterSelectionList').hide();
			groupSelection($globalStringSpecies);
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
				//I.resz Amikor beirod, es aztan valasztol mukodik!(pipa)
				//II.Elobb valasztol, aztan beirod NEM mukodik!
				//Ha elsore filterezek nem megy bele ebbe az agazatba!
				//A komplementerbol is kilehet valasztani amit kell!

					$globalElementHelper=[];
					let value=document.getElementById('BigFilterInput').value;
					value=value.toLowerCase();
					value=value.charAt(0).toUpperCase()+value.slice(1);
					//megkell szurni a komplementert is
					for(let i=0;i<$globalElementComplementer.length;i++)
					{		
						let str=document.getElementsByClassName('BigFilterNames')[$globalElementComplementer[i]].innerHTML;
						//console.log(str);
						if(str.startsWith(value))
					{
						$globalElementHelper.push($globalElementComplementer[i]);

						//document.getElementsByClassName('BigFilterDivset')[$globalElementComplementer[i]].style.display="inline-block";

					}
					else
					{
						//document.getElementsByClassName('BigFilterDivset')[$globalElementComplementer[i]].style.display="none";
					}
				}
				$globalElementComplementer=$globalElementHelper;
				$globalElementHelper=[];
					//Normalis filter
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
				//???

				$globalSpeciesTF =false;

			}
		}

		else{
			$globalElementHelper=[];
			$globalElementComplementer=[];
			$globalSpeciesTF=false;
			$globalSpeciesCommunication=false;
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