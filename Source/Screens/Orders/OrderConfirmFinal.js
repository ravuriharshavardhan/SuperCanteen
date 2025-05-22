import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomCommonHeader from '../../Components/Common/CustomCommonHeader';

const { width } = Dimensions.get('window');

const OrderConfirmPage = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      <CustomCommonHeader title={'Order Confirm Page'} />

      <Text style={styles.title}>Order Placed!</Text>

      {/* Delivery Address */}
      <Text style={styles.sectionTitle}>Delivering to..</Text>
      <View style={styles.addressCard}>
        <View style={styles.addressRow}>
          <Icon name="location-outline" size={20} color="#2E6074" />
          <View style={{ marginLeft: 8, flex: 1 }}>
            <Text style={styles.addressName}>Apoorva Gaur</Text>
            <Text style={styles.addressDetails}>
              23B, Maple Residency, Sector 45, Near Green Park Metro Station,
              Gurgaon, Haryana-122003
            </Text>
          </View>
        </View>
      </View>

      {/* Your Items */}
      <Text style={styles.sectionTitle}>Your Items</Text>
      <View style={styles.itemCard}>
        <Image
          source={require('../../../assets/Icons/Op.png')}
          style={styles.productImage}
          resizeMode="contain"
        />
        <View style={styles.itemInfo}>
          <Text style={styles.itemBrand}>Timex</Text>
          <Text style={styles.itemDesc}>Bella Analog Watch for Womens</Text>
          <Text style={styles.itemDelivery}>Free delivery by 24th May</Text>
          <Text style={styles.itemPrice}>₹4,889</Text>
          <TouchableOpacity>
            <Text style={styles.viewDetails}>View Order Details</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Notification Prompt */}
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationText}>
          Turn ON notifications to receive your order updates!
        </Text>
        <Image
          source={require('../../../assets/Icons/Notification.png')}
          style={styles.notificationImage}
          resizeMode="contain"
        />
      </View>

      {/* Thank You Section */}
      <View style={styles.thankYouContainer}>
        <Text style={styles.thankYouText}>
          Thank you for your purchase — we look forward to seeing you again soon.
        </Text>
        <Image
          source={require('../../../assets/Icons/Bag.png')}
          style={[styles.thankYouImage, { transform: [{ rotate: '45deg' }] }]}
          resizeMode="contain"
        />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
          <Text style={styles.buttonText}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default OrderConfirmPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 20,
    color: '#216213',
  },
  sectionTitle: {
    color: '#2E6074',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 8,
  },
  addressCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 12,
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  addressName: {
    fontWeight: '700',
    marginBottom: 4,
    fontSize: 15,
  },
  addressDetails: {
    fontSize: 13,
    color: '#333',
    lineHeight: 18,
  },
  itemCard: {
    flexDirection: 'row',
    backgroundColor: '#fdfdfd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 24,
    elevation: 1,
  },
  productImage: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 8,
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemBrand: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 2,
  },
  itemDesc: {
    fontSize: 13,
    color: '#555',
    marginBottom: 4,
  },
  itemDelivery: {
    color: '#2E6074',
    fontSize: 12,
    marginBottom: 4,
  },
  itemPrice: {
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 2,
  },
  viewDetails: {
    color: '#2E6074',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 4,
  },
  notificationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    flexWrap: 'wrap',
  },
  notificationText: {
    fontWeight: '600',
    fontSize: 15,
    width: width * 0.5,
    color: '#333',
  },
  notificationImage: {
    width: width * 0.35,
    height: width * 0.3,
  },
  thankYouContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  thankYouText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
  },
  thankYouImage: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  button: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 15,
    color: '#000',
  },
});
