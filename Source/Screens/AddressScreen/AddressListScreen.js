import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomCommonHeader from '../../Components/Common/CustomCommonHeader';

const STORAGE_KEY = '@address_data';

const AddressListScreen = ({navigation}) => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadAddresses();
    });
    return unsubscribe;
  }, [navigation]);

  const loadAddresses = async () => {
    try {
      const savedData = await AsyncStorage.getItem(STORAGE_KEY);
      const loadedAddresses = savedData ? JSON.parse(savedData) : [];
      setAddresses(loadedAddresses);
    } catch (error) {
      Alert.alert('Error', 'Failed to load addresses.');
      console.log(error);
    }
  };

  const deleteAddress = async id => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this address?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              const updatedAddresses = addresses.filter(addr => addr.id !== id);
              await AsyncStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(updatedAddresses),
              );
              setAddresses(updatedAddresses);
              Alert.alert('Deleted', 'Address deleted successfully.');
            } catch (error) {
              Alert.alert('Error', 'Failed to delete address.');
              console.log(error);
            }
          },
        },
      ],
    );
  };

  const groupAddresses = label => {
    return addresses.filter(addr => addr.addressType === label);
  };

  const AddressCard = ({addr}) => (
    <View style={styles.card}>
      <View style={styles.cardRow}>
        <Icon
          name="location-on"
          size={26}
          color="#2E6074"
          style={styles.leftIcon}
        />
        <View style={{flex: 1}}>

        <Text style={[,{fontWeight:"900"}]}>{addr.name}</Text>
          <Text style={styles.addressText}>
            {[
              addr.flatDetails,
              addr.landmark,
              addr.city,
              `${addr.state} - ${addr.pincode}`,
              addr.country,
            ]
              .filter(Boolean)
              .join(', ')}
          </Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('CreateAddressScreen', {addressToEdit: addr})
            }>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => deleteAddress(addr.id)}
          style={styles.deleteIcon}>
          <Icon name="delete" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderAddressGroup = label => {
    const group = groupAddresses(label);
    if (group.length === 0) return null;

    return (
      <View key={label} style={{marginBottom: 20}}>
        <Text style={styles.groupLabel}>{label}</Text>
        {group.map(addr => (
          <AddressCard key={addr.id} addr={addr} />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
     <CustomCommonHeader title={'My Address'}/>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {addresses.length > 0 ? (
          <>
            {renderAddressGroup('Home')}
            {renderAddressGroup('Office')}
            {renderAddressGroup('Other')}
          </>
        ) : (
          <Text style={styles.noAddressText}>No addresses saved yet.</Text>
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('CreateAddressScreen')}>
        <Icon name="add-location" size={24} color="#fff" />
        <Text style={styles.addButtonText}>Add Address</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2E6074',
    marginBottom: 20,
  },
  noAddressText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 50,
  },
  groupLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2E6074',
    marginBottom: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: '#2E6074',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  leftIcon: {
    marginRight: 10,
    marginTop: 4,
  },
  addressText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
  editText: {
    color: '#2E6074',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginTop: 8,
    fontWeight: '600',
  },
  deleteIcon: {
    marginLeft: 10,
    marginTop: 4,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#2E6074',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 30,
    elevation: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
    fontWeight: '600',
  },
});
