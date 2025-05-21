import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CustomAuthButton from './CustomAuthButton';

const OrderCard = ({
  onCancel,
  onTrack,
  onReplace,
  onViewDetails,
  cancelTitle = 'Cancel',
  trackTitle = 'Track',
  replaceTitle = 'Replace',
  enableCancel = true,
  enableTrack = true,
  enableReplace = true,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../../assets/Icons/WatchIcon.png')}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.brand}>Timex</Text>
          <Text style={styles.productName}>Arriving by Saturday, 24th May</Text>

          <View style={styles.productRow}>
            <Image
              style={styles.truckIcon}
              source={require('../../assets/Icons/delivery_truck_speed.png')}
            />
            <Text style={styles.productDescription}>
              Bella Analog Watch for Women
            </Text>
          </View>

          <Text
            onPress={onViewDetails}
            style={styles.linkText}
          >
            View Order Details
          </Text>

          <View style={styles.buttonRow}>
            {enableCancel && (
              <CustomAuthButton
                width={65}
                height={30}
                title={cancelTitle}
                textStyle={[styles.buttonText, { fontSize: 12 }]}
                backgroundColor="#fff"
                onPress={onCancel}
                borderColor="#2E607426"
                borderWidth={1}
              />
            )}
            {enableTrack && (
              <CustomAuthButton
                width={65}
                height={30}
                title={trackTitle}
                textStyle={[styles.buttonText, { fontSize: 12 }]}
                backgroundColor="#fff"
                onPress={onTrack}
                borderColor="#2E607426"
                borderWidth={1}
              />
            )}
            {enableReplace && (
              <CustomAuthButton
                width={65}
                height={30}
                title={replaceTitle}
                textStyle={[styles.buttonText, { fontSize: 12 }]}
                backgroundColor="#fff"
                onPress={onReplace}
                borderColor="#2E607426"
                borderWidth={1}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    padding: 16,
    width: 360,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconContainer: {
    backgroundColor: '#D4DEF226',
    height: 120,
    width: 100,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  icon: {
    width: 100,
    height: 100,
  },
  infoContainer: {
    flex: 1,
  },
  brand: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E6074',
    marginBottom: 4,
  },
  productName: {
    fontSize: 12,
    color: '#333',
    marginBottom: 6,
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    marginBottom: 6,
  },
  truckIcon: {
    width: 20,
    height: 20,
  },
  productDescription: {
    fontSize: 12,
    color: '#8E8E8E',
  },
  linkText: {
    color: '#2E6074',
    textDecorationLine: 'underline',
    fontSize: 13,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 8,
  },
  buttonText: {
    color: '#2E6074E8',
    fontSize: 14,
  },
});
