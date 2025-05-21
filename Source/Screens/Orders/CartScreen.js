import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomCommonHeader from '../../Components/Common/CustomCommonHeader';
import CustomCartCard from '../../Components/CustomCartCard';
import CustomBtn from '../../Components/CustomFilterBtn';
import SortIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/AntDesign';


export default function CartScreen({navigation}) {
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back-outline" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Your Cart</Text>
        <View style={{ width: 24 }} />
      </View> */}

      <CustomCommonHeader title={'Your Cart'} />

      <ScrollView style={{flex: 1}}>
        {/* Address Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Address</Text>
          <View style={styles.addressBox}>
            <View style={styles.row}>
              <Feather name="map-pin" size={16} color="#000" />
              <Text style={styles.addressText}>
                23B, Maple Residency, Sector 45, Near Green Park Metro Station,
                Gurgaon, Haryana-122003
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.changeAddress}>Change Address</Text>
            </TouchableOpacity>
            <View style={styles.addAddressBox}>
              <Text style={{fontSize: 12, color: '#555', flex: 1}}>
                Got another doorstep in mind? Add your new spot here
              </Text>
              <TouchableOpacity onPress={()=>navigation.navigate('AddressListScreen')} style={styles.addAddressButton}>
                <Text
                  style={{fontSize: 12, fontWeight: '600', color: '#2E6074'}}>
                  <Image style={{height:19,width:19}} source={require('../../../assets/Icons/add_home.png')}/> Add Address
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Sort & Selection */}
        <View style={styles.sortRow}>
          <TouchableOpacity style={styles.sortButton}>
            <CustomBtn
              title="Sort"
              width={80}
              height={30}
              icon={
                <View style={{transform: [{rotate: '270deg'}]}}>
                  <SortIcon name="sync-alt" size={20} color="#1C1B1F7D" />
                </View>
              }
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.selectionText}>1/3 ITEMS Selected</Text>
            <TouchableOpacity>
              <Text style={styles.selectAll}>Select All</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Icon name="delete" size={13} color="black" />
          </TouchableOpacity>
        </View>

        {/* Cart Items */}
        <CustomCartCard />

        {/* Price Details */}
        <View style={styles.priceBox}>
          <Text style={styles.priceTitle}>
            Total Amount: <Text style={{color: 'green'}}>₹40,000</Text>
          </Text>
          <View style={styles.priceRow}>
            <Text>Total MRP</Text>
            <Text>₹44,000</Text>
          </View>
          <View style={styles.priceRow}>
            <Text>Discount on MRP</Text>
            <Text style={{color: 'green'}}>₹ -2,000</Text>
          </View>
          <View style={styles.priceRow}>
            <Text>Coupon Discount</Text>
            <Text style={{color: 'green'}}>₹ -2,000</Text>
          </View>
          <View style={styles.priceRow}>
            <Text>Shipping Fee</Text>
            <Text style={{color: 'green'}}>₹0</Text>
          </View>
        </View>

        {/* Coupon */}
        <View style={styles.couponBox}>
          <Text style={styles.sectionTitle}>Coupons</Text>
          <View style={styles.couponRow}>
            <Text style={styles.couponCode}>SAVE50</Text>
            <TouchableOpacity>
              <Text style={styles.applyBtn}>Apply</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.couponDesc}>
            Flat ₹10 OFF on your next order. No minimum spend.
          </Text>
        </View>

        {/* Bank Offers */}
        <View style={styles.bankOfferBox}>
          <Text style={styles.sectionTitle}>Bank Offers</Text>
          <View style={styles.bankIcons}>
            <Image
              source={require('../../../assets/Icons/Banks/b1.png')}
              style={styles.bankIcon}
            />
            <Image
              source={require('../../../assets/Icons/Banks/b2.jpg')}
              style={styles.bankIcon}
            />
            <Image
              source={require('../../../assets/Icons/Banks/b3.png')}
              style={styles.bankIcon}
            />
            <Image
              source={require('../../../assets/Icons/Banks/b4.png')}
              style={styles.bankIcon}
            />
            <TouchableOpacity>
              <Text style={styles.viewOffers}>View Available Offers ></Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Custom Checkbox for Terms */}
        <View style={styles.termsBox}>
          <TouchableOpacity onPress={() => setAgreeTerms(!agreeTerms)}>
            <Feather
              name={agreeTerms ? 'check-square' : 'square'}
              size={20}
              color={agreeTerms ? '#007bff' : '#666'}
            />
          </TouchableOpacity>
          <Text style={styles.termsText}>
            I agree to the terms and policy of{' '}
            <Text style={{color: '#00b'}}>Super Canteen</Text>
          </Text>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.selectionBtn}>1/3 ITEM Selected</Text>
        <TouchableOpacity
          style={[styles.confirmBtn, {opacity: agreeTerms ? 1 : 0.6}]}
          disabled={!agreeTerms}>
          <Text onPress={()=>navigation.navigate('ProductCheckoutScreen')}  style={styles.confirmText}>Confirm Your Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f9f9f9'},
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  headerTitle: {fontSize: 16, fontWeight: '600'},
  section: {padding: 12},
  sectionTitle: {fontWeight: '600', marginBottom: 6, color: '#2E6074E8'},
  addressBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  addressText: {flex: 1, marginLeft: 6, color: '#333'},
  row: {flexDirection: 'row', alignItems: 'center', marginBottom: 8},
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
  },
  addAddressButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    alignContent:"center",
    justifyContent:"center"
  },
  sortRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  sortButton: {flexDirection: 'row', alignItems: 'center'},
  sortText: {marginLeft: 6, color: '#555'},
  selectionText: {fontWeight: '600', color: '#2E6074'},
  selectAll: {
    color: 'Select All',
    textDecorationLine: 'underline',
    marginLeft: 160,
    fontSize: 13,
  },
  itemCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
    elevation: 1,
  },
  itemImage: {width: 80, height: 80, borderRadius: 8, marginRight: 12},
  itemInfo: {flex: 1},
  itemName: {fontWeight: '600'},
  itemDesc: {fontSize: 12, color: '#666'},
  delivery: {fontSize: 12, color: '#333'},
  returnPolicy: {fontSize: 12, color: '#555', marginTop: 2},
  seller: {fontSize: 12, color: '#777', marginBottom: 4},
  price: {fontWeight: '600', fontSize: 14},
  priceBox: {
    backgroundColor: '#fff',
    margin: 12,
    padding: 12,
    borderRadius: 8,
    bottom:100

  },
  priceTitle: {fontWeight: '600', marginBottom: 10},
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  couponBox: {
    backgroundColor: '#fff',
    margin: 12,
    padding: 12,
    borderRadius: 8,
    bottom:100
  },
  couponRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  couponCode: {fontWeight: '600'},
  applyBtn: {color: '#2E6074', fontWeight: '600'},
  couponDesc: {fontSize: 12, color: '#777'},
  bankOfferBox: {
    backgroundColor: '#fff',
    margin: 12,
    padding: 12,
    borderRadius: 8,
    bottom:100
  },
  bankIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 8,
    flexWrap: 'wrap',
  },
  bankIcon: {width: 40, height: 40},
  viewOffers: {fontSize: 12, color: '#2E6074'},
  termsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  termsText: {marginLeft: 8, fontSize: 12},
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
  confirmText: {color: '#fff', fontWeight: '600'},
});
