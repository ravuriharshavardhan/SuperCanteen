import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CustomAuthButton from '../CustomAuthButton';

const CustomCartProductCard = ({
  onCancel,
  onTrack,
  onReplace,
  onReturn,
  label,
  label1,
  enableReorder = true,
  enableExchangeStyle = true,
  enableExchangeSize = true,
  enableReturn = true,
  Reordertitle = 'Reorder',
  ExchangeStyletitle = 'Exchange Style',
  ExchangeSizetitle = 'Exchange Size',
  ReturnTitle = 'Return',
}) => {
  // Build the array of buttons to show dynamically
  const buttons = [];

  if (enableReorder) {
    buttons.push({
      title: Reordertitle,
      onPress: onCancel,
    });
  }
  if (enableExchangeStyle) {
    buttons.push({
      title: ExchangeStyletitle,
      onPress: onTrack,
    });
  }
  if (enableExchangeSize) {
    buttons.push({
      title: ExchangeSizetitle,
      onPress: onReplace,
    });
  }
  if (enableReturn) {
    buttons.push({
      title: ReturnTitle,
      onPress: onReturn,
    });
  }

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../../../assets/Icons/WatchIcon.png')}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.brand}>Timex</Text>
          <Text style={styles.productName}>Bella Analog Watch for Women</Text>
          <Text style={styles.productMeta}>Size: Onesize</Text>
          <Text style={styles.productMeta}>Quantity: 1</Text>
          <Text style={styles.productMeta}>₹40,000</Text>
          <Text style={styles.productMeta}>{label}</Text>
          <Text style={styles.productMeta}>{label1}</Text>
        </View>
      </View>

      {/* Button Row - dynamic spacing */}
      <View style={styles.buttonRow}>
        {buttons.map((btn, index) => (
          <View key={index} style={styles.buttonContainer}>
            <CustomAuthButton
              width={'100%'}
              height={32}
              title={btn.title}
              textStyle={styles.buttonText}
              backgroundColor="#fff"
              onPress={btn.onPress}
              borderColor="#2E607426"
              borderWidth={1}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default CustomCartProductCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    padding: 16,
    width: '100%',
    marginBottom: 16,
    backgroundColor: '#fff',
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
    width: 80,
    height: 80,
    resizeMode: 'contain',
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
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
    flexShrink: 1,
  },
  productMeta: {
    fontSize: 13,
    color: '#555',
    marginBottom: 3,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 4,
  },
  buttonText: {
    color: '#2E6074E8',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
});
