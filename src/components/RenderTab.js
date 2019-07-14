import React, {Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';


const RenderTab = (item, page, isTabActive, onPressHandler, onLayoutHandler) => {
 
  return(
  <TouchableHighlight
    key={`${item.theme}_${page}`}
    onPress={() => {
      onPressHandler(page);
    }
   }
    onLayout={onLayoutHandler}
    style={styles.buttonHighlight}
    underlayColor="#aaaaaa"
  >
    <Text>
      {item.theme}
    </Text>
  </TouchableHighlight>
  );
}


export default RenderTab;

const styles = StyleSheet.create({
   buttonHighlight: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})