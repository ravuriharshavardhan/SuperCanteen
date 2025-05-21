import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import CustomAuthHeader from '../Components/CustomAuthHeader';
import CustomTextInput from '../Components/CustomTextInput';
import CustomAuthButton from '../Components/CustomAuthButton';

import { Height, Width } from '../constants/constants';

const ResetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [linkSent, setLinkSent] = useState(false);

  const handleSendLink = () => {
    if (!email.trim()) {
      alert('Please enter your email');
      return;
    }
    // TODO: trigger send reset link API here
    setLinkSent(true);
  };

  const handleResendLink = () => {
    // You can reset state or do any logic here before navigating
    // For demo, just navigate to same screen
    navigation.navigate('ResetPassword'); // Make sure this matches your route name in navigator
  };

  return (
    <View style={styles.container}>
      <CustomAuthHeader title="Super Canteen" />

      <View style={{ rowGap: 10 }}>
        <Text style={styles.label}>Email</Text>
        <CustomTextInput
          borderColor="#d2d2d2"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {!linkSent ? (
          <Text style={styles.infoText}>
            Enter your registered email address. We’ll send you a link to reset your password.
          </Text>
        ) : (
          <>
            <Text style={styles.infoText}>
              We’ve sent a reset link to your email. Please check your inbox to proceed.
            </Text>
            <TouchableOpacity onPress={handleResendLink}>
              <Text style={styles.resendText}>
                Didn't receive the email? Click Resend.
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <View style={{ marginTop: Height(20) }}>
        <CustomAuthButton
          width={Width(210)}
          title={linkSent ? "Resend Link" : "Send Link"}
          backgroundColor="#2E6074"
          borderWidth={1}
          borderColor="#2E6074"
          br={5}
          textStyle={{ fontSize: 18 }}
          onPress={linkSent ? handleResendLink : handleSendLink}
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
  infoText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#2E6074',
    fontFamily: "Inter-Regular",
  },
  resendText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#2E6074',
    fontFamily: "Inter-Regular",
    marginTop: 5,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
