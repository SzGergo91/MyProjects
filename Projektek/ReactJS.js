
//Strictul necesar!
'use strict'


class MainDiv extends React.Component{

    constructor(props){
      super(props);
      this.state={
        paragraphIntro : 3,
        paragraphIntroColor: "black",
        paragraphIntroWeight: 200,
        paragraphShadowVertical: 0.00.toFixed(2),
        paragraphShadowHorizontal: 0.00.toFixed(2),
        paragraphShadowColor: "black",

        //Arena accessories below!
        ArenaMap: `url('Pictures/SettingsGame/Arena.jpg')`,
        WinChancePercentage: `0%`,
        StrengthInformationText: `Waiting for the fighters!(Press calculate to see win rate!)`,
        //FighterSettings
        FirstVisibility: `visible`,
        SecondVisibility: `visible`,
        ThirdVisibility: `visible`,
        FourthVisibility: `visible`,
        //Gate settings
        FirstFighter: ``,
        SecondFighter: ``, 
        CursorFirst: `default`,
        CursorSecond: `default`
      }

      //Bindings!!!
      this.setParagraphIntroSize=this.setParagraphIntroSize.bind(this);
      this.setParagraphIntroColor=this.setParagraphIntroColor.bind(this);
      this.setParagraphIntroWeight=this.setParagraphIntroWeight.bind(this);
      this.setParagraphIntroShadowVertical=this.setParagraphIntroShadowVertical.bind(this);
      this.setParagraphIntroShadowHorizontal=this.setParagraphIntroShadowHorizontal.bind(this);
      this.setParagraphIntroShadowColor=this.setParagraphIntroShadowColor.bind(this);
      this.setArenaMap=this.setArenaMap.bind(this);
      this.SetFighters=this.SetFighters.bind(this);
      this.restoreFighters=this.restoreFighters.bind(this);
      this.calculate=this.calculate.bind(this);
    }

    setParagraphIntroSize(e){
      this.setState({
        paragraphIntro: e.target.value,
      })
    }

    setParagraphIntroColor(event){
      this.setState({
        paragraphIntroColor:event.target.value,
      })
    }

    setParagraphIntroWeight(e){
      this.setState({
        paragraphIntroWeight:e.target.value,
      })
    }

    setParagraphIntroShadowVertical(e){
      let value=e.target.value;
      value=Number(value).toFixed(2);
      this.setState({
        paragraphShadowVertical: value,
      })
    }

    setParagraphIntroShadowHorizontal(e){
      let value=Number(e.target.value).toFixed(2);
      this.setState({
        paragraphShadowHorizontal: value,
      })
    }

    setParagraphIntroShadowColor(e){
      this.setState({
        paragraphShadowColor: e.target.value,
      })
    }

    setArenaMap(arena){
      this.setState({
        ArenaMap: arena.target.value,
      })
    }

    SetFighters(e){
      let s= String(e.target.src).slice(-12);
      if(this.state.FirstFighter=== ``){
        this.setState({
          FirstFighter: `url('${e.target.src}')`,
          CursorFirst: `pointer`,
        })

       switch(s){
        case `Fighter1.gif`:
          this.setState({
            FirstVisibility:`hidden`,
          })
          break;
        case `Fighter2.gif`:
          this.setState({
            SecondVisibility:`hidden`,
          })
          break;
        case `Fighter3.gif`:
          this.setState({
            ThirdVisibility:`hidden`,
          })
          break;
        case `Fighter4.gif`:
          this.setState({
            FourthVisibility:`hidden`,
          })
          break;
      }
      }
      else{
        if(this.state.SecondFighter===``){
         this.setState({
          SecondFighter: `url('${e.target.src}')`,
          CursorSecond: `pointer`,
          })
       switch(s){
        case `Fighter1.gif`:
          this.setState({
            FirstVisibility:`hidden`,
          })
          break;
        case `Fighter2.gif`:
          this.setState({
            SecondVisibility:`hidden`,
          })
          break;
        case `Fighter3.gif`:
          this.setState({
            ThirdVisibility:`hidden`,
          })
          break;
        case `Fighter4.gif`:
          this.setState({
            FourthVisibility:`hidden`,
          })
          break;
      }
        }
      }

    }

