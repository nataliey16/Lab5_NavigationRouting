import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function About(): React.JSX.Element {
  return (
    <MainLayout>
      <View style={style.txtView}>
        <Text>Lab 5 demonstrating Stack Navigation and Routing </Text>
        <Text>Natalie Yeung</Text>
        <Text>November 15, 2024</Text>
      </View>
    </MainLayout>
  );
}

const style = StyleSheet.create({
  txtView: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
  },
});

export default About;
