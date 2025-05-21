import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // or use MaterialIcons, etc.
import { FontSize } from '../constants/constants';

const AddressRow = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Ionicons name="location-outline" size={24} color="black" />
        <Text style={styles.addressText}>123 Street, Delhi-009900</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.changeText}>Change Address?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 6,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E8E8E8', // light gray divider

  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    marginLeft: 8,
    fontSize: FontSize(12),
    color: '#333',
  },
  changeText: {
    color: '#2E60749E',
    fontWeight: 'bold',
    fontSize: FontSize(12),
  },
});

export default AddressRow;
