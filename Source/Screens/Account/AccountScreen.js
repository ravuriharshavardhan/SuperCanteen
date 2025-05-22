import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomHeader from '../../Components/CustomHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../Components/CustomBotton';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleNavigate = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Header */}
        <CustomHeader label="Your Account" />
        <Text style={styles.greeting}>Hi, Apoorva!</Text>
        <Text style={styles.phone}>999-999-9999</Text>

        {/* Action Icons */}
        <View style={styles.containerBox}>
          <View style={styles.row}>
            <View style={styles.iconColumn}>
              <TouchableOpacity
                style={styles.box}
                onPress={() => handleNavigate('Orders')}>
                <Ionicons name="cart-outline" size={24} color="#2E6074E8" />
              </TouchableOpacity>
              <Text style={styles.label}>Orders</Text>
            </View>

            <View style={styles.iconColumn}>
              <TouchableOpacity
                style={styles.box}
                onPress={() => handleNavigate('Wishlist')}>
                <MaterialIcons name="favorite-border" size={24} color="#2E6074E8" />
              </TouchableOpacity>
              <Text style={styles.label}>Wishlist</Text>
            </View>

            <View style={styles.iconColumn}>
              <TouchableOpacity
                style={styles.box}
                onPress={() => handleNavigate('Coupons')}>
                <FontAwesome5 name="ticket-alt" size={22} color="#2E6074E8" />
              </TouchableOpacity>
              <Text style={styles.label}>Coupons</Text>
            </View>

            <View style={styles.iconColumn}>
              <TouchableOpacity
                style={styles.box}
                onPress={() => handleNavigate('Help')}>
                <FontAwesome5 name="headset" size={22} color="#2E6074E8" />
              </TouchableOpacity>
              <Text style={styles.label}>Help</Text>
            </View>
          </View>
        </View>

        {/* Account Settings */}
        <View style={[styles.containerBox, styles.sectionBox]}>
          <Text style={styles.sectionHeader}>Account Settings</Text>

          <TouchableOpacity onPress={() => handleNavigate('PersonalInformation')}>
            <View style={styles.settingsRow}>
              <Text style={styles.label}>Personal Information</Text>
              <Ionicons name="chevron-forward" size={24} color="#2E6074E8" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleNavigate('AddressList')}>
            <View style={styles.settingsRow}>
              <Text style={styles.label}>Manage Address</Text>
              <Ionicons name="chevron-forward" size={24} color="#2E6074E8" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleNavigate('PaymentMethods')}>
            <View style={styles.settingsRow}>
              <Text style={styles.label}>Payment Methods</Text>
              <Ionicons name="chevron-forward" size={24} color="#2E6074E8" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleNavigate('Language')}>
            <View style={styles.settingsRow}>
              <Text style={styles.label}>Language</Text>
              <Ionicons name="chevron-forward" size={24} color="#2E6074E8" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleNavigate('Notifications')}>
            <View style={styles.settingsRow}>
              <Text style={styles.label}>Notifications</Text>
              <Ionicons name="chevron-forward" size={24} color="#2E6074E8" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Membership Section */}
        <View style={[styles.containerBox, styles.sectionBox]}>
          <Text style={styles.sectionHeader}>Membership and Offers</Text>
          <TouchableOpacity onPress={() => handleNavigate('Rewards')}>
            <View style={styles.settingsRow}>
              <Text style={styles.label}>Super Canteen Rewards</Text>
              <Ionicons name="chevron-forward" size={24} color="#2E6074E8" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Footer Links */}
        <View style={styles.footerLinks}>
          <TouchableOpacity onPress={() => handleNavigate('FAQ')}>
            <Text style={styles.footerText}>FAQ</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleNavigate('About')}>
            <Text style={styles.footerText}>ABOUT US</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleNavigate('Terms')}>
            <Text style={styles.footerText}>TERMS OF USE</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleNavigate('Privacy')}>
            <Text style={styles.footerText}>PRIVACY POLICY</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <View style={styles.logoutContainer}>
          <CustomButton
            textColor="#2E6074E8"
            backgroundColor="#fff"
            label="Logout"
            onPress={() => console.log('User logged out')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
    paddingTop: 10,
    rowGap: 10,
  },
  greeting: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 10,
  },
  phone: {
    fontSize: 12,
    color: '#555',
    marginBottom: 10,
  },
  containerBox: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconColumn: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  box: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  sectionBox: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 12,
    color: '#333',
  },
  settingsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  footerLinks: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  footerText: {
    fontSize: 13,
    color: '#555',
    marginBottom: 10,
  },
  logoutContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