    restoreFighters(event){
      let entrance=event.target.id;
      if((this.state.FirstFighter!==``) && (entrance===`FirstGateEntrance`)){
        let fighter=this.state.FirstFighter.slice(-14).slice(0,12);
          switch(fighter){
            case `Fighter1.gif`:
              this.setState({
                FirstFighter: ``,
                CursorFirst:`default`,
                FirstVisibility:`visible`
              })
              break;
            case `Fighter2.gif`:
               this.setState({
                FirstFighter: ``,
                CursorFirst:`default`,
                SecondVisibility:`visible`
              })
              break;
            case `Fighter3.gif`:
               this.setState({
                FirstFighter: ``,
                CursorFirst:`default`,
                ThirdVisibility:`visible`
              })
              break;
            case `Fighter4.gif`:
               this.setState({
                FirstFighter: ``,
                CursorFirst:`default`,
                FourthVisibility:`visible`
              })
              break;
          }
      }
      else{
        if((this.state.SecondFighter!==``) && (entrance===`SecondGateEntrance`)){
          let fighter=this.state.SecondFighter.slice(-14).slice(0,12);
          switch(fighter){
            case `Fighter1.gif`:
              this.setState({
                SecondFighter: ``,
                CursorSecond:`default`,
                FirstVisibility:`visible`
              })
              break;
            case `Fighter2.gif`:
               this.setState({
                SecondFighter: ``,
                CursorSecond:`default`,
                SecondVisibility:`visible`
              })
              break;
            case `Fighter3.gif`:
               this.setState({
                SecondFighter: ``,
                CursorSecond:`default`,
                ThirdVisibility:`visible`
              })
              break;
            case `Fighter4.gif`:
               this.setState({
                SecondFighter: ``,
                CursorSecond:`default`,
                FourthVisibility:`visible`
              })
              break;
          }
        }
      }
    }

    calculate(){
      if((this.state.FirstFighter===``) && (this.state.SecondFighter===``)){
        alert(`Choose two fighters!`);
      }
      else{
        if((this.state.FirstFighter!==``) && (this.state.SecondFighter===``)){
          alert(`Choose the second fighter!`);
        }
        else{
          if((this.state.FirstFighter===``) && (this.state.SecondFighter!==``)){
            alert(`Choose the first fighter!`);
          }
          else{
            let fighter=this.state.FirstFighter.slice(-14).slice(0,12);
            let fighter2=this.state.SecondFighter.slice(-14).slice(0,12);
            switch(fighter){
              case `Fighter1.gif`:
                  switch(fighter2){
                    case `Fighter2.gif`:
                      this.setState({
                        WinChancePercentage:`50%`,
                        StrengthInformationText:`Both fighters are very even!`
                      })
                      break;
                    case `Fighter3.gif`:
                       this.setState({
                         WinChancePercentage:`30%`,
                         StrengthInformationText:`The first fighter has the disadvantage!`
                       })
                      break;
                    case `Fighter4.gif`:
                       this.setState({
                         WinChancePercentage:`90%`,
                         StrengthInformationText:`The first fighter has very high chances!`
                       })
                      break;
                  }
                break;

            case `Fighter2.gif`:
                  switch(fighter2){
                    case `Fighter1.gif`:
                      this.setState({
                        WinChancePercentage:`50%`,
                        StrengthInformationText:`Both fighters are very even!`
                      })
                      break;
                    case `Fighter3.gif`:
                       this.setState({
                         WinChancePercentage:`70%`,
                         StrengthInformationText:`The first fighter has the advantage!`
                       })
                      break;
                    case `Fighter4.gif`:
                       this.setState({
                         WinChancePercentage:`10%`,
                         StrengthInformationText:`The first fighter has very small chances!`
                       })
                      break;
                  }
                break;

            case `Fighter3.gif`:
                  switch(fighter2){
                    case `Fighter1.gif`:
                      this.setState({
                        WinChancePercentage:`70%`,
                        StrengthInformationText:`The first fighter has the advantage!`
                      })
                      break;
                    case `Fighter2.gif`:
                       this.setState({
                         WinChancePercentage:`30%`,
                         StrengthInformationText:`The first fighter has the disadvantage!`
                       })
                      break;
                    case `Fighter4.gif`:
                       this.setState({
                         WinChancePercentage:`50%`,
                         StrengthInformationText:`Both fighters are very even!`
                       })
                      break;
                  }
                break;

            case `Fighter4.gif`:
                  switch(fighter2){
                    case `Fighter1.gif`:
                      this.setState({
                        WinChancePercentage:`10%`,
                        StrengthInformationText:`The first fighter has very small chances!`
                      })
                      break;
                    case `Fighter2.gif`:
                       this.setState({
                         WinChancePercentage:`90%`,
                         StrengthInformationText:`The first fighter has very high chances!`
                       })
                      break;
                    case `Fighter3.gif`:
                       this.setState({
                         WinChancePercentage:`50%`,
                         StrengthInformationText:`Both fighters are very even!`
                       })
                      break;
                  }
                break;
              
            }
          }
        }
      }
    }

