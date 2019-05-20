import React from "react";
import "./Attack.css";

export default function Attacks(props) {
  let { newAttacks, pushBot, display, changeHandler } = props;
  let Name;
  let attacksArr = () =>
    newAttacks.map(element => {
      return <li>{element}</li>;
    });

  return (
    <div className="attackWrapper">
      <div className="Attacks">
        <ul>Attacks: {attacksArr}</ul>
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
                pushBot("newAttacks", Name);
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
