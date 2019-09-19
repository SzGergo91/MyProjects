//Global Variables!
let $globalFighters=["Pictures/SettingsGame/Fighter1.gif","Pictures/SettingsGame/Fighter2.gif",
"Pictures/SettingsGame/Fighter3.gif","Pictures/SettingsGame/Fighter4.gif"];
let $globalVerify=0;

//Idval csinalom megis!
//Atirni hogy erthetobb legyen!
//Az input es a Label egy divben fog lenni es a selectionColor is!!
//Variables for mediaQueries!
let $globalWidth=screen.width;

//I.Component
let $globalIFontSize="2vw";
let $globalITop="-5.1vw";
let $globalILeft="10vw";

//II.Component
let $globalIIWidth="10vw";
let $globalIITop="-5vw";
let $globalIILeft="10vw";
let $globalIIStep="0.1";

//III.Component
let $globalIIITop="-5.5vw";
let $globalIIILeft="-10vw";

//IV.
//1.div,2.Label,3.Label
let $globalIVTop="-6vw";
let $globalIVLabelFontSize="2vw";
let $globalIVLabel2FontSize="2vw";

//V.
//1.Div,2.inputs and labels
let $globalVDivWidth="26vw";
let $globalVFontSize="2vw";

//VI.
//1.MainDivWidth,2.<p>, 3.<span>,4.InDiv, 5. <img>
let $globalVIWidth="26vw";
let $globalVIPara="2vw";
let $globalVISpan="2.2vw"
let $globalVIDivWidth="100vw";
let $globalDivWidthVIPaddingLeft="5vw";
let $globalVIImageWidth="15vw";
let $globalVIImageHeight="15vw";
let $globalVIImageMarginRight="5vw";

//VII.
//1. Div, 2. image
let $globalVIIWidth="40vw";
let $globalVIIHeight="20vw";
let $globalVIIPaddingTop="4vw";
let $globalVIIImageWidth="15vw";
let $globalVIIImageHeight="15vw";


//VIII. (Last)
//1.Div, 2.Labels,3.Gates(From Props);
let $globalMainLabelForSizeTextTop="-8vw";
let $globalMainLabelForSizeTextLeft="-3vw";
let $globalMainLabelChangeTextColorTop="-8vw";
let $globalMainLabelChangeTextColorLeft="0vw";
let $globalMainButtonFontSize="5vw";
let $globalMainButtonTop="23vw";
let $globalMainButtonLeft="37vw";
let $globalMainDivWidth="98vw";
let $globalMainDivHeight="128vw";
let $globalMainLabels="2vw";
let $globalMainGate1BGPositionLeft="-10vw";
let $globalMainGate1PDL="22vw";
let $globalMainGate2BGPositionLeft="10vw";
let $globalMainGate2PDL="2vw";
let $globalMainGate2Left="58.5vw";

//All Selections
let $globalFontSizeForSelections="2vw";

//Strictul necesar!
'use strict';

//MediaQueries Below!
//Mobile Phones!
if(($globalWidth>=320) && ($globalWidth<=480)){
  //I!
  $globalIFontSize="5vw";
  $globalITop="-24vw";
  $globalILeft="11vw";
  //II!
  $globalIIWidth="20vw";
  $globalIITop="-23vw";
  $globalIILeft="10vw";
  $globalIIStep="1";

}


class Paragraph extends React.Component {
  render() {
    return React.createElement('p', { id: "SettingsGameExplanation",
      style: {fontSize: `${this.props.fontS}vw`, color: this.props.colors, textShadow: `${this.props.v}vw ${this.props.h}vw ${this.props.c}`,fontWeight: `${this.props.strength}`} },
      `This projects is about a battle beetween two selected characters, and you can set their characteristics.
      Let me explain an example! Each character has health and damage, and these values are based on the size of the characters!
      The characters also have abilities and weapons to select!
      If this text isn't visible enough then use the settings below!`);
  }
}

