import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import CharSheet from "./components/CharSheet/CharSheet";
import Sidebar from "./components/Sidebar/Sidebar";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterCollection: []
    };
    this.myCharacterCollection = this.myCharacterCollection.bind(this);
  }

  componentDidMount() {
    this.myCharacterCollection();
  }

  myCharacterCollection() {
    console.log(this.characterCollection);
    axios.get("/api/char_sheets").then(response => {
      this.setState({
        characterCollection: response.data
      });
      console.log(this.characterCollection);
    });
  }

  postNewCharacter(newSheet) {
    axios.post(`/api/char_sheets`, newSheet).then(response => {
      this.setState({
        characterCollection: response.data
      });
    });
  }

  render() {
    return (
      <div>
        {/* <header />
        <div className="CharacterSheetDisplay">
          <CharSheet />
        </div>
        <li className="savedCharsSidebar">
          <Sidebar />
        </li> */}
      </div>
    );
  }
}
