import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

// Main OrderCard component
const OrderCard = ({ OnPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        {/* Product Image */}
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../../../assets/Icons/Beauty.png')}
          />
        </View>

        {/* Text Content */}
        <View style={styles.infoContainer}>
          <Text style={styles.brand}>Timex</Text>
          <Text style={styles.productName}>Bella Analog Watch for Women</Text>

          {/* Delivery Status */}
          <View style={styles.cancelRow}>
            <Image
              style={styles.cancelIcon}
              source={require('../../../assets/Icons/deployed_code_account.png')}
            />
            <Text style={styles.cancelText}>Delivered on 20th May</Text>
          </View>

          {/* View Order Details Link */}
          <Pressable onPress={OnPress}>
            <Text style={styles.linkText}>View Order Details</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

// Wrapper component
const CustomDeliveryCard = ({ OnPress }) => {
  return (
    <View style={styles.container}>
      <OrderCard OnPress={OnPress} />
    </View>
  );
};

export default CustomDeliveryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    padding: 16,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconContainer: {
    backgroundColor: '#D4DEF226',
    height: 120,
    width: 100,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  icon: {
    width: 100,
    height: 100,
  },
  infoContainer: {
    flex: 1,
  },
  brand: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E6074',
    marginBottom: 4,
  },
  productName: {
    fontSize: 12,
    color: '#333',
    marginBottom: 6,
  },
  cancelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  cancelIcon: {
    marginRight: 6,
    height: 20,
    width: 20,
  },
  cancelText: {
    fontSize: 13,
    color: '#1C1B1F78',
  },
  linkText: {
    color: '#2E6074',
    textDecorationLine: 'underline',
    fontSize: 13,
    marginTop: 30,
  },
});
