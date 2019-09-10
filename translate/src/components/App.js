import React, { Component } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";
class App extends Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language: language });
    console.log(this.state);
  };

  render() {
    return (
      <div className='ui container'>
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}
export default App;
