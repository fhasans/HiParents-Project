import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const CardNoChild = props => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={require('../../assets/image/iconfamily.png')}
          style={styles.image}></Image>
        <Text style={styles.noChild}>No Child</Text>
        <Text>click + to add child</Text>
      </View>
    </View>
  );
};

export default CardNoChild;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    top: '250%',
  },
  noChild: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    paddingTop: 3,
  },
  image: {
    width: 50,
    height: 50,
  },
});