//I.Component
class Label extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return React.createElement('label', {htmlFor: "Input1", id : "InputLabel"},`${this.props.name}vw`)
  }
}

//II. Component
class Input extends React.Component {
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.in(e.target.value);
  }

  render() {
    return React.createElement('input', { min: "1", max: "5",step: $globalIIStep , type: "range", name: "Input1", style: {position: "relative", top: $globalIITop,left: $globalIILeft,width: $globalIIWidth,
     },onChange:this.handleChange},null)
  }
}

//A gyerek frissiti a szulo komponens allapotat!
class SelectionBG extends React.Component {
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.bg(e.target.value);
  }
  render(){
    return React.createElement('select',{style: {marginLeft: "1vw", fontSize: $globalFontSizeForSelections}, onChange: this.handleChange },React.createElement('option',{value : "Arena.jpg"}, `First Arena`),
      React.createElement('option',{value : "Arena2.jpg"}, `Second Arena`),React.createElement('option',{value : "Arena3.jpg"}, `Third Arena`))
  }
}

//III.Component
class SelectionColor extends React.Component {
    constructor(props){
      super(props);
      this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e){
      this.props.colors(e.target.value);
    }

    render(){
      return React.createElement('select',{style: { position: "relative", top: $globalIIITop, left:$globalIIILeft,fontSize:$globalFontSizeForSelections}, onChange: this.handleChange},
       React.createElement('option',{value: "black"},`Black`),
       React.createElement('option',{value: "yellow"},`Yellow`),React.createElement('option',{value: "white"},`White`),
       React.createElement('option',{value: "red"},`Red`),React.createElement('option',{value: "green"},`Green`),
       React.createElement('option',{value: "blue"},`Blue`))
    }
}

//IV. Component!
class FontWeightSettings extends React.Component {
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(e){
    this.props.weight(e.target.value);
  }

  render(){
    return  React.createElement('div',{style: {display: "inline-block",position: "relative", top:$globalIVTop}},
    React.createElement('label',{style: {fontSize: $globalIVLabelFontSize, textShadow: "0.15vw 0.15vw 0.38vw red"}},"Font Weight"),
    React.createElement('br',{},null),
    React.createElement('input',{style: {fontSize: "2vw",},type: "range", min: "200", max: "900", step: "10", name: "FontStrength", onChange: this.handleChange},null),
    React.createElement('label',{htmlFor:"FontStrength",style: {fontSize: $globalIVLabel2FontSize}},this.props.weightValue)) 
  }
}


//V.Component!
class ShadowSettings extends React.Component {
  constructor(props){
    super(props);
    this.changeVertical=this.changeVertical.bind(this);
    this.changeHorizontal=this.changeHorizontal.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  changeVertical(e){
    this.props.shadowVertical(e.target.value);
  }

  changeHorizontal(e){
    this.props.shadowHorizontal(e.target.value);
  }
  handleChange(e){
    this.props.selection(e.target.value);
  }

//div ami visszateriti a szint illetve az input erteket!
  render() {
    return React.createElement('div',{style: { display: "inline-block", width: $globalVDivWidth, height: "auto", } },
           React.createElement('label',{style: {fontSize: $globalVFontSize,textShadow: "0.15vw 0.15vw 0.38vw red"}},"TextShadowVertical"),
           React.createElement('label',{style: {fontSize: $globalVFontSize, position: "relative", top: "2vw", left: "-6vw"}, htmlFor: "InputShadowV" },`${this.props.verticValue} vw`),  
           React.createElement('input',{style: {fontSize: $globalVFontSize},min: "-0.5", max: "0.5",step: "0.01" , type: "range",name:"InputShadowV", onChange: this.changeVertical},null),
           React.createElement('label',{style: {fontSize: $globalVFontSize,textShadow: "0.15vw 0.15vw 0.38vw red"}},"TextShadowHorizontal"), 
           React.createElement('label',{style: {fontSize: $globalVFontSize,position: "relative", top: "2vw", left: "-8vw",}, htmlFor: "InputShadowH" },`${this.props.horizValue} vw`),
           React.createElement('input',{style: {fontSize: $globalVFontSize},min: "-0.5", max: "0.5",step: "0.01" , type: "range", name:"InputShadowH",onChange: this.changeHorizontal},null),
           React.createElement('label',{style: {fontSize: $globalVFontSize,textShadow: "0.15vw 0.15vw 0.38vw red",marginRight:"1vw"}},"ColorOfTheShadow"), 
           React.createElement('select',{onChange: this.handleChange, style: {fontSize: $globalFontSizeForSelections}},
           React.createElement('option',{value: "black"},`Black`),
           React.createElement('option',{value: "red"},`Red`),
           React.createElement('option',{value: "blue"},`Blue`),
           React.createElement('option',{value: "yellow"},`Yellow`) ),)
  }
}


//VI.Component!
class FighterParts extends React.Component {
  constructor(props){
    super(props);
    this.fighterFirst=this.fighterFirst.bind(this);
  }

