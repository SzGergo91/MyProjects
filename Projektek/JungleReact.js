'use strict'


let $globalHelmets=[];
//A feltetel annyi, hogy ezeket mindig megkell adni es kesz!

let $globalScreenWidthMQ=screen.width;

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


class FirstRings extends React.Component{
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
		ItemName: `DefaultRing(1)`,
		Health: 90,
		Image: `Ring.png`,
		IDName:`FirstRing${Math.floor(Math.random()*10000)}`

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
  	//FirstRings
	render(){
		return(
			React.createElement('div',{id: this.props.IDName,className: `JungleItems`, name: this.props.ItemName, style:{backgroundImage: this.state.Image,
			},onMouseOver: this.onMouseOver, onMouseOut: this.onMouseOut,onClick: this.handleChange},
				React.createElement('span',{style: {display: this.state.Tooltip}},this.state.Information))
			)
	}

}


class SecondRings extends React.Component{
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
		ItemName: `DefaultRing(2)`,
		Health: 90,
		Image: `Ring2.png`,
		IDName:`SecondRing${Math.floor(Math.random()*10000)}`

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
  	//SecondRings
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
			//I. Basic Accessories
			HPValues: `hidden`,
			XPValues: `hidden`,
			GoldValue: 75000,
			JewelValue: 100,
			//II.Equipment
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
			//III.Stats
			//1.A) Base Values
			StrValue: 10,
			DexValue: 15,
			WisValue: 5,
			CraftValue: 1,
			//1.B) Values
			SValue:0,
			DValue:0,
			WValue:0,
			CValue:0,
			//2. Steps
			StrengthStep:50,
			DexterityStep:50,
			WisdomStep:50,
			CraftingStep:50,
			//3. Factors
			StrengthFactor:0,
			DexterityFactor:0,
			WisdomFactor:0,
			CraftingFactor:0,
			//4.Costs
			StrengthCost: 500,
			DexterityCost: 750,
			WisdomCost: 250,
			CraftingCost: 50,
			//5.Appearances
			StrengthAppearance: `inline`,
			DexterityAppearance: `inline`,
			WisdomAppearance: `inline`,
			CraftingAppearance: `inline`,
			//III. BetGame Components
			//1.Switch MainGames
			HazardGameBG: `url('Pictures/JungleFinder/BetGameComponents/JungleBetGame.png') ,url('Pictures/JungleFinder/ItemsPotionsBG.png')`,
			PathGameActive: `block`,
			ChestGameActive: `none`,
			PathMover: {
				Background: `url('Pictures/JungleFinder/BetGameComponents/PathMoverOn.png'), url('Pictures/JungleFinder/MenuItemsSelected.jpg')`,
				cursor:`default`,
				visibility: `visible`
			},
			ChestOpen:{
				Background: `url('Pictures/JungleFinder/BetGameComponents/ChestOpenOff.png'), url('Pictures/JungleFinder/HeaderBG.jpg')`,
				cursor: `pointer`,
				visibility:`visible`,
			},
			//2.A)InputValues
			BetGoldValue:`Value`,
			BetJewelValue:`Value`,
			JewelPart:`none`,
			AndPart:`none`,
			GoldPart:`none`,
			InfoDisplay: `none`,
			BetStandardPlatform: `inline-block`,
			BetRiskyPlatform: `none`,
			BetRiskiestPlatform: `none`,
			//2.B)Input Changers
			GoldInputState: {Disabled: false, Opac:1},
			JewelInputState: {Disabled: false, Opac:1},
			BetState:{Disabled: false, Opac:1, Curs:`pointer`},
			//3.BetGameField
			//A)PathMover Difficulties
			SelectedBetGameHeader:`PathMover`,
			StandardState: {
				border: `0.2vw solid red`,
				backgroundImage:`url('Pictures/JungleFinder/BetGameComponents/DifficultySelectionCheck.png'),	
								 url('Pictures/JungleFinder/BetGameComponents/JungleDifficultyStandard.jpg')`,
				cursor: `default`,
				visibility: `visible`
			},
			RiskyState:{
				border: `0.2vw solid black`,
				backgroundImage:`url(''),	
								 url('Pictures/JungleFinder/BetGameComponents/JungleDifficultyRisky.jpg')`,
				cursor: `pointer`,
				visibility: `visible`
			},
			RiskiestState:{
				border: `0.2vw solid black`,
				backgroundImage:`url(''),	
								 url('Pictures/JungleFinder/BetGameComponents/JungleDifficultyRiskiest.jpg')`,
				cursor: `pointer`,
				visibility: `visible`
			},

		    //B)GameField
		    //a)Standard
		    StandardGame:{
		    	//I.Multipliers
		    	FirstMulti:`transparent`,
		    	SecondMulti:`transparent`,
		    	ThirdMulti:`transparent`,
		    	FourthMulti:`transparent`,
		    	FifthMulti:`transparent`,
		    	SixthMulti:`transparent`,
		    	SeventhMulti:`transparent`,
		    	//II.Columns
		    	FirstColumn:`pointer`,
		    	SecondColumn:`default`,
		    	ThirdColumn:`default`,
		    	FourthColumn:`default`,
		    	FifthColumn:`default`,
		    	SixthColumn:`default`,
		    	SeventhColumn:`default`,
		    },
		    //b) Risky
		    RiskyGame: {
		    	FirstMulti:`transparent`,
		    	SecondMulti:`transparent`,
		    	ThirdMulti:`transparent`,
		    	FourthMulti:`transparent`,
		    	FifthMulti:`transparent`,
		    	SixthMulti:`transparent`,
		    	SeventhMulti:`transparent`,
		    	//II.Columns
		    	FirstColumn:`pointer`,
		    	SecondColumn:`default`,
		    	ThirdColumn:`default`,
		    	FourthColumn:`default`,
		    	FifthColumn:`default`,
		    	SixthColumn:`default`,
		    	SeventhColumn:`default`,
		    },
		   	//c) Riskiest
		    RiskiestGame: {
		    	FirstMulti:`transparent`,
		    	SecondMulti:`transparent`,
		    	ThirdMulti:`transparent`,
		    	FourthMulti:`transparent`,
		    	FifthMulti:`transparent`,
		    	SixthMulti:`transparent`,
		    	SeventhMulti:`transparent`,
		    	//II.Columns
		    	FirstColumn:`pointer`,
		    	SecondColumn:`default`,
		    	ThirdColumn:`default`,
		    	FourthColumn:`default`,
		    	FifthColumn:`default`,
		    	SixthColumn:`default`,
		    	SeventhColumn:`default`,
		    },
		    //C. Chestopen Components
		    ChestOpenInfo: `none`,
		    ChestNumbers:5,
		    FirstChestOpen:false,
		    FirstChestConsumCheck: false,
		   

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
		this.GlovesMouseOn=this.GlovesMouseOn.bind(this)
		this.GlovesMouseOff=this.GlovesMouseOff.bind(this);
		this.GlovesTakeOff=this.GlovesTakeOff.bind(this);
		//6.FirstRing
		this.ReceivedFirstRings=this.ReceivedFirstRings.bind(this);
		this.FirstRingMouseOn=this.FirstRingMouseOn.bind(this);
		this.FirstRingMouseOff=this.FirstRingMouseOff.bind(this);
		this.FirstRingTakeOff=this.FirstRingTakeOff.bind(this);
		//7. Greaves
		this.ReceivedGreaves=this.ReceivedGreaves.bind(this);
		this.GreavesMouseOn=this.GreavesMouseOn.bind(this);
		this.GreavesMouseOff=this.GreavesMouseOff.bind(this);
		this.GreavesTakeOff=this.GreavesTakeOff.bind(this);
		//8. SecondRing
		this.ReceivedSecondRings=this.ReceivedSecondRings.bind(this);
		this.SecondRingMouseOn=this.SecondRingMouseOn.bind(this);
		this.SecondRingMouseOff=this.SecondRingMouseOff.bind(this);
		this.SecondRingTakeOff=this.SecondRingTakeOff.bind(this);
		//9. Boots
		this.ReceivedBoots=this.ReceivedBoots.bind(this);
		this.BootsMouseOn=this.BootsMouseOn.bind(this);
		this.BootsMouseOff=this.BootsMouseOff.bind(this);
		this.BootsTakeOff=this.BootsTakeOff.bind(this);
		//III. Stat Modifier Functions
		//1. Modify by items
		this.StatsRefreshReceived=this.StatsRefreshReceived.bind(this);
		this.StatsRefreshTakeOff=this.StatsRefreshTakeOff.bind(this);
		//2. Modify by money
		this.AttributeClick=this.AttributeClick.bind(this);
		this.ConsumablesCheck=this.ConsumablesCheck.bind(this);
		///IV. Menu Methods
		this.JungleMenuChoice=this.JungleMenuChoice.bind(this);
		//V. BetGameMethods
		//A.PathMover
		this.SetBet=this.SetBet.bind(this);
		this.InformationToggle=this.InformationToggle.bind(this);
		this.BetClick=this.BetClick.bind(this);
		this.StandardClick=this.StandardClick.bind(this);
		this.RiskyClick=this.RiskyClick.bind(this);
		this.RiskiestClick=this.RiskiestClick.bind(this);
		this.CardPickStandard=this.CardPickStandard.bind(this);
		this.CardPickRisky=this.CardPickRisky.bind(this);
		this.CardPickRiskiest=this.CardPickRiskiest.bind(this);
		this.CardsShow=this.CardsShow.bind(this);

