import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomCommonHeader from '../../Components/Common/CustomCommonHeader';

const OrderConfirmPage = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Order Confirm Page</Text>
      </View> */}
      <CustomCommonHeader title={'Order Confirm Page'}/>

      {/* Order Placed */}
      <Text style={styles.title}>Order Placed!</Text>

      {/* Delivery Address */}
      <Text style={styles.sectionTitle}>Delivering to..</Text>
      <View style={styles.addressCard}>
        <View style={styles.addressRow}>
          <Icon name="location-outline" size={20} color="#2E6074" />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.addressName}>Apoorva Gaur</Text>
            <Text style={styles.addressDetails}>
              23B, Maple Residency, Sector 45, Near Green Park Metro Station,
              Gurgaon, Haryana-122003
            </Text>
          </View>
        </View>
      </View>

      {/* Your Items */}
      <Text style={styles.sectionTitle}>YOUR ITEMS</Text>
      <View style={styles.itemCard}>
        <Image
          source={require('../../../assets/Icons/Op.png')}
          style={styles.productImage}
        />
        <View style={styles.itemInfo}>
          <Text style={styles.itemBrand}>Timex</Text>
          <Text style={styles.itemDesc}>Bella Analog Watch for Womens</Text>
          <Text style={styles.itemDelivery}>Free delivery by 24th May</Text>
          <Text style={styles.itemPrice}>₹4,889</Text>
          <Text style={styles.viewDetails}>View Order Details</Text>
        </View>
      </View>

      {/* Notification Prompt */}
      <View style={[styles.notificationContainer, { flexDirection: 'row', alignItems: 'center' }]}>
  <Text style={styles.notificationText}>
    Turn ON notifications to receive your order updates!
  </Text>
  <Image
    source={require('../../../assets/Icons/Notification.png')}
    style={styles.notificationImage}
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
/>

        <TouchableOpacity style={styles.button}>
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
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 16,
  },
  sectionTitle: {
    color: '#2E6074',
    fontWeight: '600',
    marginBottom: 8,
    fontSize: 14,
  },
  addressCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 12,
    marginBottom: 20,
    borderWidth:0.5,
    borderColor:'gray'

  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  addressName: {
    fontWeight: '700',
    marginBottom: 4,
  },
  addressDetails: {
    fontSize: 13,
    color: '#333',
  },
  itemCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 24,
    elevation: 1,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemBrand: {
    fontWeight: '700',
    fontSize: 15,
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

    marginBottom: 40,
  flexDirection:"row"

  },
  notificationText: {
    fontWeight: '600',
    fontSize: 15,
    width:210,
    marginBottom: 12,
  },
  notificationImage: {
    width: 160,
    height: 120,
  },
  thankYouContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  thankYouText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  thankYouImage: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  button: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 15,
  },
});
