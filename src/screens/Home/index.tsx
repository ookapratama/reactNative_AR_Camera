import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Cards, HStack, VStack} from '../../components';
import {useLayout} from '../../hooks';
import {Nav} from '../../components';

const Home = () => {
  const {top} = useLayout();

  return (
    <View>
      {/* Navbar */}
      <Nav title='Nature Explorer' />

      {/* Card Menu */}
      <HStack style={{marginTop: top + 40}} mh={30}>
        <Cards title={'Profile'} icon={'student'} to={'Profile'} />
        <Cards title={'About'} icon={'about'} to={'About'} />
      </HStack>
      <HStack style={{marginTop: top + 40}} mh={30}>
        <Cards title={'Gallery'} icon={'gallery'} />
        <Cards title={'AR Camera'} icon={'camera'} />
      </HStack>
      <HStack style={{marginTop: top + 40}} mh={30}>
        <Cards title={'Instructions'} icon={'info'} />
        <Cards title={'Exit'} icon={'exit'} to={'Exit'} />
      </HStack>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  card_menu: {
    backgroundColor: '#67AAF9',
    padding: 40,
    borderRadius: 10,
  },
});
