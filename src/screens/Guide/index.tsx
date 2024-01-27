import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {HStack, Nav, VStack} from '../../components';
import {useLayout} from '../../hooks';

// icon menu
import {Icons} from '../../assets';
import {navigate} from '../../navigation/RootNavigation';

const Instruction = () => {
  const iconMap = {
    about: Icons.about,
    student: Icons.student,
    gallery: Icons.gallery,
    camera: Icons.camera,
  };

  const deskripsi = {
    about: 'Pilih about untuk menampilkan informasi aplikasi',
    student: 'Pilih profile untuk menampilkan profile mahasiswa',
    gallery: 'Pilih gallery untuk menampilkan gambar flora dan fauna',
    camera:
      'Pilih AR camera untuk menampilkan camera, dengan cara mengarahkan kamera pada objek yang ditentukan',
  };

  const {width, height} = useLayout();

  return (
    <View>
      <Nav title={'Instructions'} />
      <VStack >
        {Object.entries(deskripsi).map(([key, item]) => (
          <HStack itemsCenter mt={30} mh={width - 330}>
            <VStack itemsCenter ms={-20}>
              <Image
                source={iconMap[key]}
                style={{width: width - 350, height: height / 10}}
                resizeMode="contain"
              />
              <Text style={[styles.text, {textTransform: 'capitalize'}]}>
                {key}
              </Text>
            </VStack>
            <Text style={[styles.text, styles.desc]}>{item}</Text>
          </HStack>
        ))}
        <TouchableOpacity
          style={styles.btn_back}
          onPress={() => navigate('Home')}>
          <Text style={{fontSize: 18, color: '#fff'}}>Back</Text>
        </TouchableOpacity>
      </VStack>
    </View>
  );
};

export default Instruction;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '600'
  },
  desc: {marginLeft: 20},
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
    alignSelf: 'center'
  },
});
