import React from 'react';
import {
  View, Text, ActivityIndicator, StyleSheet
} from 'react-native';

const LoadingComponent = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
        Loading...
    </Text>
    <ActivityIndicator />
  </View>
);

export default LoadingComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
  }
});
