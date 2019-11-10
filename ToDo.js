import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class ToDo extends React.Component {
  state = {
    isEditing: false,
    isCompleted: false
  };
  render() {
    const { isCompleted } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._toggleComplete}>
          <View
            style={[
              styles.circle,
              isCompleted ? styles.completedCircle : styles.uncompletedCircle
            ]}
          ></View>
        </TouchableOpacity>
        <Text style={styles.text}>Hello I'm a ToDo</Text>
      </View>
    );
  }

  _toggleComplete = () => {
    this.setState(prevState => {
      return {
        isCompleted: !prevState.isCompleted
      };
    });
  };
}

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center"
  },
  circle: {
    width: 35,
    height: 35,
    borderRadius: 25,
    borderWidth: 3,
    marginRight: 20
  },
  completedCircle: {
    borderColor: "#5f27cd"
  },
  uncompletedCircle: {
    borderColor: "#bbb"
  },
  text: {
    fontWeight: "600",
    fontSize: 22,
    marginVertical: 20
  }
});
