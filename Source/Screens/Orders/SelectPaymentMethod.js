import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import CustomCommonHeader from '../../Components/Common/CustomCommonHeader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const PaymentMethodScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showUPIDropdown, setShowUPIDropdown] = useState(false);
  const [selectedUPIApp, setSelectedUPIApp] = useState(null);
  const [agreed, setAgreed] = useState(false);

  const onlineOptions = ['UPI', 'Credit/Debit Card', 'Wallets', 'EMI', 'Net Banking'];
  const deliveryOption = 'Cash on Delivery';
  const upiApps = [
    { name: 'PhonePe', logo: require('../../../assets/Icons/Banks/pp1.png') },
    { name: 'Paytm', logo: require('../../../assets/Icons/Banks/pp2.png') },
  ];

  const priceDetails = {
    totalMRP: 44000,
    discountMRP: 2000,
    couponDiscount: 2000,
    shippingFee: 0,
  };

  const totalAmount = priceDetails.totalMRP - priceDetails.discountMRP - priceDetails.couponDiscount;

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowUPIDropdown(option === 'UPI');
  };

  return (
    <ScrollView style={styles.container}>
      <CustomCommonHeader title="Select Payment Method" />

      <MaterialCommunityIcons size={15} style={[styles.subHeading]} name="bank">
        {' '}
        Bank Offers
      </MaterialCommunityIcons>

      <View style={styles.bankOffers}>
        <Image source={require('../../../assets/Icons/Banks/b1.png')} style={styles.bankLogo} />
        <Image source={require('../../../assets/Icons/Banks/b2.jpg')} style={styles.bankLogo} />
        <Image source={require('../../../assets/Icons/Banks/b3.png')} style={styles.bankLogo} />
        <Image source={require('../../../assets/Icons/Banks/b4.png')} style={styles.bankLogo} />
        <Text style={styles.viewOffers}>View Available Offers →</Text>
      </View>

      <Text style={styles.sectionTitle}>PAYMENT OPTIONS</Text>
      <Text style={styles.optionHeader}>Online Payment Options</Text>

      {onlineOptions.map((option) => {
        const isSelected = selectedOption === option;
        const content = (
          <TouchableOpacity style={styles.optionBox} onPress={() => handleOptionSelect(option)}>
            <View style={styles.radioCircle}>
              {isSelected && <View style={styles.selectedDot} />}
            </View>
            <Text>{option}</Text>
          </TouchableOpacity>
        );

        return (
          <View key={option}>
            {isSelected ? (
              <LinearGradient
                colors={[
                  'rgba(255, 255, 255, 0.48)',
                  'rgba(150, 176, 186, 0.2)',
                  'rgba(46, 96, 116, 0.08)',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                {content}
              </LinearGradient>
            ) : (
              content
            )}
{option === 'UPI' && isSelected && showUPIDropdown && (
              <View style={styles.dropdown}>
                {upiApps.map((upi) => {
                  const isUPISelected = selectedUPIApp === upi.name;
                  return (
                    <TouchableOpacity
                      key={upi.name}
                      style={styles.dropdownItem}
                      onPress={() => setSelectedUPIApp(upi.name)}
                    >
                      <View style={styles.upiOption}>
                        <View style={[styles.radioIndicatorOuter, { marginRight: 10 }]}>
                          {isUPISelected && <View style={styles.radioIndicatorInner} />}
                        </View>
                        <Image source={upi.logo} style={styles.upiLogo} />
                        <Text style={styles.upiText}>{upi.name}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </View>
        );
      })}

      <Text style={styles.optionHeader}>Pay on Delivery Options</Text>
      {selectedOption === deliveryOption ? (
        <LinearGradient
          colors={[
            'rgba(255, 255, 255, 0.48)',
            'rgba(150, 176, 186, 0.2)',
            'rgba(46, 96, 116, 0.08)',
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
  
        >
          <TouchableOpacity style={styles.optionBox} onPress={() => handleOptionSelect(deliveryOption)}>
            <View style={styles.radioCircle}>
              <View style={styles.selectedDot} />
            </View>
            <Text>{deliveryOption}</Text>
          </TouchableOpacity>
        </LinearGradient>
      ) : (
        <TouchableOpacity style={styles.optionBox} onPress={() => handleOptionSelect(deliveryOption)}>
          <View style={styles.radioCircle}>
            {selectedOption === deliveryOption && <View style={styles.selectedDot} />}
          </View>
          <Text>{deliveryOption}</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.checkboxContainer} onPress={() => setAgreed(!agreed)}>
        <View style={[styles.customCheckbox, agreed && styles.checkboxChecked]}>
          {agreed && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <Text style={styles.checkboxText}>
          I agree to the terms and policy of the company
        </Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Price Details</Text>
      <View style={styles.priceCard}>
        <Text style={styles.totalAmount}>
          <Image style={{height:20,width:20}} source={require('../../../assets/Icons/money_bag.png')}/>
           Total Amount: <Text style={{ color: 'green' }}>₹{totalAmount}</Text>
        </Text>
        <View style={styles.priceRow}>
          <Text>Total MRP</Text>
          <Text>₹{priceDetails.totalMRP}</Text>
        </View>
        <View style={styles.priceRow}>
          <Text>Discount on MRP</Text>
          <Text style={styles.discount}>-₹{priceDetails.discountMRP}</Text>
        </View>
        <View style={styles.priceRow}>
          <Text>Coupon Discount</Text>
          <Text style={styles.discount}>-₹{priceDetails.couponDiscount}</Text>
        </View>
        <View style={styles.priceRow}>
          <Text>Shipping Fee</Text>
          <Text>₹{priceDetails.shippingFee}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.confirmButton, !agreed && { backgroundColor: '#ccc' }]}

        onPress={() => navigation.navigate('PaymentConfirmationProcess')}
      >
        <Text style={styles.confirmText}>Confirm Your Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PaymentMethodScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  subHeading: {
    fontWeight: '500',
    marginBottom: 8,
    paddingVertical: 10,
  },
  bankOffers: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
    marginBottom: 16,
    borderWidth: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderColor: '#d1d1d1',
  },
  bankLogo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  viewOffers: {
    color: '#2E6074',
    marginLeft: 'auto',
    fontSize: 10,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  optionHeader: {
    color: '#006f94',
    fontWeight: '600',
    marginBottom: 8,
  },
  optionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d6d6d6',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#f6fafd',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#267A14C4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#267A14C4',
  },
  dropdown: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    marginLeft: 32,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dropdownItem: {
    paddingVertical: 6,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  customCheckbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#2E6074E8',
    borderColor: '#007bff',
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 14,
  },
  priceCard: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 20,
  },
  totalAmount: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 12,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  discount: {
    color: 'green',
  },
  confirmButton: {
    backgroundColor: '#2E6074E8',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  confirmText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },

  upiOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  upiLogo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  upiText: {
    fontSize: 15,
    fontWeight: '500',
  },
});
