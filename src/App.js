import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import CharSheet from "./components/CharSheet/CharSheet";
import Sidebar from "./components/Sidebar/Sidebar";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterCollection: [],
      newSheet: {
        Name: "",
        Class: "",
        Race: "",
        Level: "",
        Exp: 0,
        Str: 0,
        Dex: 0,
        Con: 0,
        Int: 0,
        Wis: 0,
        Char: 0,
        AC: 0,
        HP: 0,
        ProforGeneric: 0,
        MvSpeed: 0,
        StrSv: 0,
        DexSv: 0,
        ConSv: 0,
        IntSv: 0,
        WisSv: 0,
        CharSv: 0,
        Languages: "",
        ConditionsorEnchants: [],
        Feats: [],
        ResistorWeakness: [],
        Deity: "",
        Familiar: {}, // optional
        Attacks: [],
        Inventory: [],
        Spells: [],
        Wealth: {}
      }
    };
    this.myCharacterCollection = this.myCharacterCollection.bind(this);
  }

  componentDidMount() {
    this.myCharacterCollection();
  }

  myCharacterCollection() {
    axios.get("/api/char_sheets").then(response => {
      this.setState({
        characterCollection: response.data
      });
    });
  }

  getCharacter(id) {
    axios.get(`/api/char_sheets/${id}`).then(response => {
      this.setState({
        newSheet: response.data
      });
    });
  }

  postNewCharacter(newSheet) {
    axios.post(`/api/char_sheets`, newSheet).then(response => {
      this.setState({
        characterCollection: response.data
      });
    });
  }

  updateCharacter(id, newSheet) {
    axios.put(`/api/char_sheets/${id}`, newSheet).then(response => {
      this.setState({
        characterCollection: response.data
      });
    });
  }

  deleteCharacter(id) {
    axios.delete(`/api/char_sheets/${id}`).then(response => {
      this.setState({
        characterCollection: response.data
      });
    });
  }

  render() {
    console.log(this.state.newSheet);
    const { characterCollection, newSheet } = this.state;
    return (
      <div>
        <div className="CharacterSheetDisplay">
          <CharSheet newSheet={newSheet} />
        </div>
        {/* <li className="savedCharsSidebar">
          <Sidebar characterCollection={characterCollection} newSheet={newSheet} />
        </li> */}
      </div>
    );
  }
}
