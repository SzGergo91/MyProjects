'use strict'


let $globalHelmets=[];
//A feltetel annyi, hogy ezeket mindig megkell adni es kesz!



//Specifikaljuk azt, hogy miket adhat a Helmet!(Mindent nem!)
//1.Defense,2.Strength(opcionalis),3.Dexterity(opcionalis),4.Wisdom(opc),5.Crafting(opc),frost damage illetve lightning damage!
class Helms extends React.Component{
	constructor(props){
		super(props);
		this.state={
			Tooltip: `none`,
			//Sure Attributes below
			Image: `url('Pictures/JungleFinder/Items/${this.props.Image}')`,
			Name: `${this.props.ItemName}`,
			Defense: this.props.Defense,
			Information: `${this.props.ItemName} Defense:${this.props.Defense}`
		}
		this.onMouseOver=this.onMouseOver.bind(this);
		this.onMouseOut=this.onMouseOut.bind(this);
		this.handleChange=this.handleChange.bind(this);
	}
	//Megnezni a lifecycle metodusokkal, hogy van-e hatterkep vagy nincsen!
	//Alapertelmezett props!
	//Namet kell atadjak amire ertelmezzuk a ki/be kapcs gombot!
	static defaultProps={
		ItemName: `DefaultHelm`,
		Defense: 5,
		Image: `Helm.png`,
		IDName:`Helm${Math.floor(Math.random()*10000)}`

	}

	//!!!Statebe rakom a proppokat amikkel majd Beallitom az illeto fuggvenyt!
	onMouseOver(){
		this.setState({
			Tooltip: `inline`
		})
	}

	onMouseOut(){
		this.setState({
			Tooltip: `none`
		})
	}

	handleChange(e){
		//Display Amivel megnezzuk hogy inline-block vagy non-e!
		//console.log(e.target);
		this.props.onClick(e);
	}

	static getDerivedStateFromProps(props, state)
	{
		let AttributeString=`${props.ItemName} Defense:${props.Defense}`;
		if(typeof(props.Strength)!==`undefined`){
			AttributeString+=` Strength:${props.Strength}`
		}
		if(typeof(props.Dexterity)!==`undefined`){
			AttributeString+=` Dexterity:${props.Dexterity}`
		}
		if(typeof(props.Wisdom)!==`undefined`){
			AttributeString+=` Wisdom:${props.Wisdom}`
		}
		if(typeof(props.Crafting)!==`undefined`){
			AttributeString+=` Crafting:${props.Crafting}`
		}
		if(typeof(props.FrostDamage)!==`undefined`){
			AttributeString+=` FrostDamage:${props.FrostDamage}`
		}
		if(typeof(props.LightningDamage)!==`undefined`){
			AttributeString+=` LightningDamage:${props.LightningDamage}`
		}
		return {Information: AttributeString}
    	
  	}

	render(){
		return(
			React.createElement('div',{id: this.props.IDName,className: `JungleItems`, name: this.props.ItemName, style:{backgroundImage: this.state.Image,
			},onMouseOver: this.onMouseOver, onMouseOut: this.onMouseOut,onClick: this.handleChange},
				React.createElement('span',{style: {display: this.state.Tooltip}},this.state.Information))
			)
	}

}

class Amulets extends React.Component{
	constructor(props){
		super(props);
		this.state={
			Tooltip: `none`,
			//Sure Attributes below
			Image: `url('Pictures/JungleFinder/Items/${this.props.Image}')`,
			Name: `${this.props.ItemName}`,
			Health: this.props.Health,
			Information: `${this.props.ItemName} Health:${this.props.Health}`
		}
		this.onMouseOver=this.onMouseOver.bind(this);
		this.onMouseOut=this.onMouseOut.bind(this);
		this.handleChange=this.handleChange.bind(this);
	}
	//Megnezni a lifecycle metodusokkal, hogy van-e hatterkep vagy nincsen!
	//Alapertelmezett props!
	//Namet kell atadjak amire ertelmezzuk a ki/be kapcs gombot!
	static defaultProps={
		ItemName: `DefaultAmulet`,
		Health: 100,
		Image: `Amulet.png`,
		IDName:`Amulet${Math.floor(Math.random()*10000)}`

	}

	//!!!Statebe rakom a proppokat amikkel majd Beallitom az illeto fuggvenyt!
	onMouseOver(){
		this.setState({
			Tooltip: `inline`
		})
	}

	onMouseOut(){
		this.setState({
			Tooltip: `none`
		})
	}

	handleChange(e){
		//Display Amivel megnezzuk hogy inline-block vagy non-e!
		//console.log(e.target);
		this.props.onClick(e);
	}

	static getDerivedStateFromProps(props, state)
	{
		let AttributeString=`${props.ItemName} Health:${props.Health}`;
		if(typeof(props.DamagePercent)!==`undefined`){
			AttributeString+=` Damage:${props.DamagePercent}%`
		}
		if(typeof(props.DefensePercent)!==`undefined`){
			AttributeString+=` Defense:${props.DefensePercent}%`
		}
		if(typeof(props.Strength)!==`undefined`){
			AttributeString+=` Strength:${props.Strength}`
		}
		if(typeof(props.Dexterity)!==`undefined`){
			AttributeString+=` Dexterity:${props.Dexterity}`
		}
		if(typeof(props.Wisdom)!==`undefined`){
			AttributeString+=` Wisdom:${props.Wisdom}`
		}
		if(typeof(props.Crafting)!==`undefined`){
			AttributeString+=` Crafting:${props.Crafting}`
		}
		if(typeof(props.FrostDamage)!==`undefined`){
			AttributeString+=` FrostDamage:${props.FrostDamage}`
		}
		if(typeof(props.LightningDamage)!==`undefined`){
			AttributeString+=` LightningDamage:${props.LightningDamage}`
		}
		if(typeof(props.FireDamage)!==`undefined`){
			AttributeString+=` FireDamage:${props.FireDamage}`
		}
		if(typeof(props.PoisonDamage)!==`undefined`){
			AttributeString+=` PoisonDamage:${props.PoisonDamage}`
		}
		return {Information: AttributeString}
    	
  	}
  	//Amulet
	render(){
		return(
			React.createElement('div',{id: this.props.IDName,className: `JungleItems`, name: this.props.ItemName, style:{backgroundImage: this.state.Image,
			},onMouseOver: this.onMouseOver, onMouseOut: this.onMouseOut,onClick: this.handleChange},
				React.createElement('span',{style: {display: this.state.Tooltip}},this.state.Information))
			)
	}

}


class Weapons extends React.Component{
	constructor(props){
		super(props);
		this.state={
			Tooltip: `none`,
			//Sure Attributes below
			Image: `url('Pictures/JungleFinder/Items/${this.props.Image}')`,
			Name: `${this.props.ItemName}`,
			Damage: this.props.Damage,
			Information: `${this.props.ItemName} Damage:${this.props.Damage}`
		}
		this.onMouseOver=this.onMouseOver.bind(this);
		this.onMouseOut=this.onMouseOut.bind(this);
		this.handleChange=this.handleChange.bind(this);
	}
	//Megnezni a lifecycle metodusokkal, hogy van-e hatterkep vagy nincsen!
	//Alapertelmezett props!
	//Namet kell atadjak amire ertelmezzuk a ki/be kapcs gombot!
	static defaultProps={
		ItemName: `DefaultChessPlate`,
		Damage: `1-3`,
		Image: `SmallSword.png`,
		IDName:`Weapon${Math.floor(Math.random()*10000)}`

	}

	//!!!Statebe rakom a proppokat amikkel majd Beallitom az illeto fuggvenyt!
	onMouseOver(){
		this.setState({
			Tooltip: `inline`
		})
	}

	onMouseOut(){
		this.setState({
			Tooltip: `none`
		})
	}

	handleChange(e){
		//Display Amivel megnezzuk hogy inline-block vagy non-e!
		//console.log(e.target);
		this.props.onClick(e);
	}

