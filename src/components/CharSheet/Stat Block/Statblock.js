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
          <span>{parseInt((newStr - 10) / 2)}</span>
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
          <span>{parseInt((newDex - 10) / 2)}</span>
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
                  changeHandler("newDex", Name);
                }}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
        <div className="Constitution">
          <span>Con: {newCon}</span>
          <span>{parseInt((newCon - 10) / 2)}</span>
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
                  changeHandler("newCon", Name);
                }}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
        <div className="Intelligence">
          <span>Int: {newInt}</span>
          <span>{parseInt((newInt - 10) / 2)}</span>
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
                  changeHandler("newInt", Name);
                }}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
        <div className="Wisdom">
          <span>Wis: {newWis}</span>
          <span>{parseInt((newWis - 10) / 2)}</span>
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
                  changeHandler("newWis", Name);
                }}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
        <div className="Charisma">
          <span>Char: {newChar}</span>
          <span>{parseInt((newChar - 10) / 2)}</span>
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
                  changeHandler("newChar", Name);
                }}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <div className="AC, HP, Proficiency, Move Speed">
        <div className="Armour Class">
          <span>AC: {newAC}</span>
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
                  changeHandler("newAC", Name);
                }}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
        <div className="Health Points">
          <span>HP: {newHP}</span>
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
                  changeHandler("newHP", Name);
                }}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
        <div className="Proficiency">
          <span>Generic Counter: {newProforGeneric}</span>
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
                  changeHandler("newProforGeneric", Name);
                }}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
        <div className="Move Speed">
          <span>Movement: {newMvSpeed}</span>
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
                  changeHandler("newMvSpeed", Name);
                }}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <div className="Saves">
        <div className="Str Save">
          <span>Str Save: {newStrSv}</span>
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
                  changeHandler("newName", Name);
                }}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
        <div className="Dex Save">
          <span>Dex Save: {newDexSv}</span>
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
                  changeHandler("newDexSv", Name);
                }}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
        <div className="Con Save">
          <span>Con Save: {newConSv}</span>
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
                  changeHandler("newConSv", Name);
                }}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
        <div className="Int Save">
          <span>Int Save: {newIntSv}</span>
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
                  changeHandler("newIntSv", Name);
                }}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
        <div className="Wis Save">
          <span>Wis Save: {newWisSv}</span>
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
                  changeHandler("newWisSv", Name);
                }}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
        <div className="Char Save">
          <span>Char Save: {newCharSv}</span>
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
                  changeHandler("newCharSv", Name);
                }}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
