import React, { Component } from "react";
import "./reset.css"
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
        id: 0,
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
    this.getCharacter=this.getCharacter.bind(this)
    this.postNewCharacter=this.postNewCharacter.bind(this)
    this.updateCharacter=this.updateCharacter.bind(this)
    this.deleteCharacter=this.deleteCharacter.bind(this)
  }

  componentDidMount() {
    this.myCharacterCollection();
    this.postNewCharacter()
    this.getCharacter()
    this.updateCharacter()
    this.deleteCharacter()
  }

  myCharacterCollection() {
    axios.get("/api/char_sheets").then(response => {
      this.setState({
        characterCollection: response.data
      });
    });
    console.log(this.state.characterCollection)
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
    const { characterCollection, newSheet } = this.state;
    return (
      <div className="Display">
        <div className="CharacterSheetDisplay">
          <CharSheet newSheet={newSheet} postNewCharacter={this.postNewCharacter} update={this.updateCharacter} />
        </div>
        <button className="GetButton" onClick={() => {this.myCharacterCollection()}}>Load Character Collection</button>
        <div className="savedCharsSidebar">
          <Sidebar characterCollection={characterCollection} newSheet={newSheet} deleteChar={this.deleteCharacter} getSpecific={this.getCharacter} />
        </div>
      </div>
    );
  }
}
