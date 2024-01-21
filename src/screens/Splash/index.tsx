import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {navigate} from '../../navigation/RootNavigation';

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate('Home');
    }, 3000);
  }, []);

  return (
    <View style={{backgroundColor: '#67AAF9', flex: 1}}>
      <Image
        style={styles.image}
        source={require('../../assets/img/ar.png')}
        resizeMode="contain"
      />
      <Text style={styles.text}>Nature Explorer</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  image: {
    width: '70%',
    height: '40%',
    alignSelf: 'center',
    marginTop: '40%',
  },
  text: {
    fontSize: 40,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 4,
    color: '#EBE9E9',
  },
});
