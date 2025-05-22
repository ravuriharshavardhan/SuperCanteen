import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import CustomCheckbox from '../../Components/Common/CustomCheckbox';
import CustomPaymentCard from '../../Components/Cards/CustomPaymentCard';
import CustomCommonHeader from '../../Components/Common/CustomCommonHeader';

const UPIAppsSection = () => {
  const [defaultApp, setDefaultApp] = useState(null);

  const upiApps = [
    {
      id: 'phonepe',
      name: 'PhonePe UPI',
      image: require('../../../assets/Icons/PayMethods/p1.png'),
    },
    {
      id: 'paytm',
      name: 'Paytm UPI',
      image: require('../../../assets/Icons/PayMethods/p2.png'),
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      <CustomCommonHeader title="Payment Methods" />
      <CustomPaymentCard />

      {/* Linked UPI Apps */}
      <View style={styles.wrapperCard}>
        <Text style={styles.subTitle}>Linked UPI Apps</Text>
        {upiApps.map((app) => (
          <View key={app.id} style={styles.card}>
            <View style={styles.rowBetween}>
              <View style={styles.row}>
                <Image source={app.image} style={styles.logo} resizeMode="contain" />
                <Text style={styles.appName}>{app.name}</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.linkText}>Link</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inlineCheckboxRow}>
              <Text style={styles.checkboxLabel}>Set as Default</Text>
              <CustomCheckbox
                checked={defaultApp === app.id}
                onPress={() => setDefaultApp(defaultApp === app.id ? null : app.id)}
              />
            </View>
          </View>
        ))}

        {/* Enter new UPI ID */}
        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <View style={styles.row}>
              <Image
                source={require('../../../assets/Icons/PayMethods/upi_pay.png')}
                style={styles.upiLogo}
                resizeMode="contain"
              />
              <Text style={styles.appName}>Enter New UPI ID</Text>
            </View>
            <TouchableOpacity>
              <Text style={[styles.linkText, { fontWeight: '600' }]}>ADD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Wallet Section */}
      <View style={styles.wrapperCard}>
        <Text style={styles.subTitle}>Wallet</Text>

        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <View style={styles.row}>
              <Image
                source={require('../../../assets/Icons/wallet.png')}
                style={styles.upiLogo}
                resizeMode="contain"
              />
              <Text style={styles.appName}>SuperWallet</Text>
              <Text style={styles.walletAmount}>₹0.00</Text>
            </View>
            <TouchableOpacity>
              <Text style={[styles.linkText, { fontWeight: '600' }]}>ADD</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <View style={styles.row}>
              <Image
                source={require('../../../assets/Icons/PayMethods/p2.png')}
                style={styles.upiLogo}
                resizeMode="contain"
              />
              <Text style={styles.appName}>Paytm Wallet</Text>
            </View>
            <TouchableOpacity>
              <Text style={[styles.linkText, { fontWeight: '600' }]}>Link</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Net Banking Section */}
      <View style={styles.wrapperCard}>
        <Text style={styles.subTitle}>Net Banking</Text>
        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <View style={styles.row}>
              <Image
                source={require('../../../assets/Icons/account_balance.png')}
                style={styles.upiLogo}
                resizeMode="contain"
              />
              <Text style={styles.appName}>Choose your bank</Text>
            </View>
            <TouchableOpacity>
              <Text style={[styles.linkText, { fontWeight: '600' }]}>ADD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default UPIAppsSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 12,
  },
  wrapperCard: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 14,
    padding: 16,
    marginTop: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  upiLogo: {
    width: 40,
    height: 28,
    marginRight: 12,
  },
  appName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  walletAmount: {
    fontSize: 14,
    color: '#8F8F8F',
    marginLeft: 8,
  },
  checkboxLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginRight: 8,
  },
  inlineCheckboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  linkText: {
    fontSize: 14,
    color: '#2E6074',
    textDecorationLine: 'underline',
  },
});
