import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomCommonHeader from '../../Components/Common/CustomCommonHeader';
import CustomAuthButton from '../../Components/CustomAuthButton';
import { Width } from '../../constants/constants';
import PriceSummaryCard from '../../Components/Common/PriceSummaryCard';

const ConfirmOrderScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    
      <CustomCommonHeader title={'Confirm Orde'}/>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Address Section */}
        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="location-outline" size={18} color="#555" />
            <Text style={styles.addressText}>
              23B, Maple Residency, Sector 45, Near Green Park Metro Station, Gurgaon, Haryana - 122003
            </Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.changeAddress}>Change Address</Text>
          </TouchableOpacity>

          <View style={styles.addNewAddress}>
            <Text style={{ flex: 1, color: '#555' }}>
              Got another doorstep in mind? Add your new spot here
            </Text>
            <TouchableOpacity style={styles.addAddressBtn}>
             <Image style={{height:20,width:20}} source={require('../../../assets/Icons/add_home.png')}/>
              <Text style={styles.addAddressText}>Add Address</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Delivery Date */}
        <View style={styles.delivery}>
          <Image
            source={{ uri: 'https://via.placeholder.com/40' }}
            style={styles.deliveryImage}
          />
          <Text style={styles.deliveryText}>Delivery: 24th May</Text>
        </View>

        {/* Coupons */}
        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="pricetags-outline" size={18} color="#555" />
            <Text style={styles.sectionTitle}>Coupons</Text>
          </View>

          <View style={styles.couponBox}>
            <View>
              <Text style={styles.couponCode}>SAVE50</Text>
              <Text style={styles.couponDesc}>Flat ₹10 OFF on your next order. No minimum spend.</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text style={styles.linkText}>All Coupons</Text>
          </TouchableOpacity>
        </View>

        {/* Price Details */}
        <View style={{marginVertical:20}} >
        <PriceSummaryCard/>

        </View>


        {/* Bank Offers */}
        <View style={[styles.card,{marginBottom:70,height:100}]}>
          <View style={[styles.row]}>
            <Ionicons name="card-outline" size={18} color="#555" />
            <Text style={styles.sectionTitle}>Bank Offers</Text>
          </View>
          <View style={[styles.bankLogos]}>
            <Image source={require('../../../assets/Icons/Banks/b1.png')} style={styles.bankLogo} />
            <Image source={require('../../../assets/Icons/Banks//b2.jpg')} style={styles.bankLogo} />
            <Image source={require('../../../assets/Icons/Banks/b3.png')} style={styles.bankLogo} />
            <Image source={require('../../../assets/Icons/Banks/b4.png')} style={styles.bankLogo} />

            <TouchableOpacity>
            <Text style={styles.linkText}>View Available Offers</Text>
          </TouchableOpacity>
          </View>
  
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.selectPayment}>
          <Text style={styles.selectPaymentText}>Select Payment Method</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirmBtn}>
         <CustomAuthButton  onPress={()=>navigation.navigate('PaymentMethodScreen')} width={Width(320)} title={'Confirm Your Order'}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmOrderScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8' },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    justifyContent: 'space-between',
  },
  headerTitle: { fontSize: 16, fontWeight: '600', color: '#000' },

  scrollContent: { padding: 12, paddingBottom: 80 },

  card: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
    elevation: 1,
  },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  addressText: { marginLeft: 10, color: '#333', fontSize: 14, flex: 1 ,fontFamily:"Inter-Regular" },
  changeAddress: { color: '#2E60749E', fontSize: 14, marginVertical: 8 ,marginLeft: 20,textDecorationLine:"underline"},
  addNewAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
    backgroundColor: '#2E60743D',
    padding: 8,
    borderRadius: 8,
    marginLeft: 20

  },
  addAddressBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: '#EAF3FF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  addAddressText: { marginLeft: 4, color: '#2E6074', fontWeight: '500' },

  delivery: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 10,
  },
  deliveryImage: { width: 40, height: 40, borderRadius: 20, marginRight: 12 },
  deliveryText: { fontSize: 15, fontWeight: '500' },

  sectionTitle: { fontSize: 15, fontWeight: '600', marginLeft: 8 },

  couponBox: {
    backgroundColor: '#F0F4FA',
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  couponCode: { fontWeight: '600', fontSize: 14 ,color: '#2E6074E8',},
  couponDesc: { fontSize: 12, color: '#555' },
  applyText: { color: '#2E6074E8', fontWeight: '600', alignSelf: 'center', },
  linkText: { color: '#2E6074E8', marginTop: 8 ,textDecorationLine:"underline"},

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  totalText: { fontWeight: '600' },
  totalAmount: { color: 'green', fontWeight: '700' , right:190 },
  priceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  details: { color: '#2E6074E8' },

  bankLogos: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 10,
  },
  bankLogo: { width: 30, height: 30, borderRadius: 4 },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 12,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
  },
  selectPayment: {


    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  selectPaymentText: { color: '#2E6074', fontWeight: '600' },
  confirmBtn: {

    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
