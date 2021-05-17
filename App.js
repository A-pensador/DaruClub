import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet, TextInput
} from "react-native";
import Navigation from "./src/Navigation";

class App extends Component {
  render() {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    TextInput.defaultProps = TextInput.defaultProps || {};
    TextInput.defaultProps.allowFontScaling = false;
    return (
      <>

        <Navigation />
      </>
    );
  }
}
export default App;