  render(){
    return React.createElement('div',{ style: {backgroundImage: this.state.ArenaMap}, id: `MainDiv`},
      React.createElement('div',{},
        React.createElement('p',{style: { fontSize: `${this.state.paragraphIntro}vw`,color: this.state.paragraphIntroColor,
         fontWeight: this.state.paragraphIntroWeight, textShadow: `${this.state.paragraphShadowHorizontal}vw ${this.state.paragraphShadowVertical}vw ${this.state.paragraphShadowColor}`, } },`This projects is about a battle beetween two selected characters, and you can set their characteristics.
      Let me explain an example! Each character has health and damage, and these values are based on the size of the characters!
      The characters also have abilities and weapons to select!
      If this text isn't visible enough then use the settings below!`),
        React.createElement('h1',{id: `ControllerHeaderForText`},`Controllers for the text above`),
        React.createElement('br',{},null),
        React.createElement('br',{},null),
        React.createElement('label',{id: `SizeTextLabel`},"Size of text"),
        React.createElement('input',{max: "5",type: "range",min: "1", step: "0.1",onChange:this.setParagraphIntroSize},null),
        React.createElement('label',{id: `SizeTextLabelValue`},`${this.state.paragraphIntro}vw`),

        React.createElement('label',{id: `ColorOfTheTextLabel`},"Color of the text"),
        React.createElement('select',{id:`ColorSelectionSelect`, onChange: this.setParagraphIntroColor},
          React.createElement('option',{value: "black"},"Black"),
          React.createElement('option',{value: "blue"},"Blue"),
          React.createElement('option',{value: "green"},"Green"),
          React.createElement('option',{value: "yellow"},"Yellow"),
          React.createElement('option',{value: "white"},"White"),
          React.createElement('option',{value: "red"},"Red"),),

        React.createElement('label',{id: `WeightOfTheTextLabel`},`Weight of the text`),
        React.createElement('input',{type:"range", min: "200", max:"900", step:"10",onChange: this.setParagraphIntroWeight},null),
        React.createElement('label',{id: `WeightOfTheTextLabelValue`},this.state.paragraphIntroWeight)
         ),

      //Shadows
      React.createElement('div',{style: {}},
        React.createElement('br',{},null),
        React.createElement('label',{id: `LabelForTextShadowVertical`},"TextShadowVertical"),
        React.createElement('input',{min:"-0.5", max:"0.5",type: "range",step:"0.01",value: this.state.paragraphShadowVertical, style: {marginLeft: "1vw"}, onChange: this.setParagraphIntroShadowVertical,id: `ShVerSel` },null),
        React.createElement('label',{id: `LabelForTextShadowVerticalValue`},`${this.state.paragraphShadowVertical}vw`),

        React.createElement('label',{id:`LabelForTextShadowHorizontal`},"TextShadowHorizontal"),
        React.createElement('input',{min: "-0.5", max:"0.5",step:"0.01",type: "range",value: this.state.paragraphShadowHorizontal,onChange: this.setParagraphIntroShadowHorizontal,id:`ShHorSel`},null),
        React.createElement('label',{id: `LabelForTextShadowHorizontalValue`},`${this.state.paragraphShadowHorizontal}vw`),

        React.createElement('label',{id:`LabelForShadowColor`},"ShadowColor"),
        React.createElement('select',{id:`ShadowColorSelectionSelect`, onChange: this.setParagraphIntroShadowColor},
          React.createElement('option',{value: "black"},`Black`),
          React.createElement('option',{value: "red"},`Red`),
          React.createElement('option',{value: "green"},`Green`),
          React.createElement('option',{value: "blue"},`Blue`),
          React.createElement('option',{value: "yellow"},`Yellow`),
          React.createElement('option',{value: "white"},`White`),
          ),
        ),

      //BigDiv
      React.createElement('div',{style: {}},
        React.createElement('h1',{id:`ArenaControllersHeader`},`Controllers for the Arena`),
        React.createElement('br',{},null),
        React.createElement('label',{id: `ChangeTheArenaText`},"Change the Arena!"),
        React.createElement('select',{id:`ChangeTheArenaSelectionSelect`, onChange: this.setArenaMap},
          React.createElement('option',{value: `url('Pictures/SettingsGame/Arena.jpg')`},`First Arena`),
          React.createElement('option',{value: `url('Pictures/SettingsGame/Arena2.jpg')`},`Second Arena`),
          React.createElement('option',{value: `url('Pictures/SettingsGame/Arena3.jpg')`},`Third Arena`)
          ),
        React.createElement('p',{id: `WinChanceParagraph`},`Win chance rate`,
          React.createElement('span',{id: `WinChancePercentageValue`},this.state.WinChancePercentage),
          React.createElement('br',{},null),
          React.createElement('span',{id: `StrengthInformationText`},this.state.StrengthInformationText),
          ),
          React.createElement('h1',{id: `FightersHeader`},`Fighters`),
          React.createElement('br',{},null),

          //Fighters
          React.createElement('img',{src:`Pictures/SettingsGame/Fighter1.gif`,alt:``, onClick:this.SetFighters, style:{visibility:this.state.FirstVisibility}, id:`Fighter1`},null),
          React.createElement('img',{src:`Pictures/SettingsGame/Fighter2.gif`,alt:``, onClick:this.SetFighters, style:{visibility:this.state.SecondVisibility}, id:`Fighter2`},null),
          React.createElement('img',{src:`Pictures/SettingsGame/Fighter3.gif`,alt:``, onClick:this.SetFighters, style:{visibility:this.state.ThirdVisibility}, id:`Fighter3`},null),
          React.createElement('img',{src:`Pictures/SettingsGame/Fighter4.gif`,alt:``, onClick:this.SetFighters, style:{visibility:this.state.FourthVisibility},id: `Fighter4`},null),
          //Gates
          React.createElement('div',{id:`ContainerDivOfMap`},null),
          React.createElement('h2',{id: `FirstFighterHeader`},`First Fighter`),
          React.createElement('h2',{id:`SecondFighterHeader`},`Second Fighter`),
          React.createElement('br',{},null),
          React.createElement('div',{id: `GateDivEntrance1`},null),
          React.createElement('div',{style:{backgroundImage:`${this.state.FirstFighter}`,
            cursor:this.state.CursorFirst}, onClick: this.restoreFighters, id:`FirstGateEntrance`},null),
          React.createElement('div',{style:{backgroundImage:`${this.state.SecondFighter}`,
            cursor:this.state.CursorSecond},onClick: this.restoreFighters,id:`SecondGateEntrance`},null),
          React.createElement('div',{id:`GateDivEntrance2`},null),
          React.createElement('div',{id: `SpaceDiv`},null),
          React.createElement('button',{id:`CalculateButton`,onClick:this.calculate},`Calculate`),
          React.createElement('div',{id:`LastSpaceDiv`},null),

        )
      )
  }
}

ReactDOM.render(
  React.createElement(MainDiv, {}, null),
  document.getElementById('SettingsGameWithReact')
);

