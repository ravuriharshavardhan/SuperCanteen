import {ImageBackground, StyleSheet, View, Text, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import {Height, Width} from '../constants/constants';
import CustomAuthButton from '../Components/CustomAuthButton';

const welcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../../assets/Background/AuthBackground.png')}>
        <View style={styles.header}>
          <MaskedView
            maskElement={<Text style={styles.title}>Super Canteen</Text>}>
            <LinearGradient
              colors={['#2E6074', '#00CED1']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.gradient}
            />
          </MaskedView>
        </View>

        <View style={styles.cardContainer}>
          <Image
            source={require('../../assets/Background/LinearGradient2.png')}
            style={styles.cardImage}
          />

          <View style={styles.buttonGroup}>
            <CustomAuthButton
              title="Sign Up"
              onPress={() =>navigation.navigate('SignUp')}

              backgroundColor="#2E6074"
              borderWidth={1}
              borderColor="#2E6074"
              br={3}
              textStyle={{fontSize: 16, fontWeight: 'bold'}}
            />

            <CustomAuthButton
                          onPress={() =>navigation.navigate('Signin')}
              title="Sign In"
              backgroundColor="#FFFFFF"
              br={3}
              borderWidth={1}
              borderColor="#2E6074"
              textStyle={{color: '#2E6074', fontSize: 16, fontWeight: 'bold'}}
     
              style={{marginTop: 18}}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default welcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4E7F2',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  header: {
    marginTop: Height(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    width: 250,
    height: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: 'black',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  cardContainer: {
    width: Width(288),
    height: Height(350),
    alignSelf: 'center',
    marginTop: Height(80),
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  buttonGroup: {
    position: 'absolute',
    bottom: Height(190),
    width: '100%',
    paddingHorizontal: 10,
    alignItems: 'center',
    rowGap: 20,
  },
});
