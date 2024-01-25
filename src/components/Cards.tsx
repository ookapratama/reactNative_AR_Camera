import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useLayout} from '../hooks';

const Cards = () => {
  const {width, height, top, bottom} = useLayout();

  return (
    <View>
      <TouchableOpacity style={styles.card}>
        <Image
          source={require('../assets/icon_menu/student.png')}
          style={{width: width - 300, height: height / 10}}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.21,
    shadowRadius: 8.19,
    elevation: 11,
    backgroundColor: '#67AAF9',
    padding: 20,
    borderRadius: 10,
  },
});
