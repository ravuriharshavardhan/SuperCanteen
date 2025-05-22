import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomCommonHeader from '../../Components/Common/CustomCommonHeader';
import CustomAddressTextInput from '../../Components/TextInput/CustomAddressTextInput';
import CustomBottomDrop from '../../Components/TextInput/CustomBottomDrop';
import CustomOrderBtn from '../../Components/Common/CustomOrderBtn';
import CustomButton from '../../Components/CustomBotton';

const STORAGE_KEY = '@address_data';

const CreateAddressScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [flatDetails, setFlatDetails] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [country, setCountry] = useState('');
  const [addressType, setAddressType] = useState('Home');
  const [isDefault, setIsDefault] = useState(false);

  const addressTypes = ['Home', 'Office', 'Other'];
  const countries = ['India', 'USA', 'UK'];
  const cities = ['Mumbai', 'Delhi', 'New York', 'London'];
  const states = ['Maharashtra', 'New York', 'California'];
  const pincodes = ['400001', '110001', '10001'];

  const saveAddressData = async () => {
    if (!name || !contact || !flatDetails || !landmark || !city || !state || !pincode || !country) {
      Alert.alert('Validation Error', 'Please fill in all required fields.');
      return;
    }

    const newAddress = {
      id: Date.now().toString(),
      name,
      contact,
      flatDetails,
      landmark,
      city,
      state,
      pincode,
      country,
      addressType,
      isDefault,
    };

    try {
      const savedData = await AsyncStorage.getItem(STORAGE_KEY);
      const addresses = savedData ? JSON.parse(savedData) : [];

      if (isDefault) {
        addresses.forEach(addr => (addr.isDefault = false));
      }

      addresses.push(newAddress);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(addresses));
      Alert.alert('Success', 'Address saved successfully!', [{
        text: 'OK',
        onPress: () => navigation.goBack(),
      }]);
    } catch (error) {
      Alert.alert('Error', 'Failed to save the address.');
      console.log('Failed to save address to storage', error);
    }
  };

  return (
    <View style={styles.container}>
      <CustomCommonHeader title="Add Address" />
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Add Address</Text>

        <Text style={styles.label}>Name*</Text>
        <CustomAddressTextInput value={name} onChangeText={setName} placeholder="Enter your name" />

        <Text style={styles.label}>Contact*</Text>
        <CustomAddressTextInput value={contact} onChangeText={setContact} placeholder="Enter contact number" keyboardType="phone-pad" />

        <Text style={styles.label}>Country*</Text>
        <CustomBottomDrop value={country} onChangeText={setCountry} placeholder="Select country" dropdownData={countries} />

        <Text style={styles.label}>Flat, House No., Building*</Text>
        <CustomAddressTextInput value={flatDetails} onChangeText={setFlatDetails} placeholder="Enter address details" />

        <Text style={styles.label}>Street, Locality, Landmark*</Text>
        <CustomAddressTextInput value={landmark} onChangeText={setLandmark} placeholder="Enter nearby landmarks" />

        <Text style={styles.label}>City / District*</Text>
        <CustomBottomDrop value={city} onChangeText={setCity} placeholder="Select city" dropdownData={cities} />

        <Text style={styles.label}>State*</Text>
        <CustomBottomDrop value={state} onChangeText={setState} placeholder="Select state" dropdownData={states} />

        <Text style={styles.label}>Pin code*</Text>
        <CustomBottomDrop value={pincode} onChangeText={setPincode} placeholder="Select pin code" dropdownData={pincodes} />

        <View style={styles.typeBtnContainer}>
          {addressTypes.map((type) => (
            <CustomOrderBtn
              key={type}
              title={type}
              iconName={type === 'Office' ? 'business' : 'home'}
              width={Dimensions.get('window').width / 3.5}
              height={40}
              onPress={() => setAddressType(type)}
              borderColor={addressType === type ? '#2E6074' : '#ccc'}
              iconColor={addressType === type ? '#2E6074' : '#888'}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.defaultContainer} onPress={() => setIsDefault(!isDefault)}>
          <Icon name={isDefault ? 'check-circle' : 'radio-button-unchecked'} size={20} color={isDefault ? '#2E6074' : '#aaa'} />
          <Text style={styles.defaultText}>Use as default address</Text>
        </TouchableOpacity>

        <CustomButton label={"Save Address"} onPress={saveAddressData} />
      </ScrollView>
    </View>
  );
};

export default CreateAddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2E6074',
    marginTop: 20,
    marginBottom: 10,
  },
  label: {
    marginTop: 16,
    marginBottom: 4,
    fontSize: 14,
    color: '#333',
  },
  typeBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  defaultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  defaultText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#2E6074',
  },
});
