import React from 'react';
import {View, Text} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function About(): React.JSX.Element {
  return (
    <MainLayout>
      <View>
        <Text>ToDo App</Text>
        <Text>Natalie Yeung</Text>
        <Text>November 15, 2024</Text>
      </View>
    </MainLayout>
  );
}

export default About;
