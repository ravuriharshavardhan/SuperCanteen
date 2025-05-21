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

const ResetPasswordScreen = ({ navigation }) => {
  const [remember, setRemember] = useState(false);



  const onSignInPress = () => {
    navigation.navigate('Main'); // or your sign in screen route
  };

  return (
    <View style={styles.container}>
      <CustomAuthHeader title="Super Canteen" />


      <View style={{rowGap:10}} >
      {/* <Text style={styles.label}>Name</Text>
      <CustomTextInput borderColor="#d2d2d2" /> */}

      <Text style={styles.label}>Email</Text>
      <CustomTextInput borderColor="#d2d2d2" keyboardType="email-address" />

      <Text style={styles.label}>Password</Text>
      <CustomPasswordInput borderColor="#d2d2d2" />
      <Text style={styles.rememberText}>Your new password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character (e.g., @, #, $).</Text>

   



      </View>

      <View  style={{marginTop:Height(20)}} >
      <CustomAuthButton
      onPress={onSignInPress}
      width={Width(210)}
      
        title="Sign in"
        backgroundColor="#2E6074"
        borderWidth={1}
        borderColor="#2E6074"
        br={7}
        textStyle={{ fontSize: 18 }}
        
      />

      </View>


    

     


    </View>
  );
};

export default ResetPasswordScreen;

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
