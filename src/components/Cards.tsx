import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Cards = () => {
  return (
    <View>
      <TouchableOpacity style={styles.card}>
        <Text>Cards</Text>
        <Image
          source={require('../assets/icon_menu/student.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#67AAF9',
    padding: 40,
    borderRadius: 10,
  },
});
