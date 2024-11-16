import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header(): React.JSX.Element {
  return (
    <View>
      <Text style={style.headerTxt}>To Do App</Text>
    </View>
  );
}

const style = StyleSheet.create({
  headerTxt: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Header;