	static getDerivedStateFromProps(props, state)
	{
		let AttributeString=`${props.ItemName} Damage:${props.Damage}`;
		if(typeof(props.DamagePercent)!==`undefined`){
			AttributeString+=` Damage:${props.DamagePercent}%`
		}
		if(typeof(props.Strength)!==`undefined`){
			AttributeString+=` Strength:${props.Strength}`
		}
		if(typeof(props.Dexterity)!==`undefined`){
			AttributeString+=` Dexterity:${props.Dexterity}`
		}
		if(typeof(props.FrostDamage)!==`undefined`){
			AttributeString+=` FrostDamage:${props.FrostDamage}`
		}
		if(typeof(props.FireDamage)!==`undefined`){
			AttributeString+=` FireDamage:${props.FireDamage}`
		}
		if(typeof(props.LightningDamage)!==`undefined`){
			AttributeString+=` LightningDamage:${props.LightningDamage}`
		}
		if(typeof(props.PoisonDamage)!==`undefined`){
			AttributeString+=` PoisonDamage:${props.PoisonDamage}`
		}
		return {Information: AttributeString}
    	
  	}
  	//Weapon
	render(){
		return(
			React.createElement('div',{id: this.props.IDName,className: `JungleItems`, name: this.props.ItemName, style:{backgroundImage: this.state.Image,
			},onMouseOver: this.onMouseOver, onMouseOut: this.onMouseOut,onClick: this.handleChange},
				React.createElement('span',{style: {display: this.state.Tooltip}},this.state.Information))
			)
	}

}

class Chessplates extends React.Component{
	constructor(props){
		super(props);
		this.state={
			Tooltip: `none`,
			//Sure Attributes below
			Image: `url('Pictures/JungleFinder/Items/${this.props.Image}')`,
			Name: `${this.props.ItemName}`,
			Defense: this.props.Defense,
			Information: `${this.props.ItemName} Defense:${this.props.Defense}`
		}
		this.onMouseOver=this.onMouseOver.bind(this);
		this.onMouseOut=this.onMouseOut.bind(this);
		this.handleChange=this.handleChange.bind(this);
	}
	//Megnezni a lifecycle metodusokkal, hogy van-e hatterkep vagy nincsen!
	//Alapertelmezett props!
	//Namet kell atadjak amire ertelmezzuk a ki/be kapcs gombot!
	static defaultProps={
		ItemName: `DefaultChessPlate`,
		Defense: 30,
		Image: `Armor.png`,
		IDName:`Armor${Math.floor(Math.random()*10000)}`

	}

	//!!!Statebe rakom a proppokat amikkel majd Beallitom az illeto fuggvenyt!
	onMouseOver(){
		this.setState({
			Tooltip: `inline`
		})
	}

	onMouseOut(){
		this.setState({
			Tooltip: `none`
		})
	}

	handleChange(e){
		//Display Amivel megnezzuk hogy inline-block vagy non-e!
		//console.log(e.target);
		this.props.onClick(e);
	}

	static getDerivedStateFromProps(props, state)
	{
		let AttributeString=`${props.ItemName} Defense:${props.Defense}`;
		if(typeof(props.Strength)!==`undefined`){
			AttributeString+=` Strength:${props.Strength}`
		}
		if(typeof(props.Dexterity)!==`undefined`){
			AttributeString+=` Dexterity:${props.Dexterity}`
		}
		if(typeof(props.Wisdom)!==`undefined`){
			AttributeString+=` Wisdom:${props.Wisdom}`
		}
		if(typeof(props.Crafting)!==`undefined`){
			AttributeString+=` Crafting:${props.Crafting}`
		}
		if(typeof(props.FrostDamage)!==`undefined`){
			AttributeString+=` FrostDamage:${props.FrostDamage}`
		}
		if(typeof(props.FireDamage)!==`undefined`){
			AttributeString+=` FireDamage:${props.FireDamage}`
		}
		return {Information: AttributeString}
    	
  	}
  	//Chessplate
	render(){
		return(
			React.createElement('div',{id: this.props.IDName,className: `JungleItems`, name: this.props.ItemName, style:{backgroundImage: this.state.Image,
			},onMouseOver: this.onMouseOver, onMouseOut: this.onMouseOut,onClick: this.handleChange},
				React.createElement('span',{style: {display: this.state.Tooltip}},this.state.Information))
			)
	}

}


class Gloves extends React.Component{
	constructor(props){
		super(props);
		this.state={
			Tooltip: `none`,
			//Sure Attributes below
			Image: `url('Pictures/JungleFinder/Items/${this.props.Image}')`,
			Name: `${this.props.ItemName}`,
			Defense: this.props.Defense,
			Information: `${this.props.ItemName} Defense:${this.props.Defense}`
		}
		this.onMouseOver=this.onMouseOver.bind(this);
		this.onMouseOut=this.onMouseOut.bind(this);
		this.handleChange=this.handleChange.bind(this);
	}
	//Megnezni a lifecycle metodusokkal, hogy van-e hatterkep vagy nincsen!
	//Alapertelmezett props!
	//Namet kell atadjak amire ertelmezzuk a ki/be kapcs gombot!
	static defaultProps={
		ItemName: `DefaultGloves`,
		Defense: 15,
		Image: `PlasticGloves.png`,
		IDName:`Gloves${Math.floor(Math.random()*10000)}`

	}

	//!!!Statebe rakom a proppokat amikkel majd Beallitom az illeto fuggvenyt!
	onMouseOver(){
		this.setState({
			Tooltip: `inline`
		})
	}

	onMouseOut(){
		this.setState({
			Tooltip: `none`
		})
	}

	handleChange(e){
		//Display Amivel megnezzuk hogy inline-block vagy non-e!
		//console.log(e.target);
		this.props.onClick(e);
	}

	static getDerivedStateFromProps(props, state)
	{
		let AttributeString=`${props.ItemName} Defense:${props.Defense}`;
		if(typeof(props.DefensePercent)!==`undefined`){
			AttributeString+=` Defense:${props.DefensePercent}%`
		}
		if(typeof(props.DamagePercent)!==`undefined`){
			AttributeString+=` Damage:${props.DamagePercent}%`
		}
		if(typeof(props.Dexterity)!==`undefined`){
			AttributeString+=` Dexterity:${props.Dexterity}`
		}
		if(typeof(props.Wisdom)!==`undefined`){
			AttributeString+=` Wisdom:${props.Wisdom}`
		}
		if(typeof(props.FireResist)!==`undefined`){
			AttributeString+=` FireResist:${props.FireResist}`
		}
		if(typeof(props.FrostResist)!==`undefined`){
			AttributeString+=` FrostResist:${props.FrostResist}`
		}
		if(typeof(props.LightningResist)!==`undefined`){
			AttributeString+=` LightningResist:${props.LightningResist}`
		}
		return {Information: AttributeString}
    	
  	}
  	//Gloves
	render(){
		return(
			React.createElement('div',{id: this.props.IDName,className: `JungleItems`, name: this.props.ItemName, style:{backgroundImage: this.state.Image,
			},onMouseOver: this.onMouseOver, onMouseOut: this.onMouseOut,onClick: this.handleChange},
				React.createElement('span',{style: {display: this.state.Tooltip}},this.state.Information))
			)
	}

}


class Rings extends React.Component{
	constructor(props){
		super(props);
		this.state={
			Tooltip: `none`,
			//Sure Attributes below
			Image: `url('Pictures/JungleFinder/Items/${this.props.Image}')`,
			Name: `${this.props.ItemName}`,
			Health: this.props.Health,
			Information: `${this.props.ItemName} Health:${this.props.Health}`
		}
		this.onMouseOver=this.onMouseOver.bind(this);
		this.onMouseOut=this.onMouseOut.bind(this);
		this.handleChange=this.handleChange.bind(this);
	}
	//Megnezni a lifecycle metodusokkal, hogy van-e hatterkep vagy nincsen!
	//Alapertelmezett props!
	//Namet kell atadjak amire ertelmezzuk a ki/be kapcs gombot!
	static defaultProps={
		ItemName: `DefaultRing`,
		Health: 90,
		Image: `Ring.png`,
		IDName:`Ring${Math.floor(Math.random()*10000)}`

	}

	//!!!Statebe rakom a proppokat amikkel majd Beallitom az illeto fuggvenyt!
	onMouseOver(){
		this.setState({
			Tooltip: `inline`
		})
	}

	onMouseOut(){
		this.setState({
			Tooltip: `none`
		})
	}

	handleChange(e){
		//Display Amivel megnezzuk hogy inline-block vagy non-e!
		//console.log(e.target);
		this.props.onClick(e);
	}

