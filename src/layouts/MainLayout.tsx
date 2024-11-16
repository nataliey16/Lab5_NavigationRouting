import React from 'react';
import {View, StyleSheet} from 'react-native';

const MainLayout = ({children}: {children: any}) => {
  return (
    <View style={styles.container}>
      {children}
      {/* <Footer /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;