  fighterFirst(data){
    
      let str=data.target.src.slice(-12);
      this.props.DataSend(data.target.src,str);
     // data.target.style.visibility="hidden";

     
  }


  render(){
    return React.createElement('div',{width: $globalVIWidth,height:"auto"},
      React.createElement('p',{style: {fontSize: $globalVIPara,textShadow: "0.15vw 0.15vw 0.38vw red",backgroundColor:"blue",BoxShadow:"0.15vw 0.15vw 0.38vw white",
        width: "17vw",},},"Win Chance ",
      React.createElement('span',{style: {fontSize:$globalVISpan,marginLeft: "1vw",textShadow: "none",backgroundColor: "yellow", width:"100%"}},this.props.Percent),
      React.createElement('br',{},null),
      React.createElement('span',{style: {fontSize:$globalVISpan,color:" red",marginLeft:"1vw"}},this.props.BigText)),
      React.createElement('br',{},null),
      React.createElement('div',{style: {width:$globalVIDivWidth, backgroundColor: "transparent",paddingLeft:$globalDivWidthVIPaddingLeft}, id: "CurrentFighters"},
        React.createElement('img',{src: `${$globalFighters[0]}`, style: {width: $globalVIImageWidth, height: $globalVIImageHeight, marginRight: $globalVIImageMarginRight,cursor:"pointer",visibility: this.props.first }, onClick: this.fighterFirst },null),
        React.createElement('img',{src: `${$globalFighters[1]}`, style: {width: $globalVIImageWidth, height: $globalVIImageHeight, marginRight: $globalVIImageMarginRight,cursor:"pointer",visibility: this.props.second}, onClick: this.fighterFirst },null),
        React.createElement('img',{src: `${$globalFighters[2]}`, style: {width: $globalVIImageWidth, height: $globalVIImageHeight, marginRight: $globalVIImageMarginRight,cursor:"pointer",visibility: this.props.third}, onClick: this.fighterFirst },null),
        React.createElement('img',{src: `${$globalFighters[3]}`, style: {width: $globalVIImageWidth, height: $globalVIImageHeight, marginRight: $globalVIImageMarginRight,cursor:"pointer",visibility: this.props.fourth}, onClick: this.fighterFirst },null)))
  }
}



//VII.Component
class Gate extends React.Component {
  constructor(props){
    super(props);
    this.checkFighterState=this.checkFighterState.bind(this);
  }

  checkFighterState(data){
    this.props.ArenaFighters(data.target.style.visibility,data.target.name,data.target.src);
    data.target.src="";
    
  }