	static getDerivedStateFromProps(props, state)
	{
		let AttributeString=`${props.ItemName} Health:${props.Health}`;
		if(typeof(props.Strength)!==`undefined`){
			AttributeString+=` Strength:${props.Strength}`
		}
		if(typeof(props.Dexterity)!==`undefined`){
			AttributeString+=` Dexterity:${props.Dexterity}`
		}
		if(typeof(props.Wisdom)!==`undefined`){
			AttributeString+=` Wisdom:${props.Wisdom}`
		}
		if(typeof(props.Crafting)!==`undefined`){
			AttributeString+=` Crafting:${props.Crafting}`
		}
		if(typeof(props.FrostDamage)!==`undefined`){
			AttributeString+=` FrostDamage:${props.FrostDamage}`
		}
		if(typeof(props.LightningDamage)!==`undefined`){
			AttributeString+=` LightningDamage:${props.LightningDamage}`
		}
		if(typeof(props.FireDamage)!==`undefined`){
			AttributeString+=` FireDamage:${props.FireDamage}`
		}
		if(typeof(props.PoisonDamage)!==`undefined`){
			AttributeString+=` PoisonDamage:${props.PoisonDamage}`
		}
		if(typeof(props.PoisonResist)!==`undefined`){
			AttributeString+=` PoisonResist:${props.PoisonResist}`
		}
		if(typeof(props.FrostResist)!==`undefined`){
			AttributeString+=` FrostResist:${props.FrostResist}`
		}
		if(typeof(props.FireResist)!==`undefined`){
			AttributeString+=` FireResist:${props.FireResist}`
		}
		if(typeof(props.LightningResist)!==`undefined`){
			AttributeString+=` LightningResist:${props.LightningResist}`
		}
		return {Information: AttributeString}
    	
  	}
  	//Rings
	render(){
		return(
			React.createElement('div',{id: this.props.IDName,className: `JungleItems`, name: this.props.ItemName, style:{backgroundImage: this.state.Image,
			},onMouseOver: this.onMouseOver, onMouseOut: this.onMouseOut,onClick: this.handleChange},
				React.createElement('span',{style: {display: this.state.Tooltip}},this.state.Information))
			)
	}

}


class Greaves extends React.Component{
	constructor(props){
		super(props);
		this.state={
			Tooltip: `none`,
			//Sure Attributes below
			Image: `url('Pictures/JungleFinder/Items/${this.props.Image}')`,
			Name: `${this.props.ItemName}`,
			Defense: this.props.Defense,
			Information: `${this.props.ItemName} Defense:${this.props.Defense}`
		}
		this.onMouseOver=this.onMouseOver.bind(this);
		this.onMouseOut=this.onMouseOut.bind(this);
		this.handleChange=this.handleChange.bind(this);
	}
	//Megnezni a lifecycle metodusokkal, hogy van-e hatterkep vagy nincsen!
	//Alapertelmezett props!
	//Namet kell atadjak amire ertelmezzuk a ki/be kapcs gombot!
	static defaultProps={
		ItemName: `DefaultGreaves`,
		Defense: 23,
		Image: `Greaves.png`,
		IDName:`Greaves${Math.floor(Math.random()*10000)}`

	}

	//!!!Statebe rakom a proppokat amikkel majd Beallitom az illeto fuggvenyt!
	onMouseOver(){
		this.setState({
			Tooltip: `inline`
		})
	}

	onMouseOut(){
		this.setState({
			Tooltip: `none`
		})
	}

	handleChange(e){
		//Display Amivel megnezzuk hogy inline-block vagy non-e!
		//console.log(e.target);
		this.props.onClick(e);
	}

	static getDerivedStateFromProps(props, state)
	{
		let AttributeString=`${props.ItemName} Defense:${props.Defense}`;
		if(typeof(props.Strength)!==`undefined`){
			AttributeString+=` Strength:${props.Strength}`
		}
		if(typeof(props.Dexterity)!==`undefined`){
			AttributeString+=` Dexterity:${props.Dexterity}`
		}
		if(typeof(props.Wisdom)!==`undefined`){
			AttributeString+=` Wisdom:${props.Wisdom}`
		}
		if(typeof(props.Crafting)!==`undefined`){
			AttributeString+=` Crafting:${props.Crafting}`
		}
		if(typeof(props.PoisonDamage)!==`undefined`){
			AttributeString+=` PoisonDamage:${props.PoisonDamage}`
		}
		if(typeof(props.LightningDamage)!==`undefined`){
			AttributeString+=` LightningDamage:${props.LightningDamage}`
		}
		if(typeof(props.FireResist)!==`undefined`){
			AttributeString+=` FireResist:${props.FireResist}`
		}
		if(typeof(props.FrostResist)!==`undefined`){
			AttributeString+=` FrostResist:${props.FrostResist}`
		}
		return {Information: AttributeString}
    	
  	}
  	//Greaves
	render(){
		return(
			React.createElement('div',{id: this.props.IDName,className: `JungleItems`, name: this.props.ItemName, style:{backgroundImage: this.state.Image,
			},onMouseOver: this.onMouseOver, onMouseOut: this.onMouseOut,onClick: this.handleChange},
				React.createElement('span',{style: {display: this.state.Tooltip}},this.state.Information))
			)
	}

}


class Boots extends React.Component{
	constructor(props){
		super(props);
		this.state={
			Tooltip: `none`,
			//Sure Attributes below
			Image: `url('Pictures/JungleFinder/Items/${this.props.Image}')`,
			Name: `${this.props.ItemName}`,
			Defense: this.props.Defense,
			Information: `${this.props.ItemName} Defense:${this.props.Defense}`
		}
		this.onMouseOver=this.onMouseOver.bind(this);
		this.onMouseOut=this.onMouseOut.bind(this);
		this.handleChange=this.handleChange.bind(this);
	}
	//Megnezni a lifecycle metodusokkal, hogy van-e hatterkep vagy nincsen!
	//Alapertelmezett props!
	//Namet kell atadjak amire ertelmezzuk a ki/be kapcs gombot!
	static defaultProps={
		ItemName: `DefaultBoots`,
		Defense: 14,
		Image: `Boots.png`,
		IDName:`Boots${Math.floor(Math.random()*10000)}`

	}

	//!!!Statebe rakom a proppokat amikkel majd Beallitom az illeto fuggvenyt!
	onMouseOver(){
		this.setState({
			Tooltip: `inline`
		})
	}

	onMouseOut(){
		this.setState({
			Tooltip: `none`
		})
	}

	handleChange(e){
		//Display Amivel megnezzuk hogy inline-block vagy non-e!
		//console.log(e.target);
		this.props.onClick(e);
	}

	static getDerivedStateFromProps(props, state)
	{
		let AttributeString=`${props.ItemName} Defense:${props.Defense}`;
		if(typeof(props.Strength)!==`undefined`){
			AttributeString+=` Strength:${props.Strength}`
		}
		if(typeof(props.Dexterity)!==`undefined`){
			AttributeString+=` Dexterity:${props.Dexterity}`
		}
		if(typeof(props.Wisdom)!==`undefined`){
			AttributeString+=` Wisdom:${props.Wisdom}`
		}
		if(typeof(props.Crafting)!==`undefined`){
			AttributeString+=` Crafting:${props.Crafting}`
		}
		if(typeof(props.FireDamage)!==`undefined`){
			AttributeString+=` FireDamage:${props.FireDamage}`
		}
		if(typeof(props.FrostDamage)!==`undefined`){
			AttributeString+=` FrostDamage:${props.FrostDamage}`
		}
		if(typeof(props.PoisonResist)!==`undefined`){
			AttributeString+=` PoisonResist:${props.PoisonResist}`
		}
		if(typeof(props.LightningResist)!==`undefined`){
			AttributeString+=` LightningResist:${props.LightningResist}`
		}
		return {Information: AttributeString}
    	
  	}
  	//Boots
	render(){
		return(
			React.createElement('div',{id: this.props.IDName,className: `JungleItems`, name: this.props.ItemName, style:{backgroundImage: this.state.Image,
			},onMouseOver: this.onMouseOver, onMouseOut: this.onMouseOut,onClick: this.handleChange},
				React.createElement('span',{style: {display: this.state.Tooltip}},this.state.Information))
			)
	}

}


