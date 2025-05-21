import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import { Width } from '../constants/constants';

const OrderPriceDetails = ({enableCOD,enableInvoice}) => {
  return (
    <View style={styles.container}>
      {/* Price Details Title */}
      <Text style={styles.sectionTitle}>Price Details</Text>

      {/* Price Summary Card */}
      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <View style={styles.row}>
            <Image
              style={styles.currencyIcon}
              source={require('../../assets/Icons/money_bag.png')}
            />
            <Text style={styles.totalAmountLabel}>Total Amount:</Text>
          </View>
          <Text style={[styles.totalAmountValue,{marginRight:100}]}>₹40,000</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.rowBetween}>
          <Text style={styles.label}>Total MRP</Text>
          <Text style={[styles.value]}>₹44,000</Text>
        </View>

        <View style={styles.rowBetween}>
          <View style={styles.row}>
            <Text style={styles.label}>Discount on MRP</Text>
            <Text style={styles.linkText}> Details</Text>
          </View>
          <Text style={styles.discount}>₹-2,000</Text>
        </View>

        <View style={styles.rowBetween}>
          <Text style={styles.label}>Coupon Discount</Text>
          <Text style={styles.discount}>₹-2,000</Text>
        </View>

        <View style={styles.rowBetween}>
          <View style={styles.row}>
            <Text style={styles.label}>Shipping Fee</Text>
            <Text style={styles.linkText}> Details</Text>
          </View>
          <Text style={styles.value}>₹0</Text>
        </View>
      </View>

      {enableCOD && (
         <View style={styles.paymentBox}>
         <View style={styles.row}>
           <Image
             style={styles.currencyIcon}
             source={require('../../assets/Icons/money_bag.png')}
           />
           <Text style={styles.paymentText}>Cash on Delivery</Text>
         </View>
       </View>
 
      )}


     

      <Text style={styles.sellerText}>
        Seller:{' '}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('https://example.com')}>
          EliteEdge Pvt Limited
        </Text>
      </Text>

      {/* Download Invoice Button (Disabled) */}
      {enableInvoice && (
              <TouchableOpacity style={styles.disabledButton} disabled={true}>
              <Text style={styles.disabledButtonText}>Download Invoice</Text>
            </TouchableOpacity>

      )}


      {/* Delivery Address */}
      <View style={styles.addressBlock}>
        <Text style={styles.sectionTitle}>Delivering to</Text>
        <Text style={styles.boldText}>Apoorva Gaur</Text>
        <Text style={styles.addressText}>
          23B, Maple Residency, Sector 45, Near Green Park Metro Station,
          Gurgaon, Haryana-122003
        </Text>
        <Text style={styles.addressText}>9999999999</Text>
      </View>
    </View>
  );
};

export default OrderPriceDetails;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 16,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,

  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  totalAmountLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  totalAmountValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1b873f',
  },
  label: {
    fontSize: 14,
    color: '#333',
  },
  value: {
    fontSize: 14,
    color: '#333',
  },
  discount: {
    fontSize: 14,
    color: '#1b873f',
    fontWeight: '500',
  },
  linkText: {
    color: '#2E6074E8',
    fontSize: 13,
    marginLeft: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 8,
  },
  paymentBox: {
    padding: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 12,
  },
  paymentText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  sellerText: {
    fontSize: 13,
    color: '#333',
    marginBottom: 10,
  },
  link: {
    color: '#2E6074E8',
    textDecorationLine: 'underline',
  },
  disabledButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 24,
    width: Width(190),
  },
  disabledButtonText: {
    fontSize: 14,
    color: '#aaa',
  },
  addressBlock: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 16,
  },
  boldText: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 4,
  },
  addressText: {
    fontSize: 13,
    color: '#444',
    marginBottom: 2,
  },
});