  render(){
    return React.createElement('div',{style: {width: $globalVIIWidth, height: $globalVIIHeight,backgroundImage: `url('Pictures/SettingsGame/Entrance.png')`,display: "inline-block",
      backgroundSize: `${$globalVIIWidth} ${$globalVIIHeight}`,backgroundPosition: `${this.props.gateset}, 0vw`, paddingLeft:`${this.props.pdl}`,paddingTop:$globalVIIPaddingTop,
      position:"absolute", left:`${this.props.left}`,backgroundRepeat: "no-repeat"}, },
          React.createElement('img',{src: this.props.getFighters, alt:"", style: {width: $globalVIIImageWidth, height:$globalVIIImageHeight,cursor:"pointer", visibility: "visible"},name: this.props.id, onClick: this.checkFighterState},null)
       )
  }
}


//VIII. Last Component!
class MainDiv extends React.Component {
  constructor(props){
    super(props);
    this.state={
      BG: `url('Pictures/SettingsGame/Arena.jpg')`,
      ConnectInputValue: "3",
      ConnectSelectionColors: "black",
      ConnectInputShadowValue: "0",
      ConnectShadowSettingsVertical: "0",
      ConnectShadowSettingsHorizontal: "0",
      ConnectShadowSettingsColor: "black",
      //Transactions
      ConnectFontWeight: "200",
      ConnectFighter: "",
      ConnectFighter2: "",
      ConnectFighterID: "",
      ConnectFighterID2: "",
      //The images
      FIRST: "visible",
      SECOND: "visible",
      THIRD: "visible",
      FOURTH: "visible",

      //Chance Calculator
      Chance : "0%",
      Text: "Calculated value!",
    }
    this.changeBG=this.changeBG.bind(this);
    this.connect=this.connect.bind(this);
    this.connectSelectionColor=this.connectSelectionColor.bind(this);
    this.connectShadowSettingsV=this.connectShadowSettingsV.bind(this);
    this.connectShadowSettingsH=this.connectShadowSettingsH.bind(this);
    this.connectShadowSettingsColor=this.connectShadowSettingsColor.bind(this);
    this.connectFontWeightSettings=this.connectFontWeightSettings.bind(this);
    this.connectFighters=this.connectFighters.bind(this);
    this.connectGate=this.connectGate.bind(this);
    this.Calculate=this.Calculate.bind(this);
  }

  changeBG(bg){
    let a=`url('Pictures/SettingsGame/${bg}')`
    this.setState({
      BG: a,
    })
  }

  connect(bonding){
    this.setState({
      ConnectInputValue: bonding,
    })
  }

  connectShadowSettingsV(bonding){
    this.setState({
      ConnectShadowSettingsVertical : bonding,
    })
  }

   connectShadowSettingsH(bonding){
    this.setState({
      ConnectShadowSettingsHorizontal : bonding,
    })
  }
  connectShadowSettingsColor(bonding){
    this.setState({
      ConnectShadowSettingsColor:bonding,
    })
  }

  connectFontWeightSettings(bonding){
    this.setState({
       ConnectFontWeight: bonding,
    })
  }

  connectSelectionColor(bonding){
    this.setState({
      ConnectSelectionColors: bonding,
    })
  }

//A kiveves nullaza le a connectfightert(melyiket)
  connectFighters(bonding,ID){
    if(this.state.ConnectFighter === ""){
       this.setState({
         ConnectFighter : bonding,
         ConnectFighterID: ID,
       })
       $globalVerify=1;
       switch(ID){
         case `Fighter1.gif`:
          this.setState({
            FIRST: "hidden",
          })
            break;
         case `Fighter2.gif`:
          this.setState({
            SECOND: "hidden",
          })
            break;
         case `Fighter3.gif`:
          this.setState({
            THIRD: "hidden",
          })
            break;
         case `Fighter4.gif`:
          this.setState({
            FOURTH: "hidden",
          })
            break;
       }
      
    }
    else{
      if(this.state.ConnectFighter2 === ""){
        this.setState({
         ConnectFighter2 : bonding,
         ConnectFighterID2: ID,
        })
        $globalVerify=2;
       switch(ID){
         case `Fighter1.gif`:
          this.setState({
            FIRST: "hidden",
          })
            break;
         case `Fighter2.gif`:
          this.setState({
            SECOND: "hidden",
          })
            break;
         case `Fighter3.gif`:
          this.setState({
            THIRD: "hidden",
          })
            break;
         case `Fighter4.gif`:
          this.setState({
            FOURTH: "hidden",
          })
            break;
       }
        
    }
    }

  }

