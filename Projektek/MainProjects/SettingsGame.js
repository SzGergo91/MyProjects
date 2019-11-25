
'use strict'


//$global variables
let $globalSelected=0;
let $globalClicks=0;
let $globalArenaMod=false;
let $globalSurvivalMod=false;
let $globalCharacters=[{Character: `SettingsGame/Characters/Lizardmen.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 1,
						 warrior: true,selected: false,active: false, Health: 952, Defense:7, Attack: `15-23`},

					   {Character: `SettingsGame/Characters/IceGolem.jpg`,NotCharacter: `SettingsGame/BigX.png`, count: 1,
					    warrior: false,selected: false,Health: 3968, Defense: 25, Attack: `49-78`},

					   {Character: `SettingsGame/Characters/FireGolem.jpg`,NotCharacter: `SettingsGame/BigX.png`, count: 1,
					    warrior: false,selected: false,Health: 2811, Defense: 20, Attack: `70-132`},

					   {Character: `SettingsGame/Characters/PolarBear.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 1,
					    warrior: false,selected: false,Health: 1950, Defense: 17, Attack: `25-43`},

					   {Character: `SettingsGame/Characters/LichKing.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 1,
					    warrior:false,selected: false,Health: 9811, Defense: 50, Attack: `270-361`},

					   {Character: `SettingsGame/Characters/ForestWitch.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 2,
					    warrior:false,selected: false, active: false,Health: 601, Defense: 2, Attack: `3-300`},

					   {Character: `SettingsGame/Characters/Archer.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 2,
					    warrior:true,selected: false,Health: 673, Defense: 4, Attack: `5-15`},

					   {Character: `SettingsGame/Characters/Swordsman.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 2,
					    warrior:true,selected: false,Health: 680, Defense: 10, Attack: `8-25`},

					   {Character: `SettingsGame/Characters/Bear.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 2,
					    warrior:false,selected: false,Health: 1455, Defense: 9, Attack: `20-24`},

					   {Character: `SettingsGame/Characters/Wolf.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 2,
					    warrior:false,selected: false,Health: 503, Defense: 3, Attack: `4-13`},

					   {Character: `SettingsGame/Characters/Farmer.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 3,
					    warrior:true,selected: false, active: false,Health: 700, Defense: 4, Attack: `6-45`},

					   {Character: `SettingsGame/Characters/Deer.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 3,
					    warrior:false,selected: false,Health: 804, Defense: 6, Attack: `8-35`},

					   {Character: `SettingsGame/Characters/JasonVoorhees.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 3,
					    warrior:true,selected: false,Health: 2312, Defense: 10, Attack: `40-125`},

					   {Character: `SettingsGame/Characters/Yeti.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 3,
					    warrior:false,selected: false,Health: 3582, Defense: 8, Attack: `58-109`},

					   {Character: `SettingsGame/Characters/EgyptionWarrior.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 3,
					    warrior:true,selected: false,Health: 750, Defense: 8, Attack: `9-30`},

					   {Character: `SettingsGame/Characters/FrostZombie.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 4,
					    warrior:false,selected: false, active: false,Health: 1021, Defense: 5, Attack: `5-80`},

					   {Character: `SettingsGame/Characters/MummyWarrior.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 4,
					    warrior:true,selected: false,Health: 1185, Defense: 6, Attack: `12-37`},

					   {Character: `SettingsGame/Characters/Naga.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 4,
					    warrior:false,selected: false,Health:2691, Defense: 18, Attack: `25-72`},

					   {Character: `SettingsGame/Characters/SkeletonWarrior.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 4,
					    warrior:true,selected: false,Health: 748, Defense: 7, Attack: `6-14`},

					   {Character: `SettingsGame/Characters/Phoenix.jpg`,NotCharacter: `SettingsGame/BigX.png`,count: 4,
					    warrior:false,selected: false,Health: 4326, Defense: 100, Attack: `51-98`},]


class Settings extends React.Component{
	constructor(props){
		super(props);
		this.state={
			Deg: 120,
		}
		this.PassiveBgIntro=this.PassiveBgIntro.bind(this);
	}

	PassiveBgIntro(){
		let a=this.state.Deg
		a+=1;
		this.setState({
			Deg: a,
		})
	}


	render(){
		return(
			React.createElement('div',{style: { backgroundImage: `linear-gradient(${this.state.Deg}deg,lightblue ,blue 30% ,black 75%)`}, onMouseMove: this.PassiveBgIntro,
				onMouseOver: this.PassiveBgIntro,onMouseOut:this.PassiveBgIntro,onWheel:this.PassiveBgIntro},
				React.createElement('h1',{id: `IntroHeader`},`Settings Game`),
				React.createElement('p',{className: `IntroParagraph`},`This Game is about fighting between two characters or doing a dungeon!
					Each character has their own default characteristics. You can specify these characteristics and this
					will influence the result of the battle as well!`),
				React.createElement('p',{className: `IntroParagraph`},`-You can specify the following characteristics:
				    Attack, defense, health and size!`),
				React.createElement('p',{className:`IntroParagraph`},`Other specifications are also options like skills and weapons!`),
				React.createElement('p',{className:`IntroParagraph`},`-In the page we can change the default skills or give them skills like MasterFighter,
				MasterAcrobatics etc. The MasterFighter gives average chance to critical and dodge, and the MasterAcrobatics gives very hight
				chance to dodge! `),
				React.createElement('p',{className:`IntroParagraph`},`The last about what to know is weapons. You can choose weapons to influence the
					battle between the fighters!`),
				//Setting Accesories!
				React.createElement('p',{className:`IntroParagraph`},`Warriors can only be selected in the arena mod, and the non-warrior
					characters only in the survival mod!`),
				React.createElement('p',{id:`NonWarriorTextParagraph`},`Non-Warrior`),
				React.createElement('p',{id: `WarriorTextParagraph`},`Warrior`),
				React.createElement('br',{},null),
				React.createElement('span',{id: `NonWarriorDrawing`},null),
				React.createElement('span',{id: `WarriorDrawing`},null),
				React.createElement('ul',{},
					React.createElement('li',{id:`ArrowLeft`},null),
					React.createElement('li',{className: `CharacterListContainer`},
						React.createElement('span',{className:`CharacterElements`},null)),
					React.createElement('li',{className:`CharacterListContainer`},
						React.createElement('span',{className:`CharacterElements`},null)),
					React.createElement('li',{className:`CharacterListContainer`},
						React.createElement('span',{className:`CharacterElements`},null)),
					React.createElement('li',{className:`CharacterListContainer`},
						React.createElement('span',{className:`CharacterElements`},null)),
					React.createElement('li',{className:`CharacterListContainer`},
						React.createElement('span',{className:`CharacterElements`},null)),
					React.createElement('li',{id:`ArrowRight`},null)
					),
				React.createElement('div',{id: `CharacterInformationDiv1`},
					React.createElement('div',{id: `CharacterImage1`},null),
					React.createElement('div',{className: `InformationDiv`},`Information`),
					React.createElement('div',{className: `DamageIcon`},null),
					React.createElement('div',{id: `DivInfoDamage1`},`Damage`),
					React.createElement('div',{className: `DefenseIcon`},null),
					React.createElement('div',{id: `DivInfoDefense1`},`Defense`),
					React.createElement('div',{className: `HealthIcon`},null),
					React.createElement('div',{id: `DivInfoHealth1`},`Health`)),
				React.createElement('div',{id: `CharacterInformationDiv2`},
					React.createElement('div',{id: `CharacterImage2`},null),
					React.createElement('div',{className: `InformationDiv`},`Information`),
					React.createElement('div',{className: `DamageIcon`},null),
					React.createElement('div',{id: `DivInfoDamage2`},`Damage`),
					React.createElement('div',{className: `DefenseIcon`},null),
					React.createElement('div',{id: `DivInfoDefense2`},`Defense`),
					React.createElement('div',{className: `HealthIcon`},null),
					React.createElement('div',{id: `DivInfoHealth2`},`Health`)
					),

				React.createElement('h1',{id: `GameModeHeader`},`Game Modes`),
				React.createElement('br',{},null),
				React.createElement('span',{id:`ArenaMod`},`Arena Mod`),
				React.createElement('span',{id:`SurvivalMod`},`Survival Mod`),
				React.createElement('br',{},null),
				React.createElement('br',{},null),
				//Ide jon majd a Fegyverek opcio illetve a stats & Skills opcio!
				//Csinaljuk ezt az egeszet overflow none-al!
				React.createElement('div',{id: `WeaponsContainer`},
					React.createElement('div',{id: `WeaponsLogo`},null),
					React.createElement('div',{id: `WeaponsText`},`Weapons`),
					React.createElement('br',{},null),
					React.createElement('div',{id: `Weapons1Container`},null),
					React.createElement('div',{id: `Weapons2Container`},null)),
				React.createElement('div',{id: `EmptySpace`},null),
				React.createElement('div',{id:`Arena`},`v`),
				)
			




			  );
	}
}


ReactDOM.render(React.createElement(Settings,{},null),
				document.getElementById('MainDiv')
	);


//Helper functions
//I. $globalCharacters
const WarriorCharacter=(Character)=>{
	//Ide!
	let BG=Character.style.backgroundImage;
	let C1=String(BG).slice(14).slice(0,-2);
	if($globalArenaMod){
		for(let i=0;i<$globalCharacters.length;i++)
		{
			if((!$globalCharacters[i].warrior) && ($globalCharacters[i].Character===C1)){
				Character.style.backgroundImage=`url('${$globalCharacters[i].NotCharacter}'), url('${$globalCharacters[i].Character}')`;
			}
		}	

	}
	else{
		if($globalSurvivalMod){
			for(let i=0;i<$globalCharacters.length;i++)
				{
				if(($globalCharacters[i].warrior) && ($globalCharacters[i].Character===C1)){
					Character.style.backgroundImage=`url('${$globalCharacters[i].NotCharacter}'), url('${$globalCharacters[i].Character}')`;
				}
			}	
		}
	}
	for(let i=0;i<$globalCharacters.length;i++){
		if($globalCharacters[i].Character===C1){
			if($globalCharacters[i].warrior){
				Character.parentElement.style.border=`0.3vw ridge green`;
			}
			else{
				Character.parentElement.style.border=`0.3vw ridge red`;
			}
			//SelectedPart
			if($globalCharacters[i].selected){
				Character.style.border=`0.3vw solid yellow`;
				Character.style.opacity=`0.5`;
			}
			else{
				Character.style.border=`none`;
				Character.style.opacity=`1`;
			}
		}
	
	}
}


//Nem a $globalselected szerint fogom meghatarozni!
const PutInformationIn=(Information)=>{
	let WarriorOrNot=Information.parentElement.style.border.slice(12);
	let disp1=document.getElementById('CharacterInformationDiv1').style.display;
	let disp2=document.getElementById('CharacterInformationDiv2').style.display;
	if(WarriorOrNot===`green`){
		const image=Information.style.backgroundImage.slice(14).slice(0,-2);
		for(let i=0;i<$globalCharacters.length;i++){
			if(image===$globalCharacters[i].Character){
				if((disp1.length===0) || (disp1===`none`)){
					$('#CharacterImage1').css({
						backgroundImage: `url(${image})`,
						backgroundSize: `100% 100%`,
					})
					$('#DivInfoDamage1').html($globalCharacters[i].Attack);
					$('#DivInfoDefense1').html($globalCharacters[i].Defense);
					$('#DivInfoHealth1').html($globalCharacters[i].Health);
					$('#CharacterInformationDiv1').fadeIn(1000).css({
						display: `inline-grid`,
					})
				}
				else{
					if((disp2.length===0) || (disp2===`none`)){
					$('#CharacterImage2').css({
						backgroundImage: `url(${image})`,
						backgroundSize: `100% 100%`,
					})
					$('#DivInfoDamage2').html($globalCharacters[i].Attack);
					$('#DivInfoDefense2').html($globalCharacters[i].Defense);
					$('#DivInfoHealth2').html($globalCharacters[i].Health);
					$('#CharacterInformationDiv2').fadeIn(1000).css({
						display: `inline-grid`,
					})
					}
				}
				break;
			}
		}
		
	}
	else{
		for(let i=0;i<$globalCharacters.length;i++){
			let image=String(Information.style.backgroundImage).slice(14).slice(0,-2);
			if($globalCharacters[i].Character===image){
				$('#CharacterImage2').css({
					backgroundImage: `url(${image})`,
					backgroundSize: `100% 100%`,
				})
				$('#DivInfoDamage2').html($globalCharacters[i].Attack);
				$('#DivInfoDefense2').html($globalCharacters[i].Defense);
				$('#DivInfoHealth2').html($globalCharacters[i].Health);
				$('#CharacterInformationDiv2').fadeIn(1000).css({
						display: `inline-grid`,
				})
				break;
			}
		}

	}
}


const PutInformationOut=(Information)=>{
	//Kell a karakterInfoDiv es a karakterImage is!
	let disp1=document.getElementById('CharacterInformationDiv1').style.display;
	let disp2=document.getElementById('CharacterInformationDiv2').style.display;
	const image1=String(document.getElementById('CharacterImage1').style.backgroundImage).slice(5).slice(0,-2);
	const image2=String(document.getElementById('CharacterImage2').style.backgroundImage).slice(5).slice(0,-2);
	let info = Information.style.backgroundImage.slice(14).slice(0,-2);
	for(let i=0;i<$globalCharacters.length;i++){
		if($globalCharacters[i].Character===info){		
			if(((disp1.length===0) || (disp1===`inline-grid`)) && (image1===$globalCharacters[i].Character)){
				$('#CharacterInformationDiv1').css({
						display: `none`,
					})
			}
			else{
				if(((disp2.length===0) || (disp2===`inline-grid`)) && (image2===$globalCharacters[i].Character)){
					$('#CharacterInformationDiv2').css({
						display: `none`,
					})
				}

			}


		}
	}

}

const SlideTheMenu=(OnOff)=>{
	if(($globalArenaMod) && (OnOff===`On`)){
		//Activate the arena Menus!
	}
	else{
		if(($globalSurvivalMod) && (onOff===`On`)){
			//Activate the survival Menus!
		}
		else{
			//Disactivate them all!!!
		}
	}
}





//Jquey part for help!
$(document).ready(()=>{

	//DOM part!
	//Load out list
	let characters=document.getElementsByClassName('CharacterElements');
	for(let i=0;i<characters.length;i++){
		characters[i].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`;
		WarriorCharacter(characters[i]);
	}
	//Nezzuk mindig melyik true a 4bol az elso az 5. a 10. stb!
	$globalCharacters[0].active=true;


	//Jquery part!
	$('#ArrowLeft').css({
				opacity: `0.5`,
			})
	$('#ArrowLeft').on('click',()=>{
		if(!$globalCharacters[0].active){
			//backwards
			if($globalCharacters[15].active){
				$('.CharacterElements').fadeToggle(500,()=>{
					for(let i=0;i<$globalCharacters.length;i++){
						if($globalCharacters[i].count===3){
							characters[i-10].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`;
							WarriorCharacter(characters[i-10]);
							
						}
					}
				})
				$('.CharacterElements').fadeToggle(500);
				$globalCharacters[15].active=false;
				$globalCharacters[10].active=true;
				$('#ArrowRight').css({
				opacity: `1`,
			})
			}
			else{
				if($globalCharacters[10].active){
					$('.CharacterElements').fadeToggle(500,()=>{
						for(let i=0;i<$globalCharacters.length;i++){
							if($globalCharacters[i].count===2){
								characters[i-5].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`;
								WarriorCharacter(characters[i-5]);
							}
						}
					})
					$('.CharacterElements').fadeToggle(500);
					$globalCharacters[10].active=false;
					$globalCharacters[5].active=true;
				}
				else{
					if($globalCharacters[5].active){
						$('.CharacterElements').fadeToggle(500,()=>{
							for(let i=0;i<characters.length;i++){
								characters[i].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`;
								WarriorCharacter(characters[i]);
							}
						})
						$('.CharacterElements').fadeToggle(500);
						$globalCharacters[5].active=false;
						$globalCharacters[0].active=true;
						$('#ArrowLeft').css({
							opacity: `0.5`,
						})
					}
				}
			}
		}

	})
	$('#ArrowRight').on('click',()=>{
		if($globalCharacters[0].active)
		{
			$('.CharacterElements').fadeToggle(500,()=>{
				for(let i=0;i<$globalCharacters.length;i++){
					if($globalCharacters[i].count===2){
					characters[i-5].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`;
					WarriorCharacter(characters[i-5]);
				}
				}

			});
			$('.CharacterElements').fadeToggle(500);
			$globalCharacters[0].active=false;
			$globalCharacters[5].active=true;
				$('#ArrowLeft').css({
				opacity: `1`,
			})
		}
		else{
			if($globalCharacters[5].active){
				$('.CharacterElements').fadeToggle(500,()=>{
				for(let i=0;i<$globalCharacters.length;i++){
					if($globalCharacters[i].count===3){
					characters[i-10].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`;
					WarriorCharacter(characters[i-10]);
				}
				}

			});
				$('.CharacterElements').fadeToggle(500);
				$globalCharacters[5].active=false;
			    $globalCharacters[10].active=true;

			}
			else{
				if($globalCharacters[10].active){
				$('.CharacterElements').fadeToggle(500,()=>{
				for(let i=0;i<$globalCharacters.length;i++){
					if($globalCharacters[i].count===4){
					characters[i-15].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`;
					WarriorCharacter(characters[i-15]);
				}
				}

			});
				$('.CharacterElements').fadeToggle(500);
				$globalCharacters[10].active=false;
			    $globalCharacters[15].active=true;
			    $('#ArrowRight').css({
				opacity: `0.5`,
			})
				}
			}
		}
	})

//ArenaMod!!!

	//Specification!
	//Ha az arenaMod aktiv, akkor a zold kereteseket lehessen csak kivalasztani!
	$('#ArenaMod').on('click',()=>{
		if($globalClicks==false){
		$('#SurvivalMod').css({
			display: `none`,
		})
		$('#ArenaMod').css({
			marginLeft: `40vw`,
		})
		$('#GameModeHeader').html('Select Two Warriors!');
		$globalArenaMod=true;

		//!!!!!!!!!!!!!!!!!!!!A visszatevesnel maskepp kell sliceolni!
		let characters=document.getElementsByClassName('CharacterElements');
			let C0=String(characters[0].style.backgroundImage.slice(14).slice(0,-2));
			let C1=String(characters[1].style.backgroundImage.slice(14).slice(0,-2));
			let C2=String(characters[2].style.backgroundImage.slice(14).slice(0,-2));
			let C3=String(characters[3].style.backgroundImage.slice(14).slice(0,-2));
			let C4=String(characters[4].style.backgroundImage.slice(14).slice(0,-2));
		 for(let i=0;i<$globalCharacters.length;i++)
		 {
			if(($globalCharacters[i].Character===C0) && (!$globalCharacters[i].warrior)){
				characters[0].style.backgroundImage=`url(${$globalCharacters[i].NotCharacter}), url(${$globalCharacters[i].Character})`
			}
			else{
				if(($globalCharacters[i].Character===C1) && (!$globalCharacters[i].warrior)){
				characters[1].style.backgroundImage=`url(${$globalCharacters[i].NotCharacter}), url(${$globalCharacters[i].Character})`
				}
				else{
					if(($globalCharacters[i].Character===C2) && (!$globalCharacters[i].warrior)){
					characters[2].style.backgroundImage=`url(${$globalCharacters[i].NotCharacter}), url(${$globalCharacters[i].Character})`
					}
					else{
						if(($globalCharacters[i].Character===C3) && (!$globalCharacters[i].warrior)){
						characters[3].style.backgroundImage=`url(${$globalCharacters[i].NotCharacter}), url(${$globalCharacters[i].Character})`
						}
						else{
							if(($globalCharacters[i].Character===C4) && (!$globalCharacters[i].warrior)){
							characters[4].style.backgroundImage=`url(${$globalCharacters[i].NotCharacter}), url(${$globalCharacters[i].Character})`
							}
						}
					}
				}
			}
		}
			$globalClicks=1;
		}
		//Put back everything!
		else{
			$('#SurvivalMod').css({
				display: `inline`,
			})
			$('#ArenaMod').css({
				marginLeft: `15vw`,
			})
			$('#GameModeHeader').html('Game Modes');
				$globalArenaMod=false;
			let characters=document.getElementsByClassName('CharacterElements');
			//Kikell szedjem a selecteket is!(Ha esetleg valami bevan jelolve!)
			//Ami warrior azt nem kell jobban sliceolni!
			let C0=String(characters[0].style.backgroundImage.slice(14).slice(0,-2));
			let C1=String(characters[1].style.backgroundImage.slice(14).slice(0,-2));
			let C2=String(characters[2].style.backgroundImage.slice(14).slice(0,-2));
			let C3=String(characters[3].style.backgroundImage.slice(14).slice(0,-2));
			let C4=String(characters[4].style.backgroundImage.slice(14).slice(0,-2));
			for(let i=0;i<characters.length;i++){
				let bordercolor=characters[i].parentElement.style.border.slice(12);
				if(bordercolor===`red`){
					switch(i){
						case 0:
							C0=C0.slice(21);
							break;
						case 1:
							C1=C1.slice(21);
							break;
						case 2:
							C2=C2.slice(21);
							break;
						case 3:
							C3=C3.slice(21);
							break;
						case 4:
							C4=C4.slice(21);
							break;
					}
				}
			}
			//Elobb kiszedem a jelenlegiben a selectet, azutan pedig a tobbiben kulon kulon!
			//Csak warrior lehet selected mas nem lehet!
			for(let i=0;i<$globalCharacters.length;i++){
				if(($globalCharacters[i].selected) && ($globalCharacters[i].Character===C0))
					{
						$globalCharacters[i].selected=false;
						$globalSelected-=1;
						characters[0].style.opacity=`1`;
						characters[0].style.border=`none`;

					}
				if(($globalCharacters[i].Character===C0) && (!$globalCharacters[i].warrior)){
					characters[0].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`
				}
				else{
					if(($globalCharacters[i].selected) && ($globalCharacters[i].Character===C1))
						{
							$globalCharacters[i].selected=false;
							$globalSelected-=1;
							characters[1].style.opacity=`1`;
							characters[1].style.border=`none`;

						}
					if(($globalCharacters[i].Character===C1) && (!$globalCharacters[i].warrior)){
					characters[1].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`
					}
					else{
						if(($globalCharacters[i].selected) && ($globalCharacters[i].Character===C2))
							{
								$globalCharacters[i].selected=false;
								$globalSelected-=1;
								characters[2].style.opacity=`1`;
								characters[2].style.border=`none`;

							}
						if(($globalCharacters[i].Character===C2) && (!$globalCharacters[i].warrior)){
							characters[2].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`
						}
						else{
							if(($globalCharacters[i].selected) && ($globalCharacters[i].Character===C3))
								{
									$globalCharacters[i].selected=false;
									$globalSelected-=1;
									characters[3].style.opacity=`1`;
									characters[3].style.border=`none`;

								}
							if(($globalCharacters[i].Character===C3) && (!$globalCharacters[i].warrior)){
								characters[3].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`
							}
							else{
								if(($globalCharacters[i].selected) && ($globalCharacters[i].Character===C4))
									{
										$globalCharacters[i].selected=false;
										$globalSelected-=1;
										characters[4].style.opacity=`1`;
										characters[4].style.border=`none`;

									}
								if(($globalCharacters[i].Character===C4) && (!$globalCharacters[i].warrior)){
									characters[4].style.backgroundImage=`url(), url(${$globalCharacters[i].Character})`
								}
						}
					}
				}
			}
			}

			//A masodik for azokat a selecteket rakja vissza, amelyek kivul esnek a jelenlegi 5os listan!
			for(let i=0;i<$globalCharacters.length;i++){
				if($globalCharacters[i].selected){
					$globalCharacters[i].selected=false;
					$globalSelected-=1;
				}
			}
			//Kiszedem a meglevo diveket!
			document.getElementById('CharacterInformationDiv1').style.display=`none`;
			document.getElementById('CharacterInformationDiv2').style.display=`none`;

		$globalClicks=0;
		}

	})

	//Survival Mod!!!
	$('#SurvivalMod').on('click',()=>{
		if($globalClicks===0){
			$('#ArenaMod').css({
				display: `none`,
				})
			$('#GameModeHeader').html('Select one Non-Warrior!');
				$globalSurvivalMod=true;
				$globalClicks=1;
				//Lehuzasok (X-ek)!
				let CurrentPage=document.getElementsByClassName('CharacterElements');
				for(let i=0;i<CurrentPage.length;i++){
					let element=String(CurrentPage[i].style.backgroundImage).slice(14).slice(0,-2);
					for(let j=0;j<$globalCharacters.length;j++){
						if(($globalCharacters[j].Character===element) && ($globalCharacters[j].warrior)){
							CurrentPage[i].style.backgroundImage=`url(${$globalCharacters[i].NotCharacter}), url(${$globalCharacters[j].Character})`
							break;
						}
					}
				}

		}
		else{
			$('#ArenaMod').css({
				display: `inline`,
				})
			$('#GameModeHeader').html('Game Modes');
			$globalSurvivalMod=false;
			let CurrentPage=document.getElementsByClassName('CharacterElements');
				for(let i=0;i<CurrentPage.length;i++){
					let element=String(CurrentPage[i].style.backgroundImage).slice(14).slice(0,-2);
					//Lekell kerjem a bordert is!
					let border=String(CurrentPage[i].parentElement.style.border).slice(12);
						if(border ===`green`){
							element=element.slice(21);
						}
					
					for(let j=0;j<$globalCharacters.length;j++){
						if(($globalCharacters[j].Character===element) && ($globalCharacters[j].warrior)){
							CurrentPage[i].style.backgroundImage=`url(), url(${$globalCharacters[j].Character})`;
							break;
						}
					}
				}
				//Elobb lokalisan a Selectet!
				for(let i=0;i<CurrentPage.length;i++){
					let element=String(CurrentPage[i].style.backgroundImage).slice(14).slice(0,-2);
					for(let j=0;j<$globalCharacters.length;j++){
						if(($globalCharacters[j].Character===element) && ($globalCharacters[j].selected)){
							$globalCharacters[j].selected=false;
							CurrentPage[i].style.opacity=`1`;
							CurrentPage[i].style.border=`none`;
							$globalSelected=0;
							break; //Because we only have one element!
						}
					}
				}
				//Azokat amik kivul esnek!
				for(let j=0;j<$globalCharacters.length;j++){
					if($globalCharacters[j].selected){
						$globalCharacters[j].selected=false;
						$globalSelected=0;
						break;
					}
				}
			document.getElementById('CharacterInformationDiv2').style.display=`none`;
			$globalClicks=0;
			
		}
	})

	//Selections!
	$('.CharacterElements').on('click',event=>{
		if($globalArenaMod){
		if($globalSelected<2)
		{
			let C1=String(event.currentTarget.style.backgroundImage).slice(14).slice(0,-2);
			for(let i=0;i<$globalCharacters.length;i++){
				if($globalCharacters[i].Character===C1){
					//Elobb megnezem, hogy ra lehet-e kattintani, vagy sem!
					if($globalCharacters[i].warrior)
					{
					if(!$globalCharacters[i].selected)
					{
					$globalCharacters[i].selected=true;
					$globalSelected+=1;
					$(event.currentTarget).css({
						opacity: `0.5`,
						border: `0.3vw solid yellow`,
						})
					//Ide!!! folyatom(Fuggveny!)
					PutInformationIn(event.currentTarget);
					}
					else{
						$globalCharacters[i].selected=false;
							$(event.currentTarget).css({
							opacity: `1`,
							border: `none`,
						})
						PutInformationOut(event.currentTarget);
						$globalSelected-=1;
					}
				}

				}
			}
		}
		else{
			let C1=String(event.currentTarget.style.backgroundImage).slice(14).slice(0,-2);
			for(let i=0;i<$globalCharacters.length;i++){
				if(($globalCharacters[i].Character===C1) && ($globalCharacters[i].selected)){
					$globalCharacters[i].selected=false;
					$(event.currentTarget).css({
						opacity: `1`,
						border: `none`,
					})
					PutInformationOut(event.currentTarget);
					$globalSelected-=1;
				}
			}
		}
	}
	//Survival Mod!
	else{
		if($globalSurvivalMod){
			if($globalSelected<2){
				for(let i=0;i<$globalCharacters.length;i++){
					let C1=String(event.currentTarget.style.backgroundImage).slice(14).slice(0,-2);
					if($globalCharacters[i].Character===C1){
						if(!$globalCharacters[i].warrior){
							if(!$globalCharacters[i].selected){
								$globalCharacters[i].selected=true;
								$(event.currentTarget).css({
									opacity: `0.5`,
									border: `0.3vw solid yellow`,
								})
								$globalSelected=2;
								PutInformationIn(event.currentTarget);								
							}

						}
					}
				}

			}
			else{
				for(let i=0;i<$globalCharacters.length;i++){
					let C1=String(event.currentTarget.style.backgroundImage).slice(14).slice(0,-2);
					if($globalCharacters[i].Character===C1){
					if(!$globalCharacters[i].warrior){
						if($globalCharacters[i].selected){
							$globalCharacters[i].selected=false;
								$globalSelected=1;
								$(event.currentTarget).css({
									opacity: `1`,
									border: `none`,
								})
								PutInformationOut(event.currentTarget);
						}
					}
				}

				}
			}
			

		}
	}

	})

	//Weapons1 logo!
	$('#WeaponsLogo').on('click',()=>{
		//Lekerem a heightet!
		let size=window.getComputedStyle(document.getElementById('WeaponsContainer'),null).getPropertyValue("overflow-y");
		if(size===`hidden`){		
				$('#WeaponsContainer').css({
					width: `100%`,
					height: `40vw`,
					marginLeft: `0`,
					backgroundColor: `transparent`,
					paddingLeft: `26vw`,
					overflowY: `auto`,
				})
		}
		else{
			$('#WeaponsContainer').css({
					width: `40%`,
					height: `10vw`,
					marginLeft: `26vw`,
					backgroundColor: `gray`,
					paddingLeft: `0`,
					overflowY: `hidden`,
				})
		}
	})

	
});








