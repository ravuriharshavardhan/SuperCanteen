import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5'; // or 'react-native-vector-icons/FontAwesome5'

const PriceSummaryCard = () => {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
       <Image style={{height:20,width:20}} source={require('../../../assets/Icons/money_bag.png')}/>
        <Text style={styles.totalLabel}> Total Amount: </Text>
        <Text style={styles.totalAmount}>₹40,000</Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Rows */}
      <View style={styles.row}>
        <Text style={styles.label}>Total MRP</Text>
        <Text style={styles.valueBlack}>₹44,000</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.labelWithLink}>
          <Text style={styles.label}>Discount on MRP</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Details</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.valueGreen}>₹-2,000</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Coupon Discount</Text>
        <Text style={styles.valueGreen}>₹-2,000</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.labelWithLink}>
          <Text style={styles.label}>Shipping Fee</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Details</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.valueGreen}>₹0</Text>
      </View>
    </View>
  );
};

export default PriceSummaryCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,

    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    color: '#444',
    fontSize: 14,
  },
  valueBlack: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  valueGreen: {
    fontSize: 14,
    color: 'green',
    fontWeight: '500',
  },
  labelWithLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  link: {
    fontSize: 12,
    color: '#1976D2',
    marginLeft: 8,
  },
});
