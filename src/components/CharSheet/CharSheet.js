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
    console.log(props);

    this.state = {
      id: 0,
      isFamiliar: false,
      newName: "",
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
      newWealth: ["Platinum: 0", "Gold: 0", "Silver: 0", "Copper: 0"],
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
  componentDidUpdate(prevProps, prevState) {
    let { newSheet } = this.props;
    if (newSheet.id !== prevProps.newSheet.id) {
      this.setState({
        id: newSheet.id,
        isFamiliar: newSheet.isFamiliar,
        newName: newSheet.Name,
        newClass: newSheet.Class,
        newRace: newSheet.Race,
        newLevel: newSheet.Level,
        newExp: newSheet.Exp,
        newStr: newSheet.Str,
        newDex: newSheet.Dex,
        newCon: newSheet.Con,
        newInt: newSheet.Int,
        newWis: newSheet.Wis,
        newChar: newSheet.Char,
        newAC: newSheet.AC,
        newHP: newSheet.HP,
        newProforGeneric: newSheet.ProforGeneric,
        newMvSpeed: newSheet.MvSpeed,
        newStrSv: newSheet.StrSv,
        newDexSv: newSheet.DexSv,
        newConSv: newSheet.ConSv,
        newIntSv: newSheet.IntSv,
        newWisSv: newSheet.WisSv,
        newCharSv: newSheet.CharSv,
        newLanguages: newSheet.Languages,
        newConditionsorEnchants: newSheet.ConditionsorEnchants,
        newFeats: newSheet.Feats,
        newResistorWeakness: newSheet.ResistorWeakness,
        newDeity: newSheet.Deity,
        newFamiliar: newSheet.Familiar, // optional
        newAttacks: newSheet.Attacks,
        newInventory: newSheet.Inventory,
        newSpells: newSheet.Spells,
        newWealth: newSheet.Wealth
      });
    }
  }

  render() {
    const { newSheet } = this.props;
    let { postNewCharacter, update } = this.props;
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
    console.log(newFeats);
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
        <div className="Stats">
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
        </div>
        <div className="Conditions">
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
        <div className="Attack">
          <Attack
            newSheet={newSheet}
            newAttacks={newAttacks}
            pushBot={this.pushBot}
            display={display}
            changeHandler={this.changeHandler}
          />
        </div>
        <div className="Inventory">
          <Inventory
            pushBot={this.pushBot}
            changeHandler={this.changeHandler}
            display={display}
            newSheet={newSheet}
            newInventory={newInventory}
            newSpells={newSpells}
            Wealth={newWealth}
          />
        </div>
        <button onClick={() => postNewCharacter(this.state)}>
          Post New Sheet
        </button>
        <button onClick={() => update(this.state.id, this.state)}>
          Update Sheet
        </button>
      </div>
    );
  }
}
