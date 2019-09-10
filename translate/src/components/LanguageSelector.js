import React, { Component } from "react";

class LanguageSelector extends Component {
  render() {
    return (
      <div>
        Select a language:
        <i
          onClick={() => this.props.onLanguageChange("english")}
          className='flag us'
        />
        <i
          onClick={() => this.props.onLanguageChange("dutch")}
          className='flag nl'
        />
      </div>
    );
  }
}

export default LanguageSelector;
