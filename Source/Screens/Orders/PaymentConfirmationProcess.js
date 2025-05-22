import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomCommonHeader from '../../Components/Common/CustomCommonHeader';
import CustomCartCard from '../../Components/CustomCartCard';
import { useNavigation } from '@react-navigation/native';

export default function PaymentConfirmationProcess() {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigation = useNavigation();

  const onHandle = () => {
    navigation.navigate('OrderConfirm');
  };

  return (
    <View style={styles.container}>
      <CustomCommonHeader title={'Confirm Order'} />

      <ScrollView style={{ flex: 1 }}>
        {/* Address Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Address</Text>
          <View style={styles.addressBox}>
            <View style={styles.row}>
              <Feather name="map-pin" size={16} color="#000" />
              <Text style={styles.addressText}>
                23B, Maple Residency, Sector 45, Near Green Park Metro Station, Gurgaon, Haryana-122003
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.changeAddress}>Change Address</Text>
            </TouchableOpacity>

            {/* Fixed Add Address Row */}
            <View style={styles.addAddressBox}>
              <Text style={{ fontSize: 12, color: '#555', flex: 1 }}>
                Got another doorstep in mind? Add your new spot here
              </Text>
              <Pressable
                style={styles.addAddressButton}
                onPress={() => navigation.navigate('AddressListScreen')}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    style={{ height: 18, width: 18, marginRight: 6 }}
                    source={require('../../../assets/Icons/add_home.png')}
                  />
                  <Text style={{ fontSize: 12, fontWeight: '600', color: '#2E6074' }}>
                    Add Address
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>

        {/* Delivery & Cart Section */}
        <View style={styles.deliveryRow}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.selectionText}>Delivery by 24th May</Text>
            <TouchableOpacity>
              <Text style={styles.selectAll}>Select All</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Icon name="delete" size={13} color="black" />
          </TouchableOpacity>
        </View>

        {/* Cart Card Component */}
        <CustomCartCard />
      </ScrollView>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.selectionBtn}>Select Payment Method</Text>
        <TouchableOpacity
          style={[styles.confirmBtn, { opacity: agreeTerms ? 1 : 0.6 }]}
          onPress={onHandle}>
          <Text style={styles.confirmText}>Confirm Your Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  section: { padding: 12 },
  sectionTitle: { fontWeight: '600', marginBottom: 6, color: '#2E6074E8' },
  addressBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  addressText: { flex: 1, marginLeft: 6, color: '#333' },
  changeAddress: {
    color: '#2E60749E',
    fontSize: 13,
    marginBottom: 8,
    marginLeft: 18,
  },
  addAddressBox: {
    flexDirection: 'row',
    backgroundColor: '#2E60743D',
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
    marginLeft: 18,
    marginTop: 6,
  },
  addAddressButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  deliveryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginTop: 10,
  },
  selectionText: { fontWeight: '600', color: '#2E6074' },
  selectAll: {
    textDecorationLine: 'underline',
    marginLeft: 20,
    fontSize: 13,
    color: '#2E6074',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    padding: 12,
  },
  selectionBtn: {
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: '600',
  },
  confirmBtn: {
    backgroundColor: '#005c71',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmText: { color: '#fff', fontWeight: '600' },
});
