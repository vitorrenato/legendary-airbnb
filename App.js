import 'react-native-gesture-handler'
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import MainStack from './src/navigation/MainStack';
import Home from './src/screens/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainStack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})