  connectGate(bonding,id,src){
      //console.log(this.state.ConnectFighter);
      if(this.state.ConnectFighter === src){
        this.setState({
          ConnectFighter : "",
        })
      }
      else{
          this.setState({
          ConnectFighter2 : "",
        })
      }
      switch(id){
        case `Fighter1.gif`:
          this.setState({
            FIRST: bonding,
          })
          break;
        case `Fighter2.gif`:
          this.setState({
            SECOND: bonding,
          })
          break;
        case `Fighter3.gif`:
          this.setState({
            THIRD: bonding,
          })
          break;
        case `Fighter4.gif`:
          this.setState({
            FOURTH: bonding,
          })
          break;
      }
  }

  Calculate(){
      if((this.state.ConnectFighter === "") && (this.state.ConnectFighter2 === "")){
          alert("Choose two fighters!");
          this.setState({
                  Chance : "0%",
                  Text: "Calculated value!",
          })
      }
      else{
        if(this.state.ConnectFighter === ""){
          alert("Choose the first fighter!");
            this.setState({
                  Chance : "0%",
                  Text: "Calculated value!",
          })
        }
        else{
          if(this.state.ConnectFighter2 === ""){
            alert("Choose the second fighter!");
              this.setState({
                  Chance : "0%",
                  Text: "Calculated value!",
          })
          }
          else{
            let a=this.state.ConnectFighter.slice(-12);
            let b=this.state.ConnectFighter2.slice(-12);
            switch(a){
              case `Fighter1.gif`:
                    switch(b){
                      case `Fighter2.gif`:
                          this.setState({
                            Chance: "50%",
                            Text: "Both fighters are very even!"
                          })
                        break;
                      case `Fighter3.gif`:
                          this.setState({
                            Chance: "70%",
                            Text: "The First has the advantage!"
                          })
                        break;

                     case `Fighter4.gif`:
                          this.setState({
                            Chance: "10%",
                            Text: "The First fighter has very small chances!"
                          })
                        break;
                    }
                    break;
              case `Fighter2.gif`:
                      switch(b){
                      case `Fighter1.gif`:
                          this.setState({
                            Chance: "50%",
                            Text: "Both fighters are very even!"
                          })
                        break;
                      case `Fighter3.gif`:
                          this.setState({
                            Chance: "30%",
                            Text: "The First fighter has the disadvantage!"
                          })
                        break;

                     case `Fighter4.gif`:
                          this.setState({
                            Chance: "90%",
                            Text: "The First fighter has very high chances!"
                          })
                        break;
                    }
                    break;

              case `Fighter3.gif`:
                      switch(b){
                      case `Fighter1.gif`:
                          this.setState({
                            Chance: "30%",
                            Text: "The First fighter has the disadvantage!"
                          })
                        break;
                      case `Fighter2.gif`:
                          this.setState({
                            Chance: "70%",
                            Text: "The First fighter has the advantage!"
                          })
                        break;

                     case `Fighter4.gif`:
                          this.setState({
                            Chance: "50%",
                            Text: "Both fighters are very even!"
                          })
                        break;
                    }
                    break;

              case `Fighter4.gif`:
                      switch(b){
                      case `Fighter1.gif`:
                          this.setState({
                            Chance: "90%",
                            Text: "The First fighter has very high chances!"
                          })
                        break;
                      case `Fighter2.gif`:
                          this.setState({
                            Chance: "10%",
                            Text: "The First fighter has very small chances!"
                          })
                        break;

                     case `Fighter3.gif`:
                          this.setState({
                            Chance: "50%",
                            Text: "Both fighters are very even!"
                          })
                        break;
                    }
              
                    break;
            }
          }
        }
      }


        
      
   }