class Main extends React.Component{
	constructor(props){
		super(props);
		this.state={
			HPValues: `hidden`,
			XPValues: `hidden`,
			//I.Equipment
			//1.Helmet
			Helmet:`url('Pictures/JungleFinder/Icons/ItemsAddIcon.png')`,
			HelmetActive:`none`,
			HelmetCursor:`default`,
			HelmetInformation: ``,
			//2.Amulet
			Amulet:`url(Pictures/JungleFinder/Icons/ItemsAddIcon.png)`,
			AmuletActive: `none`,
			AmuletCursor: `default`,
			AmuletInformation:``,
			//3.Weapon
			Weapon:`url(Pictures/JungleFinder/Icons/ItemsAddIcon.png)`,
			WeaponActive: `none`,
			WeaponCursor: `default`,
			WeaponInformation:``,
			//4.ChessPlate
			ChessPlate:`url(Pictures/JungleFinder/Icons/ItemsAddIcon.png)`,
			ChessPlateActive: `none`,
			ChessPlateCursor: `default`,
			ChessPlateInformation:``,
			//5. Gloves
			Gloves:`url(Pictures/JungleFinder/Icons/ItemsAddIcon.png)`,
			GlovesActive: `none`,
			GlovesCursor: `default`,
			GlovesInformation:``,
			//6. First Ring
			FirstRing:`url(Pictures/JungleFinder/Icons/ItemsAddIcon.png)`,
			FirstRingActive: `none`,
			FirstRingCursor: `default`,
			FirstRingInformation:``,
			//7. Legs
			Greaves:`url(Pictures/JungleFinder/Icons/ItemsAddIcon.png)`,
			GreavesActive: `none`,
			GreavesCursor: `default`,
			GreavesInformation:``,
			//8.Second Ring
			SecondRing:`url(Pictures/JungleFinder/Icons/ItemsAddIcon.png)`,
			SecondRingActive: `none`,
			SecondRingCursor: `default`,
			SecondRingInformation:``,
			//9.Boots
			Boots:`url(Pictures/JungleFinder/Icons/ItemsAddIcon.png)`,
			BootsActive: `none`,
			BootsCursor: `default`,
			BootsInformation:``,
			//Stats
			StrValue: 10,
			DexValue: 15,
			WisValue: 5,
			CraftValue: 1,
			StrengthCost: 500,
			DexterityCost: 750,
			WisdomCost: 250,
			CraftingCost: 50,


		};
		//I.Spheres
		this.mouseOverSpheres=this.mouseOverSpheres.bind(this);
		this.mouseOutSpheres=this.mouseOutSpheres.bind(this);
		//II.Items Bindings
		//1. Helm
		this.ReceivedHelm=this.ReceivedHelm.bind(this);
		this.HelmMouseOn=this.HelmMouseOn.bind(this);
		this.HelmMouseOff=this.HelmMouseOff.bind(this);
		this.HelmetTakeDown=this.HelmetTakeDown.bind(this);
		//2.Amulet
		this.ReceivedAmulet=this.ReceivedAmulet.bind(this);
		this.AmuletMouseOn=this.AmuletMouseOn.bind(this);
		this.AmuletMouseOff=this.AmuletMouseOff.bind(this);
		this.AmuletTakeOff=this.AmuletTakeOff.bind(this);
		//3.Weapon
		this.ReceivedWeapon=this.ReceivedWeapon.bind(this);
		this.WeaponMouseOn=this.WeaponMouseOn.bind(this);
		this.WeaponMouseOff=this.WeaponMouseOff.bind(this);
		this.WeaponTakeOff=this.WeaponTakeOff.bind(this);
		//4.Chessplate
		this.ReceivedArmor=this.ReceivedArmor.bind(this);
		this.ArmorMouseOn=this.ArmorMouseOn.bind(this);
		this.ArmorMouseOff=this.ArmorMouseOff.bind(this);
		this.TakeArmorOff=this.TakeArmorOff.bind(this);
		//5.Gloves
		this.ReceivedGloves=this.ReceivedGloves.bind(this);
		this.GlovesMouseOn=this.GlovesMouseOn.bind(this);
		this.GlovesMouseOff=this.GlovesMouseOff.bind(this);
		this.GlovesTakeOff=this.GlovesTakeOff.bind(this);
		//6,7. Rings
		this.ReceivedRings=this.ReceivedRings.bind(this);
		this.RingMouseOn=this.RingMouseOn.bind(this);
		this.Ring2MouseOn=this.Ring2MouseOn.bind(this);
		this.RingsMouseOff=this.RingsMouseOff.bind(this);
		this.RingsTakeOff=this.RingsTakeOff.bind(this);
		//8. Greaves
		this.ReceivedGreaves=this.ReceivedGreaves.bind(this);
		this.GreavesMouseOn=this.GreavesMouseOn.bind(this);
		this.GreavesMouseOff=this.GreavesMouseOff.bind(this);
		this.GreavesTakeOff=this.GreavesTakeOff.bind(this);
		//9. Boots
		this.ReceivedBoots=this.ReceivedBoots.bind(this);
		this.BootsMouseOn=this.BootsMouseOn.bind(this);
		this.BootsMouseOff=this.BootsMouseOff.bind(this);
		this.BootsTakeOff=this.BootsTakeOff.bind(this);
	}
	/*Mouse Over Spheres!*/
	mouseOverSpheres(e){
		switch(e.target.id){
			case `JungleFinderLifeSphere`:
				this.setState({HPValues: `visible`});
			break;
			case `JungleFinderXPSphere`:
				this.setState({XPValues: `visible`});
			break;
		}
	}

	mouseOutSpheres(e){
		switch(e.target.id){
			case `JungleFinderLifeSphere`:
				this.setState({HPValues: `hidden`});
			break;
			case `JungleFinderXPSphere`:
				this.setState({XPValues: `hidden`});
			break;
		}
		
	}
	//Profile Item Communications!
	//I. Helmet 
	ReceivedHelm(e){
		if(this.state.HelmetCursor!==`pointer`)
		{
			let ElementID=e.target.id;
			let BGElement=e.target.style.backgroundImage;
			let blokk=BGElement.split('/');
			let BGValue=blokk[blokk.length-1].slice(0,-2);
			let Information=e.target.innerText;
			document.getElementById(ElementID).style.display=`none`;
			//Majd megvizsgalni, hogy tenyleg benne van-e az e (tbb sisak eseteben)
			$globalHelmets.push({Id:ElementID, Background: BGValue});
		this.setState({
			Helmet: BGElement,
			HelmetCursor:`pointer`,
			HelmetInformation: Information,
		})
	}
	else{
		//window.alert('You must put down your own helm first!');
		//Van egy helmet fent illetve egy a tombben!
		//Elsore azt vissza kell rakjuk! Kell meg az ID!
		let Domlength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
		for(let i=0;i<Domlength;i++){
			let item=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
			let blokk=item.style.backgroundImage.split('/');
			let BGThis=blokk[blokk.length-1].slice(0,-2);
			if((BGThis===$globalHelmets[0].Background) && (item.id===$globalHelmets[0].Id) && (item.style.display===`none`))
			{
				item.style.display=`inline-block`;
				$globalHelmets=[];
				break;
			}
		}
		//Most berakjuk az uj elemet!
		let ElementID=e.target.id;
		let BGElement=e.target.style.backgroundImage;
		let blokk2=BGElement.split('/');
		let BGValue=blokk2[blokk2.length-1].slice(0,-2);
		let Information=e.target.innerText;
		document.getElementById(ElementID).style.display=`none`;
		$globalHelmets.push({Id:ElementID, Background: BGValue});
		this.setState({
			Helmet: BGElement,
			HelmetCursor:`pointer`,
			HelmetInformation: Information,
		})

	}
	
	}

	HelmMouseOn(){
		let Background=this.state.Helmet.split('/');
		let bgCheck=Background[Background.length-1].slice(0,-2);
		if(bgCheck!=='ItemsAddIcon.png'){
			this.setState({
				HelmetActive: `inline`,
			})
		}
	}

	HelmMouseOff(){
		this.setState({
				HelmetActive: `none`,
			})
	}

