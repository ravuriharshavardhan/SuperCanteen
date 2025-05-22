import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
import CustomCommonHeader from '../../Components/Common/CustomCommonHeader';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const OrderConfirm = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('OrderConfirmFinal'); // Make sure this screen exists in your navigator
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomCommonHeader title="Order Confirm Page" />
      <View style={styles.container}>
        <Text style={styles.title}>Order Placed!</Text>
        <Text style={styles.subtitle}>
          Your order's on its way — and we're already excited for your next visit!
        </Text>
        <Image
          source={require('../../../assets/OrderPlaced.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderConfirm;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.6,  // 60% of screen width for responsiveness
    height: width * 0.6, // keep square aspect ratio
    marginTop: 24,
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#216213',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 16,
    lineHeight: 22,
  },
});
