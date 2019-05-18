import React, { Component } from "react";
import "./CharSheet.css";
import Attack from "./Attack/Attack";
import Conditions from "./Conditions/Conditions";
import Header from "./Header/Header";
import Inventory from "./Inventory/Inventory";
import Statblock from "./Stat Block/Statblock";

export default class Sheet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newName: "Name",
      newClass: "",
      newRace: "",
      newLevel: "",
      newExp: 0,
      newStr: 0,
      newDex: 0,
      newCon: 0,
      newInt: 0,
      newWis: 0,
      newChar: 0,
      newAC: 0,
      newHP: 0,
      newProforGeneric: 0,
      newMvSpeed: 0,
      newStrSv: 0,
      newDexSv: 0,
      newConSv: 0,
      newIntSv: 0,
      newWisSv: 0,
      newCharSv: 0,
      newLanguages: "",
      newConditionsorEnchants: [],
      newFeats: [],
      newResistorWeakness: [],
      newDeity: "",
      newFamiliar: {}, // optional
      newAttacks: [],
      newInventory: [],
      newSpells: [],
      newWealth: {},
      display: false
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.pushBot = this.pushBot.bind(this);
  }
  changeHandler(state, inp) {
    this.setState({
      [state]: inp
    });
  }
  pushBot(arr, inp) {
    this.setState({
      [arr]: [...this.state[arr], inp]
    });
  }

  render() {
    const { newSheet } = this.props;
    const {
      newName,
      newClass,
      newRace,
      newLevel,
      newExp,
      newStr,
      newDex,
      newCon,
      newInt,
      newWis,
      newChar,
      newAC,
      newHP,
      newProforGeneric,
      newMvSpeed,
      newStrSv,
      newDexSv,
      newConSv,
      newIntSv,
      newWisSv,
      newCharSv,
      newLanguages,
      newConditionsorEnchants,
      newFeats,
      newResistorWeakness,
      newDeity,
      newFamiliar,
      newAttacks,
      newInventory,
      newSpells,
      newWealth,
      display
    } = this.state;
    return (
      <div className="CharacterSheet">
        <div className="Header">
          <Header
            changeHandler={this.changeHandler}
            newSheet={newSheet}
            newName={newName}
            newClass={newClass}
            newRace={newRace}
            newLevel={newLevel}
            newExp={newExp}
            display={display}
          />
        </div>
        <div classname="Stats+Conditions">
          <Statblock
            changeHandler={this.changeHandler}
            newSheet={newSheet}
            newStr={newStr}
            newDex={newDex}
            newCon={newCon}
            newInt={newInt}
            newWis={newWis}
            newChar={newChar}
            newAC={newAC}
            newHP={newHP}
            newProforGeneric={newProforGeneric}
            newMvSpeed={newMvSpeed}
            newStrSv={newStrSv}
            newDexSv={newDexSv}
            newConSv={newConSv}
            newIntSv={newIntSv}
            newWisSv={newWisSv}
            newCharSv={newCharSv}
            display={display}
          />
          <Conditions
            pushBot={this.pushBot}
            changeHandler={this.changeHandler}
            newSheet={newSheet}
            newLanguages={newLanguages}
            newConditionsorEnchants={newConditionsorEnchants}
            newResistorWeakness={newResistorWeakness}
            newDeity={newDeity}
            newFamiliar={newFamiliar}
            newFeats={newFeats}
            display={display}
          />
        </div>
        {/* <div className="Attack">
          <Attack newSheet={newSheet} newAttacks={newAttacks} />
        </div>
        <div className="Inventory">
          <Inventory
            newSheet={newSheet}
            newInventory={newInventory}
            newSpells={newSpells}
            newWealth={newWealth}
          />
        </div> */}
      </div>
    );
  }
}
