import {View, Text} from 'react-native';
import React from 'react';
import {HStack, VStack} from '../../components';

const Home = () => {
  return (
    <>
      <HStack level="3">
        <Text>Home screen11111</Text>
        <Text>Home screen</Text>
        <Text>Home screen</Text>
      </HStack>

      <VStack level="4" mt={20} pv={20}>
        <Text>Home screen</Text>
        <Text>Home screen</Text>
        <Text>Home screen</Text>
      </VStack>
    </>
  );
};

export default Home;
