import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import  FontAwesome  from 'react-native-vector-icons/FontAwesome'; // or use `react-native-vector-icons/FontAwesome` in CLI

const OfferCard = ({
  amount = '₹75 OFF',
  condition = 'On Orders Above ₹399',
  code = 'WELCOME20',
  expiry = '30 Sep 2025',
}) => {
  return (
    <View style={styles.cardContainer}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Text style={styles.discountText}>{amount}</Text>
        <Text style={styles.conditionText}>{condition}</Text>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <Text style={styles.codeText}>
          Use Code: <Text style={styles.codeBold}>{code}</Text>
          <FontAwesome name="copy" size={16} color="#9CA3AF" style={{ marginLeft: 6 }} />
        </Text>
        <Text style={styles.expiryText}>
          Valid till: <Text style={styles.expiryBold}>{expiry}</Text>
        </Text>
      </View>
    </View>
  );
};

export default OfferCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    maxWidth: 320,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    alignSelf: 'center',
  },
  topSection: {
    backgroundColor: '#d7e5f1',
    paddingVertical: 20,
    alignItems: 'center',
  },
  discountText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#000',
  },
  conditionText: {
    marginTop: 6,
    fontSize: 15,
    color: '#4B5563',
  },
  bottomSection: {
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingVertical: 20,
    alignItems: 'center',
  },
  codeText: {
    fontSize: 16,
    color: '#9CA3AF',
    marginBottom: 8,
    flexDirection: 'row',
  },
  codeBold: {
    fontWeight: '600',
    color: '#9CA3AF',
  },
  expiryText: {
    fontSize: 14,
    color: '#6B7280',
  },
  expiryBold: {
    color: '#c75a54',
    fontWeight: '600',
  },
});
