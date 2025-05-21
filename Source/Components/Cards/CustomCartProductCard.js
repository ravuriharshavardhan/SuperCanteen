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

      <View style={styles.buttonRow}>
        {enableReorder && (
          <CustomAuthButton
            width={82}
            height={32}
            title={Reordertitle}
            textStyle={[styles.buttonText, { fontSize: 10 }]}
            backgroundColor="#fff"
            onPress={onCancel}
            borderColor="#2E607426"
            borderWidth={1}
            marginLeft={1}
          />
        )}
        {enableExchangeStyle && (
          <CustomAuthButton
            width={90}
            height={32}
            title={ExchangeStyletitle}
            textStyle={[styles.buttonText, { fontSize: 10 }]}
            backgroundColor="#fff"
            onPress={onTrack}
            borderColor="#2E607426"
            marginLeft={1}
            borderWidth={1}
          />
        )}
        {enableExchangeSize && (
          <CustomAuthButton
            width={90}
            height={32}
            title={ExchangeSizetitle}
            textStyle={[styles.buttonText, { fontSize: 10 }]}
            backgroundColor="#fff"
            onPress={onReplace}
            borderColor="#2E607426"
            borderWidth={1}
            marginLeft={1}
          />
        )}
        {enableReturn && (
          <CustomAuthButton
            width={72}
            height={32}
            title={ReturnTitle}
            textStyle={[styles.buttonText, { fontSize: 10 }]}
            backgroundColor="#fff"
            onPress={onReturn}
            borderColor="#2E607426"
            borderWidth={1}
            marginLeft={1}
          />
        )}
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
  },
  productMeta: {
    fontSize: 13,
    color: '#555',
    marginBottom: 3,
  },
  buttonRow: {
    flexDirection: 'row',
   
    columnGap:1,
  
    marginTop: 12,

  },
  buttonText: {
    color: '#2E6074E8',
    fontSize: 13,
  },
});