		this.GenerateCardVariables=this.GenerateCardVariables.bind(this);
		this.Accept=this.Accept.bind(this);
		this.GameChanger=this.GameChanger.bind(this);
		//B.ChestOpen
		this.ChestGameInformation=this.ChestGameInformation.bind(this);
		this.ChestOpen=this.ChestOpen.bind(this);
		this.DivideNumbers=this.DivideNumbers.bind(this);
		this.DivideMultipliers=this.DivideMultipliers.bind(this);
		this.ChestInput=this.ChestInput.bind(this);
		this.ChestAccept=this.ChestAccept.bind(this);


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
			if(e.target.id.length!==0)
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
				this.StatsRefreshReceived(e,``);
			}
		}
	else{
		//window.alert('You must put down your own helm first!');
		//Van egy helmet fent illetve egy a tombben!
		//Elsore azt vissza kell rakjuk! Kell meg az ID!
		if(e.target.id.length!==0)
		{
			let Domlength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
			for(let i=0;i<Domlength;i++)
			{
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
			this.StatsRefreshReceived(e,this.state.HelmetInformation);
		}
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
		if((this.state.HelmetCursor!==`default`) && (e.target.style.display.length===0)){
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
			this.StatsRefreshTakeOff(e.target.innerText,e);
		}

	}
	//II.Amulet
	ReceivedAmulet(e){
		if(this.state.AmuletCursor!==`pointer`){
			if(e.target.id.length!==0)
			{
				let ElementID=e.target.id;
				let Background=e.target.style.backgroundImage;
				let Info=e.target.innerText;
				this.setState({
					Amulet: Background,
					AmuletCursor: `pointer`,
					AmuletInformation: Info
				})
				document.getElementById(ElementID).style.display=`none`;
				this.StatsRefreshReceived(e,``);
			}
		}
		else{
			//Elobb ujra re apperaren(megjelenitem) az armort az armort
			if(e.target.id.length!==0)
			{
				let blokk=this.state.Amulet.split('/');
				let StateBG=blokk[blokk.length-1].slice(0,-2);
				let ElemLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
				for(let i=0;i<ElemLength;i++)
				{
					let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
					let blokk2=element.style.backgroundImage.split('/');
					let ItemBG=blokk2[blokk2.length-1].slice(0,-2);
					let disp=element.style.display;
					if((StateBG===ItemBG) && (disp===`none`))
					{
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
				this.StatsRefreshReceived(e,this.state.AmuletInformation);
			}
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
		if((this.state.AmuletCursor!==`default`) && (e.target.style.display.length===0)){
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
			this.StatsRefreshTakeOff(e.target.innerText,e);
		}
	}

	//III.Weapon
	ReceivedWeapon(e){
		if(this.state.WeaponCursor!==`pointer`){
			if(e.target.id.length!==0)
			{
				let ElementID=e.target.id;
				let Background=e.target.style.backgroundImage;
				let Info=e.target.innerText;
				this.setState({
					Weapon: Background,
					WeaponCursor: `pointer`,
					WeaponInformation: Info
				})
				document.getElementById(ElementID).style.display=`none`;
				this.StatsRefreshReceived(e,``);
			}
		}
		else{
			//Elobb ujra re apperaren(megjelenitem) az armort az armort
			if(e.target.id.length!==0)
			{
				let blokk=this.state.Weapon.split('/');
				let StateBG=blokk[blokk.length-1].slice(0,-2);
				let ElemLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
				for(let i=0;i<ElemLength;i++)
				{
					let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
					let blokk2=element.style.backgroundImage.split('/');
					let ItemBG=blokk2[blokk2.length-1].slice(0,-2);
					let disp=element.style.display;
					if((StateBG===ItemBG) && (disp===`none`))
					{
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
				this.StatsRefreshReceived(e,this.state.WeaponInformation);
			}
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
		if((this.state.WeaponCursor!==`default`) && (e.target.style.display.length===0)){
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
			this.StatsRefreshTakeOff(e.target.innerText,e);
		}
	}


	//IV.ChessPlate
	ReceivedArmor(e){
		if(this.state.ChessPlateCursor!==`pointer`){
			//Span inside div, rid off!
			if(e.target.id.length!==0)
			{
				let ElementID=e.target.id;
				let Background=e.target.style.backgroundImage;
				let Info=e.target.innerText;
				this.setState({
					ChessPlate: Background,
					ChessPlateCursor: `pointer`,
					ChessPlateInformation: Info
				})
				document.getElementById(ElementID).style.display=`none`;
				this.StatsRefreshReceived(e,``);
			}
		}
		else{
			//Elobb ujra re apperaren(megjelenitem) az armort az armort
			if(e.target.id.length!==0)
				{
				let blokk=this.state.ChessPlate.split('/');
				let StateBG=blokk[blokk.length-1].slice(0,-2);
				let ElemLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
				for(let i=0;i<ElemLength;i++)
				{
					let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
					let blokk2=element.style.backgroundImage.split('/');
					let ItemBG=blokk2[blokk2.length-1].slice(0,-2);
					let disp=element.style.display;
					if((StateBG===ItemBG) && (disp===`none`))
					{
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
				this.StatsRefreshReceived(e,this.state.ChessPlateInformation);
				}
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
		if((this.state.ChessPlateCursor!==`default`) && (e.target.style.display.length===0)){
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
			this.StatsRefreshTakeOff(e.target.innerText,e);
		}
	}



	//V.Gloves
	ReceivedGloves(e){
		if(this.state.GlovesCursor!==`pointer`){
			if(e.target.id.length!==0)
			{
				let ElementID=e.target.id;
				let Background=e.target.style.backgroundImage;
				let Info=e.target.innerText;
				this.setState({
					Gloves: Background,
					GlovesCursor: `pointer`,
					GlovesInformation: Info
				})
				document.getElementById(ElementID).style.display=`none`;
				this.StatsRefreshReceived(e,``);
			}
		}
		else{
			//Elobb ujra re apperaren(megjelenitem) az armort az armort
			if(e.target.id.length!==0)
			{
				let blokk=this.state.Gloves.split('/');
				let StateBG=blokk[blokk.length-1].slice(0,-2);
				let ElemLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
				for(let i=0;i<ElemLength;i++)
				{
					let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
					let blokk2=element.style.backgroundImage.split('/');
					let ItemBG=blokk2[blokk2.length-1].slice(0,-2);
					let disp=element.style.display;
					if((StateBG===ItemBG) && (disp===`none`))
					{
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
				this.StatsRefreshReceived(e,this.state.GlovesInformation);
			}
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
		if((this.state.GlovesCursor!==`default`) && (e.target.style.display.length===0)){
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
			this.StatsRefreshTakeOff(e.target.innerText,e);
		}
	}


	//VI.FirstRing
	ReceivedFirstRings(e){
		if(this.state.FirstRingCursor!==`pointer`){
			if(e.target.id.length!==0)
			{
				let ElementID=e.target.id;
				let Background=e.target.style.backgroundImage;
				let Info=e.target.innerText;
				this.setState({
					FirstRing: Background,
					FirstRingCursor: `pointer`,
					FirstRingInformation: Info
				})
				document.getElementById(ElementID).style.display=`none`;
				this.StatsRefreshReceived(e,``);
			}
		}
		else{
			//Elobb ujra re apperaren(megjelenitem) az armort az armort
			if(e.target.id.length!==0)
			{
				let blokk=this.state.FirstRing.split('/');
				let StateBG=blokk[blokk.length-1].slice(0,-2);
				let ElemLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
				for(let i=0;i<ElemLength;i++)
				{
					let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
					let blokk2=element.style.backgroundImage.split('/');
					let ItemBG=blokk2[blokk2.length-1].slice(0,-2);
					let disp=element.style.display;
					if((StateBG===ItemBG) && (disp===`none`))
					{
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
				this.StatsRefreshReceived(e,this.state.FirstRingInformation);
			}
		}
	}

	FirstRingMouseOn(){
		if(this.state.FirstRingCursor!==`default`){
			this.setState({
				FirstRingActive: `inline`
			})
		}
	}

	FirstRingMouseOff(){
		this.setState({
				FirstRingActive: `none`,
			})
	}

	FirstRingTakeOff(e){
		if((this.state.FirstRingCursor!==`default`) && (e.target.style.display.length===0)){
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
						FirstRing:`url(Pictures/JungleFinder/Icons/ItemsAddIcon.png)`,
						FirstRingActive: `none`,
						FirstRingCursor: `default`,
						FirstRingInformation:``,
					})
					break;
				}
			}
			this.StatsRefreshTakeOff(e.target.innerText,e);
		}
	}

	//VII.Greaves
	ReceivedGreaves(e){
		if(this.state.GreavesCursor!==`pointer`){
			if(e.target.id.length!==0)
			{
				let ElementID=e.target.id;
				let Background=e.target.style.backgroundImage;
				let Info=e.target.innerText;
				this.setState({
					Greaves: Background,
					GreavesCursor: `pointer`,
					GreavesInformation: Info
				})
				document.getElementById(ElementID).style.display=`none`;
				this.StatsRefreshReceived(e,``);
			}
		}
		else{
			//Elobb ujra re apperaren(megjelenitem) az armort az armort
			if(e.target.id.length!==0)
			{
				let blokk=this.state.Greaves.split('/');
				let StateBG=blokk[blokk.length-1].slice(0,-2);
				let ElemLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
				for(let i=0;i<ElemLength;i++)
				{
					let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
					let blokk2=element.style.backgroundImage.split('/');
					let ItemBG=blokk2[blokk2.length-1].slice(0,-2);
					let disp=element.style.display;
					if((StateBG===ItemBG) && (disp===`none`))
					{
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
				this.StatsRefreshReceived(e,this.state.GreavesInformation);
			}
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
		if((this.state.GreavesCursor!==`default`) && (e.target.style.display.length===0)){
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
			this.StatsRefreshTakeOff(e.target.innerText,e);
		}
	}

	//VIII.Second Ring
	ReceivedSecondRings(e){
		if(this.state.SecondRingCursor!==`pointer`){
			if(e.target.id.length!==0)
			{
				let ElementID=e.target.id;
				let Background=e.target.style.backgroundImage;
				let Info=e.target.innerText;
				this.setState({
					SecondRing: Background,
					SecondRingCursor: `pointer`,
					SecondRingInformation: Info
				})
				document.getElementById(ElementID).style.display=`none`;
				this.StatsRefreshReceived(e,``);
			}
		}
		else{
			//Elobb ujra re apperaren(megjelenitem) az armort az armort
			if(e.target.id.length!==0)
			{
				let blokk=this.state.SecondRing.split('/');
				let StateBG=blokk[blokk.length-1].slice(0,-2);
				let ElemLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
				for(let i=0;i<ElemLength;i++)
				{
					let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
					let blokk2=element.style.backgroundImage.split('/');
					let ItemBG=blokk2[blokk2.length-1].slice(0,-2);
					let disp=element.style.display;
					if((StateBG===ItemBG) && (disp===`none`))
					{
						element.style.display=`inline-block`;
						break;
					}
				}
				let ElementID=e.target.id;
				let Background=e.target.style.backgroundImage;
				let info=e.target.innerText;
				this.setState({
					SecondRing: Background,
					SecondRingCursor: `pointer`,
					SecondRingInformation: info
				})
				document.getElementById(ElementID).style.display=`none`;
				this.StatsRefreshReceived(e,this.state.SecondRingInformation);
			}
		}
	}

	SecondRingMouseOn(){
		if(this.state.SecondRingCursor!==`default`){
			this.setState({
				SecondRingActive: `inline`
			})
		}
	}

	SecondRingMouseOff(){
		this.setState({
				SecondRingActive: `none`,
			})
	}

	SecondRingTakeOff(e){
		if((this.state.SecondRingCursor!==`default`) && (e.target.style.display.length===0)){
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
						SecondRing:`url(Pictures/JungleFinder/Icons/ItemsAddIcon.png)`,
						SecondRingActive: `none`,
						SecondRingCursor: `default`,
						SecondRingInformation:``,
					})
					break;
				}
			}
			this.StatsRefreshTakeOff(e.target.innerText,e);
		}
	}

	//IX.Boots
	ReceivedBoots(e){
		if(this.state.BootsCursor!==`pointer`){
			if(e.target.id.length!==0)
			{
				let ElementID=e.target.id;
				let Background=e.target.style.backgroundImage;
				let Info=e.target.innerText;
				this.setState({
					Boots: Background,
					BootsCursor: `pointer`,
					BootsInformation: Info
				})
				document.getElementById(ElementID).style.display=`none`;
				this.StatsRefreshReceived(e,``);
			}
		}
		else{
			//Elobb ujra re apperaren(megjelenitem) az armort!
			if(e.target.id.length!==0)
			{
				let blokk=this.state.Boots.split('/');
				let StateBG=blokk[blokk.length-1].slice(0,-2);
				let ElemLength=document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;
				for(let i=0;i<ElemLength;i++)
				{
					let element=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[i];
					let blokk2=element.style.backgroundImage.split('/');
					let ItemBG=blokk2[blokk2.length-1].slice(0,-2);
					let disp=element.style.display;
					if((StateBG===ItemBG) && (disp===`none`))
					{
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
				this.StatsRefreshReceived(e,this.state.BootsInformation);
			}
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
		if((this.state.BootsCursor!==`default`) && (e.target.style.display.length===0)){
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
			this.StatsRefreshTakeOff(e.target.innerText,e);
		}
	}

	//Stats Settings 
	//1.Profile
	StatsRefreshReceived(e,E){
		//Megkell nezzem majd, hogy kulonbozik-e tole vagy sem a dolog!
		let blokk=e.target.innerText.split(' ');
		let Strengthvalue=0;
		let Dexterityvalue=0;
		let Wisdomvalue=0;
		let Craftingvalue=0;
		let eStr=0;
		let eDex=0;
		let eWis=0;
		let eCraft=0;
		let StrengthStateValue=0;
		let DexterityStateValue=0;
		let WisdomStateValue=0;
		let CraftingStateValue=0;
		//console.log(e.target.innerText);
		//console.log(E);
		if(E.length!==0){
		let blokk2=E.split(' ');
		for(let i=0;i<blokk2.length;i++){
			let attr2=blokk2[i].split(':');

			//Megkell vizsgaljam, hogy van-e meg fent valami!	
			switch(attr2[0]){
				case `Strength`:
					Strengthvalue=Number(attr2[1]);
				break;
				case `Dexterity`:
					Dexterityvalue=Number(attr2[1]);
				break;
				case `Wisdom`:
					Wisdomvalue=Number(attr2[1]);
				break;
				case `Crafting`:
					Craftingvalue=Number(attr2[1]);
				break;

			}
		}

		for(let j=0;j<blokk.length;j++){
			let attr=blokk[j].split(':');
			switch(attr[0]){
				case `Strength`:
					eStr=Number(attr[1]);
				break;
				case `Dexterity`:
					eDex=Number(attr[1]);
				break;
				case `Wisdom`:
					eWis=Number(attr[1]);
				break;
				case `Crafting`:
					eCraft=Number(attr[1]);
				break;

			}
		}
		StrengthStateValue=this.state.SValue-Strengthvalue+eStr;
		DexterityStateValue=this.state.DValue-Dexterityvalue+eDex;
		WisdomStateValue=this.state.WValue-Wisdomvalue+eWis;
		CraftingStateValue=this.state.CValue-Craftingvalue+eCraft;
		//Szinek beallitasa
		if((Strengthvalue!==0) || (eStr!==0)){
			document.getElementById('JungleProfileStrength').getElementsByTagName('span')[0].style.color=`green`;
		}
		if((Dexterityvalue!==0) || (eDex!==0)){
				document.getElementById('JungleProfileDexterity').getElementsByTagName('span')[0].style.color=`green`;
		}
		if((Wisdomvalue!==0) || (eWis!==0)){
				document.getElementById('JungleProfileWisdom').getElementsByTagName('span')[0].style.color=`green`;
		}

		if((Craftingvalue!==0) || (eCraft!==0)){
				document.getElementById('JungleProfileCrafting').getElementsByTagName('span')[0].style.color=`green`;
		}

		this.setState({
			SValue: StrengthStateValue,
			DValue: DexterityStateValue,
			WValue: WisdomStateValue,
			CValue: CraftingStateValue,
		})



		//A baj a kovetkezo, mivel a frostRingben nincsen crafting ezert nem lep bele a craftingba!	
	}
	else{
		for(let i=0;i<blokk.length;i++){
			let attr=blokk[i].split(':');
			switch(attr[0]){
				case `Strength`:
					document.getElementById('JungleProfileStrength').getElementsByTagName('span')[0].style.color=`green`;
					StrengthStateValue=this.state.SValue+Number(attr[1])-Strengthvalue;
					this.setState({
						SValue: StrengthStateValue,
					})
				break;
				case `Dexterity`:
					document.getElementById('JungleProfileDexterity').getElementsByTagName('span')[0].style.color=`green`;
					DexterityStateValue=this.state.DValue+Number(attr[1])-Dexterityvalue;
					this.setState({
						DValue: DexterityStateValue,
					})
				break;
				case `Wisdom`:
					document.getElementById('JungleProfileWisdom').getElementsByTagName('span')[0].style.color=`green`;
					WisdomStateValue=this.state.WValue+Number(attr[1])-Wisdomvalue;
					this.setState({
						WValue: WisdomStateValue,
					})
				break;
				case `Crafting`:
					document.getElementById('JungleProfileCrafting').getElementsByTagName('span')[0].style.color=`green`;
					CraftingStateValue=this.state.CValue+Number(attr[1])-Craftingvalue;
					this.setState({
						CValue: CraftingStateValue,
					})
				break;

			}
		}
	}


	}

	StatsRefreshTakeOff(e,E){
		let blokk=e.split(' ');
		let blokk2=E.target.style.backgroundImage.split('/');
		let Check=blokk2[blokk2.length-1].slice(0,-2);
		let DefaultColor=``;
		for(let j=0;j<document.getElementById('JungleCurrentItems').getElementsByTagName('div').length;j++){
			let blokk3=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[j].style.backgroundImage.split('/');
			let element=blokk3[blokk3.length-1].slice(0,-2);
			if(Check===element){
				DefaultColor=document.getElementById('JungleCurrentItems').getElementsByTagName('div')[j].id.slice(0,4);
				break;
			}
		}
		console.log(DefaultColor);
		switch(DefaultColor){
			case `Boot`:
			if((this.state.HelmetCursor===`default`) && (this.state.AmuletCursor===`default`) && (this.state.WeaponCursor===`default`) &&
				(this.state.ChessPlateCursor===`default`) && (this.state.GlovesCursor===`default`) &&(this.state.FirstRingCursor===`default`) &&
				(this.state.GreavesCursor===`default`) && (this.state.SecondRingCursor===`default`))
			{
				document.getElementById('JungleProfileStrength').getElementsByTagName('span')[0].style.color=`white`;
				document.getElementById('JungleProfileDexterity').getElementsByTagName('span')[0].style.color=`white`;
			    document.getElementById('JungleProfileWisdom').getElementsByTagName('span')[0].style.color=`white`;
			    document.getElementById('JungleProfileCrafting').getElementsByTagName('span')[0].style.color=`white`;
			}
			break;
			case `Grea`:
			if((this.state.HelmetCursor===`default`) && (this.state.AmuletCursor===`default`) && (this.state.WeaponCursor===`default`) &&
				(this.state.ChessPlateCursor===`default`) && (this.state.GlovesCursor===`default`) &&(this.state.FirstRingCursor===`default`) &&
				(this.state.BootsCursor===`default`) && (this.state.SecondRingCursor===`default`))
			{
				document.getElementById('JungleProfileStrength').getElementsByTagName('span')[0].style.color=`white`;
				document.getElementById('JungleProfileDexterity').getElementsByTagName('span')[0].style.color=`white`;
			    document.getElementById('JungleProfileWisdom').getElementsByTagName('span')[0].style.color=`white`;
			    document.getElementById('JungleProfileCrafting').getElementsByTagName('span')[0].style.color=`white`;
			}
			break;
			case `Firs`:
			if((this.state.HelmetCursor===`default`) && (this.state.AmuletCursor===`default`) && (this.state.WeaponCursor===`default`) &&
				(this.state.ChessPlateCursor===`default`) && (this.state.GlovesCursor===`default`) &&(this.state.GreavesCursor===`default`) &&
				(this.state.BootsCursor===`default`) && (this.state.SecondRingCursor===`default`))
			{
				document.getElementById('JungleProfileStrength').getElementsByTagName('span')[0].style.color=`white`;
				document.getElementById('JungleProfileDexterity').getElementsByTagName('span')[0].style.color=`white`;
			    document.getElementById('JungleProfileWisdom').getElementsByTagName('span')[0].style.color=`white`;
			    document.getElementById('JungleProfileCrafting').getElementsByTagName('span')[0].style.color=`white`;
			}
			break;
			case `Seco`:
			if((this.state.HelmetCursor===`default`) && (this.state.AmuletCursor===`default`) && (this.state.WeaponCursor===`default`) &&
				(this.state.ChessPlateCursor===`default`) && (this.state.GlovesCursor===`default`) &&(this.state.GreavesCursor===`default`) &&
				(this.state.BootsCursor===`default`) && (this.state.FirstRingCursor===`default`))
			{
				document.getElementById('JungleProfileStrength').getElementsByTagName('span')[0].style.color=`white`;
				document.getElementById('JungleProfileDexterity').getElementsByTagName('span')[0].style.color=`white`;
			    document.getElementById('JungleProfileWisdom').getElementsByTagName('span')[0].style.color=`white`;
			    document.getElementById('JungleProfileCrafting').getElementsByTagName('span')[0].style.color=`white`;
			}
			break;

			case `Glov`:
			if((this.state.HelmetCursor===`default`) && (this.state.AmuletCursor===`default`) && (this.state.WeaponCursor===`default`) &&
				(this.state.ChessPlateCursor===`default`) && (this.state.SecondRingCursor===`default`) &&(this.state.GreavesCursor===`default`) &&
				(this.state.BootsCursor===`default`) && (this.state.FirstRingCursor===`default`))
			{
				document.getElementById('JungleProfileStrength').getElementsByTagName('span')[0].style.color=`white`;
				document.getElementById('JungleProfileDexterity').getElementsByTagName('span')[0].style.color=`white`;
			    document.getElementById('JungleProfileWisdom').getElementsByTagName('span')[0].style.color=`white`;
			    document.getElementById('JungleProfileCrafting').getElementsByTagName('span')[0].style.color=`white`;
			}
			break;

			case `Armo`:
			if((this.state.HelmetCursor===`default`) && (this.state.AmuletCursor===`default`) && (this.state.WeaponCursor===`default`) &&
				(this.state.GlovesCursor===`default`) && (this.state.SecondRingCursor===`default`) &&(this.state.GreavesCursor===`default`) &&
				(this.state.BootsCursor===`default`) && (this.state.FirstRingCursor===`default`))
			{
				document.getElementById('JungleProfileStrength').getElementsByTagName('span')[0].style.color=`white`;
				document.getElementById('JungleProfileDexterity').getElementsByTagName('span')[0].style.color=`white`;
			    document.getElementById('JungleProfileWisdom').getElementsByTagName('span')[0].style.color=`white`;
			    document.getElementById('JungleProfileCrafting').getElementsByTagName('span')[0].style.color=`white`;
			}
			break;

			case `Weap`:
			if((this.state.HelmetCursor===`default`) && (this.state.AmuletCursor===`default`) && (this.state.ChessPlateCursor===`default`) &&
				(this.state.GlovesCursor===`default`) && (this.state.SecondRingCursor===`default`) &&(this.state.GreavesCursor===`default`) &&
				(this.state.BootsCursor===`default`) && (this.state.FirstRingCursor===`default`))
			{
				document.getElementById('JungleProfileStrength').getElementsByTagName('span')[0].style.color=`white`;
				document.getElementById('JungleProfileDexterity').getElementsByTagName('span')[0].style.color=`white`;
			    document.getElementById('JungleProfileWisdom').getElementsByTagName('span')[0].style.color=`white`;
			    document.getElementById('JungleProfileCrafting').getElementsByTagName('span')[0].style.color=`white`;
			}
			break;

			case `Amul`:
			if((this.state.HelmetCursor===`default`) && (this.state.WeaponCursor===`default`) && (this.state.ChessPlateCursor===`default`) &&
				(this.state.GlovesCursor===`default`) && (this.state.SecondRingCursor===`default`) &&(this.state.GreavesCursor===`default`) &&
				(this.state.BootsCursor===`default`) && (this.state.FirstRingCursor===`default`))
			{
				document.getElementById('JungleProfileStrength').getElementsByTagName('span')[0].style.color=`white`;
				document.getElementById('JungleProfileDexterity').getElementsByTagName('span')[0].style.color=`white`;
			    document.getElementById('JungleProfileWisdom').getElementsByTagName('span')[0].style.color=`white`;
			    document.getElementById('JungleProfileCrafting').getElementsByTagName('span')[0].style.color=`white`;
			}
			break;

			case `Helm`:
			if((this.state.AmuletCursor===`default`) && (this.state.WeaponCursor===`default`) && (this.state.ChessPlateCursor===`default`) &&
				(this.state.GlovesCursor===`default`) && (this.state.SecondRingCursor===`default`) &&(this.state.GreavesCursor===`default`) &&
				(this.state.BootsCursor===`default`) && (this.state.FirstRingCursor===`default`))
			{
				document.getElementById('JungleProfileStrength').getElementsByTagName('span')[0].style.color=`white`;
				document.getElementById('JungleProfileDexterity').getElementsByTagName('span')[0].style.color=`white`;
			    document.getElementById('JungleProfileWisdom').getElementsByTagName('span')[0].style.color=`white`;
			    document.getElementById('JungleProfileCrafting').getElementsByTagName('span')[0].style.color=`white`;
			}
			break;
		}
		for(let i=0;i<blokk.length;i++){
			let attr=blokk[i].split(':');	
			switch(attr[0]){
				case `Strength`:
					let Strvalue=this.state.SValue-Number(attr[1]);
					this.setState({
						SValue: Strvalue,
					})
				break;
				case `Dexterity`:
					let Dexvalue=this.state.DValue-Number(attr[1]);
					this.setState({
						DValue: Dexvalue,
					})
				break;
				case `Wisdom`:
					let Wisvalue=this.state.WValue-Number(attr[1]);
					this.setState({
						WValue: Wisvalue,
					})
				break;
				case `Crafting`:
					let Craftvalue=this.state.CValue-Number(attr[1]);
					this.setState({
						CValue: Craftvalue
					})
				break;

			}
		}
	}

	//2. Stats Settings With Currency
	//Component did mountban kell majd vizsgaljam a dolgokat! (itt setStatelek es kesz)
	AttributeClick(e){
		let attribute=e.target.id;
		switch(attribute){
			case `JungleProfileStrengthPlus`:
				let StrengthValue=this.state.StrValue;
				let CostS=this.state.StrengthCost;
				let GoldS=this.state.GoldValue;
				let finalS=GoldS-CostS;
				if(StrengthValue<20){
					let NewCost=this.state.StrengthStep+CostS;
					StrengthValue+=1;
					this.setState({
						GoldValue: finalS,
						StrValue:StrengthValue,
						StrengthCost: NewCost
					})
					this.ConsumablesCheck(attribute);
				}
				else{
					let faktor=5;
					let NewStep=this.state.StrengthStep+faktor;
					let NewCost=CostS+NewStep;
					StrengthValue+=1;
					this.setState({
						GoldValue: finalS,
						StrValue: StrengthValue,
						StrengthCost: NewCost,
						StrengthStep: NewStep,
						StrengthFactor: faktor
					})
					this.ConsumablesCheck(attribute);
				}
			break;

			case `JungleProfileDexPlus`:
				let DexterityValue=this.state.DexValue;
				let CostD=this.state.DexterityCost;
				let GoldD=this.state.GoldValue;
				let finalD=GoldD-CostD;
				if(DexterityValue<20){
					let NewCost=this.state.DexterityStep+CostD;
					DexterityValue+=1;
					this.setState({
						GoldValue: finalD,
						DexValue:DexterityValue,
						DexterityCost: NewCost
					})
					this.ConsumablesCheck(attribute);
				}
				else{
					let faktor=5;
					let NewStep=this.state.DexterityStep+faktor;
					let NewCost=CostD+NewStep;
					DexterityValue+=1;
					this.setState({
						GoldValue: finalD,
						DexValue: DexterityValue,
						DexterityCost: NewCost,
						DexterityStep: NewStep,
						DexterityFactor: faktor
					})
					this.ConsumablesCheck(attribute);
				}
			break;

			case `JungleProfileWisdomPlus`:
				let WisdomValue=this.state.WisValue;
				let CostW=this.state.WisdomCost;
				let GoldW=this.state.GoldValue;
				let finalW=GoldW-CostW;
				if(WisdomValue<20){
					let NewCost=this.state.WisdomStep+CostW;
					WisdomValue+=1;
					this.setState({
						GoldValue: finalW,
						WisValue:WisdomValue,
						WisdomCost: NewCost
					})
					this.ConsumablesCheck(attribute);
				}
				else{
					let faktor=5;
					let NewStep=this.state.WisdomStep+faktor;
					let NewCost=CostW+NewStep;
					WisdomValue+=1;
					this.setState({
						GoldValue: finalW,
						WisValue: WisdomValue,
						WisdomCost: NewCost,
						WisdomStep: NewStep,
						WisdomFactor: faktor
					})
					this.ConsumablesCheck(attribute);
				}
			break;

			case `JungleProfileCraftingPlus`:
				let CraftingValue=this.state.CraftValue;
				let CostC=this.state.CraftingCost;
				let GoldC=this.state.GoldValue;
				let finalC=GoldC-CostC;
				if(CraftingValue<20){
					let NewCost=this.state.CraftingStep+CostC;
					CraftingValue+=1;
					this.setState({
						GoldValue: finalC,
						CraftValue:CraftingValue,
						CraftingCost: NewCost
					})
					this.ConsumablesCheck(attribute);
				}
				else{
					let faktor=5;
					let NewStep=this.state.CraftingStep+faktor;
					let NewCost=CostC+NewStep;
					CraftingValue+=1;
					this.setState({
						GoldValue: finalC,
						CraftValue: CraftingValue,
						CraftingCost: NewCost,
						CraftingStep: NewStep,
						CraftingFactor: faktor
					})
					this.ConsumablesCheck(attribute);
				}
			break;
		}
	}

	ConsumablesCheck(attr){
		let CurrentGold=this.state.GoldValue;
		let StrCost=this.state.StrengthCost;
		let DexCost=this.state.DexterityCost;
		let WisCost=this.state.WisdomCost;
		let CraftCost=this.state.CraftingCost;
		let StrengthValue=this.state.StrValue;
		let DexterityValue=this.state.DexValue;
		let WisdomValue=this.state.WisValue;
		let CraftingValue=this.state.CraftValue;
		let PredictStrCost=StrCost;
		let PredictDexCost=DexCost;
		let PredictWisCost=WisCost;
		let PredictCraftCost=CraftCost;
		switch(attr){
			case `JungleProfileStrengthPlus`:
				if(StrengthValue<20){
					PredictStrCost=StrCost*2+this.state.StrengthStep;
				}
				else{
					PredictStrCost=StrCost*2+this.state.StrengthStep+5;
				}
				//MainCheck Strength
				if(CurrentGold<PredictStrCost){
					this.setState({
					StrengthAppearance: `none`,
				})
				document.getElementById('JungleProfileStrengthPlus').style.display=`none`;
				}
					//SubCheck Dexterity
					if(CurrentGold<(DexCost+StrCost))
					{
						this.setState({
							DexterityAppearance: `none`,
						})
						document.getElementById('JungleProfileDexPlus').style.display=`none`;
					}
					//SubCheck Wisdom
					if(CurrentGold<(WisCost+StrCost))
					{
						this.setState({
							WisdomAppearance: `none`,
						})
						document.getElementById('JungleProfileWisdomPlus').style.display=`none`;
					}
					//SubCheck Crafting
					if(CurrentGold<(CraftCost+StrCost))
					{
						this.setState({
							CraftingAppearance: `none`,
						})
						document.getElementById('JungleProfileCraftingPlus').style.display=`none`;
					}
				
			break;
			case `JungleProfileDexPlus`:
				if(DexterityValue<20){
					PredictDexCost=DexCost*2+this.state.DexterityStep;
				}
				else{
					PredictDexCost=DexCost*2+this.state.DexterityStep+5;
				}
				//MainCheck Dexterity
				if(CurrentGold<PredictDexCost)
				{
					this.setState({
						DexterityAppearance: `none`,
					})
					document.getElementById('JungleProfileDexPlus').style.display=`none`;
				}

					//SubCheck Strength
					if(CurrentGold<(StrCost+DexCost))
					{
						this.setState({
							StrengthAppearance: `none`,
						})
						document.getElementById('JungleProfileStrengthPlus').style.display=`none`;
					}
					//SubCheck Wisdom
					if(CurrentGold<(WisCost+DexCost))
					{
						this.setState({
							WisdomAppearance: `none`,
						})
						document.getElementById('JungleProfileWisdomPlus').style.display=`none`;
					}

					//SubCheck Crafting
					if(CurrentGold<(CraftCost+DexCost))
					{
						this.setState({
							CraftingAppearance: `none`,
						})
						document.getElementById('JungleProfileCraftingPlus').style.display=`none`;
					}
				
			break;
			case `JungleProfileWisdomPlus`:
				if(WisdomValue<20)
				{
					PredictWisCost=WisCost*2+this.state.WisdomStep;
				}
				else
				{
					PredictWisCost=WisCost*2+this.state.WisdomStep+5;
				}
				//MainCheck Wisdom
				if(CurrentGold<PredictWisCost)
				{
					this.setState({
						WisdomAppearance: `none`,
					})
					document.getElementById('JungleProfileWisdomPlus').style.display=`none`;
				}
					//SubCheck Strength
					if(CurrentGold<(StrCost+WisCost))
					{
						this.setState({
							StrengthAppearance: `none`,
						})
						document.getElementById('JungleProfileStrengthPlus').style.display=`none`;
					}
					//SubCheck Dexterity
					if(CurrentGold<(DexCost+WisCost))
					{
						this.setState({
							DexterityAppearance: `none`,
						})
						document.getElementById('JungleProfileDexPlus').style.display=`none`;
					}
					//SubCheck Crafting
					if(CurrentGold<(CraftCost+WisCost))
					{
						this.setState({
							CraftingAppearance: `none`,
						})
						document.getElementById('JungleProfileCraftingPlus').style.display=`none`;
					}
				
			break;
			case `JungleProfileCraftingPlus`:
				if(CraftingValue<20)
				{
					PredictCraftCost=CraftCost*2+this.state.CraftingStep;
				}
				else
				{
					PredictCraftCost=CraftCost*2+this.state.CraftingStep+5;
				}
				//MainCheck Crafting
				if(CurrentGold<PredictCraftCost)
				{
					this.setState({
						CraftingAppearance: `none`,
					})
					document.getElementById('JungleProfileCraftingPlus').style.display=`none`;
				}
					//SubCheck Strength
					if(CurrentGold<(StrCost+CraftCost))
					{
						this.setState({
							StrengthAppearance: `none`,
						})
						document.getElementById('JungleProfileStrengthPlus').style.display=`none`;
					}
					//SubCheck Dexterity
					if(CurrentGold<(DexCost+CraftCost))
					{
						this.setState({
							DexterityAppearance: `none`,
						})
						document.getElementById('JungleProfileDexPlus').style.display=`none`;
					}

					//SubCheck Wisdom
					if(CurrentGold<(WisCost+CraftCost))
					{
						this.setState({
							WisdomAppearance: `none`,
						})
						document.getElementById('JungleProfileWisdomPlus').style.display=`none`;
					}
				
			break;
		}

	}

	//Javascript method!
	JungleMenuChoice(e){
		let id=e.target.id;
		let Icon=id.slice(id.length-4);
		if(Icon===`Icon`){
			id=id.slice(0,-4);
		}
		let element=document.getElementById(id);
		let blokk=window.getComputedStyle(element,null).getPropertyValue('background-image').split('/');
		let background=blokk[blokk.length-1].slice(0,-2);
		if(background!==`MenuItemsSelected.jpg`)
		{
			for(let i=0;i<document.getElementById('Menu').getElementsByTagName('div').length;i++)
			{
				let elem=document.getElementById('Menu').getElementsByTagName('div')[i];
				let blokk2=window.getComputedStyle(elem,null).getPropertyValue('background-image').split('/');
				let bg=blokk2[blokk2.length-1].slice(0,-2);
				if(bg===`MenuItemsSelected.jpg`)
				{

					elem.style.backgroundImage=`url('Pictures/JungleFinder/HeaderBG.jpg')`;
					break;
				}
			}
			element.style.backgroundImage=`url('Pictures/JungleFinder/MenuItemsSelected.jpg')`;
			//Megnezzuk, hogy mire kattintottunk!
			console.log($globalScreenWidthMQ);
			switch(id){
				case `JungleMenuCharacter`:
				if(($globalScreenWidthMQ>=320) && ($globalScreenWidthMQ<=480))
				{

					document.getElementById('JungleCharacterDiv').style.display=`inline-block`;
					document.getElementById('JungleHazardGameDiv').style.display=`none`;
					document.getElementById('JungleMainDiv').style.minHeight=`500vw`;
					document.getElementById('JungleMainDiv').style.backgroundSize=`100% 510vw`;
				}
				else
				{
					if(($globalScreenWidthMQ>=481) && ($globalScreenWidthMQ<=767))
					{
						document.getElementById('JungleCharacterDiv').style.display=`inline-block`;
						document.getElementById('JungleHazardGameDiv').style.display=`none`;
						document.getElementById('JungleMainDiv').style.minHeight=`500vw`;
						document.getElementById('JungleMainDiv').style.backgroundSize=`100% 510vw`;
					}
					else
					{
						document.getElementById('JungleCharacterDiv').style.display=`inline-block`;
						document.getElementById('JungleHazardGameDiv').style.display=`none`;
						document.getElementById('JungleMainDiv').style.minHeight=`120vw`;
						document.getElementById('JungleMainDiv').style.backgroundSize=`100% 123vw`;
					}
				}
				break;
				case `JungleMenuHazardGame`:
				if(($globalScreenWidthMQ>=320) && ($globalScreenWidthMQ<=480))
				{

				    document.getElementById('JungleHazardGameDiv').style.display=`inline-block`;
					document.getElementById('JungleCharacterDiv').style.display=`none`;
					document.getElementById('JungleMainDiv').style.minHeight=`605vw`;
					document.getElementById('JungleMainDiv').style.backgroundSize=`100% 615vw`;
				}
				else
				{
					if(($globalScreenWidthMQ>=481) && ($globalScreenWidthMQ<=767))
					{
						document.getElementById('JungleHazardGameDiv').style.display=`inline-block`;
						document.getElementById('JungleCharacterDiv').style.display=`none`;
						document.getElementById('JungleMainDiv').style.minHeight=`605vw`;
						document.getElementById('JungleMainDiv').style.backgroundSize=`100% 615vw`;
					}
					else
					{
						document.getElementById('JungleHazardGameDiv').style.display=`inline-block`;
						document.getElementById('JungleCharacterDiv').style.display=`none`;
						//Beallitom a JungleMainDiv meretet is mivel a Jatek nagyobb helyet igenyel!
						document.getElementById('JungleMainDiv').style.minHeight=`150vw`;
						document.getElementById('JungleMainDiv').style.backgroundSize=`100% 153vw`;
					}
				}
				break;
			}
		}

	}
	//BETGAME Functions below!
	//1.Gold and Jewel Event Handler for inputs!
	SetBet(){
		let GoldValue=this.state.GoldValue;
		let JewelValue=this.state.JewelValue;
		let AndGoldCheck=this.state.BetGoldValue;
		let AndJewelCheck=this.state.BetJewelValue;
		let GoldInputValue=Number(document.getElementById('GoldBetInput').value);
		let JewelInputValue=Number(document.getElementById('JewelBetInput').value);
		if((GoldInputValue.length!==0) && (GoldInputValue>0))
		{
			if(GoldInputValue<=GoldValue)
			{
				if(AndJewelCheck!=='Value')
				{
					this.setState({
						GoldPart:`inline`,
						AndPart:`inline`,
						BetGoldValue: `${GoldInputValue}`,
					})
				}
				else
				{
					this.setState({
					GoldPart:`inline`,
					BetGoldValue: `${GoldInputValue}`,
					})
				}

			}
			else
			{
				window.alert('The input goldvalue cannot exceed your current gold!');
			}
		}
		else
		{
			if((JewelInputValue.length!==0) && (JewelInputValue>0))
			{
				if(JewelInputValue<=JewelValue)
				{
					if(AndGoldCheck!==`Value`)
					{
						this.setState({
							JewelPart: `inline`,
							AndPart:`inline`,
							BetJewelValue: `${JewelInputValue}`,
						})
					}
					else
					{
						this.setState({
							JewelPart: `inline`,
							BetJewelValue: `${JewelInputValue}`,
						})
					}
				}
				else
				{
					window.alert('the input jewelvalue cannot exceed your current jewels!');
				}

			}
			else
			{
				window.alert('Type in something in order to set your bet!');
			}
		}

		if((JewelInputValue.length!==0) && (JewelInputValue>0))
		{
				if(JewelInputValue<=JewelValue)
				{
					if(AndGoldCheck!==`Value`)
					{
						this.setState({
							JewelPart: `inline`,
							AndPart:`inline`,
							BetJewelValue: `${JewelInputValue}`,
						})
					}
					else
					{
						this.setState({
							JewelPart: `inline`,
							BetJewelValue: `${JewelInputValue}`,
						})
					}
				}
				else
				{
					window.alert('the input jewelvalue cannot exceed your current jewels!');
				}
		}

		if(((GoldInputValue.length!==0) && (GoldInputValue>0)) && ((JewelInputValue.length!==0) && (JewelInputValue>0)))
		{
				if((GoldInputValue<=GoldValue) && (JewelInputValue<=JewelValue))
				{

						this.setState({
							GoldPart: `inline`,
							JewelPart: `inline`,
							AndPart:`inline`,
							BetGoldValue: `${GoldInputValue}`,
							BetJewelValue: `${JewelInputValue}`,
						})
					

				}
				else
				{
					window.alert('the input consumable cannot exceed your current consumables!');
				}
		}

		

	}

	//2.Information toggle function
	InformationToggle(){
		let value=this.state.InfoDisplay;
		if(value===`none`)
		{
			this.setState({
				InfoDisplay: `inline-block`
			})
		}
		else
		{
			this.setState({
				InfoDisplay: `none`
			})
		}
	}

	//3. Bet button handler below!
	BetClick(){
		let GoldAssets=this.state.BetGoldValue;
		let JewelAssets=this.state.BetJewelValue;
		let CurrentGold=this.state.GoldValue;
		let CurrentJewel=this.state.JewelValue;
		if(this.state.BetState.Opac===1)
		{
		if((GoldAssets!==`Value`) && (JewelAssets===`Value`)){
			let Gold=CurrentGold-Number(GoldAssets);
				this.setState({
					GoldInputState:{
						Disabled: true,
						Opac: 0.75,
					},
					JewelInputState:{
						Disabled:true,
						Opac:0.75,
					},
					BetState:{
						Disabled:true,
						Opac:0.75,
						Curs:`default`
					},
					GoldValue:Gold,
				})

		}
		else{
			if((GoldAssets===`Value`) && (JewelAssets!==`Value`)){
				let Jewel=CurrentJewel-Number(JewelAssets);
				this.setState({
					GoldInputState:{
						Disabled: true,
						Opac: 0.75,
					},
					JewelInputState:{
						Disabled:true,
						Opac:0.75,
					},
					BetState:{
						Disabled:true,
						Opac:0.75,
						Curs:`default`
					},
					JewelValue:Jewel
				})
			}
			else{
				if((GoldAssets!==`Value`) && (JewelAssets!==`Value`)){
					let Gold=CurrentGold-Number(GoldAssets);
					let Jewel=CurrentJewel-Number(JewelAssets);
				this.setState({
					GoldInputState:{
						Disabled: true,
						Opac: 0.75,
					},
					JewelInputState:{
						Disabled:true,
						Opac:0.75,
					},
					BetState:{
						Disabled:true,
						Opac:0.75,
						Curs:`default`
					},
					GoldValue:Gold,
					JewelValue:Jewel
				})
				}
			}
		}
		}
			//Clear input fields
		document.getElementById('GoldBetInput').value=``;
		document.getElementById('JewelBetInput').value=``;



	}

	//4.Difficulty handlers
	StandardClick(e){
		let Cursor=e.target.style.cursor;
		let border=e.target.style.border.split(' ');
		if((Cursor===`pointer`) && (border[border.length-1]===`black`))
		{
			this.setState({
				BetRiskyPlatform:`none`,
				BetRiskiestPlatform:`none`,
				BetStandardPlatform: `inline-block`,
				//BackgroundChanges
				StandardState:{
					border: `0.2vw solid red`,
					backgroundImage:`url('Pictures/JungleFinder/BetGameComponents/DifficultySelectionCheck.png'),	
								     url('Pictures/JungleFinder/BetGameComponents/JungleDifficultyStandard.jpg')`,
					cursor: `default`,
					visibility:`visible`
				},
				RiskyState:{
					border: `0.2vw solid black`,
					backgroundImage:`url(''),	
								     url('Pictures/JungleFinder/BetGameComponents/JungleDifficultyRisky.jpg')`,
					cursor: `pointer`,
					visibility:`visible`
				},
				RiskiestState:{
					border: `0.2vw solid black`,
					backgroundImage:`url(''),	
								     url('Pictures/JungleFinder/BetGameComponents/JungleDifficultyRiskiest.jpg')`,
					cursor: `pointer`,
					visibility:`visible`
				},
			})
			document.getElementById('DifficultySettingsSound').play();
		}
	}

	RiskyClick(e){
		let Cursor=e.target.style.cursor;
		let border=e.target.style.border.split(' ');
		if((Cursor===`pointer`) && (border[border.length-1]===`black`))
		{
			this.setState({
				BetStandardPlatform: `none`,
				BetRiskiestPlatform:`none`,
				BetRiskyPlatform:`inline-block`,
				//BackgroundChanges
				RiskyState:{
					border: `0.2vw solid red`,
					backgroundImage:`url('Pictures/JungleFinder/BetGameComponents/DifficultySelectionCheck.png'),	
								     url('Pictures/JungleFinder/BetGameComponents/JungleDifficultyRisky.jpg')`,
					cursor: `default`,
					visibility:`visible`
				},
				RiskiestState:{
					border: `0.2vw solid black`,
					backgroundImage:`url(''),	
								     url('Pictures/JungleFinder/BetGameComponents/JungleDifficultyRiskiest.jpg')`,
					cursor: `pointer`,
					visibility:`visible`
				},
				StandardState:{
					border: `0.2vw solid black`,
					backgroundImage:`url(''),	
								     url('Pictures/JungleFinder/BetGameComponents/JungleDifficultyStandard.jpg')`,
					cursor: `pointer`,
					visibility:`visible`
				},
			})
			document.getElementById('DifficultySettingsSound').play();
		}
	}

	RiskiestClick(e){
		let Cursor=e.target.style.cursor;
		let border=e.target.style.border.split(' ');
		if((Cursor===`pointer`) && (border[border.length-1]===`black`))
		{
			this.setState({
				BetStandardPlatform: `none`,
				BetRiskyPlatform:`none`,
				BetRiskiestPlatform:`inline-block`,
				//BackgroundChanges
				RiskiestState:{
					border: `0.2vw solid red`,
					backgroundImage:`url('Pictures/JungleFinder/BetGameComponents/DifficultySelectionCheck.png'),	
								     url('Pictures/JungleFinder/BetGameComponents/JungleDifficultyRiskiest.jpg')`,
					cursor: `default`,
					visibility:`visible`
				},
				StandardState:{
					border: `0.2vw solid black`,
					backgroundImage:`url(''),	
								     url('Pictures/JungleFinder/BetGameComponents/JungleDifficultyStandard.jpg')`,
					cursor: `pointer`,
					visibility:`visible`
				},
				RiskyState:{
					border: `0.2vw solid black`,
					backgroundImage:`url(''),	
								     url('Pictures/JungleFinder/BetGameComponents/JungleDifficultyRisky.jpg')`,
					cursor: `pointer`,
					visibility:`visible`
				},
			})
			document.getElementById('DifficultySettingsSound').play();
		}
	}



	//5.Card Pickings
		CardPickStandard(e){
			let random=Math.floor(Math.random()*3)+1;
			let Cursor=e.target.parentElement.style.cursor;
			let name=e.target.getAttribute('name').split('/');
			if(this.state.BetState.Opac<1)
			{
				//Miutan rakattoltal az elsore akkortol kezdve, kiszedjuk a tobbi jatekot!
				if(Cursor===`pointer`)
				{
					let Gold=0;
					let Jewel=0;
					if(random<3){
						//Lucky Leaf Branch!
						e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lucky.png')`;
						document.getElementById('CardPick').play();
						switch(Number(name[0])){
							case 1:
								//Beszorozzuk mert sikeres
								if(this.state.BetGoldValue!==`Value`){
									Gold=Math.floor(Number(this.state.BetGoldValue)*1.1);
								}
								else{
									Gold=`Value`;
								}
								if(this.state.BetJewelValue!==`Value`){
									Jewel=Math.floor(Number(this.state.BetJewelValue)*1.1);
								}
								else{
									Jewel=`Value`;
								}
								this.setState(prevState=>({
									ChestOpen:{
										...prevState.ChestOpen,
										visibility:`hidden`
									},
									StandardGame: {
										...prevState.StandardGame,
										FirstMulti:`green`,
										FirstColumn:`default`,
										SecondColumn:`pointer`
									},
									RiskyState:{
										...prevState.RiskyState,
										visibility:`hidden`,
									},
									RiskiestState:{
										...prevState.RiskiestState,
										visibility:`hidden`,
									},
									BetGoldValue:`${Gold}`,
									BetJewelValue:`${Jewel}`
								}))

							break;
							case 2:
								if(this.state.BetGoldValue!==`Value`){
									Gold=Math.floor(Number(this.state.BetGoldValue)*1.25);
								}
								else{
									Gold=`Value`;
								}
								if(this.state.BetJewelValue!==`Value`){
									Jewel=Math.floor(Number(this.state.BetJewelValue)*1.25);
								}
								else{
									Jewel=`Value`;
								}
								this.setState(prevState=>({
									StandardGame:{
									...prevState.StandardGame,
									SecondMulti:`green`,
									SecondColumn:`default`,
									ThirdColumn:`pointer`,
								},
									BetGoldValue:`${Gold}`,
									BetJewelValue:`${Jewel}`
								}))
							break;
							case 3:
								if(this.state.BetGoldValue!==`Value`){
									Gold=Math.floor(Number(this.state.BetGoldValue)*1.5);
								}
								else{
									Gold=`Value`;
								}
								if(this.state.BetJewelValue!==`Value`){
									Jewel=Math.floor(Number(this.state.BetJewelValue)*1.5);
								}
								else{
									Jewel=`Value`;
								}
								this.setState(prevState=>({
									StandardGame:{
									...prevState.StandardGame,
									ThirdMulti:`green`,
									ThirdColumn:`default`,
									FourthColumn:`pointer`,
								},
									BetGoldValue:`${Gold}`,
									BetJewelValue:`${Jewel}`
								}))
							break;
							case 4:
								if(this.state.BetGoldValue!==`Value`){
									Gold=Math.floor(Number(this.state.BetGoldValue)*1.8);
								}
								else{
									Gold=`Value`;
								}
								if(this.state.BetJewelValue!==`Value`){
									Jewel=Math.floor(Number(this.state.BetJewelValue)*1.8);
								}
								else{
									Jewel=`Value`;
								}
								this.setState(prevState=>({
									StandardGame:{
									...prevState.StandardGame,
									FourthMulti:`green`,
									FourthColumn:`default`,
									FifthColumn:`pointer`,
								},
									BetGoldValue:`${Gold}`,
									BetJewelValue:`${Jewel}`
								}))
							break;
							case 5:
								if(this.state.BetGoldValue!==`Value`){
									Gold=Math.floor(Number(this.state.BetGoldValue)*2.2);
								}
								else{
									Gold=`Value`;
								}
								if(this.state.BetJewelValue!==`Value`){
									Jewel=Math.floor(Number(this.state.BetJewelValue)*2.2);
								}
								else{
									Jewel=`Value`;
								}
								this.setState(prevState=>({
									StandardGame:{
									...prevState.StandardGame,
									FifthMulti:`green`,
									FifthColumn:`default`,
									SixthColumn:`pointer`,
								},
									BetGoldValue:`${Gold}`,
									BetJewelValue:`${Jewel}`
								}))
							break;
							case 6:
								if(this.state.BetGoldValue!==`Value`){
									Gold=Math.floor(Number(this.state.BetGoldValue)*3);
								}
								else{
									Gold=`Value`;
								}
								if(this.state.BetJewelValue!==`Value`){
									Jewel=Math.floor(Number(this.state.BetJewelValue)*3);
								}
								else{
									Jewel=`Value`;
								}
								this.setState(prevState=>({
									StandardGame:{
									...prevState.StandardGame,
									SixthMulti:`green`,
									SixthColumn:`default`,
									SeventhColumn:`pointer`,
								},
									BetGoldValue:`${Gold}`,
									BetJewelValue:`${Jewel}`
								}))
							break;
							case 7:
								if(this.state.BetGoldValue!==`Value`){
									Gold=Math.floor(Number(this.state.BetGoldValue)*4);
								}
								else{
									Gold=`Value`;
								}
								if(this.state.BetJewelValue!==`Value`){
									Jewel=Math.floor(Number(this.state.BetJewelValue)*4);
								}
								else{
									Jewel=`Value`;
								}
								this.setState(prevState=>({
									StandardGame:{
									...prevState.StandardGame,
									SeventhMulti:`green`,
									SeventhColumn:`default`,
								},
									BetGoldValue:`${Gold}`,
									BetJewelValue:`${Jewel}`
								}))
							break;
						}
					}
					//Lion branch!
					else{
						e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lion.png')`;
						document.getElementById('LionGrowl').play();
						switch(Number(name[0])){
							case 1:
								if(this.state.BetGoldValue!==`Value`){
									Gold=Math.floor(Number(this.state.BetGoldValue)*0);
								}
								else{
									Gold=`Value`;
								}
								if(this.state.BetJewelValue!==`Value`){
									Jewel=Math.floor(Number(this.state.BetJewelValue)*0);
								}
								else{
									Jewel=`Value`;
								}
								this.setState(prevState=>({
									ChestOpen:{
										...prevState.ChestOpen,
										visibility:`hidden`
									},
									StandardGame: {
										...prevState.StandardGame,
										FirstMulti:`red`,
										FirstColumn:`default`,
									},
									RiskyState:{
										...prevState.RiskyState,
										visibility:`hidden`,
									},
									RiskiestState:{
										...prevState.RiskiestState,
										visibility:`hidden`,
									},
									BetGoldValue:`${Gold}`,
									BetJewelValue:`${Jewel}`
								}))
							break;
							case 2:
								if(this.state.BetGoldValue!==`Value`){
									Gold=Math.floor(Number(this.state.BetGoldValue)*0);
								}
								else{
									Gold=`Value`;
								}
								if(this.state.BetJewelValue!==`Value`){
									Jewel=Math.floor(Number(this.state.BetJewelValue)*0);
								}
								else{
									Jewel=`Value`;
								}
							this.setState(prevState=>({
								StandardGame:{
									...prevState.StandardGame,
									SecondMulti:`red`,
									SecondColumn:`default`,
								},
									BetGoldValue:`${Gold}`,
									BetJewelValue:`${Jewel}`
								}))
							break;
							case 3:
								if(this.state.BetGoldValue!==`Value`){
									Gold=Math.floor(Number(this.state.BetGoldValue)*0);
								}
								else{
									Gold=`Value`;
								}
								if(this.state.BetJewelValue!==`Value`){
									Jewel=Math.floor(Number(this.state.BetJewelValue)*0);
								}
								else{
									Jewel=`Value`;
								}
							this.setState(prevState=>({
								StandardGame:{
									...prevState.StandardGame,
									ThirdMulti:`red`,
									ThirdColumn:`default`,
								},
									BetGoldValue:`${Gold}`,
									BetJewelValue:`${Jewel}`
								}))
							break;
							case 4:
								if(this.state.BetGoldValue!==`Value`){
									Gold=Math.floor(Number(this.state.BetGoldValue)*0);
								}
								else{
									Gold=`Value`;
								}
								if(this.state.BetJewelValue!==`Value`){
									Jewel=Math.floor(Number(this.state.BetJewelValue)*0);
								}
								else{
									Jewel=`Value`;
								}
							this.setState(prevState=>({
								StandardGame:{
									...prevState.StandardGame,
									FourthMulti:`red`,
									FourthColumn:`default`,
								},
									BetGoldValue:`${Gold}`,
									BetJewelValue:`${Jewel}`
								}))
							break;
							case 5:
								if(this.state.BetGoldValue!==`Value`){
									Gold=Math.floor(Number(this.state.BetGoldValue)*0);
								}
								else{
									Gold=`Value`;
								}
								if(this.state.BetJewelValue!==`Value`){
									Jewel=Math.floor(Number(this.state.BetJewelValue)*0);
								}
								else{
									Jewel=`Value`;
								}
							this.setState(prevState=>({
								StandardGame:{
									...prevState.StandardGame,
									FifthMulti:`red`,
									FifthColumn:`default`,
								},
									BetGoldValue:`${Gold}`,
									BetJewelValue:`${Jewel}`
								}))
							break;
							case 6:
								if(this.state.BetGoldValue!==`Value`){
									Gold=Math.floor(Number(this.state.BetGoldValue)*0);
								}
								else{
									Gold=`Value`;
								}
								if(this.state.BetJewelValue!==`Value`){
									Jewel=Math.floor(Number(this.state.BetJewelValue)*0);
								}
								else{
									Jewel=`Value`;
								}
							this.setState(prevState=>({
								StandardGame:{
									...prevState.StandardGame,
									SixthMulti:`red`,
									SixthColumn:`default`,
								},
									BetGoldValue:`${Gold}`,
									BetJewelValue:`${Jewel}`
								}))
							break;
							case 7:
								if(this.state.BetGoldValue!==`Value`){
									Gold=Math.floor(Number(this.state.BetGoldValue)*0);
								}
								else{
									Gold=`Value`;
								}
								if(this.state.BetJewelValue!==`Value`){
									Jewel=Math.floor(Number(this.state.BetJewelValue)*0);
								}
								else{
									Jewel=`Value`;
								}
							this.setState(prevState=>({
								StandardGame:{
									...prevState.StandardGame,
									SeventhMulti:`red`,
									SeventhColumn:`default`,
								},
									BetGoldValue:`${Gold}`,
									BetJewelValue:`${Jewel}`
								}))
							break;
						}
					}
				}
			}
			else
			{
				window.alert('Place a bet first!!!');
			}
		}

		//Other way dispersion(distribution)
		CardPickRisky(e){
			let parentElement=e.target.parentElement;
			let parentName=parentElement.getAttribute('name');
			let Gold=0;
			let Jewel=0;
			if(this.state.BetState.Opac<1)
			{
			if((parentName===`1Column/Risky`) && (parentElement.style.cursor===`pointer`))
			{
				this.GenerateCardVariables(parentName,`Risky`);
				if(e.target.style.color===`green`)
				{		
					//Megkell nezzem melyik letezik!
					if(this.state.BetGoldValue!==`Value`){
						Gold=Math.floor(Number(this.state.BetGoldValue)*1.5);
					}
					else{
						Gold=`Value`;
					}
					if(this.state.BetJewelValue!==`Value`){
						Jewel=Math.floor(Number(this.state.BetJewelValue)*1.5);
					}
					else{
						Jewel=`Value`;
					}
					this.setState(prevState=>({
					ChestOpen:{
						...prevState.ChestOpen,
						visibility:`hidden`
					},
					RiskyGame:{
						...prevState.RiskyGame,
						FirstMulti:`green`,
						FirstColumn:`default`,
						SecondColumn:`pointer`
					},
					StandardState:{
					...prevState.StandardState,
						visibility:`hidden`,
					},
					RiskiestState:{
					...prevState.RiskiestState,
					visibility:`hidden`,
					},
					BetGoldValue:`${Gold}`,
					BetJewelValue:`${Jewel}`

					}))
					e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lucky.png')`;
					document.getElementById('CardPick').play();
					this.CardsShow(e,false,`Risky`);


				}
				else
				{
					if(this.state.BetGoldValue!==`Value`){
						Gold=Math.floor(Number(this.state.BetGoldValue)*0);
					}
					else{
						Gold=`Value`;
					}
					if(this.state.BetJewelValue!==`Value`){
						Jewel=Math.floor(Number(this.state.BetJewelValue)*0);
					}
					else{
						Jewel=`Value`;
					}
					this.setState(prevState=>({
					ChestOpen:{
						...prevState.ChestOpen,
						visibility:`hidden`
					},
					RiskyGame:{
						...prevState.RiskyGame,
						FirstMulti:`red`,
						FirstColumn:`default`,
					},
					StandardState:{
					...prevState.StandardState,
						visibility:`hidden`,
					},
					RiskiestState:{
					...prevState.RiskiestState,
					visibility:`hidden`,
					},
					BetGoldValue:`${Gold}`,
					BetJewelValue:`${Jewel}`
					}))	
					e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lion.png')`;
					document.getElementById('LionGrowl').play();
					this.CardsShow(e,true,`Risky`);
				}
				//Megmutatjuk a tobbit is ezen az oszlopon
			}

			//SecondColumn to the end
			else
			{
				switch(parentName)
				{
					case `2Column/Risky`:
					if(parentElement.style.cursor===`pointer`)
					{
						if(e.target.style.color===`green`)
						{		
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*2);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*2);
							}
							else{
								Jewel=`Value`;
							}
							this.setState(prevState=>({
							RiskyGame:{
								...prevState.RiskyGame,
								SecondMulti:`green`,
								SecondColumn:`default`,
								ThirdColumn:`pointer`
							},
							BetGoldValue:`${Gold}`,
							BetJewelValue:`${Jewel}`
							}))
							e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lucky.png')`;
							document.getElementById('CardPick').play();
							this.CardsShow(e,false,`Risky`);
						}
						else
						{
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*0);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*0);
							}
							else{
								Jewel=`Value`;
							}
							this.setState(prevState=>({
								RiskyGame:{
									...prevState.RiskyGame,
									SecondMulti:`red`,
									SecondColumn:`default`,
								},
								BetGoldValue:`${Gold}`,
								BetJewelValue:`${Jewel}`
								}))	
								e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lion.png')`;
								document.getElementById('LionGrowl').play();
								this.CardsShow(e,true,`Risky`);	
						}
					}
					break;
					case `3Column/Risky`:
					if(parentElement.style.cursor===`pointer`)
					{
						if(e.target.style.color===`green`)
						{
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*2.5);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*2.5);
							}
							else{
								Jewel=`Value`;
							}		
							this.setState(prevState=>({
							RiskyGame:{
								...prevState.RiskyGame,
								ThirdMulti:`green`,
								ThirdColumn:`default`,
								FourthColumn:`pointer`
							},
							BetGoldValue:`${Gold}`,
							BetJewelValue:`${Jewel}`
							}))
							e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lucky.png')`;
							document.getElementById('CardPick').play();
							this.CardsShow(e,false,`Risky`);
						}
						else
						{
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*0);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*0);
							}
							else{
								Jewel=`Value`;
							}
							this.setState(prevState=>({
								RiskyGame:{
									...prevState.RiskyGame,
									ThirdMulti:`red`,
									ThirdColumn:`default`,
								},
								BetGoldValue:`${Gold}`,
								BetJewelValue:`${Jewel}`
								}))	
								e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lion.png')`;
								document.getElementById('LionGrowl').play();
								this.CardsShow(e,true,`Risky`);	
						}
					}
					break;

					case `4Column/Risky`:
					if(parentElement.style.cursor===`pointer`)
					{
						if(e.target.style.color===`green`)
						{		
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*3);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*3);
							}
							else{
								Jewel=`Value`;
							}
							this.setState(prevState=>({
							RiskyGame:{
								...prevState.RiskyGame,
								FourthMulti:`green`,
								FourthColumn:`default`,
								FifthColumn:`pointer`
							},
							BetGoldValue:`${Gold}`,
							BetJewelValue:`${Jewel}`
							}))
							e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lucky.png')`;
							document.getElementById('CardPick').play();
							this.CardsShow(e,false,`Risky`);
						}
						else
						{
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*0);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*0);
							}
							else{
								Jewel=`Value`;
							}
							this.setState(prevState=>({
								RiskyGame:{
									...prevState.RiskyGame,
									FourthMulti:`red`,
									FourthColumn:`default`,
								},
								BetGoldValue:`${Gold}`,
								BetJewelValue:`${Jewel}`
								}))	
								e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lion.png')`;
								document.getElementById('LionGrowl').play();
								this.CardsShow(e,true,`Risky`);	
						}
					}
					break;

					case `5Column/Risky`:
					if(parentElement.style.cursor===`pointer`)
					{
						if(e.target.style.color===`green`)
						{
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*4);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*4);
							}
							else{
								Jewel=`Value`;
							}		
							this.setState(prevState=>({
							RiskyGame:{
								...prevState.RiskyGame,
								FifthMulti:`green`,
								FifthColumn:`default`,
								SixthColumn:`pointer`
							},
							BetGoldValue:`${Gold}`,
							BetJewelValue:`${Jewel}`
							}))
							e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lucky.png')`;
							document.getElementById('CardPick').play();
							this.CardsShow(e,false,`Risky`);
						}
						else
						{
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*0);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*0);
							}
							else{
								Jewel=`Value`;
							}
							this.setState(prevState=>({
								RiskyGame:{
									...prevState.RiskyGame,
									FifthMulti:`red`,
									FifthColumn:`default`,
								},
								BetGoldValue:`${Gold}`,
								BetJewelValue:`${Jewel}`
								}))	
								e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lion.png')`;
								document.getElementById('LionGrowl').play();
								this.CardsShow(e,true,`Risky`);	
						}
					}
					break;

					case `6Column/Risky`:
					if(parentElement.style.cursor===`pointer`)
					{
						if(e.target.style.color===`green`)
						{	
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*5);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*5);
							}
							else{
								Jewel=`Value`;
							}	
							this.setState(prevState=>({
							RiskyGame:{
								...prevState.RiskyGame,
								SixthMulti:`green`,
								SixthColumn:`default`,
								SeventhColumn:`pointer`
							},
							BetGoldValue:`${Gold}`,
							BetJewelValue:`${Jewel}`
							}))
							e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lucky.png')`;
							document.getElementById('CardPick').play();
							this.CardsShow(e,false,`Risky`);
						}
						else
						{
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*0);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*0);
							}
							else{
								Jewel=`Value`;
							}
							this.setState(prevState=>({
								RiskyGame:{
									...prevState.RiskyGame,
									SixthMulti:`red`,
									SixthColumn:`default`,
								},
								BetGoldValue:`${Gold}`,
								BetJewelValue:`${Jewel}`
								}))	
								e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lion.png')`;
								document.getElementById('LionGrowl').play();
								this.CardsShow(e,true,`Risky`);	
						}
					}
					break;

					case `7Column/Risky`:
					if(parentElement.style.cursor===`pointer`)
					{
						if(e.target.style.color===`green`)
						{
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*7);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*7);
							}
							else{
								Jewel=`Value`;
							}		
							this.setState(prevState=>({
							RiskyGame:{
								...prevState.RiskyGame,
								SeventhMulti:`green`,
								SeventhColumn:`default`,
							},
							BetGoldValue:`${Gold}`,
							BetJewelValue:`${Jewel}`
							}))
							e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lucky.png')`;
							document.getElementById('CardPick').play();
							this.CardsShow(e,false,`Risky`);
						}
						else
						{
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*0);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*0);
							}
							else{
								Jewel=`Value`;
							}
							this.setState(prevState=>({
								RiskyGame:{
									...prevState.RiskyGame,
									SeventhMulti:`red`,
									SeventhColumn:`default`,
								},
								BetGoldValue:`${Gold}`,
								BetJewelValue:`${Jewel}`
								}))	
								e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lion.png')`;
								document.getElementById('LionGrowl').play();
								this.CardsShow(e,true,`Risky`);	
						}
					}
					break;							
				}
			}
			}
			else
			{
				window.alert('Place a bet first!!!');
			}
			
		}



		CardPickRiskiest(e){
			let parentElement=e.target.parentElement;
			let parentName=parentElement.getAttribute('name');
			let Gold=0;
			let Jewel=0;
			if(this.state.BetState.Opac<1)
			{
			if((parentName===`1Column/Riskiest`) && (parentElement.style.cursor===`pointer`))
			{
				this.GenerateCardVariables(parentName,`Riskiest`);
				if(e.target.style.color===`green`)
				{		
					//Megkell nezzem melyik letezik!
					if(this.state.BetGoldValue!==`Value`){
						Gold=Math.floor(Number(this.state.BetGoldValue)*3);
					}
					else{
						Gold=`Value`;
					}
					if(this.state.BetJewelValue!==`Value`){
						Jewel=Math.floor(Number(this.state.BetJewelValue)*3);
					}
					else{
						Jewel=`Value`;
					}
					this.setState(prevState=>({
					ChestOpen:{
					...prevState.ChestOpen,
					visibility:`hidden`
					},
					RiskiestGame:{
						...prevState.RiskiestGame,
						FirstMulti:`green`,
						FirstColumn:`default`,
						SecondColumn:`pointer`
					},
					StandardState:{
					...prevState.StandardState,
						visibility:`hidden`,
					},
					RiskyState:{
					...prevState.RiskyState,
					visibility:`hidden`,
					},
					BetGoldValue:`${Gold}`,
					BetJewelValue:`${Jewel}`

					}))
					e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lucky.png')`;
					document.getElementById('CardPick').play();
					this.CardsShow(e,false,`Riskiest`);
				}
				else
				{
					if(this.state.BetGoldValue!==`Value`){
						Gold=Math.floor(Number(this.state.BetGoldValue)*0);
					}
					else{
						Gold=`Value`;
					}
					if(this.state.BetJewelValue!==`Value`){
						Jewel=Math.floor(Number(this.state.BetJewelValue)*0);
					}
					else{
						Jewel=`Value`;
					}
					this.setState(prevState=>({
					ChestOpen:{
					...prevState.ChestOpen,
					visibility:`hidden`
					},
					RiskiestGame:{
						...prevState.RiskiestGame,
						FirstMulti:`red`,
						FirstColumn:`default`,
					},
					StandardState:{
					...prevState.StandardState,
						visibility:`hidden`,
					},
					RiskyState:{
					...prevState.RiskyState,
					visibility:`hidden`,
					},
					BetGoldValue:`${Gold}`,
					BetJewelValue:`${Jewel}`
					}))	
					e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lion.png')`;
					document.getElementById('LionGrowl').play();
					this.CardsShow(e,true,`Riskiest`);
				}
				//Megmutatjuk a tobbit is ezen az oszlopon
			}
			//SecondColumn to the end

			else
			{
				switch(parentName)
				{
					case `2Column/Riskiest`:
					if(parentElement.style.cursor===`pointer`)
					{
						if(e.target.style.color===`green`)
						{		
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*4);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*4);
							}
							else{
								Jewel=`Value`;
							}
							this.setState(prevState=>({
							RiskiestGame:{
								...prevState.RiskiestGame,
								SecondMulti:`green`,
								SecondColumn:`default`,
								ThirdColumn:`pointer`
							},
							BetGoldValue:`${Gold}`,
							BetJewelValue:`${Jewel}`
							}))
							e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lucky.png')`;
							document.getElementById('CardPick').play();
							this.CardsShow(e,false,`Riskiest`);
						}
						else
						{
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*0);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*0);
							}
							else{
								Jewel=`Value`;
							}
							this.setState(prevState=>({
								RiskiestGame:{
									...prevState.RiskiestGame,
									SecondMulti:`red`,
									SecondColumn:`default`,
								},
								BetGoldValue:`${Gold}`,
								BetJewelValue:`${Jewel}`
								}))	
								e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lion.png')`;
								document.getElementById('LionGrowl').play();
								this.CardsShow(e,true,`Riskiest`);	
						}
					}
					break;
					case `3Column/Riskiest`:
					if(parentElement.style.cursor===`pointer`)
					{
						if(e.target.style.color===`green`)
						{
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*5);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*5);
							}
							else{
								Jewel=`Value`;
							}		
							this.setState(prevState=>({
							RiskiestGame:{
								...prevState.RiskiestGame,
								ThirdMulti:`green`,
								ThirdColumn:`default`,
								FourthColumn:`pointer`
							},
							BetGoldValue:`${Gold}`,
							BetJewelValue:`${Jewel}`
							}))
							e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lucky.png')`;
							document.getElementById('CardPick').play();
							this.CardsShow(e,false,`Riskiest`);
						}
						else
						{
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*0);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*0);
							}
							else{
								Jewel=`Value`;
							}
							this.setState(prevState=>({
								RiskiestGame:{
									...prevState.RiskiestGame,
									ThirdMulti:`red`,
									ThirdColumn:`default`,
								},
								BetGoldValue:`${Gold}`,
								BetJewelValue:`${Jewel}`
								}))	
								e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lion.png')`;
								document.getElementById('LionGrowl').play();
								this.CardsShow(e,true,`Riskiest`);	
						}
					}
					break;

					case `4Column/Riskiest`:
					if(parentElement.style.cursor===`pointer`)
					{
						if(e.target.style.color===`green`)
						{		
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*6);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*6);
							}
							else{
								Jewel=`Value`;
							}
							this.setState(prevState=>({
							RiskiestGame:{
								...prevState.RiskiestGame,
								FourthMulti:`green`,
								FourthColumn:`default`,
								FifthColumn:`pointer`
							},
							BetGoldValue:`${Gold}`,
							BetJewelValue:`${Jewel}`
							}))
							e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lucky.png')`;
							document.getElementById('CardPick').play();
							this.CardsShow(e,false,`Riskiest`);
						}
						else
						{
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*0);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*0);
							}
							else{
								Jewel=`Value`;
							}
							this.setState(prevState=>({
								RiskiestGame:{
									...prevState.RiskiestGame,
									FourthMulti:`red`,
									FourthColumn:`default`,
								},
								BetGoldValue:`${Gold}`,
								BetJewelValue:`${Jewel}`
								}))	
								e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lion.png')`;
								document.getElementById('LionGrowl').play();
								this.CardsShow(e,true,`Riskiest`);	
						}
					}
					break;

					case `5Column/Riskiest`:
					if(parentElement.style.cursor===`pointer`)
					{
						if(e.target.style.color===`green`)
						{
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*8);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*8);
							}
							else{
								Jewel=`Value`;
							}		
							this.setState(prevState=>({
							RiskiestGame:{
								...prevState.RiskiestGame,
								FifthMulti:`green`,
								FifthColumn:`default`,
								SixthColumn:`pointer`
							},
							BetGoldValue:`${Gold}`,
							BetJewelValue:`${Jewel}`
							}))
							e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lucky.png')`;
							document.getElementById('CardPick').play();
							this.CardsShow(e,false,`Riskiest`);
						}
						else
						{
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*0);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*0);
							}
							else{
								Jewel=`Value`;
							}
							this.setState(prevState=>({
								RiskiestGame:{
									...prevState.RiskiestGame,
									FifthMulti:`red`,
									FifthColumn:`default`,
								},
								BetGoldValue:`${Gold}`,
								BetJewelValue:`${Jewel}`
								}))	
								e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lion.png')`;
								document.getElementById('LionGrowl').play();
								this.CardsShow(e,true,`Riskiest`);	
						}
					}
					break;

					case `6Column/Riskiest`:
					if(parentElement.style.cursor===`pointer`)
					{
						if(e.target.style.color===`green`)
						{	
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*10);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*10);
							}
							else{
								Jewel=`Value`;
							}	
							this.setState(prevState=>({
							RiskiestGame:{
								...prevState.RiskiestGame,
								SixthMulti:`green`,
								SixthColumn:`default`,
								SeventhColumn:`pointer`
							},
							BetGoldValue:`${Gold}`,
							BetJewelValue:`${Jewel}`
							}))
							e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lucky.png')`;
							document.getElementById('CardPick').play();
							this.CardsShow(e,false,`Riskiest`);
						}
						else
						{
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*0);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*0);
							}
							else{
								Jewel=`Value`;
							}
							this.setState(prevState=>({
								RiskiestGame:{
									...prevState.RiskiestGame,
									SixthMulti:`red`,
									SixthColumn:`default`,
								},
								BetGoldValue:`${Gold}`,
								BetJewelValue:`${Jewel}`
								}))	
								e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lion.png')`;
								document.getElementById('LionGrowl').play();
								this.CardsShow(e,true,`Riskiest`);	
						}
					}
					break;

					case `7Column/Riskiest`:
					if(parentElement.style.cursor===`pointer`)
					{
						if(e.target.style.color===`green`)
						{
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*14);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*14);
							}
							else{
								Jewel=`Value`;
							}		
							this.setState(prevState=>({
							RiskiestGame:{
								...prevState.RiskiestGame,
								SeventhMulti:`green`,
								SeventhColumn:`default`,
							},
							BetGoldValue:`${Gold}`,
							BetJewelValue:`${Jewel}`
							}))
							e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lucky.png')`;
							document.getElementById('CardPick').play();
							this.CardsShow(e,false,`Riskiest`);
						}
						else
						{
							if(this.state.BetGoldValue!==`Value`){
								Gold=Math.floor(Number(this.state.BetGoldValue)*0);
							}
							else{
								Gold=`Value`;
							}
							if(this.state.BetJewelValue!==`Value`){
								Jewel=Math.floor(Number(this.state.BetJewelValue)*0);
							}
							else{
								Jewel=`Value`;
							}
							this.setState(prevState=>({
								RiskiestGame:{
									...prevState.RiskiestGame,
									SeventhMulti:`red`,
									SeventhColumn:`default`,
								},
								BetGoldValue:`${Gold}`,
								BetJewelValue:`${Jewel}`
								}))	
								e.target.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lion.png')`;
								document.getElementById('LionGrowl').play();
								this.CardsShow(e,true,`Riskiest`);	
						}
					}
					break;							
				}
			}
			}
			else
			{
				window.alert('Place a bet first!!!');
			}


			
		}

		//CardsShow only available at risky riskiest difficulties
		CardsShow(e,bool,difficulty)
		{
			let parentElement=e.target.parentElement;
			if(difficulty===`Risky`)
			{
			let all=document.getElementById('JunglePathMoverRisky').getElementsByClassName('cards');
				if(bool===false)
				{
						for(let i=0;i<parentElement.getElementsByTagName('span').length;i++)
						{
							let element=parentElement.getElementsByTagName('span')[i];
							if(element.style.color===`green`)
							{
								element.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lucky.png')`;
							}
							else
							{
								element.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lion.png')`;
							}
						
						}
				}
				else
				{
					for(let i=0;i<all.length;i++)
					{
						for(let j=0;j<all[i].getElementsByTagName('span').length;j++)
						{
							let element=all[i].getElementsByTagName('span')[j];
							if(element.style.color===`green`)
							{
								element.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lucky.png')`
							}
							else
							{
								element.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lion.png')`;
							}
						}
					}
				}
			}
			else
			{
			let all2=document.getElementById('JunglePathMoverRiskiest').getElementsByClassName('cards');
				if(bool===false)
				{
						for(let i=0;i<parentElement.getElementsByTagName('span').length;i++)
						{
							let element=parentElement.getElementsByTagName('span')[i];
							if(element.style.color===`green`)
							{
								element.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lucky.png')`;
							}
							else
							{
								element.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lion.png')`;
							}
						
						}
				}
				else
				{
					for(let i=0;i<all2.length;i++)
					{
						for(let j=0;j<all2[i].getElementsByTagName('span').length;j++)
						{
							let element=all2[i].getElementsByTagName('span')[j];
							if(element.style.color===`green`)
							{
								element.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lucky.png')`
							}
							else
							{
								element.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Lion.png')`;
							}
						}
					}
				}
			}



		}


		//No State method
		GenerateCardVariables(elem,type)
		{
			if(type===`Risky`)
			{
			let CardsContainer=document.getElementById('JunglePathMoverRisky').getElementsByClassName('cards');
			for(let i=0;i<CardsContainer.length;i++)
			{
				let LeafNum=0;
				let LionNum=0;
				for(let j=0;j<CardsContainer[i].getElementsByTagName('span').length;j++)
				{
					let element=CardsContainer[i].getElementsByTagName('span')[j];
					let Num=Math.floor(Math.random()*2)+1;
					if(Num===1){
						if(LeafNum!==2){
							element.style.color=`green`
							LeafNum+=1;
						}
						else{
							element.style.color=`red`;
							LionNum+=1;
						}
					}
					else{
						if(LionNum!==2){
							element.style.color=`red`;
							LionNum+=1;
						}
						else{
							element.style.color=`green`
							LeafNum+=1;
						}
					}	
				}
			}
			}
			else
			{
			let CardsContainer=document.getElementById('JunglePathMoverRiskiest').getElementsByClassName('cards');
			for(let i=0;i<CardsContainer.length;i++)
			{
				let LeafNum=0;
				let LionNum=0;
				for(let j=0;j<CardsContainer[i].getElementsByTagName('span').length;j++)
				{
					let element=CardsContainer[i].getElementsByTagName('span')[j];
					let Num=Math.floor(Math.random()*2)+1;
					if(Num===1)
					{
						if(LeafNum!==1){
							element.style.color=`green`
							LeafNum+=1;
						}
						else{
							element.style.color=`red`;
							LionNum+=1;
						}
					}
					else
					{
						if(LionNum!==3){
							element.style.color=`red`;
							LionNum+=1;
						}
						else{
							element.style.color=`green`
							LeafNum+=1;
						}
					}	
				}
			}
			}
		}	




		//6.Accept Button
		Accept(){
			//Elobb a nyeremenyeket felirjuk, aztan visszapakoljuk a dolgokat!
			let BetOpac=this.state.BetState.Opac;
			if(BetOpac<1)
			{
				let Gold=this.state.BetGoldValue;
				let Jewel=this.state.BetJewelValue;
				let ReceivedGold=0;
				let ReceivedJewel=0;
				if(Gold!==`Value`)
				{
					ReceivedGold=Number(Gold)+this.state.GoldValue;
				}
				else{
					ReceivedGold=this.state.GoldValue;
				}
				if(Jewel!==`Value`)
				{
					ReceivedJewel=Number(Jewel)+this.state.JewelValue;
				}
				else
				{
					ReceivedJewel=this.state.JewelValue;
				}
				this.setState(prevState=>({
					GoldValue:ReceivedGold,
					JewelValue:ReceivedJewel,
					PathMover:{
						...prevState.PathMover,
						visibility:`visible`,
					},
					ChestOpen:{
						...prevState.ChestOpen,
						visibility:`visible`,
					},
					GoldInputState: {Disabled: false, Opac:1},
					JewelInputState: {Disabled: false, Opac:1},
					BetState:{Disabled: false, Opac:1, Curs:`pointer`},
					BetGoldValue:`Value`,
					BetJewelValue:`Value`,
					JewelPart:`none`,
					AndPart:`none`,
					GoldPart:`none`,
					StandardState:{
					...prevState.StandardState,
					visibility:`visible`,
					},
					RiskyState:{
					...prevState.RiskyState,
					visibility:`visible`,
					},
					RiskiestState:{
					...prevState.RiskiestState,
					visibility:`visible`,
					},
					//KartyakVisszaallitasa
					StandardGame:{
				    	FirstMulti:`transparent`,
				    	SecondMulti:`transparent`,
				    	ThirdMulti:`transparent`,
				    	FourthMulti:`transparent`,
				    	FifthMulti:`transparent`,
				    	SixthMulti:`transparent`,
				    	SeventhMulti:`transparent`,

				    	FirstColumn:`pointer`,
				    	SecondColumn:`default`,
				    	ThirdColumn:`default`,
				    	FourthColumn:`default`,
				    	FifthColumn:`default`,
				    	SixthColumn:`default`,
				    	SeventhColumn:`default`,
		   			},

			   		RiskyGame:{
				    	FirstMulti:`transparent`,
				    	SecondMulti:`transparent`,
				    	ThirdMulti:`transparent`,
				    	FourthMulti:`transparent`,
				    	FifthMulti:`transparent`,
				    	SixthMulti:`transparent`,
				    	SeventhMulti:`transparent`,

				    	FirstColumn:`pointer`,
				    	SecondColumn:`default`,
				    	ThirdColumn:`default`,
				    	FourthColumn:`default`,
				    	FifthColumn:`default`,
				    	SixthColumn:`default`,
				    	SeventhColumn:`default`,
			   		},
			   		RiskiestGame:
			   		{
				    	//I.Multipliers
				    	FirstMulti:`transparent`,
				    	SecondMulti:`transparent`,
				    	ThirdMulti:`transparent`,
				    	FourthMulti:`transparent`,
				    	FifthMulti:`transparent`,
				    	SixthMulti:`transparent`,
				    	SeventhMulti:`transparent`,
				    	//II.Columns
				    	FirstColumn:`pointer`,
				    	SecondColumn:`default`,
				    	ThirdColumn:`default`,
				    	FourthColumn:`default`,
				    	FifthColumn:`default`,
				    	SixthColumn:`default`,
				    	SeventhColumn:`default`,
		  		    },

				}))
				//Kulon Kulon
				let CardContainerStandard=document.getElementById('JunglePathMoverStandard').getElementsByClassName('cards');
				let CardContainerRisky=document.getElementById('JunglePathMoverRisky').getElementsByClassName('cards');
				let CardcontainerRiskiest=document.getElementById('JunglePathMoverRiskiest').getElementsByClassName('cards');
				for(let i=0;i<CardContainerStandard.length;i++)
				{
					let cards=CardContainerStandard[i].getElementsByTagName('span');
					for(let j=0;j<cards.length;j++)
					{
						cards[j].style.backgroundImage=`url('Pictures/JungleFinder/Accessories/CardsStandard.png')`;
					}
				}
				//Risky
				for(let i=0;i<CardContainerRisky.length;i++)
				{
					let cards=CardContainerRisky[i].getElementsByTagName('span');
					for(let j=0;j<cards.length;j++)
					{
						cards[j].style.backgroundImage=`url('Pictures/JungleFinder/Accessories/CardsRisky.png')`;
					}
				}
				//Riskiest
				for(let i=0;i<CardcontainerRiskiest.length;i++)
				{
					let cards=CardcontainerRiskiest[i].getElementsByTagName('span');
					for(let j=0;j<cards.length;j++)
					{
						cards[j].style.backgroundImage=`url('Pictures/JungleFinder/Accessories/CardsRiskiest.png')`;
					}
				}
				document.getElementById('AcceptGoldJewels').play();
			}
		}


		GameChanger(e){
			let Curzor=e.target.style.cursor;
			let ID=e.target.id;
			if(Curzor!==`default`)
			{
				if(ID===`JungleChestOpenGame`)
				{
					document.getElementById('ChangeGameChest').play();
					let ChestSet=document.getElementById('JungleChestOpenGamePlay').getElementsByClassName('Chests');
					for(let i=0;i<ChestSet.length;i++)
					{
						if(i<=9)
						{
							ChestSet[i].style.display=`inline-block`;
						}
						else
						{
							ChestSet[i].style.display=`none`;
						}
					}
					document.getElementById('ChestOpenDifficultyValue').style.color=`green`;
					document.getElementById('ChestOpenDifficultyValue').innerHTML=`Easy`;

					this.setState(prevState=>({
						ChestOpen:{
							...prevState.ChestOpen,
							Background: `url('Pictures/JungleFinder/BetGameComponents/ChestOpenOn.png'), url('Pictures/JungleFinder/HeaderBG.jpg')`,
							cursor: `default`,
						},
						PathMover:{
							...prevState.PathMover,
							Background: `url('Pictures/JungleFinder/BetGameComponents/PathMoverOff.png'), url('Pictures/JungleFinder/MenuItemsSelected.jpg')`,
							cursor:`pointer`,
						},
						PathGameActive: `none`,
						ChestGameActive: `block`,
						SelectedBetGameHeader:`ChestOpen`,
						HazardGameBG: `url('Pictures/JungleFinder/BetGameComponents/HazardBG.gif') ,url('Pictures/JungleFinder/ItemsPotionsBG.png')`,
						ChestNumbers: 5,
					}))
				}
				else
				{
					document.getElementById('ChangeGamePath').play();
					this.setState(prevState=>({
						ChestOpen:{
							...prevState.ChestOpen,
							Background: `url('Pictures/JungleFinder/BetGameComponents/ChestOpenOff.png'), url('Pictures/JungleFinder/HeaderBG.jpg')`,
							cursor: `pointer`,
						},
						PathMover:{
							...prevState.PathMover,
							Background: `url('Pictures/JungleFinder/BetGameComponents/PathMoverOn.png'), url('Pictures/JungleFinder/MenuItemsSelected.jpg')`,
							cursor:`default`,
						},
						PathGameActive: `block`,
						ChestGameActive: `none`,
						SelectedBetGameHeader:`PathMover`,
						HazardGameBG: `url('Pictures/JungleFinder/BetGameComponents/JungleBetGame.png') ,url('Pictures/JungleFinder/ItemsPotionsBG.png')`,
					}))
				}
			}
		}

		//ChestOpenGame Methods
		ChestGameInformation(e){
			try
			{
				let display=e.target.getElementsByTagName('div')[0].style.display;
				if(display===`none`)
				{
					this.setState({
						ChestOpenInfo: `block`
					})
				}
				else
				{
					this.setState({
						ChestOpenInfo: `none`
					})	
				}
			}
			catch(error)
			{
				console.log(`error: ${error}`);
			}

		}

		//Jquery function (Animation mostly)
		ChestOpen(event){
			event.persist();
			let Jewel=0;
			let Gold=0;
			if(this.state.BetJewelValue!==`Value`)
			{
				Jewel=Number(this.state.BetJewelValue);
			}
			if(this.state.BetGoldValue!==`Value`)
			{
				Gold=Number(this.state.BetGoldValue);
			}				
			if(this.state.BetState.Opac<1)
			{
				$(document).ready(()=>{
					let Cursor=window.getComputedStyle(event.target,null).getPropertyValue('cursor');
					if(Cursor===`pointer`)
					{
						if(!this.state.FirstChestConsumCheck)
						{
							if((Gold>=2000) ||(Jewel>=25))
							{
								this.setState({
									FirstChestConsumCheck:true,
								})
							}
							else
							{
								window.alert(`Minimum stakes are: 2000 for gold and 25 for jewels!`);
							}
						}
						if(this.state.FirstChestConsumCheck)
						{

						let ChestContainer=document.getElementById('JungleChestOpenGamePlay').getElementsByClassName('Chests');
						//Protect the 
						let GoldGenerated=0;
						let JewelGenerated=0;
						let Multiplier=0;
						let Ghost=false;
						let Chests=this.state.ChestNumbers;
						//Bizonyos dolgokat kiszedunk(Normalisan 1x kell vegrehajtani ne dolgozzunk potyara)
						if(!this.state.FirstChestOpen)
						{
							this.setState(prevState=>({
								PathMover:
								{
									...prevState.PathMover,
									visibility:`hidden`,
								},
								FirstChestOpen: true,

							}))
							document.getElementById('ChestGameAccept').disabled=true;
							document.getElementById('ChestGameAccept').style.opacity=0.7;
							document.getElementById('ChestNumberInput').disabled=true;
							document.getElementById('ChestNumberInput').style.opacity=0.7;

						}
						if(Chests!==0)
						{
							let a=Chests-1;
							this.setState({
								ChestNumbers: a,
							})

						}
						else
						{
							document.getElementById('ChestGameAccept').disabled=false;
							document.getElementById('ChestGameAccept').style.opacity=1;
						}

						for(let i=0;i<ChestContainer.length;i++)
						{
							ChestContainer[i].style.cursor=`default`;
						}

						//A tobbihez ne nyuljon, ahhoz kell egy color amivel lehet identifikalni!
						setTimeout(()=>{
						for(let i=0;i<ChestContainer.length;i++)
						{
							if(ChestContainer[i].style.color!==`red`){
								ChestContainer[i].style.cursor=`pointer`;
							}
						}
						$(event.target).css({
							cursor: `default`,
							color: `red`
						})

						},2000)

						$(event.target).css({
							backgroundImage: `url('Pictures/JungleFinder/BetGameComponents/ChestOpenOn.png')`,
						});
						let soundtrackChest=Math.floor(Math.random()*2)+1;
						if(soundtrackChest===1)
						{
							document.getElementById('ChestOpen1').play();
						}
						else
						{
							document.getElementById('ChestOpen2').play();
						}
						//Generalunk veletlenszeruen// MQ is required(necessary)
						let Main=Math.floor(Math.random()*100)+1;
						let show=event.target.getElementsByTagName('div')[0];
						let inside=show.getElementsByTagName('span')[0];
							if(Main<=75)
							{
								let GoldJewel=Math.floor(Math.random()*100)+1;
								if(GoldJewel<=80)
								{
									//gold
									//Melyik gold!
									let GoldRandom=Math.floor(Math.random()*100)+1;
									if(GoldRandom<=80)
									{
										let GoldValue=Math.floor(Math.random()*10)+1;
										GoldGenerated=1;
										this.DivideNumbers(GoldValue,inside,true);
										this.setState({
											BetGoldValue: `${Gold+GoldValue}`,
											GoldPart: `inline`,
										})
										
									}
									else
									{
										if((GoldRandom>80) && (GoldRandom<=95))
										{
											let GoldValue=Math.floor(Math.random()*90)+11;
											GoldGenerated=2;
											this.DivideNumbers(GoldValue,inside,true);
											this.setState({
												BetGoldValue: `${Gold+GoldValue}`,
												GoldPart: `inline`,
											})
										}
										else
										{
											let GoldValue=Math.floor(Math.random()*9899)+101;
											GoldGenerated=3;
											this.DivideNumbers(GoldValue,inside,true);
											this.setState({
												BetGoldValue: `${Gold+GoldValue}`,
												GoldPart: `inline`,
											})
										}

									}	

								}
								else
								{
									//Jewel
									let JewelRandom=Math.floor(Math.random()*100)+1;
									if(JewelRandom<=90)
									{
										let JewelValue=Math.floor(Math.random()*10)+1;
										this.DivideNumbers(JewelValue,inside,false);
										JewelGenerated=1;
										this.setState({
											BetJewelValue: `${Jewel+JewelValue}`,
											AndPart: `inline`,
											JewelPart: `inline`,
										})
									}
									else
									{
										let JewelValue=Math.floor(Math.random()*100)+1;
										this.DivideNumbers(JewelValue,inside,false);
										JewelGenerated=2;
										this.setState({
											BetJewelValue: `${Jewel+JewelValue}`,
											AndPart: `inline`,
											JewelPart: `inline`,
										})
									}
								}		
							}
							else
							{
								//Szazalekok!
								if((Main>75) && (Main<=95))
								{
									//Egyforma az eselye mind a pozitiv mind a negativ ertekekre nezve!
									let PositivNegativ=Math.floor(Math.random()*100)+1;
									if(PositivNegativ>50)
									{
											//Positiv 
											//Gold/Jewel
											let PositivPercent=Math.floor(Math.random()*899)+1;
											this.DivideMultipliers(PositivPercent,inside,true);
											Multiplier=1;	
											this.setState({
												BetGoldValue: `${Math.floor(Gold+Gold*(PositivPercent/100))}`,
												BetJewelValue: `${Math.floor(Jewel+Jewel*(PositivPercent/100))}`,
												GoldPart: `inline`,
												AndPart: `inline`,
												JewelPart: `inline`,
										})	
									}
									else
									{
										//Negativ
										let NegativPercent=Math.floor(Math.random()*89)+1;
										this.DivideMultipliers(NegativPercent,inside,false);
										this.setState({
												BetGoldValue: `${Math.floor(Gold-(Gold*(NegativPercent/100)))}`,
												BetJewelValue: `${Math.floor(Jewel-(Jewel*(NegativPercent/100)))}`,
												GoldPart: `inline`,
												AndPart: `inline`,
												JewelPart: `inline`,
										})	
										Multiplier=-1;
									}
								}
								else
								{
								Ghost=true;
									this.setState({
											BetGoldValue: `${0}`,
											BetJewelValue: `${0}`,
											GoldPart: `inline`,
											AndPart: `inline`,
											JewelPart: `inline`,
									})
								if(($globalScreenWidthMQ>=320) && ($globalScreenWidthMQ<=480))
								{
									inside.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/ChestGameGhost.png')`;
									inside.style.backgroundSize=`10vw 8vw`;
									inside.style.backgroundPosition=`0vw 0vw`;
								}
								else
								{
									if(($globalScreenWidthMQ>=481) && ($globalScreenWidthMQ<=767))
									{
										inside.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/ChestGameGhost.png')`;
										inside.style.backgroundSize=`10vw 8vw`;
										inside.style.backgroundPosition=`0vw 0vw`;
									}
									else
									{
										inside.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/ChestGameGhost.png')`;
										inside.style.backgroundSize=`5vw 4vw`;
										inside.style.backgroundPosition=`0vw 0vw`;
									}

								}	

								}

							}
						$(show).fadeToggle(750,()=>{
							if(GoldGenerated!==0)
							{
								if(GoldGenerated===1)
								{
									document.getElementById('CoinMinor').play();
								}
								else
								{
									if(GoldGenerated===2)
									{
										document.getElementById('CoinMedium').play();
									}
									else
									{
										document.getElementById('CoinMajor').play();
									}
								}
							}

							if(JewelGenerated!==0)
							{
								if(JewelGenerated===1)
								{
									document.getElementById('JewelMedium').play();
								}
								else
								{
									document.getElementById('JewelHigh').play();
								}
							}

							if(Multiplier!==0)
							{
								if(Multiplier===1)
								{
									document.getElementById('PositivePercent').play();
								}
								else
								{
									document.getElementById('NegativePercent').play();
								}
								
							}

							if(Ghost)
							{
								document.getElementById('Ghost').play();
							}
							
						});

					//ide
						}							

					}
				})
			}
			else
			{
				window.alert('Place a bet first!');
			}

		}

		DivideNumbers(e,element,gold){
				let value=e;
				let check=value.toString().length;
				let values=[];
				let words=[];
				//A wordot length szerint nezem
				while(value!=0)
				{
					let Modvalue=value % 10;
					values.unshift(Modvalue);
					value=Math.floor(value/10);
				}
				while(values.length!==0)
				{
					switch(values[0])
					{
						case 1:
							words.push('One');
							values.shift();
						break;
						case 2:
							words.push('Two');
							values.shift();
						break;
						case 3:
							words.push('Three');
							values.shift();
						break;
						case 4:
							words.push('Four');
							values.shift();
						break;
						case 5:
							words.push('Five');
							values.shift();
						break;
						case 6:
							words.push('Six');
							values.shift();
						break;
						case 7:
							words.push('Seven');
							values.shift();
						break;
						case 8:
							words.push('Eight');
							values.shift();
						break;
						case 9:
							words.push('Nine');
							values.shift();
						break;
						case 0:
							words.push('Zero');
							values.shift();
						break;									
					}
				}
				if(gold)
				{
					if(($globalScreenWidthMQ>=320) && ($globalScreenWidthMQ<=480))
					{
						element.style.backgroundSize=`5.8vw 8vw`;
						element.style.backgroundPosition=`0vw 0vw,3.8vw 0vw,7.6vw 0vw,11.4vw 0vw`;
					}
					else
					{
						if(($globalScreenWidthMQ>=481) && ($globalScreenWidthMQ<=767))
						{
							element.style.backgroundSize=`5.8vw 8vw`;
							element.style.backgroundPosition=`0vw 0vw,3.8vw 0vw,7.6vw 0vw,11.4vw 0vw`;
						}
						else
						{
							element.style.backgroundSize=`2.9vw 4vw`;
							element.style.backgroundPosition=`0vw 0vw,1.9vw 0vw,3.8vw 0vw,5.7vw 0vw`;
						}
					}
					console.log(e);
					switch(check)
					{
						//Szamjegy(Digits)
						case 1:
							element.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Numbers/GoldNum/${words[0]}.png'), 
														   url(''),
														   url(''),
														   url('')`;
							
						break;
						case 2:
							element.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Numbers/GoldNum/${words[0]}.png'), 
														   url('Pictures/JungleFinder/BetGameComponents/Numbers/GoldNum/${words[1]}.png'),
														   url(''),
														   url('')`;
						break;
						case 3:
							element.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Numbers/GoldNum/${words[0]}.png'), 
														   url('Pictures/JungleFinder/BetGameComponents/Numbers/GoldNum/${words[1]}.png'),
														   url('Pictures/JungleFinder/BetGameComponents/Numbers/GoldNum/${words[2]}.png'),
														   url('')`;
						break;
						case 4:
							element.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Numbers/GoldNum/${words[0]}.png'), 
														   url('Pictures/JungleFinder/BetGameComponents/Numbers/GoldNum/${words[1]}.png'),
														   url('Pictures/JungleFinder/BetGameComponents/Numbers/GoldNum/${words[2]}.png'),
														   url('Pictures/JungleFinder/BetGameComponents/Numbers/GoldNum/${words[3]}.png')`;
						break;
					}
				}
				else
				{
					if(($globalScreenWidthMQ>=320) && ($globalScreenWidthMQ<=480))
					{
						element.style.backgroundSize=`7.4vw 10.6vw`;
						element.style.backgroundPosition=`0vw 0vw,5vw 0vw,10vw 0vw`;
					}
					else
					{
						if(($globalScreenWidthMQ>=481) && ($globalScreenWidthMQ<=767))
						{
							element.style.backgroundSize=`7.4vw 10.6vw`;
							element.style.backgroundPosition=`0vw 0vw,5vw 0vw,10vw 0vw`;
						}
						else
						{
							element.style.backgroundSize=`3.7vw 5.3vw`;
							element.style.backgroundPosition=`0vw 0vw,2.5vw 0vw,5vw 0vw`;
						}
					}
					console.log(e);
					switch(check)
					{
						//Szamjegy(Digits)
						case 1:
							element.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Numbers/JewelNum/${words[0]}.png'), 
														   url(''),
														   url('')`;
							console.log(words[0]);
						break;
						case 2:
							element.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Numbers/JewelNum/${words[0]}.png'), 
														   url('Pictures/JungleFinder/BetGameComponents/Numbers/JewelNum/${words[1]}.png'),
														   url('')`;
						break;
						case 3:
							element.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Numbers/JewelNum/${words[0]}.png'), 
														   url('Pictures/JungleFinder/BetGameComponents/Numbers/JewelNum/${words[1]}.png'),
														   url('Pictures/JungleFinder/BetGameComponents/Numbers/JewelNum/${words[2]}.png')`;
						break;
					}
				}
			
		}


		DivideMultipliers(e,element,positive){
			let value=e;
			let check=value.toString().length;
			let values=[];
			let words=[];
			while(value!==0)
			{
				let Modvalue=value % 10;
				values.unshift(Modvalue);
				value=Math.floor(value/10);
			}
			while(values.length!==0)
			{
				switch(values[0])
				{
					case 1:
						words.push(`One`);
						values.shift();
					break;
					case 2:
						words.push('Two');
						values.shift();
					break;
					case 3:
						words.push('Three');
						values.shift();
					break;
					case 4:
						words.push('Four');
						values.shift();
					break;
					case 5:
						words.push('Five');
						values.shift();
					break;
					case 6:
						words.push('Six');
						values.shift();
					break;
					case 7:
						words.push('Seven');
						values.shift();
					break;
					case 8:
						words.push('Eight');
						values.shift();
					break;
					case 9:
						words.push('Nine');
						values.shift();
					break;
					case 0:
						words.push('Zero');
						values.shift();
					break;
				}
			}
			if(($globalScreenWidthMQ>=320) && ($globalScreenWidthMQ<=480))
			{
				element.style.backgroundSize=`5.2vw 7.2vw`;
				element.style.backgroundPosition=`0vw 0vw,3.4vw 0vw,6.8vw 0vw,10.2vw 0vw`;
			}
			else
			{
				if(($globalScreenWidthMQ>=481) && ($globalScreenWidthMQ<=767))
				{
					element.style.backgroundSize=`5.2vw 7.2vw`;
					element.style.backgroundPosition=`0vw 0vw,3.4vw 0vw,6.8vw 0vw,10.2vw 0vw`;
				}
				else
				{
					element.style.backgroundSize=`2.6vw 3.6vw`;
					element.style.backgroundPosition=`0vw 0vw,1.7vw 0vw,3.4vw 0vw,5.1vw 0vw`;
				}

			}
			if(positive)
			{
				//Positive values
					switch(check)
					{
						case 1:
							element.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Numbers/PositivePercentages/${words[0]}.png'),
														   url('Pictures/JungleFinder/BetGameComponents/Numbers/GreenPercent.png'),
														   url(''),
														   url('')`;
						break;
						case 2:
							element.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Numbers/PositivePercentages/${words[0]}.png'),
														   url('Pictures/JungleFinder/BetGameComponents/Numbers/PositivePercentages/${words[1]}.png'),
														   url('Pictures/JungleFinder/BetGameComponents/Numbers/GreenPercent.png'),
														   url('')`;
						break;
						case 3:
							element.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Numbers/PositivePercentages/${words[0]}.png'),
														   url('Pictures/JungleFinder/BetGameComponents/Numbers/PositivePercentages/${words[1]}.png'),
														   url('Pictures/JungleFinder/BetGameComponents/Numbers/PositivePercentages/${words[2]}.png'),
														   url('Pictures/JungleFinder/BetGameComponents/Numbers/GreenPercent.png')`;
						break;	
					}
			}
			else
			{
				//Negativ values
				switch(check)
					{
						case 1:
							element.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Numbers/Minus.png'),
														   url('Pictures/JungleFinder/BetGameComponents/Numbers/NegativPercentages/${words[0]}.png'),
														   url('Pictures/JungleFinder/BetGameComponents/Numbers/RedPercent.png'),
														   url('')`;
						break;
						case 2:
							element.style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/Numbers/Minus.png'),
														   url('Pictures/JungleFinder/BetGameComponents/Numbers/NegativPercentages/${words[0]}.png'),
														   url('Pictures/JungleFinder/BetGameComponents/Numbers/NegativPercentages/${words[1]}.png'),
														   url('Pictures/JungleFinder/BetGameComponents/Numbers/RedPercent.png')`;
						break;
					}
			}
		}

		//Chests Input
		ChestInput(e)
		{
			let Target=Math.floor(e.target.value);
			if(e.key===`Enter`)
			{
				if(e.target.value.length!==0)
				{
					if(e.target.value<10)
					{
						window.alert('Input value must be higher than 10!');
					}
					else
					{
						if(e.target.value>30)
						{
							window.alert(`Input's maximum value is 30!`);
						}
						else
						{
							this.setState({
								ChestNumbers: Math.floor(Target/2),
							})
							let Chests=document.getElementById('JungleChestOpenGamePlay').getElementsByClassName('Chests');
							for(let i=0;i<Chests.length;i++)
							{
								if(i<e.target.value)
								{
									Chests[i].style.display=`inline-block`;
								}
								else
								{
									Chests[i].style.display=`none`;	
								}
							}
							if(e.target.value<=15)
							{
								document.getElementById('ChestOpenDifficultyValue').style.color=`green`;
								document.getElementById('ChestOpenDifficultyValue').innerHTML=`Easy`;
							}
							else
							{
								if((e.target.value>15) && (e.target.value<=25))
								{
									document.getElementById('ChestOpenDifficultyValue').style.color=`orange`;
									document.getElementById('ChestOpenDifficultyValue').innerHTML=`Normal`;
								}
								else
								{
									document.getElementById('ChestOpenDifficultyValue').style.color=`red`;
									document.getElementById('ChestOpenDifficultyValue').innerHTML=`Hard`;
								}	
							}
						}
					}
				}
				else
				{
					window.alert('Input field must contain a number!');
				}
			}
		}

		ChestAccept(e){
			let BetOpac=this.state.BetState.Opac;
			if(BetOpac<1)
			{	
				let Cursor=window.getComputedStyle(e.target,null).getPropertyValue('cursor');
				if(Cursor===`pointer`)
				{
					let ReceivedGold=this.state.GoldValue;
					let ReceivedJewel=this.state.JewelValue;
					if(this.state.BetGoldValue!==`Value`)
					{
						ReceivedGold+=Number(this.state.BetGoldValue);
					}
					if(this.state.BetJewelValue!==`Value`)
					{
						ReceivedJewel+=Number(this.state.BetJewelValue);
					}
					this.setState(prevState=>({
						GoldValue:ReceivedGold,
						JewelValue:ReceivedJewel,
						PathMover:{
							...prevState.PathMover,
							visibility:`visible`,
						},
						ChestOpen:{
							...prevState.ChestOpen,
							visibility:`visible`,
						},
						GoldInputState: {Disabled: false, Opac:1},
						JewelInputState: {Disabled: false, Opac:1},
						BetState:{Disabled: false, Opac:1, Curs:`pointer`},
						BetGoldValue:`Value`,
						BetJewelValue:`Value`,
						JewelPart:`none`,
						AndPart:`none`,
						GoldPart:`none`,
						//Chests vissza
						ChestNumbers:5,
		    			FirstChestOpen:false,
		    			FirstChestConsumCheck: false,
					}))
					//Visszarakni a ladakat is!
					document.getElementById('ChestNumberInput').disabled=false;
					document.getElementById('ChestNumberInput').style.opacity=1;
					let Chests=document.getElementById('JungleChestOpenGamePlay').getElementsByClassName('Chests');
					for(let i=0;i<Chests.length;i++)
					{
						Chests[i].style.backgroundImage=`url('Pictures/JungleFinder/BetGameComponents/ChestOpenOff.png')`;
						Chests[i].getElementsByTagName('div')[0].style.display=`none`;
						Chests[i].style.cursor=`pointer`;
						Chests[i].style.color=`black`;
						if(i<=9)
						{
							Chests[i].style.display=`inline-block`;
						}
						else
						{
							Chests[i].style.display=`none`;
						}
					}

					document.getElementById('AcceptGoldJewels').play();
					document.getElementById('ChestOpenDifficultyValue').style.color=`green`;
					document.getElementById('ChestOpenDifficultyValue').innerHTML=`Easy`;

				}


			}
		}


	render(){
		return(
			React.createElement('div',{id: `JungleMainDiv`},
				React.createElement('h1',{id: `JungleTitle`},`Jungle Finder`),
				//Accessories
				React.createElement('div',{id: `JungleHPContainer`},
					React.createElement('span',{id: `JungleHPCurrentValue`, style:{visibility: this.state.HPValues}},1000),
					React.createElement('span',{id: `JungleHPMaxValue`, style:{visibility: this.state.HPValues}},`/1000Hp`),
					React.createElement('div',{id: `JungleFinderLifeSphere`,onMouseOver:this.mouseOverSpheres, onMouseOut:this.mouseOutSpheres},null),
				),
				React.createElement('div',{id: `JungleAllAccessories`},
					React.createElement('div',{id: `JungleGoldAccessory`},this.state.GoldValue),
					React.createElement('div',{id: `JungleJewelAccessory`},this.state.JewelValue)
				),
				React.createElement('div',{id:`JugleXPContainer`},
					React.createElement('span',{id: `JungleXPCurrentValue`,style:{visibility: this.state.XPValues}},1),
					React.createElement('span',{id: `JungleXPMaxValue`,style:{visibility: this.state.XPValues}},`/100Xp`),
					React.createElement('div',{id: `JungleFinderXPSphere`,onMouseOver:this.mouseOverSpheres, onMouseOut:this.mouseOutSpheres},null)
				),

				React.createElement('div',{id: `JungleContainer`},
					React.createElement('div',{id:`Menu`},
						React.createElement('div',{id: `JungleMenuCharacter`,onClick:this.JungleMenuChoice},
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
						React.createElement('div',{id: `JungleMenuHazardGame`,onClick:this.JungleMenuChoice},
							React.createElement('span',{id: `JungleMenuHazardGameIcon`},`AB`),`Bet Games`),
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
								React.createElement(Chessplates,{onClick:this.ReceivedArmor, Image:`Armor.png`,IDName:`Armor1`,
									ItemName:`SmallChessplate`,Defense:40,FireDamage:10,Strength:25,Dexterity:20,Wisdom:18,Crafting:5}),
								React.createElement(Helms,{onClick: this.ReceivedHelm,Image:`ProtectiveHelm.png`,IDName:`Helm3`,
									ItemName: `DefensiveHelmet`,Defense:80,Strength:10,Dexterity:35,Wisdom:17,Crafting:2},null),
								React.createElement(Chessplates,{onClick:this.ReceivedArmor, Image:`SteelPlate.png`,IDName:`Armor2`,
									ItemName:`StrongChessplate`,Defense:80,FireDamage:22,Strength:55,Dexterity:30,Wisdom:27,Crafting:9}),
								React.createElement(Amulets,{onClick:this.ReceivedAmulet, Image:`Amulet.png`,IDName:`Amulet1`,
									ItemName:`BlessedAmulet`,DefensePercent:10,DamagePercent:18,Strength:25,Dexterity:11,Wisdom:80,
									Crafting:11,PoisonDamage:10,LightningDamage:10,FrostDamage:10,FireDamage:10}),
								React.createElement(Weapons,{onClick:this.ReceivedWeapon,IDName:`Weapon1`,ItemName:`ShortSword`,
									Damage:`5-8`,DamagePercent:5,Strength:55,Dexterity:45,PoisonDamage:5,FireDamage: 10,FrostDamage:10,LightningDamage:5}),
								React.createElement(Gloves,{onClick:this.ReceivedGloves,IDName:`Gloves1`,Defense:20,DamagePercent:5,
									DefensePercent:10,Dexterity:45,Wisdom:60,FireResist:15,LightningResist:25,FrostResist:15}),
								React.createElement(Amulets,{onClick:this.ReceivedAmulet, Image:`GodAmulet.png`,IDName:`Amulet2`,
									ItemName:`GodAmulet`,Health:500,DefensePercent:50,Strength:-10,Dexterity:90,Wisdom:10,Crafting:-2,PoisonDamage:25}),
								React.createElement(Weapons,{onClick:this.ReceivedWeapon,IDName:`Weapon2`,Image:`Sword.png`,ItemName:`BattleSword`,
									Damage:`12-16`,Strength:75,Dexterity:60,PoisonDamage:10,FireDamage: 10,FrostDamage:10,LightningDamage:10}),
								React.createElement(Gloves,{onClick:this.ReceivedGloves,ItemName:`WarmGloves`,IDName:`Gloves2`,Image:`WarmGloves.png`,
									Defense:50,DamagePercent:8,DefensePercent:20,Dexterity:75,Wisdom:105,FireResist:35,LightningResist:48,FrostResist:35}),
								React.createElement(FirstRings,{onClick:this.ReceivedFirstRings,IDName:`FirstRing1`,Health: 200,Strength:100,Dexterity:100,Wisdom:110,
									Crafting:25,PoisonResist:20, FireResist:20,LightningResist:23,FrostResist:20,PoisonDamage:5,LightningDamage:5,FrostDamage:5,FireDamage:5}),
								React.createElement(FirstRings,{onClick:this.ReceivedFirstRings,ItemName:`MagicRing(1)`,Image:`MagicRing.png`,IDName:`FirstRing2`,Health: 50,
									Strength:10,Dexterity:10,Wisdom:250,Crafting:-10,PoisonResist:200, FireResist:-10,LightningResist:-10,FrostResist:-10,PoisonDamage:75}),
								React.createElement(SecondRings,{onClick:this.ReceivedSecondRings,ItemName:`HealthRing(2)`,Image:`HealthRing.png`,IDName:`SecondRing03`,
									Health:1500,Strength:125,Dexterity:125,Crafting:-15, FireResist:150,LightningResist:-10,FrostResist:-15,FireDamage:67}),
								React.createElement(Greaves,{onClick:this.ReceivedGreaves,ItemName:`MetalGreaves`,Image:`SteelGreaves.png`,IDName:`SteelGreaves02`,
									Defense:75,Strength:57,Dexterity:46,Wisdom:33,Crafting:90,PoisonDamage:6, LightningDamage:8, FrostResist:25,FireResist:25}),
								React.createElement(FirstRings,{onClick:this.ReceivedFirstRings,ItemName:`FrostRing(1)`,Image:`DiamondRing.png`,IDName:`FirstRing4`,
									Health:50,Strength:300,Dexterity:-100,Wisdom:50, FrostDamage:100, FrostResist:300, FireDamage:-25,FireResist:-300}),
								React.createElement(SecondRings,{onClick:this.ReceivedSecondRings,ItemName:`GoldenRing(2)`,Image:`GoldenRing.png`,IDName:`SecondRing05`,
									Health:800,Strength:-300,Dexterity:100,Wisdom:100, FrostDamage:-25, FrostResist:-300, FireDamage:100,FireResist:300}),
								React.createElement(SecondRings,{onClick:this.ReceivedSecondRings,IDName:`SecondRing01`,Health: 200,Strength:80,Dexterity:80,Wisdom:70,
									Crafting:22,PoisonResist:32, FireResist:31,LightningResist:32,FrostResist:30,PoisonDamage:15,LightningDamage:15,FrostDamage:15,FireDamage:15}),
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
								React.createElement('div',{id:`JungleHelmetProfile`,style:{backgroundImage: this.state.Helmet, cursor:this.state.HelmetCursor},
									onMouseOver: this.HelmMouseOn,onMouseOut:this.HelmMouseOff, onClick:this.HelmetTakeDown},
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
													onMouseOver:this.FirstRingMouseOn, onMouseOut:this.FirstRingMouseOff, onClick:this.FirstRingTakeOff},
									React.createElement('span',{style: {display:this.state.FirstRingActive}},this.state.FirstRingInformation)),
								//Greaves
								React.createElement('div',{id:`JungleLegsProfile`, style:{backgroundImage:this.state.Greaves, cursor:this.state.GreavesCursor},
													onMouseOver:this.GreavesMouseOn, onMouseOut:this.GreavesMouseOff, onClick:this.GreavesTakeOff},
									React.createElement('span',{style: {display:this.state.GreavesActive}},this.state.GreavesInformation)),
								//Second Ring
								React.createElement('div',{id:`JungleSecondRingProfile`, style:{backgroundImage:this.state.SecondRing, cursor:this.state.SecondRingCursor},
													onMouseOver:this.SecondRingMouseOn, onMouseOut:this.SecondRingMouseOff, onClick:this.SecondRingTakeOff},
									React.createElement('span',{style: {display:this.state.SecondRingActive}},this.state.SecondRingInformation)),
								//Boots
								React.createElement('div',{id:`JungleBootsProfile`, style:{backgroundImage:this.state.Boots, cursor:this.state.BootsCursor},
													onMouseOver:this.BootsMouseOn, onMouseOut:this.BootsMouseOff, onClick:this.BootsTakeOff},
									React.createElement('span',{style: {display:this.state.BootsActive}},this.state.BootsInformation)),
								),
							React.createElement('div',{id: `JungleProfileStats`},
								React.createElement('span',{id: `JungleProfileStrength`},`Strength `,
									React.createElement('span',{},this.state.StrValue+this.state.SValue)),
								React.createElement('span',{id: `JungleProfileStrengthPlus`, onClick: this.AttributeClick},`+`),
								React.createElement('span',{id: `JungleProfileStrCost`,style:{display: this.state.StrengthAppearance}},`Cost ${this.state.StrengthCost}`,
								React.createElement('span',{className: `JungleGoldIcon`},`AB`)),
								React.createElement('br',{},null),
								React.createElement('span',{id: `JungleProfileDexterity`},`Dexterity `,
									React.createElement('span',{},this.state.DexValue+this.state.DValue)),
								React.createElement('span',{id: `JungleProfileDexPlus`,onClick: this.AttributeClick},`+`),
								React.createElement('span',{id: `JungleProfileDexCost`, style:{display: this.state.DexterityAppearance}},`Cost ${this.state.DexterityCost}`,
								React.createElement('span',{className: `JungleGoldIcon`},`AB`)),
								React.createElement('br',{},null),
								React.createElement('span',{id: `JungleProfileWisdom`},`Wisdom `,
									React.createElement('span',{},this.state.WisValue+this.state.WValue)),
								React.createElement('span',{id: `JungleProfileWisdomPlus`,onClick: this.AttributeClick},`+`),
								React.createElement('span',{id: `JungleProfileWisdomCost`, style:{display: this.state.WisdomAppearance}},`Cost ${this.state.WisdomCost}`,
								React.createElement('span',{className: `JungleGoldIcon`},`AB`)),
								React.createElement('br',{},null),
								React.createElement('span',{id: `JungleProfileCrafting`},`Crafting `,
									React.createElement('span',{},this.state.CraftValue+this.state.CValue)),
								React.createElement('span',{id: `JungleProfileCraftingPlus`,onClick: this.AttributeClick},`+`),
								React.createElement('span',{id: `JungleProfileCraftingCost`,style: {display: this.state.CraftingAppearance}},`Cost ${this.state.CraftingCost}`,
								React.createElement('span',{className: `JungleGoldIcon`},`AB`)),
								React.createElement('br',{},null),),
							),),

					React.createElement('div',{id: `JungleHazardGameDiv`,style:{backgroundImage:this.state.HazardGameBG}},
						React.createElement('div',{id:`JunglePathMoverGame`,style:{backgroundImage: this.state.PathMover.Background,visibility:this.state.PathMover.visibility,
							cursor:this.state.PathMover.cursor},onClick:this.GameChanger},`PathMover`),
						React.createElement('div',{id:`JungleChestOpenGame`,style:{backgroundImage: this.state.ChestOpen.Background,visibility:this.state.ChestOpen.visibility,
							cursor:this.state.ChestOpen.cursor},onClick:this.GameChanger},`ChestOpen`),
						
						React.createElement('div',{id:`JungleGoldBet`},
							React.createElement('input',{id: `GoldBetInput`,placeholder: `GoldValue...`, type: `Number`,
								disabled:this.state.GoldInputState.Disabled,style:{opacity: this.state.GoldInputState.Opac}},null),
							React.createElement('span',{id: `GoldBetIconAfterInput`},`AB`)),

						React.createElement('span',{id: `JugleSetActivate`,onClick:this.SetBet,disabled:this.state.BetState.Disabled,style:{opacity:this.state.BetState.Opac,
							cursor:this.state.BetState.Curs}},`Set`),

						React.createElement('div',{id:`JungleJewelBet`,},
							React.createElement('input',{id: `JewelBetInput`,placeholder: `JewelValue...`, type: `Number`,
								disabled:this.state.JewelInputState.Disabled,style:{opacity:this.state.JewelInputState.Opac}},null),
							React.createElement('span',{id: `JewelBetIconAfterInput`},`AB`)),


						React.createElement('span',{id: `JugleBetActivate`,onClick:this.BetClick,disabled:this.state.BetState.Disabled,style:{opacity:this.state.BetState.Opac,
							cursor:this.state.BetState.Curs}},`Bet`),

						//BetValues Below
						React.createElement('div',{id: `JungleBettingValuesContainer`},`BettingTotal:`,
							React.createElement('span',{id:`JungleTotalGoldBetContainer`,style:{display:this.state.GoldPart}},
								React.createElement('span',{id: `JungleTotalGoldValue`},this.state.BetGoldValue),
								React.createElement('span',{id: `JungleGoldIconAtBetting`, style:{textShadow:`none`}},`AB`)),

							React.createElement('span',{id: `JungleTotalJewelBetContainer`,style:{display:this.state.JewelPart}},
								React.createElement('span',{style:{display:this.state.AndPart}},`&`),
								React.createElement('span',{id:`JungleTotalJewelValue`},this.state.BetJewelValue),
								React.createElement('span',{id:`JungleJewelIconAtBetting`, style:{textShadow:`none`}},`AB`),),
							React.createElement('h1',{id:`JungleSelectedBetGameHeader`},this.state.SelectedBetGameHeader)),
						//BetGameField Below
						React.createElement('div',{id:`JungleSelectedGameFieldPathMover`,style:{display:this.state.PathGameActive}},
							React.createElement('div',{id:'JungleGameInformation',onClick:this.InformationToggle},
								React.createElement('div',{id: `JungleGameDescription`, style:{display: this.state.InfoDisplay}},
									React.createElement('h1',{},`PathMover`),
									React.createElement('p',{},`-This game is about path walking with cards!
										Each card in each column is a path,but not all paths are safe, there are dangers
										that can kill you. At the top of the game we have multipliers. You start from the first
										column and walk through the end(last column). When you choose a card and you choose correctly,
										then the multiplier at the top will multiply your bet value. But if you fail you will lose your current bet!`,
										React.createElement('br',{},null),
										React.createElement('br',{},null),
										`-You can Choose between three levels: Standard, risky, riskiest! In the standard option you have three cards in each column and
										there are two rights to choose from and one wrong,but the multipliers are low! In the risky option there are four cards
										in a column, in which two cards are right and two cards are wrong, the multipliers are medium here!At last in the riskiest
										option, you have four cards in each column, in which one card is the correct one and all the others are wrong but the multipliers
										are high. Good Luck! `))),

							React.createElement('div',{id: `JungleGameStandard`,style:{border:this.state.StandardState.border,
								backgroundImage:this.state.StandardState.backgroundImage,cursor:this.state.StandardState.cursor,
								visibility:this.state.StandardState.visibility},onClick:this.StandardClick},`Standard`),
							React.createElement('div',{id: `JungleGameRisky`,style:{border:this.state.RiskyState.border,
								backgroundImage:this.state.RiskyState.backgroundImage,cursor:this.state.RiskyState.cursor,
								visibility:this.state.RiskyState.visibility},onClick:this.RiskyClick},`Risky`),
							React.createElement('div',{id: `JungleGameRiskiest`,style:{border:this.state.RiskiestState.border,
								backgroundImage:this.state.RiskiestState.backgroundImage,cursor:this.state.RiskiestState.cursor,visibility:this.state.RiskiestState.visibility},onClick:this.RiskiestClick},`Riskiest`),
							React.createElement('button',{id:`JungleBetGameSpecifyButton`,onClick:this.Accept},`Accept`),
							//JunglePathMover(Ez a resz valtozik annak fuggvenyeben, hogy milyen fokozatot valasztunk)!
							React.createElement('div',{id:`JungleGamePathMover`},
								React.createElement('div',{id:`JunglePathMoverStandard`, style:{display: this.state.BetStandardPlatform}},
									React.createElement('div',{className: `multipliers`,style:{backgroundColor:this.state.StandardGame.FirstMulti}},`1.1x`),
									React.createElement('div',{className: `multipliers`,style:{backgroundColor:this.state.StandardGame.SecondMulti}},`1.25x`),
									React.createElement('div',{className: `multipliers`,style:{backgroundColor:this.state.StandardGame.ThirdMulti}},`1.5x`),
									React.createElement('div',{className: `multipliers`,style:{backgroundColor:this.state.StandardGame.FourthMulti}},`1.8x`),
									React.createElement('div',{className: `multipliers`,style:{backgroundColor:this.state.StandardGame.FifthMulti}},`2.2x`),
									React.createElement('div',{className: `multipliers`,style:{backgroundColor:this.state.StandardGame.SixthMulti}},`3x`),
									React.createElement('div',{className: `multipliers`,style:{backgroundColor:this.state.StandardGame.SeventhMulti}},`4x`),
									//Cards
									//I.
									React.createElement('div',{className: `cards`,style:{cursor:this.state.StandardGame.FirstColumn}},
										React.createElement('span',{name:`1/1S`,onClick:this.CardPickStandard},null),
										React.createElement('span',{name:`1/2S`,onClick:this.CardPickStandard},null),
										React.createElement('span',{name:`1/3S`,onClick:this.CardPickStandard},null)),
									//II.
									React.createElement('div',{className: `cards`,style:{cursor:this.state.StandardGame.SecondColumn}},
										React.createElement('span',{name:`2/1S`,onClick:this.CardPickStandard},null),
										React.createElement('span',{name:`2/2S`,onClick:this.CardPickStandard},null),
										React.createElement('span',{name:`2/3S`,onClick:this.CardPickStandard},null)),
									//III.
									React.createElement('div',{className: `cards`,style:{cursor:this.state.StandardGame.ThirdColumn}},
										React.createElement('span',{name:`3/1S`,onClick:this.CardPickStandard},null),
										React.createElement('span',{name:`3/2S`,onClick:this.CardPickStandard},null),
										React.createElement('span',{name:`3/3S`,onClick:this.CardPickStandard},null)),
									//IV.
									React.createElement('div',{className: `cards`,style:{cursor:this.state.StandardGame.FourthColumn}},
										React.createElement('span',{name:`4/1S`,onClick:this.CardPickStandard},null),
										React.createElement('span',{name:`4/2S`,onClick:this.CardPickStandard},null),
										React.createElement('span',{name:`4/3S`,onClick:this.CardPickStandard},null)),
									//V.
									React.createElement('div',{className: `cards`,style:{cursor:this.state.StandardGame.FifthColumn}},
										React.createElement('span',{name:`5/1S`,onClick:this.CardPickStandard},null),
										React.createElement('span',{name:`5/2S`,onClick:this.CardPickStandard},null),
										React.createElement('span',{name:`5/3S`,onClick:this.CardPickStandard},null)),
									//VI.
									React.createElement('div',{className: `cards`,style:{cursor:this.state.StandardGame.SixthColumn}},
										React.createElement('span',{name:`6/1S`,onClick:this.CardPickStandard},null),
										React.createElement('span',{name:`6/2S`,onClick:this.CardPickStandard},null),
										React.createElement('span',{name:`6/3S`,onClick:this.CardPickStandard},null)),
									//VII.
									React.createElement('div',{className: `cards`,style:{cursor:this.state.StandardGame.SeventhColumn}},
										React.createElement('span',{name:`7/1S`,onClick:this.CardPickStandard},null),
										React.createElement('span',{name:`7/2S`,onClick:this.CardPickStandard},null),
										React.createElement('span',{name:`7/3S`,onClick:this.CardPickStandard},null)),
									),
								//JunglePath Risky
								React.createElement('div',{id:`JunglePathMoverRisky`,style:{display: this.state.BetRiskyPlatform}},
									React.createElement('div',{className: `multipliers`,style:{backgroundColor:this.state.RiskyGame.FirstMulti}},`1.5x`),
									React.createElement('div',{className: `multipliers`,style:{backgroundColor:this.state.RiskyGame.SecondMulti}},`2x`),
									React.createElement('div',{className: `multipliers`,style:{backgroundColor:this.state.RiskyGame.ThirdMulti}},`2.5x`),
									React.createElement('div',{className: `multipliers`,style:{backgroundColor:this.state.RiskyGame.FourthMulti}},`3x`),
									React.createElement('div',{className: `multipliers`,style:{backgroundColor:this.state.RiskyGame.FifthMulti}},`4x`),
									React.createElement('div',{className: `multipliers`,style:{backgroundColor:this.state.RiskyGame.SixthMulti}},`5x`),
									React.createElement('div',{className: `multipliers`,style:{backgroundColor:this.state.RiskyGame.SeventhMulti}},`7x`),
									//Cards
									//I.
									React.createElement('div',{className: `cards`,name:`1Column/Risky`,style:{cursor:this.state.RiskyGame.FirstColumn}},
										React.createElement('span',{onClick:this.CardPickRisky},null),
										React.createElement('span',{onClick:this.CardPickRisky},null),
										React.createElement('span',{onClick:this.CardPickRisky},null),
										React.createElement('span',{onClick:this.CardPickRisky},null)),
									//II.
									React.createElement('div',{className: `cards`, name:`2Column/Risky`,style:{cursor:this.state.RiskyGame.SecondColumn}},
										React.createElement('span',{onClick:this.CardPickRisky},null),
										React.createElement('span',{onClick:this.CardPickRisky},null),
										React.createElement('span',{onClick:this.CardPickRisky},null),
										React.createElement('span',{onClick:this.CardPickRisky},null)),
									//III.
									React.createElement('div',{className: `cards`, name:`3Column/Risky`,style:{cursor:this.state.RiskyGame.ThirdColumn}},
										React.createElement('span',{onClick:this.CardPickRisky},null),
										React.createElement('span',{onClick:this.CardPickRisky},null),
										React.createElement('span',{onClick:this.CardPickRisky},null),
										React.createElement('span',{onClick:this.CardPickRisky},null)),
									//IV.
									React.createElement('div',{className: `cards`, name:`4Column/Risky`,style:{cursor:this.state.RiskyGame.FourthColumn}},
										React.createElement('span',{onClick:this.CardPickRisky},null),
										React.createElement('span',{onClick:this.CardPickRisky},null),
										React.createElement('span',{onClick:this.CardPickRisky},null),
										React.createElement('span',{onClick:this.CardPickRisky},null)),
									//V.
									React.createElement('div',{className: `cards`, name:`5Column/Risky`,style:{cursor:this.state.RiskyGame.FifthColumn}},
										React.createElement('span',{onClick:this.CardPickRisky},null),
										React.createElement('span',{onClick:this.CardPickRisky},null),
										React.createElement('span',{onClick:this.CardPickRisky},null),
										React.createElement('span',{onClick:this.CardPickRisky},null)),
									//VI.
									React.createElement('div',{className: `cards`, name:`6Column/Risky`,style:{cursor:this.state.RiskyGame.SixthColumn}},
										React.createElement('span',{onClick:this.CardPickRisky},null),
										React.createElement('span',{onClick:this.CardPickRisky},null),
										React.createElement('span',{onClick:this.CardPickRisky},null),
										React.createElement('span',{onClick:this.CardPickRisky},null)),
									//VII.
									React.createElement('div',{className: `cards`, name:`7Column/Risky`,style:{cursor:this.state.RiskyGame.SeventhColumn}},
										React.createElement('span',{onClick:this.CardPickRisky},null),
										React.createElement('span',{onClick:this.CardPickRisky},null),
										React.createElement('span',{onClick:this.CardPickRisky},null),
										React.createElement('span',{onClick:this.CardPickRisky},null)),
									),
								//PathMover Riskiest
								React.createElement('div',{id:`JunglePathMoverRiskiest`,style:{display: this.state.BetRiskiestPlatform}},
									React.createElement('div',{className: `multipliers`,style:{backgroundColor:this.state.RiskiestGame.FirstMulti}},`3x`),
									React.createElement('div',{className: `multipliers`,style:{backgroundColor:this.state.RiskiestGame.SecondMulti}},`4x`),
									React.createElement('div',{className: `multipliers`,style:{backgroundColor:this.state.RiskiestGame.ThirdMulti}},`5x`),
									React.createElement('div',{className: `multipliers`,style:{backgroundColor:this.state.RiskiestGame.FourthMulti}},`6x`),
									React.createElement('div',{className: `multipliers`,style:{backgroundColor:this.state.RiskiestGame.FifthMulti}},`8x`),
									React.createElement('div',{className: `multipliers`,style:{backgroundColor:this.state.RiskiestGame.SixthMulti}},`10x`),
									React.createElement('div',{className: `multipliers`,style:{backgroundColor:this.state.RiskiestGame.SeventhMulti}},`14x`),
									//Cards
									//I.
									React.createElement('div',{className: `cards`,name:`1Column/Riskiest`,style:{cursor:this.state.RiskiestGame.FirstColumn}},
										React.createElement('span',{onClick:this.CardPickRiskiest},null),
										React.createElement('span',{onClick:this.CardPickRiskiest},null),
										React.createElement('span',{onClick:this.CardPickRiskiest},null),
										React.createElement('span',{onClick:this.CardPickRiskiest},null)),
									//II.
									React.createElement('div',{className: `cards`,name:`2Column/Riskiest`,style:{cursor:this.state.RiskiestGame.SecondColumn}},
										React.createElement('span',{onClick:this.CardPickRiskiest},null),
										React.createElement('span',{onClick:this.CardPickRiskiest},null),
										React.createElement('span',{onClick:this.CardPickRiskiest},null),
										React.createElement('span',{onClick:this.CardPickRiskiest},null)),
									//III.
									React.createElement('div',{className: `cards`,name:`3Column/Riskiest`,style:{cursor:this.state.RiskiestGame.ThirdColumn}},
										React.createElement('span',{onClick:this.CardPickRiskiest},null),
										React.createElement('span',{onClick:this.CardPickRiskiest},null),
										React.createElement('span',{onClick:this.CardPickRiskiest},null),
										React.createElement('span',{onClick:this.CardPickRiskiest},null)),
									//IV.
									React.createElement('div',{className: `cards`,name:`4Column/Riskiest`,style:{cursor:this.state.RiskiestGame.FourthColumn}},
										React.createElement('span',{onClick:this.CardPickRiskiest},null),
										React.createElement('span',{onClick:this.CardPickRiskiest},null),
										React.createElement('span',{onClick:this.CardPickRiskiest},null),
										React.createElement('span',{onClick:this.CardPickRiskiest},null)),
									//V.
									React.createElement('div',{className: `cards`,name:`5Column/Riskiest`,style:{cursor:this.state.RiskiestGame.FifthColumn}},
										React.createElement('span',{onClick:this.CardPickRiskiest},null),
										React.createElement('span',{onClick:this.CardPickRiskiest},null),
										React.createElement('span',{onClick:this.CardPickRiskiest},null),
										React.createElement('span',{onClick:this.CardPickRiskiest},null)),
									//VI.
									React.createElement('div',{className: `cards`,name:`6Column/Riskiest`,style:{cursor:this.state.RiskiestGame.SixthColumn}},
										React.createElement('span',{onClick:this.CardPickRiskiest},null),
										React.createElement('span',{onClick:this.CardPickRiskiest},null),
										React.createElement('span',{onClick:this.CardPickRiskiest},null),
										React.createElement('span',{onClick:this.CardPickRiskiest},null)),
									//VII.
									React.createElement('div',{className: `cards`,name:`7Column/Riskiest`,style:{cursor:this.state.RiskiestGame.SeventhColumn}},
										React.createElement('span',{onClick:this.CardPickRiskiest},null),
										React.createElement('span',{onClick:this.CardPickRiskiest},null),
										React.createElement('span',{onClick:this.CardPickRiskiest},null),
										React.createElement('span',{onClick:this.CardPickRiskiest},null)),
									),

								),//PathMoverEnd
							),
						//ChestOpen Below
						React.createElement('div',{id:`JungleSelectedGameFieldChestOpen`,style:{display:this.state.ChestGameActive}},
							React.createElement('div',{id:`InfoForChestGame`,onClick:this.ChestGameInformation},
									React.createElement('div',{id: `JungleGameChestGamePlatform`,style:{display:this.state.ChestOpenInfo}},
									React.createElement('h1',{},`ChestOpen`),
									React.createElement('p',{},`-This game is about opening Chests! The minimum number of
									chests are ten and the maximum number can be thirty! With the input below you can set the number
									of chests you want to have on the wooden platform! When you begin to open the chests, you have to open
									at least half+1 of the chests in order to collect your reward! The chests can contain gold, jewels, positive multipliers,
									negative multipliers and a ghost! The amount of gold and jewels you open are added to your assets!
									The positive multipliers will multiply your current jewel and gold with the opened percentage!
									The negative multiplier will substract the percentage from your current bet!
									The ghost is dangerous, because it will set all your bet to zero. In other words it will take away everything from you! Good Luck! `))
								),
							React.createElement('input',{id:`ChestNumberInput`,placeholder:`Chests...`,type:`Number`,onKeyPress:this.ChestInput},null),
							React.createElement('button',{id:`ChestGameAccept`,onClick:this.ChestAccept},`Accept`),
							React.createElement('div',{id:`ChestOpenDifficulty`},`Difficulty`,
								React.createElement('span',{id:`ChestOpenDifficultyValue`},`Easy`)),
							//GameDiv
							React.createElement('div',{id:`JungleChestOpenGamePlay`},
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),

								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),

								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),

								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),

								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null))),
								React.createElement('div',{className:`Chests`,onClick:this.ChestOpen},
									React.createElement('div',{},
										React.createElement('span',{className:`ChestsContent`},null)))))	
						),/*Hazard game end*/
						
						
),
/*Sounds*/		React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `DifficultySettingsSound`},
					React.createElement('source',{src: `Pictures/JungleFinder/BetGameComponents/Sounds/DifficultySettings.mp3`, type:`audio/mpeg`},null)),
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `CardPick`},
					React.createElement('source',{src: `Pictures/JungleFinder/BetGameComponents/Sounds/Cards.mp3`, type:`audio/mpeg`},null)),
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `LionGrowl`},
					React.createElement('source',{src: `Pictures/JungleFinder/BetGameComponents/Sounds/LionGrowl.mp3`, type:`audio/mpeg`},null)),
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `AcceptGoldJewels`},
					React.createElement('source',{src: `Pictures/JungleFinder/BetGameComponents/Sounds/AcceptCoins.mp3`, type:`audio/mpeg`},null)),
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `ChangeGameChest`},
					React.createElement('source',{src: `Pictures/JungleFinder/BetGameComponents/Sounds/GameChangeChest.mp3`, type:`audio/mpeg`},null)),
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `ChangeGamePath`},
					React.createElement('source',{src: `Pictures/JungleFinder/BetGameComponents/Sounds/GameChangePath.mp3`, type:`audio/mpeg`},null)),
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `ChestOpen1`},
					React.createElement('source',{src: `Pictures/JungleFinder/BetGameComponents/Sounds/ChestOpen1.mp3`, type:`audio/mpeg`},null)),
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `ChestOpen2`},
					React.createElement('source',{src: `Pictures/JungleFinder/BetGameComponents/Sounds/ChestOpen2.mp3`, type:`audio/mpeg`},null)),
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `CoinMinor`},
					React.createElement('source',{src: `Pictures/JungleFinder/BetGameComponents/Sounds/CoinMinor.mp3`, type:`audio/mpeg`},null)),
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `CoinMedium`},
					React.createElement('source',{src: `Pictures/JungleFinder/BetGameComponents/Sounds/CoinMedium.mp3`, type:`audio/mpeg`},null)),
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `CoinMajor`},
					React.createElement('source',{src: `Pictures/JungleFinder/BetGameComponents/Sounds/CoinMajor.mp3`, type:`audio/mpeg`},null)),
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `JewelMedium`},
					React.createElement('source',{src: `Pictures/JungleFinder/BetGameComponents/Sounds/JewelMedium.mp3`, type:`audio/mpeg`},null)),
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `JewelHigh`},
					React.createElement('source',{src: `Pictures/JungleFinder/BetGameComponents/Sounds/JewelHigh.mp3`, type:`audio/mpeg`},null)),
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `PositivePercent`},
					React.createElement('source',{src: `Pictures/JungleFinder/BetGameComponents/Sounds/PositivePercent.mp3`, type:`audio/mpeg`},null)),
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `NegativePercent`},
					React.createElement('source',{src: `Pictures/JungleFinder/BetGameComponents/Sounds/NegativePercent.mp3`, type:`audio/mpeg`},null)),
				React.createElement('audio',{preload: `auto`, controls: `none`, style:{ display: `none`}, id: `Ghost`},
					React.createElement('source',{src: `Pictures/JungleFinder/BetGameComponents/Sounds/Ghost.mp3`, type:`audio/mpeg`},null)),)
					
			);
	}
}


ReactDOM.render(React.createElement(Main,{},null),document.getElementById('JungleFinderWithReact'));