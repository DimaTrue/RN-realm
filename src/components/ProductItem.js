import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import FastImage from 'react-native-fast-image'


const ProductItem = (props) => {
  const { item } = props;
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        // eslint-disable-next-line global-require
        source={item.images.length ? item.images[0].file : require('../img/images.png')}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View syle={styles.textBlock}>
        <Text syle={styles.text}>
          Product:
          {' '}
          {item.theme}
        </Text>
        <Text syle={styles.text}>
          Price:
          {' '}
          {item.price}
          {'$'}
        </Text>
        <Text syle={styles.text}>
          Description:
          {' '}
          {item.text}
        </Text>
      </View>
    </View>
  );
};
export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 30,
    margin: 10,
  },
  image: {
    width: 300,
    height: 300,
    margin: 15,
  }
});
