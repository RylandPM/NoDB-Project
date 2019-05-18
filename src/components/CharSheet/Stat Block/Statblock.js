import React from "react";
import "./Statblock.css";

export default function StatBlock(props) {
  let {
    changeHandler,
    newSheet,
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
    display
  } = props;
  let Name;
  return (
    <div>
      <div className="main stats">
        <div className="Strength">
          <span>Str: {newStr}</span>
          <span>{(newStr - 10) / 2}</span>
          <button
            onClick={() => {
              if (display === true) {
                changeHandler("display", false);
              } else {
                changeHandler("display", true);
              }
            }}
          >
            edit
          </button>
          {display ? (
            <div>
              <input
                onChange={e => {
                  Name = e.target.value;
                }}
              />
              <button
                onClick={() => {
                  changeHandler("display", false);
                  changeHandler("newStr", Name);
                }}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
        <div className="Dexterity">
          <span>Dex: {newDex}</span>
        </div>
        <div className="Constitution">
          <span>Con: {newCon}</span>
        </div>
        <div className="Intelligence">
          <span>Int: {newInt}</span>
        </div>
        <div className="Wisdom">
          <span>Wis: {newWis}</span>
        </div>
        <div className="Charisma">
          <span>Char: {newChar}</span>
        </div>
      </div>
      <div className="AC, HP, Proficiency, Move Speed">
        <div className="Armour Class">
          <span>AC: {newAC}</span>
        </div>
        <div className="Health Points">
          <span>HP: {newHP}</span>
        </div>
        <div className="Proficiency">
          <span>Generic Counter: {newProforGeneric}</span>
        </div>
        <div className="Move Speed">
          <span>Movement: {newMvSpeed}</span>
        </div>
      </div>
      <div className="Saves">
        <div className="Str Save">
          <span>Str Save: {newStrSv}</span>
        </div>
        <div className="Dex Save">
          <span>Dex Save: {newDexSv}</span>
        </div>
        <div className="Str Save">
          <span>Str Save: {newStrSv}</span>
        </div>
        <div className="Str Save">
          <span>Str Save: {newStrSv}</span>
        </div>
        <div className="Str Save">
          <span>Str Save: {newStrSv}</span>
        </div>
        <div className="Str Save">
          <span>Str Save: {newStrSv}</span>
        </div>
      </div>
    </div>
  );
}
