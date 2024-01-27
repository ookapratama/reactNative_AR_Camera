import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Nav, VStack} from '../../components';
import {useLayout} from '../../hooks';
import {Icons} from '../../assets';
import {navigate} from '../../navigation/RootNavigation';

const About = () => {
  const {width, height} = useLayout();
  const iconMap = {
    object3D: Icons.object3D,
  };
  return (
    <View>
      <Nav title={'About \n Nature Explorer'} />
      <Image
        style={[
          styles.icon,
          {
            width: width - 200,
            height: height / 5,
            marginTop: width - 350,
            marginBottom: width - 380,
          },
        ]}
        source={iconMap['object3D']}
        resizeMode="contain"
      />
      <VStack itemsCenter>
        <Text style={[styles.desc, {marginBottom: 20}]}>
          {'\t\t'}Nature Explorer adalah aplikasi yang menghadirkan pengalaman
          visual unik, memungkinkan pengguna untuk menjelajahi dunia flora dan
          fauna melalui kamera ponsel mereka.{' '}
        </Text>
        <Text style={[styles.desc, {marginBottom: 20}]}>
          {'\t\t'}Dengan mengarahkan kamera ke gambar objek tertentu, aplikasi
          ini secara instan menampilkan informasi mengenai flora atau fauna yang
          terdapat pada gambar tersebut.
        </Text>
        <Text style={[styles.desc, {}]}>
          {'\t\t'}Dengan Nature Explorer, pengguna dapat menikmati keindahan
          alam dan belajar mengenai berbagai spesies tanaman dan hewan hanya
          dengan mengarahkan kamera mereka.
        </Text>
        <TouchableOpacity
          style={styles.btn_back}
          onPress={() => navigate('Home')}>
          <Text style={{fontSize: 18, color: '#fff'}}>Back</Text>
        </TouchableOpacity>
      </VStack>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
  },
  desc: {
    textAlign: 'justify',
    fontSize: 18,
    marginHorizontal: 24,
    fontWeight: '700',
  },
  btn_back: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
    marginVertical: 40,
    padding: 16,
    paddingHorizontal: 60,
    borderRadius: 8,
    backgroundColor: '#67AAF9',
  },
});
