import React from "react";
import "./Conditions.css";

export default function Conditions(props) {
  let {
    pushBot,
    changeHandler,
    newSheet,
    newLanguages,
    newConditionsorEnchants,
    newResistorWeakness,
    newDeity,
    newFamiliar,
    newFeats,
    display
  } = props;
  let Name;

  let conditionsArr = () =>
    newConditionsorEnchants.map(element => {
      return <li>{element}</li>;
    });

  let resistsArr = newResistorWeakness.map(element => {
    return <li>{element}</li>;
  });

  let featsArr = newFeats.map(element => {
    return <li>{element}</li>;
  });

  return (
    <div>
      <div className="Languages">
        <span>Languages: {newLanguages}</span>
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
                changeHandler("newLanguages", Name);
              }}
            >
              Save
            </button>
          </div>
        ) : null}
      </div>
      <div className="Conditions or Enchantments">
        <ul>Conditions or Enchantments: {conditionsArr}</ul>
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
                pushBot("newConditionsorEnchants", Name);
              }}
            >
              Save
            </button>
          </div>
        ) : null}
      </div>
      <div className="Resists or Weaknesses">
        <ul>Resists or Weaknesses: {resistsArr}</ul>
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
                pushBot("newResistorWeakness", Name);
              }}
            >
              Save
            </button>
          </div>
        ) : null}
      </div>
      <div className="Deity">
        <span>Deity: {newDeity}</span>
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
                changeHandler("newDeity", Name);
              }}
            >
              Save
            </button>
          </div>
        ) : null}
      </div>
      <div className="Feats">
        <ul>Feats: {featsArr}</ul>
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
                pushBot("newFeats", Name);
              }}
            >
              Save
            </button>
          </div>
        ) : null}
      </div>
      <div className="Familiar">
        <span>Familiar: Future Project</span>
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
                changeHandler("newFamiliar", Name);
              }}
            >
              Save
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
