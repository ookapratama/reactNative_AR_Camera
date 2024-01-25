import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Cards, HStack, VStack} from '../../components';
import {useLayout} from '../../hooks';

const Home = () => {
  const {width, height, top, bottom} = useLayout();
  console.log(top);

  return (
    <>
      {/* Navbar */}
      <HStack
        style={[styles.nav, {backgroundColor: '#67AAF9'}]}
        pe={20}
        pv={30}
        justify="space-around">
        <Image
          style={{width: width - 300, height: height / 10}}
          source={require('../../assets/img/ar.png')}
          resizeMode="contain"
        />
        <Text style={styles.text_nav}>Nature Explorer</Text>
      </HStack>

      {/* Card Menu */}
      <HStack style={{backgroundColor: '#000', marginTop: top + 40}} mh={40}>
        <VStack>
          {/* <TouchableOpacity style={styles.card_menu}>
            <Text>Tes</Text>
          </TouchableOpacity> */}
          <Cards />
        </VStack>
      </HStack>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  nav: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
  text_nav: {
    fontSize: 28,
    fontWeight: '500',
    textAlign: 'center',
    alignSelf: 'center',
    color: '#000',
  },
  card_menu: {
    backgroundColor: '#67AAF9',
    padding: 40,
    borderRadius: 10
  },
});
