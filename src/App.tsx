import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class App extends Component<null, null> {
  handlePress() {
    console.log('pressed');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button label="Click Me" onPress={() => this.handlePress()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  } as React.ViewStyle,
});

interface ButtonProps {
  label: string;
  onPress: () => void;
}

const Button = ({ label, onPress }: ButtonProps) => (
  <TouchableOpacity style={buttonStyles.button} onPress={onPress}>
    <Text style={buttonStyles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const buttonStyles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderColor: 'navy',
  } as React.ViewStyle,

  buttonText: {
    color: 'navy',
  } as React.TextStyle,
});
