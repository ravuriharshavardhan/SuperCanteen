import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomAuthHeader from '../Components/CustomAuthHeader';
import CustomTextInput from '../Components/CustomTextInput';
import CustomPasswordInput from '../Components/CustomPasswordInput';
import CustomAuthButton from '../Components/CustomAuthButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Height, Width } from '../constants/constants';

const SigninScreen = ({ navigation }) => {
  const [remember, setRemember] = useState(false);


  const onGoogleSignIn = () => {
    console.log('Google Sign In pressed');
  };

  const onSignInPress = () => {
    navigation.navigate('SignUp'); // or your sign in screen route
  };

  const onpresshandle = () =>{
    navigation.navigate('ForgotPassword'); // or your sign in screen route

  }

  return (
    <View style={styles.container}>
      <CustomAuthHeader title="Super Canteen" />


      <View style={{ rowGap: 10 }} >
        {/* <Text style={styles.label}>Name</Text>
      <CustomTextInput borderColor="#d2d2d2" /> */}

        <Text style={styles.label}>Email</Text>
        <CustomTextInput borderColor="#d2d2d2" keyboardType="email-address" />

        <Text style={styles.label}>Password</Text>
        <CustomPasswordInput borderColor="#d2d2d2" />
        <Text onPress={onpresshandle} style={styles.rememberText}>Forgot Password</Text>





      </View>

      <View style={{ marginTop: Height(20) }} >
        <CustomAuthButton
        onPress={()=>navigation.navigate('Main')}

          width={Width(210)}
          title="Sign in"
          backgroundColor="#2E6074"
          borderWidth={1}
          borderColor="#2E6074"
          br={1}
          textStyle={{ fontSize: 18 }}

        />

      </View>






      {/* Remember Me */}

      {/* OR divider */}
      <View style={styles.orContainer}>

        <Text style={styles.orText}>OR</Text>

      </View>

      {/* Google Sign In Button */}
      <TouchableOpacity
        onPress={onGoogleSignIn}
        activeOpacity={0.7}
        style={styles.googleButton}
      >
        <Image
          source={require('../../assets/Icons/GoogleIcon.png')}
          style={styles.googleIcon}
        />
      </TouchableOpacity>

      {/* Footer Text */}
      <View style={styles.footerTextContainer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={onSignInPress}>
          <Text style={[styles.footerText, styles.signInText]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  label: {
    marginTop: 20,
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#2E6074',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rememberText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#2E6074',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center horizontally
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#888',
    fontWeight: '600',
  },
  googleButton: {
    alignSelf: 'center',
    padding: 10,

  },
  googleIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  footerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  footerText: {
    fontSize: 14,
    color: '#555',
  },
  signInText: {
    color: '#2E6074',
    fontWeight: 'bold',
  },
});
