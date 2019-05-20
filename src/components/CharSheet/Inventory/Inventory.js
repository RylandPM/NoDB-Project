import React from "react";
import "./Inventory.css";

export default function Inventory(props) {
  let {
    newSheet,
    newInventory,
    newSpells,
    Wealth,
    pushBot,
    changeHandler,
    display
  } = props;
  let Name;
  let inventoryArr = () =>
    newInventory.map(element => {
      return <li>{element}</li>;
    });
  let spellsArr = () =>
    newSpells.map(element => {
      return <li>{element}</li>;
    });

  return (
    <div className="InventoryBlock">
      <div className="LeftSide">
        <div className="Inventory">
          <ul>Inventory: {inventoryArr}</ul>
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
                  pushBot("newInventory", Name);
                }}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <div className="RightSide">
        <div className="Spells">
          <ul>Spells: {spellsArr}</ul>
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
                  pushBot("newSpells", Name);
                }}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
        <div className="Wealth">
          <div>
            <div className="Platinum">
              <div>{Wealth}</div>
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
                      changeHandler("Wealth", Name);
                    }}
                  >
                    Save
                  </button>
                </div>
              ) : null}
            </div>
          </div>
          {/* <div>
            <div className="Gold">
              <div>Gold: {Gold}</div>
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
                      changeHandler("Wealth", Name);
                    }}
                  >
                    Save
                  </button>
                </div>
              ) : null}
            </div>
          </div>
          <div>
            <div className="Silver">
              <div>Silver: {Silver}</div>
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
                      changeHandler("Wealth", Name);
                    }}
                  >
                    Save
                  </button>
                </div>
              ) : null}
            </div>
          </div>
          <div>
            <div className="Copper">
              <div>Copper: {Copper}</div>
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
                      changeHandler("Wealth", Name);
                    }}
                  >
                    Save
                  </button>
                </div>
              ) : null}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