  render() {
    return React.createElement('div',{style: {backgroundImage: this.state.BG, backgroundRepeat: "no-repeat",
    backgroundSize: `${$globalMainDivWidth} ${$globalMainDivHeight}`, width: $globalMainDivWidth, minHeight:$globalMainDivHeight,},
     },React.createElement(Paragraph,{fontS:this.state.ConnectInputValue, colors: this.state.ConnectSelectionColors,
     v: this.state.ConnectShadowSettingsVertical, h:this.state.ConnectShadowSettingsHorizontal, c:this.state.ConnectShadowSettingsColor,
     strength:this.state.ConnectFontWeight },null),
       
           React.createElement(Input,{ in: this.connect},null),
           React.createElement(Label,{name: this.state.ConnectInputValue,},null),
           React.createElement('label',{ style: {fontSize: $globalMainLabels, textShadow: "0.15vw 0.15vw 0.38vw red", position:"relative", top: $globalMainLabelForSizeTextTop, left: $globalMainLabelForSizeTextLeft} },"Size of the text!"),
                     
           React.createElement('label',{ style: {fontSize: $globalMainLabels, textShadow: "0.15vw 0.15vw 0.38vw red", position:"relative", top: $globalMainLabelChangeTextColorTop, left: $globalMainLabelChangeTextColorLeft} },"Change text Color!"),
           React.createElement(SelectionColor,{colors: this.connectSelectionColor},null),

           React.createElement(ShadowSettings,{verticValue: this.state.ConnectShadowSettingsVertical, horizValue: this.state.ConnectShadowSettingsHorizontal,
           shadowVertical: this.connectShadowSettingsV,shadowHorizontal: this.connectShadowSettingsH, selection: this.connectShadowSettingsColor },null),
           React.createElement(FontWeightSettings,{weightValue:this.state.ConnectFontWeight ,weight:this.connectFontWeightSettings},null),
           React.createElement('br',{},null),
           React.createElement('hr',{style: {borderWidth: "1vw",borderStyle: "ridge"}},null),

           
           React.createElement('label',{ style: {fontSize: $globalMainLabels, textShadow: "0.15vw 0.15vw 0.38vw red",} },"Change the Battlefield!"),
           React.createElement(SelectionBG,{bg: this.changeBG},null),
           React.createElement('br',{},null),
           //here below
           React.createElement(FighterParts,{DataSend: this.connectFighters,first: this.state.FIRST,second: this.state.SECOND,
             third: this.state.THIRD, fourth:this.state.FOURTH, Percent:this.state.Chance, BigText: this.state.Text},null),
           //Gateways

           React.createElement(Gate,{gateset: $globalMainGate1BGPositionLeft,pdl: $globalMainGate1PDL, getFighters: this.state.ConnectFighter,id:this.state.ConnectFighterID, ArenaFighters: this.connectGate},null),
           React.createElement(Gate,{gateset: $globalMainGate2BGPositionLeft,left: $globalMainGate2Left,pdl: $globalMainGate2PDL,getFighters:this.state.ConnectFighter2,id:this.state.ConnectFighterID2,ArenaFighters: this.connectGate},null),
           React.createElement('button',{style: {fontSize:$globalMainButtonFontSize,position:"relative",top:$globalMainButtonTop,left:$globalMainButtonLeft,color: "green",
             textShadow: "0.15vw 0.15vw 0.38vw red",boxShadow: "0.20vw 0.20vw 0.48vw gray",borderRadius: "1vw",fontWeight:"bold",
             outline:"none",backgroundColor: "lightblue"
         }, onClick: this.Calculate},"Calculate")
           );


  }
}

//Legvegen megcsinalni a divet ahova berakjuk az egeszet!



ReactDOM.render(
  React.createElement(MainDiv, {}, null),
  document.getElementById('SettingsGameWithReact')
);



//Jquery part
//Mukodik szrencsere!



