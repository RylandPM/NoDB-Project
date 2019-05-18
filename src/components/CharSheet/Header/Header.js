import React from "react";
import "./Header.css";

export default function Header(props) {
  let {
    newSheet,
    newName,
    newClass,
    newRace,
    newLevel,
    newExp,
    changeHandler,
    display
  } = props;
  let Name;
  return (
    <div className="Header">
      <div className="Right corner">
        <div className="Name">
          <span>Name: {newName}</span>
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
        <div className="Class">
          <span>Class: {newClass}</span>
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
                  changeHandler("newClass", Name);
                }}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
        <div className="Race">
          <span>Race: {newRace}</span>
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
                  changeHandler("newRace", Name);
                }}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <div className="Left side">
        <div className="level">
          <span>Level: {newLevel}</span>
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
                  changeHandler("newLevel", Name);
                }}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
        <div className="Experience">
          <span>Exp: {newExp}</span>
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
                  changeHandler("newExp", Name);
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
