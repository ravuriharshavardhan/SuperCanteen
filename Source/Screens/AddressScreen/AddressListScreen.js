import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomCommonHeader from '../../Components/Common/CustomCommonHeader';

const dummyAddresses = [
  {
    id: '1',
    name: 'John Doe',
    flatDetails: 'Flat 202, Block B',
    landmark: 'Near City Mall',
    city: 'New York',
    state: 'NY',
    pincode: '10001',
    country: 'USA',
    addressType: 'Home',
  },
  {
    id: '2',
    name: 'Jane Smith',
    flatDetails: 'Office 501, Tech Tower',
    landmark: 'Opposite Central Station',
    city: 'San Francisco',
    state: 'CA',
    pincode: '94105',
    country: 'USA',
    addressType: 'Office',
  },
  {
    id: '3',
    name: 'Robert Wilson',
    flatDetails: 'Room 15, Sunset Hotel',
    landmark: 'Beside Main Park',
    city: 'Los Angeles',
    state: 'CA',
    pincode: '90001',
    country: 'USA',
    addressType: 'Other',
  },
];

const AddressListScreen = ({ navigation }) => {
  const [addresses, setAddresses] = useState(dummyAddresses);

  const deleteAddress = (id) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this address?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            const updated = addresses.filter(addr => addr.id !== id);
            setAddresses(updated);
            Alert.alert('Deleted', 'Address deleted successfully.');
          },
        },
      ],
    );
  };

  const groupAddresses = (label) =>
    addresses.filter((addr) => addr.addressType === label);

  const AddressCard = ({ addr }) => (
    <View style={styles.card}>
      <View style={styles.cardRow}>
        <Ionicons
          name="location-outline"
          size={16}
          color="#2E6074"
          style={styles.leftIcon}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: '400', fontSize: 15 }}>{addr.name}</Text>
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
              navigation.navigate('CreateAddressScreen', { addressToEdit: addr })
            }
          >
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => deleteAddress(addr.id)}
          style={styles.deleteIcon}
        >
          <Icon name="delete" size={14} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderAddressGroup = (label) => {
    const group = groupAddresses(label);
    return (
      <View key={label} style={{ marginBottom: 20 }}>
        <Text style={styles.groupLabel}>{label}</Text>
        {group.length > 0 ? (
          <>
            {group.map((addr) => (
              <AddressCard key={addr.id} addr={addr} />
            ))}
            <TouchableOpacity
              style={styles.addGroupButton}
              onPress={() => navigation.navigate('CreateAddressScreen')}
            >
              <Icon name="plus" size={15} color="#2E6074" />
              <Text style={styles.addGroupButtonText}>Add Address</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.noAddressText}>No addresses saved yet.</Text>
            <TouchableOpacity
              style={styles.addGroupButton}
              onPress={() => navigation.navigate('CreateAddressScreen')}
            >
              <Icon name="add-location" size={15} color="#2E6074" />
              <Text style={styles.addGroupButtonText}>Add Address</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CustomCommonHeader title="Address" />

   



      <ScrollView contentContainerStyle={styles.scrollContainer}>

      <View style={{marginVertical:20}} >
      <Text style={{color:'#2E6074E8',fontSize:10}} >Your Address</Text>

      </View>
        {renderAddressGroup('Home')}
        {renderAddressGroup('Office')}
        {renderAddressGroup('Other')}
      </ScrollView>
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
  noAddressText: {
    fontSize: 10,
    color: '#888',
    textAlign: 'center',
    marginTop: 10,
  },
  groupLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000',
    marginBottom: 10,
  },
  card: {
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    elevation: 1,
    borderWidth: 0.1,
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
    fontSize: 9,
    color: '#333',
    lineHeight: 22,
  },
  editText: {
    color: '#2E6074',
    fontSize: 10,
    textDecorationLine: 'underline',
    marginTop: 8,
    fontWeight: '600',
  },
  deleteIcon: {
    marginLeft: 10,
  },
  addGroupButton: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    width: 102,
    height:34,
paddingHorizontal:4,
borderColor:"#2E6074"
   
  },
  addGroupButtonText: {
    flex: 1,               // take all remaining space next to icon
    color: '#2E6074',
    fontSize: 10,
    textAlign: 'center',  // center text horizontally inside this space
  },
  
});
