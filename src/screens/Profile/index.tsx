import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Nav, VStack} from '../../components';
import {Icons} from '../../assets';
import {useLayout} from '../../hooks';
import { navigate } from '../../navigation/RootNavigation';

const Profile = () => {
  const {width, height} = useLayout();
  const iconMap = {
    profile: Icons.student,
  };
  return (
    <View>
      <Nav title="Profile Student" />
      <VStack itemsCenter mv={width - 360}>
        <Image
          style={[
            styles.icon,
            {
              width: width - 200,
              height: height / 5,
              marginTop: width - 350,
              marginBottom: width - 320,
            },
          ]}
          source={iconMap['profile']}
          resizeMode="contain"
        />
        <Text style={[styles.text, {marginBottom: 20}]}>
          NAMA : Ahmad Baisuki{' '}
        </Text>
        <Text style={styles.text}>STAMBUK : 201019292</Text>
        <TouchableOpacity style={styles.btn_back} onPress={() => navigate('Home')}>
          <Text style={{fontSize: 18, color: '#fff'}}>Back</Text>
        </TouchableOpacity>
      </VStack>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '600',
  },
  btn_back: {
    marginVertical: 40,
    padding: 16,
    paddingHorizontal: 60,
    borderRadius: 8,
    backgroundColor: '#67AAF9',
  },
});