	HelmetTakeDown(e){
		if(this.state.HelmetCursor!==`default`){
			//Mindezek elott visszapakolom a Helmset!
			//Vissza kell jelenitsem az alapertelmezett inventoryban!
			//A tombben mindig 1 elem van, tehat azt az egy elemet kell megtalaljam!
			let Background=e.target.style.backgroundImage;
			let blokk=Background.split('/');
			let BGValue=blokk[blokk.length-1].slice(0,-2);
			let Domlength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
			let element=0;
			for(let i=0;i<Domlength;i++){
					let item=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i].id;
					if((item===$globalHelmets[0].Id) && (BGValue===$globalHelmets[0].Background)){
						document.getElementById(item).style.display=`inline-block`;
						$globalHelmets=[];
							//A feltett sisak informacioit visszaallitjuk alapertelmezettre!
							this.setState({
							Helmet: `url('Pictures/JungleFinder/Icons/ItemsAddIcon.png')`,
							HelmetActive: `none`,
							HelmetCursor:`default`,
							HelmetInformation: ``,
						})
						break;
					}
			}
		}
	}
	//II.Amulet
	ReceivedAmulet(e){
		if(this.state.AmuletCursor!==`pointer`){
			let ElementID=e.target.id;
			let Background=e.target.style.backgroundImage;
			let Info=e.target.innerText;
			this.setState({
				Amulet: Background,
				AmuletCursor: `pointer`,
				AmuletInformation: Info
			})
			document.getElementById(ElementID).style.display=`none`;

		}
		else{
			//Elobb ujra re apperaren(megjelenitem) az armort az armort
			let blokk=this.state.Amulet.split('/');
			let StateBG=blokk[blokk.length-1].slice(0,-2);
			let ElemLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
			for(let i=0;i<ElemLength;i++){
				let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
				let blokk2=element.style.backgroundImage.split('/');
				let ItemBG=blokk2[blokk2.length-1].slice(0,-2);
				let disp=element.style.display;
				if((StateBG===ItemBG) && (disp===`none`)){
					element.style.display=`inline-block`;
					break;
				}
			}
			let ElementID=e.target.id;
			let Background=e.target.style.backgroundImage;
			let info=e.target.innerText;
			this.setState({
				Amulet: Background,
				AmuletCursor: `pointer`,
				AmuletInformation: info
			})
			document.getElementById(ElementID).style.display=`none`;
		}
	}

	AmuletMouseOn(){
		if(this.state.AmuletCursor!==`default`){
			this.setState({
				AmuletActive: `inline`
			})
		}
	}

	AmuletMouseOff(){
		this.setState({
			AmuletActive: `none`
		})
	}

	AmuletTakeOff(e){
		if(this.state.AmuletCursor!==`default`){
			let Blokk=e.target.style.backgroundImage.split('/');
			let BGElement=Blokk[Blokk.length-1].slice(0,-2);
			let ItemsContainerLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
			for(let i=0;i<ItemsContainerLength;i++){
				let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
				let Blokk2=element.style.backgroundImage.split('/');
				let BackgroundIMG=Blokk2[Blokk2.length-1].slice(0,-2);
				let Disp=element.style.display;
				if((BGElement===BackgroundIMG) && (Disp===`none`)){
					element.style.display=`inline-block`;
					this.setState({
						Amulet:`url(Pictures/JungleFinder/Icons/ItemsAddIcon.png)`,
						AmuletActive: `none`,
						AmuletCursor: `default`,
						AmuletInformation:``,
					})
					break;
				}
			}
		}
	}

	//III.Weapon
	ReceivedWeapon(e){
		if(this.state.WeaponCursor!==`pointer`){
			let ElementID=e.target.id;
			let Background=e.target.style.backgroundImage;
			let Info=e.target.innerText;
			this.setState({
				Weapon: Background,
				WeaponCursor: `pointer`,
				WeaponInformation: Info
			})
			document.getElementById(ElementID).style.display=`none`;

		}
		else{
			//Elobb ujra re apperaren(megjelenitem) az armort az armort
			let blokk=this.state.Weapon.split('/');
			let StateBG=blokk[blokk.length-1].slice(0,-2);
			let ElemLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
			for(let i=0;i<ElemLength;i++){
				let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
				let blokk2=element.style.backgroundImage.split('/');
				let ItemBG=blokk2[blokk2.length-1].slice(0,-2);
				let disp=element.style.display;
				if((StateBG===ItemBG) && (disp===`none`)){
					element.style.display=`inline-block`;
					break;
				}
			}
			let ElementID=e.target.id;
			let Background=e.target.style.backgroundImage;
			let info=e.target.innerText;
			this.setState({
				Weapon: Background,
				WeaponCursor: `pointer`,
				WeaponInformation: info
			})
			document.getElementById(ElementID).style.display=`none`;
		}
	}

	WeaponMouseOn(){
		if(this.state.WeaponCursor!==`default`){
			this.setState({
				WeaponActive: `inline`
			})
		}
	}

	WeaponMouseOff(){
		this.setState({
			WeaponActive: `none`
		})
	}

	WeaponTakeOff(e){
		if(this.state.WeaponCursor!==`default`){
			let Blokk=e.target.style.backgroundImage.split('/');
			let BGElement=Blokk[Blokk.length-1].slice(0,-2);
			let ItemsContainerLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
			for(let i=0;i<ItemsContainerLength;i++){
				let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
				let Blokk2=element.style.backgroundImage.split('/');
				let BackgroundIMG=Blokk2[Blokk2.length-1].slice(0,-2);
				let Disp=element.style.display;
				if((BGElement===BackgroundIMG) && (Disp===`none`)){
					element.style.display=`inline-block`;
					this.setState({
						Weapon:`url(Pictures/JungleFinder/Icons/ItemsAddIcon.png)`,
						WeaponActive: `none`,
						WeaponCursor: `default`,
						WeaponInformation:``,
					})
					break;
				}
			}
		}
	}


	//IV.ChessPlate
	ReceivedArmor(e){
		if(this.state.ChessPlateCursor!==`pointer`){
			let ElementID=e.target.id;
			let Background=e.target.style.backgroundImage;
			let Info=e.target.innerText;
			this.setState({
				ChessPlate: Background,
				ChessPlateCursor: `pointer`,
				ChessPlateInformation: Info
			})
			document.getElementById(ElementID).style.display=`none`;

		}
		else{
			//Elobb ujra re apperaren(megjelenitem) az armort az armort
			let blokk=this.state.ChessPlate.split('/');
			let StateBG=blokk[blokk.length-1].slice(0,-2);
			let ElemLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
			for(let i=0;i<ElemLength;i++){
				let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
				let blokk2=element.style.backgroundImage.split('/');
				let ItemBG=blokk2[blokk2.length-1].slice(0,-2);
				let disp=element.style.display;
				if((StateBG===ItemBG) && (disp===`none`)){
					element.style.display=`inline-block`;
					break;
				}
			}
			let ElementID=e.target.id;
			let Background=e.target.style.backgroundImage;
			let info=e.target.innerText;
			this.setState({
				ChessPlate: Background,
				ChessPlateCursor: `pointer`,
				ChessPlateInformation: info
			})
			document.getElementById(ElementID).style.display=`none`;
		}
	}

	ArmorMouseOn(){
		if(this.state.ChessPlateCursor!==`default`){
			this.setState({
				ChessPlateActive: `inline`
			})
		}
	}

	ArmorMouseOff(){
		this.setState({
			ChessPlateActive: `none`
		})
	}

	TakeArmorOff(e){
		//Akkor is ra lehet kattintani, mikor 
		//A backgroundImage az armor lehet csak, es csak azok kozott kell nezzem a displayt!
		if(this.state.ChessPlateCursor!==`default`){
			//Lehet nemis kell tomb, mert a display ami biztosan kozos!
			let Blokk=e.target.style.backgroundImage.split('/');
			let BGElement=Blokk[Blokk.length-1].slice(0,-2);
			let ItemsContainerLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
			for(let i=0;i<ItemsContainerLength;i++){
				let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
				let Blokk2=element.style.backgroundImage.split('/');
				let BackgroundIMG=Blokk2[Blokk2.length-1].slice(0,-2);
				let Disp=element.style.display;
				if((BGElement===BackgroundIMG) && (Disp===`none`)){
					element.style.display=`inline-block`;
					this.setState({
						ChessPlate:`url(Pictures/JungleFinder/Icons/ItemsAddIcon.png)`,
						ChessPlateActive: `none`,
						ChessPlateCursor: `default`,
						ChessPlateInformation:``,
					})
					break;
				}
			}
		}
	}



	//V.Gloves
	ReceivedGloves(e){
		if(this.state.GlovesCursor!==`pointer`){
			let ElementID=e.target.id;
			let Background=e.target.style.backgroundImage;
			let Info=e.target.innerText;
			this.setState({
				Gloves: Background,
				GlovesCursor: `pointer`,
				GlovesInformation: Info
			})
			document.getElementById(ElementID).style.display=`none`;

		}
		else{
			//Elobb ujra re apperaren(megjelenitem) az armort az armort
			let blokk=this.state.Gloves.split('/');
			let StateBG=blokk[blokk.length-1].slice(0,-2);
			let ElemLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
			for(let i=0;i<ElemLength;i++){
				let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
				let blokk2=element.style.backgroundImage.split('/');
				let ItemBG=blokk2[blokk2.length-1].slice(0,-2);
				let disp=element.style.display;
				if((StateBG===ItemBG) && (disp===`none`)){
					element.style.display=`inline-block`;
					break;
				}
			}
			let ElementID=e.target.id;
			let Background=e.target.style.backgroundImage;
			let info=e.target.innerText;
			this.setState({
				Gloves: Background,
				GlovesCursor: `pointer`,
				GlovesInformation: info
			})
			document.getElementById(ElementID).style.display=`none`;
		}
	}

	GlovesMouseOn(){
		if(this.state.GlovesCursor!==`default`){
			this.setState({
				GlovesActive: `inline`
			})
		}
	}

	GlovesMouseOff(){
		this.setState({
			GlovesActive: `none`
		})
	}

	GlovesTakeOff(e){
		if(this.state.GlovesCursor!==`default`){
			let Blokk=e.target.style.backgroundImage.split('/');
			let BGElement=Blokk[Blokk.length-1].slice(0,-2);
			let ItemsContainerLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
			for(let i=0;i<ItemsContainerLength;i++){
				let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
				let Blokk2=element.style.backgroundImage.split('/');
				let BackgroundIMG=Blokk2[Blokk2.length-1].slice(0,-2);
				let Disp=element.style.display;
				if((BGElement===BackgroundIMG) && (Disp===`none`)){
					element.style.display=`inline-block`;
					this.setState({
						Gloves:`url(Pictures/JungleFinder/Icons/ItemsAddIcon.png)`,
						GlovesActive: `none`,
						GlovesCursor: `default`,
						GlovesInformation:``,
					})
					break;
				}
			}
		}
	}


	//VI,VII.Rings
	ReceivedRings(e){
		if(this.state.FirstRingCursor!==`pointer`){
			let ElementID=e.target.id;
			let Background=e.target.style.backgroundImage;
			let Info=e.target.innerText;
			this.setState({
				FirstRing: Background,
				FirstRingCursor: `pointer`,
				FirstRingInformation: Info
			})
			document.getElementById(ElementID).style.display=`none`;

		}
		else{
			if(this.state.SecondRingCursor!==`pointer`){
			let ElementID=e.target.id;
			let Background=e.target.style.backgroundImage;
			let Info=e.target.innerText;
			this.setState({
				SecondRing: Background,
				SecondRingCursor: `pointer`,
				SecondRingInformation: Info
			})
			document.getElementById(ElementID).style.display=`none`;
			}
			else{
			//Elobb ujra re apperaren(megjelenitem) az armort az armort
			let blokk=this.state.FirstRing.split('/');
			let StateBG=blokk[blokk.length-1].slice(0,-2);
			let ElemLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
			for(let i=0;i<ElemLength;i++){
				let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
				let blokk2=element.style.backgroundImage.split('/');
				let ItemBG=blokk2[blokk2.length-1].slice(0,-2);
				let disp=element.style.display;
				if((StateBG===ItemBG) && (disp===`none`)){
					element.style.display=`inline-block`;
					break;
				}
			}
			let ElementID=e.target.id;
			let Background=e.target.style.backgroundImage;
			let info=e.target.innerText;
			this.setState({
				FirstRing: Background,
				FirstRingCursor: `pointer`,
				FirstRingInformation: info
			})
			document.getElementById(ElementID).style.display=`none`;
		}
		}
	}

	RingMouseOn(){
		if(this.state.FirstRingCursor!==`default`){
			this.setState({
				FirstRingActive: `inline`
			})
		}
	}

	Ring2MouseOn(){
		if(this.state.SecondRingCursor!==`default`){
			this.setState({
				SecondRingActive: `inline`
			})
		}
	}

	RingsMouseOff(){
		this.setState({
				FirstRingActive: `none`,
				SecondRingActive: `none`
			})
	}

	RingsTakeOff(e){
			let Blokk=e.target.style.backgroundImage.split('/');
			let BGElement=Blokk[Blokk.length-1].slice(0,-2);
			let Blokkk=this.state.FirstRing.split('/');
			let BackgroundIMGThis=Blokkk[Blokkk.length-1].slice(0,-2);
			let Blokkk2=this.state.SecondRing.split('/');
			let BackgroundIMGThis2=Blokkk2[Blokkk2.length-1].slice(0,-2);
		if((this.state.FirstRingCursor!==`default`) && (BGElement===BackgroundIMGThis)){
			let ItemsContainerLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
			for(let i=0;i<ItemsContainerLength;i++){
				let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
				let Blokk2=element.style.backgroundImage.split('/');
				let BackgroundIMG=Blokk2[Blokk2.length-1].slice(0,-2);
				let Disp=element.style.display;
				if((BGElement===BackgroundIMG) && (Disp===`none`)){
					element.style.display=`inline-block`;
					this.setState({
						FirstRing:`url(Pictures/JungleFinder/Icons/ItemsAddIcon.png)`,
						FirstRingActive: `none`,
						FirstRingCursor: `default`,
						FirstRingInformation:``,
					})
					break;
				}
			}
		}
		else{
			if((this.state.SecondRingCursor!==`default`) && (BGElement===BackgroundIMGThis2))
			{
			let ItemsContainerLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
			for(let i=0;i<ItemsContainerLength;i++){
				let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
				let Blokk2=element.style.backgroundImage.split('/');
				let BackgroundIMG=Blokk2[Blokk2.length-1].slice(0,-2);
				let Disp=element.style.display;
				if((BGElement===BackgroundIMG) && (Disp===`none`)){
					element.style.display=`inline-block`;
					this.setState({
						SecondRing:`url(Pictures/JungleFinder/Icons/ItemsAddIcon.png)`,
						SecondRingActive: `none`,
						SecondRingCursor: `default`,
						SecondRingInformation:``,
					})
					break;
				}
			}
			}
		}
	}

	//VIII.Greaves
	ReceivedGreaves(e){
		if(this.state.GreavesCursor!==`pointer`){
			let ElementID=e.target.id;
			let Background=e.target.style.backgroundImage;
			let Info=e.target.innerText;
			this.setState({
				Greaves: Background,
				GreavesCursor: `pointer`,
				GreavesInformation: Info
			})
			document.getElementById(ElementID).style.display=`none`;

		}
		else{
			//Elobb ujra re apperaren(megjelenitem) az armort az armort
			let blokk=this.state.Greaves.split('/');
			let StateBG=blokk[blokk.length-1].slice(0,-2);
			let ElemLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
			for(let i=0;i<ElemLength;i++){
				let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
				let blokk2=element.style.backgroundImage.split('/');
				let ItemBG=blokk2[blokk2.length-1].slice(0,-2);
				let disp=element.style.display;
				if((StateBG===ItemBG) && (disp===`none`)){
					element.style.display=`inline-block`;
					break;
				}
			}
			let ElementID=e.target.id;
			let Background=e.target.style.backgroundImage;
			let info=e.target.innerText;
			this.setState({
				Greaves: Background,
				GreavesCursor: `pointer`,
				GreavesInformation: info
			})
			document.getElementById(ElementID).style.display=`none`;
		}
	}

	GreavesMouseOn(){
		if(this.state.GreavesCursor!==`default`){
			this.setState({
				GreavesActive: `inline`
			})
		}
	}

	GreavesMouseOff(){
		this.setState({
			GreavesActive: `none`
		})
	}

	GreavesTakeOff(e){
		if(this.state.GreavesCursor!==`default`){
			let Blokk=e.target.style.backgroundImage.split('/');
			let BGElement=Blokk[Blokk.length-1].slice(0,-2);
			let ItemsContainerLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
			for(let i=0;i<ItemsContainerLength;i++){
				let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
				let Blokk2=element.style.backgroundImage.split('/');
				let BackgroundIMG=Blokk2[Blokk2.length-1].slice(0,-2);
				let Disp=element.style.display;
				if((BGElement===BackgroundIMG) && (Disp===`none`)){
					element.style.display=`inline-block`;
					this.setState({
						Greaves:`url(Pictures/JungleFinder/Icons/ItemsAddIcon.png)`,
						GreavesActive: `none`,
						GreavesCursor: `default`,
						GreavesInformation:``,
					})
					break;
				}
			}
		}
	}

	//IX.Boots
	ReceivedBoots(e){
		if(this.state.BootsCursor!==`pointer`){
			let ElementID=e.target.id;
			let Background=e.target.style.backgroundImage;
			let Info=e.target.innerText;
			this.setState({
				Boots: Background,
				BootsCursor: `pointer`,
				BootsInformation: Info
			})
			document.getElementById(ElementID).style.display=`none`;

		}
		else{
			//Elobb ujra re apperaren(megjelenitem) az armort az armort
			let blokk=this.state.Boots.split('/');
			let StateBG=blokk[blokk.length-1].slice(0,-2);
			let ElemLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
			for(let i=0;i<ElemLength;i++){
				let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
				let blokk2=element.style.backgroundImage.split('/');
				let ItemBG=blokk2[blokk2.length-1].slice(0,-2);
				let disp=element.style.display;
				if((StateBG===ItemBG) && (disp===`none`)){
					element.style.display=`inline-block`;
					break;
				}
			}
			let ElementID=e.target.id;
			let Background=e.target.style.backgroundImage;
			let info=e.target.innerText;
			this.setState({
				Boots: Background,
				BootsCursor: `pointer`,
				BootsInformation: info
			})
			document.getElementById(ElementID).style.display=`none`;
		}
	}

	BootsMouseOn(){
		if(this.state.BootsCursor!==`default`){
			this.setState({
				BootsActive: `inline`
			})
		}
	}

	BootsMouseOff(){
		this.setState({
			BootsActive: `none`
		})
	}

	BootsTakeOff(e){
		if(this.state.BootsCursor!==`default`){
			let Blokk=e.target.style.backgroundImage.split('/');
			let BGElement=Blokk[Blokk.length-1].slice(0,-2);
			let ItemsContainerLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
			for(let i=0;i<ItemsContainerLength;i++){
				let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
				let Blokk2=element.style.backgroundImage.split('/');
				let BackgroundIMG=Blokk2[Blokk2.length-1].slice(0,-2);
				let Disp=element.style.display;
				if((BGElement===BackgroundIMG) && (Disp===`none`)){
					element.style.display=`inline-block`;
					this.setState({
						Boots:`url(Pictures/JungleFinder/Icons/ItemsAddIcon.png)`,
						BootsActive: `none`,
						BootsCursor: `default`,
						BootsInformation:``,
					})
					break;
				}
			}
		}
	}



	render(){
		return(
			React.createElement('div',{id: `JungleMainDiv`},
				React.createElement('h1',{id: `JungleTitle`},`Jungle Finder`),
				//Accessories
				React.createElement('span',{id: `JungleHPCurrentValue`, style:{visibility: this.state.HPValues}},1000),
				React.createElement('span',{id: `JungleHPMaxValue`, style:{visibility: this.state.HPValues}},`/1000`),
				React.createElement('span',{id: `JungleXPCurrentValue`,style:{visibility: this.state.XPValues}},1),
				React.createElement('span',{id: `JungleXPMaxValue`,style:{visibility: this.state.XPValues}},`/100`),
				React.createElement('div',{id: `JungleFinderLifeSphere`,onMouseOver:this.mouseOverSpheres, onMouseOut:this.mouseOutSpheres},null),
				React.createElement('div',{id: `JungleGoldAccessory`},`1000`),
				React.createElement('div',{id: `JungleJewelAccessory`},`100`),
				React.createElement('div',{id: `JungleFinderXPSphere`,onMouseOver:this.mouseOverSpheres, onMouseOut:this.mouseOutSpheres},null),
				React.createElement('div',{id: `JungleContainer`},
					React.createElement('div',{id:`Menu`},
						React.createElement('div',{id: `JungleMenuCharacter`},
							React.createElement('span',{id: `JungleMenuCharacterIcon`},`AB`),`Character`),
						React.createElement('div',{id: `JungleMenuInventory`},
							React.createElement('span',{className: `JungleLock`},`Lock`),
							React.createElement('span',{id: `JungleMenuInventoryIcon`},`AB`),`Inventory`),
						React.createElement('div',{id: `JungleMenuQuests`},
							React.createElement('span',{className: `JungleLock`},`Lock`),
							React.createElement('span',{id: `JungleMenuQuestsIcon`},`AB`),`Quests`),
						React.createElement('div',{id: `JungleMenuJungleFinder`},
							React.createElement('span',{className: `JungleLock`},`Lock`),
							React.createElement('span',{id: `JungleMenuJungleFinderIcon`},`AB`),`Finding`),
						React.createElement('div',{id: `JungleMenuBattle`},
							React.createElement('span',{className: `JungleLock`},`Lock`),
							React.createElement('span',{id: `JungleMenuBattleIcon`},`AB`),`Battle`),
						React.createElement('div',{id: `JungleMenuHazardGame`},
							React.createElement('span',{id: `JungleMenuHazardGameIcon`},`AB`),`Bet Game`),
						React.createElement('div',{id: `JungleMenuBuyJewels`},
							React.createElement('span',{className: `JungleLock`},`Lock`),
							React.createElement('span',{id: `JungleMenuBuyJewelsIcon`},`AB`),`Buy Jewels`),),
					//The Changer Divs
					//Character Part
					React.createElement('div',{id:`JungleCharacterDiv`},
						React.createElement('div',{id: `JungleCharacterItemsDiv`},
							React.createElement('h1',{id: `JungleItemsHeader`},`Items`),
							//Items Container
							React.createElement('div',{id: `JungleCurrentItems`},
								React.createElement(Helms,{onClick: this.ReceivedHelm,IDName:`Helm1`,Dexterity:8,
									Crafting:1,LightningDamage:3},null),
								React.createElement(Helms,{onClick: this.ReceivedHelm,Image:`KnightHelm.png`,IDName:`Helm2`,
									ItemName: `KnightHelmet`,Defense:25,Dexterity:12,Strength:10,FrostDamage:8},null),
								React.createElement(Chessplates,{onClick:this.ReceivedArmor, Image:`Armor.png`,IDName:`Armor1`,ItemName:`SmallChessplate`,Defense:40,FireDamage:10,
									Strength:25,Dexterity:20,Wisdom:18,Crafting:5}),
								React.createElement(Helms,{onClick: this.ReceivedHelm,Image:`ProtectiveHelm.png`,IDName:`Helm3`,
									ItemName: `DefensiveHelmet`,Defense:80,Strength:10,Dexterity:35,Wisdom:17,Crafting:2},null),
								React.createElement(Chessplates,{onClick:this.ReceivedArmor, Image:`SteelPlate.png`,IDName:`Armor2`,ItemName:`StrongChessplate`,Defense:80,FireDamage:22,
									Strength:55,Dexterity:30,Wisdom:27,Crafting:9}),
								React.createElement(Amulets,{onClick:this.ReceivedAmulet, Image:`Amulet.png`,IDName:`Amulet1`,ItemName:`BlessedAmulet`,DefensePercent:10,DamagePercent:18,
									Strength:25,Dexterity:11,Wisdom:80,Crafting:11,PoisonDamage:10,LightningDamage:10,FrostDamage:10,FireDamage:10}),
								React.createElement(Weapons,{onClick:this.ReceivedWeapon,IDName:`Weapon1`,ItemName:`ShortSword`,Damage:`5-8`,DamagePercent:5,
									Strength:55,Dexterity:45,PoisonDamage:5,FireDamage: 10,FrostDamage:10,LightningDamage:5}),
								React.createElement(Gloves,{onClick:this.ReceivedGloves,IDName:`Gloves1`,Defense:20,DamagePercent:5,
									DefensePercent:10,Dexterity:45,Wisdom:60,FireResist:15,LightningResist:25,FrostResist:15}),
								React.createElement(Amulets,{onClick:this.ReceivedAmulet, Image:`GodAmulet.png`,IDName:`Amulet2`,ItemName:`GodAmulet`,Health:500,DefensePercent:50,
									Strength:-10,Dexterity:90,Wisdom:10,Crafting:-2,PoisonDamage:25}),
								React.createElement(Weapons,{onClick:this.ReceivedWeapon,IDName:`Weapon2`,Image:`Sword.png`,ItemName:`BattleSword`,Damage:`12-16`,
									Strength:75,Dexterity:60,PoisonDamage:10,FireDamage: 10,FrostDamage:10,LightningDamage:10}),
								React.createElement(Gloves,{onClick:this.ReceivedGloves,ItemName:`WarmGloves`,IDName:`Gloves2`,Image:`WarmGloves.png`,Defense:50,DamagePercent:8,
									DefensePercent:20,Dexterity:75,Wisdom:105,FireResist:35,LightningResist:48,FrostResist:35}),
								React.createElement(Rings,{onClick:this.ReceivedRings,IDName:`Ring1`,Health: 200,Strength:100,Dexterity:100,Wisdom:110,
									Crafting:25,PoisonResist:20, FireResist:20,LightningResist:23,FrostResist:20,PoisonDamage:5,LightningDamage:5,FrostDamage:5,FireDamage:5}),
								React.createElement(Rings,{onClick:this.ReceivedRings,ItemName:`MagicRing`,Image:`MagicRing.png`,IDName:`Ring2`,Health: 50,Strength:10,Dexterity:10,Wisdom:250,
									Crafting:-10,PoisonResist:200, FireResist:-10,LightningResist:-10,FrostResist:-10,PoisonDamage:75}),
								React.createElement(Rings,{onClick:this.ReceivedRings,ItemName:`HealthRing`,Image:`HealthRing.png`,IDName:`Ring3`,Health:1500,Strength:125,Dexterity:125,
									Crafting:-15, FireResist:150,LightningResist:-10,FrostResist:-15,FireDamage:67}),
								React.createElement(Greaves,{onClick:this.ReceivedGreaves,ItemName:`MetalGreaves`,Image:`SteelGreaves.png`,IDName:`SteelGreaves02`,Defense:75,
									Strength:57,Dexterity:46,Wisdom:33,Crafting:90,PoisonDamage:6, LightningDamage:8, FrostResist:25,FireResist:25}),
								React.createElement(Rings,{onClick:this.ReceivedRings,ItemName:`FrostRing`,Image:`DiamondRing.png`,IDName:`Ring4`,Health:50,Strength:300,Dexterity:-100,
									Wisdom:50, FrostDamage:100, FrostResist:300, FireDamage:-25,FireResist:-300}),
								React.createElement(Greaves,{onClick:this.ReceivedGreaves,Strength:38,Dexterity:23,
									Wisdom:33,Crafting:50,PoisonDamage:12,LightningDamage:7, FrostResist:10, FireResist:15}),
								React.createElement(Greaves,{onClick:this.ReceivedGreaves,ItemName:`MetalGreaves`,Image:`MetalGreaves.png`,IDName:`Greaves01`,Defense:50,
									Strength:27,Dexterity:15,Wisdom:22,Crafting:65,PoisonDamage:20, LightningDamage:16, FrostResist:18,FireResist:19}),
								React.createElement(Boots,{onClick:this.ReceivedBoots,Strength:19,Dexterity:21,
									Wisdom:15,Crafting:28,FireDamage:10,FrostDamage:6, PoisonResist:31, LightningResist:32}),
								React.createElement(Boots,{onClick:this.ReceivedBoots,ItemName:`KnightBoots`,IDName:`Boots01`,Image:`KnightBoots.png`,
									Defense:35,Strength:30,Dexterity:43,Wisdom:29,Crafting:38,FireDamage:17,FrostDamage:15, PoisonResist:53, LightningResist:52}),
								React.createElement(Boots,{onClick:this.ReceivedBoots,ItemName:`SteelPlateBoots`,IDName:`Boots02`,Image:`SteelPlateBoots.png`,
									Defense:65,Strength:51,Dexterity:68,Wisdom:64,Crafting:60,FireDamage:30,FrostDamage:35, PoisonResist:85, LightningResist:87}),
								),
							React.createElement('h1',{id: `JunglePotionsHeader`},`Potions`),
							//Potions Container
							React.createElement('div',{id: `JungleCurrentPotions`},null),
							),
						React.createElement('div',{id: `JungleCharacterProfile`},
							//Items Helm,Armor etc.(Feltett dolgok)
							React.createElement('div',{id: `JungleProfileImageSettings`},
								//Helmet
								React.createElement('div',{id:`JungleHelmetProfile`,style:{backgroundImage: this.state.Helmet, cursor:this.state.HelmetCursor},onMouseOver: this.HelmMouseOn,
									onMouseOut:this.HelmMouseOff, onClick:this.HelmetTakeDown},
									React.createElement('span',{style:{display: this.state.HelmetActive}},this.state.HelmetInformation)),
								//Amulett
								React.createElement('div',{id:`JungleAmuletProfile`, style:{backgroundImage:this.state.Amulet, cursor:this.state.AmuletCursor},
													onMouseOver:this.AmuletMouseOn, onMouseOut:this.AmuletMouseOff, onClick:this.AmuletTakeOff},
									React.createElement('span',{style: {display:this.state.AmuletActive}},this.state.AmuletInformation)),
								//Weapon
								React.createElement('div',{id:`JungleWeaponsProfile`, style:{backgroundImage:this.state.Weapon, cursor:this.state.WeaponCursor},
													onMouseOver:this.WeaponMouseOn, onMouseOut:this.WeaponMouseOff, onClick:this.WeaponTakeOff},
									React.createElement('span',{style: {display:this.state.WeaponActive}},this.state.WeaponInformation)),
								//Chessplate
								React.createElement('div',{id:`JungleChessplateProfile`, style:{backgroundImage:this.state.ChessPlate, cursor:this.state.ChessPlateCursor},
													onMouseOver:this.ArmorMouseOn, onMouseOut:this.ArmorMouseOff, onClick:this.TakeArmorOff},
									React.createElement('span',{style: {display:this.state.ChessPlateActive}},this.state.ChessPlateInformation)),
								//Gloves
								React.createElement('div',{id:`JungleGlovesProfile`, style:{backgroundImage:this.state.Gloves, cursor:this.state.GlovesCursor},
													onMouseOver:this.GlovesMouseOn, onMouseOut:this.GlovesMouseOff, onClick:this.GlovesTakeOff},
									React.createElement('span',{style: {display:this.state.GlovesActive}},this.state.GlovesInformation)),
								//First Ring
								React.createElement('div',{id:`JungleFirstRingProfile`, style:{backgroundImage:this.state.FirstRing, cursor:this.state.FirstRingCursor},
													onMouseOver:this.RingMouseOn, onMouseOut:this.RingsMouseOff, onClick:this.RingsTakeOff},
									React.createElement('span',{style: {display:this.state.FirstRingActive}},this.state.FirstRingInformation)),
								//Greaves
								React.createElement('div',{id:`JungleLegsProfile`, style:{backgroundImage:this.state.Greaves, cursor:this.state.GreavesCursor},
													onMouseOver:this.GreavesMouseOn, onMouseOut:this.GreavesMouseOff, onClick:this.GreavesTakeOff},
									React.createElement('span',{style: {display:this.state.GreavesActive}},this.state.GreavesInformation)),
								//Second Ring
								React.createElement('div',{id:`JungleSecondRingProfile`, style:{backgroundImage:this.state.SecondRing, cursor:this.state.SecondRingCursor},
													onMouseOver:this.Ring2MouseOn, onMouseOut:this.RingsMouseOff, onClick:this.RingsTakeOff},
									React.createElement('span',{style: {display:this.state.SecondRingActive}},this.state.SecondRingInformation)),
								//Boots
								React.createElement('div',{id:`JungleBootsProfile`, style:{backgroundImage:this.state.Boots, cursor:this.state.BootsCursor},
													onMouseOver:this.BootsMouseOn, onMouseOut:this.BootsMouseOff, onClick:this.BootsTakeOff},
									React.createElement('span',{style: {display:this.state.BootsActive}},this.state.BootsInformation)),
								),
							React.createElement('div',{id: `JungleProfileStats`},
								React.createElement('span',{id: `JungleProfileStrength`},`Strength ${this.state.StrValue}`),
								React.createElement('span',{id: `JungleProfileStrengthPlus`},`+`),
								React.createElement('span',{id: `JungleProfileStrCost`},`Cost ${this.state.StrengthCost}`),
								React.createElement('span',{className: `JungleGoldIcon`},`AB`),
								React.createElement('br',{},null),
								React.createElement('span',{id: `JungleProfileDex`},`Dexterity ${this.state.DexValue}`),
								React.createElement('span',{id: `JungleProfileDexPlus`},`+`),
								React.createElement('span',{id: `JungleProfileDexCost`},`Cost ${this.state.DexterityCost}`),
								React.createElement('span',{className: `JungleGoldIcon`},`AB`),
								React.createElement('br',{},null),
								React.createElement('span',{id: `JungleProfileWisdom`},`Wisdom ${this.state.WisValue}`),
								React.createElement('span',{id: `JungleProfileWisdomPlus`},`+`),
								React.createElement('span',{id: `JungleProfileWisdomCost`},`Cost ${this.state.WisdomCost}`),
								React.createElement('span',{className: `JungleGoldIcon`},`AB`),
								React.createElement('br',{},null),
								React.createElement('span',{id: `JungleProfileCrafting`},`Crafting ${this.state.CraftValue}`),
								React.createElement('span',{id: `JungleProfileCraftingPlus`},`+`),
								React.createElement('span',{id: `JungleProfileCraftingCost`},`Cost ${this.state.CraftingCost}`),
								React.createElement('span',{className: `JungleGoldIcon`},`AB`),
								React.createElement('br',{},null),),
							),),))
			);
	}
}


ReactDOM.render(React.createElement(Main,{},null),document.getElementById('JungleFinderWithReact'));