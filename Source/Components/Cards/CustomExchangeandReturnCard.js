import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const OrderCard = ({ onPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        {/* Product Image */}
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../../../assets/fashion/FashionCatogory/fc3.png')}
          />
        </View>

        {/* Info Content */}
        <View style={styles.infoContainer}>
          <Text style={styles.brand}>Timex</Text>
          <Text style={styles.productName}>Bella Analog Watch for Women</Text>

          <View style={styles.cancelRow}>
            <Image
              style={styles.cancelIcon}
              source={require('../../../assets/Icons/currency_rupee_circle.png')}
            />
            <Text style={styles.cancelText}>Exchange Delivered on 16th April</Text>
          </View>

          <Text style={styles.cancelText}>Exchange/Return portal closed on 20th April</Text>

          {/* Feedback Section */}
          <View style={styles.feedbackContainer}>
            <Text style={styles.feedbackText}>Rate and Review</Text>
            <View style={styles.starRow}>
              {[...Array(5)].map((_, index) => (
                <FontAwesome
                  key={index}
                  name="star"
                  size={20}
                  color="#D9D9D9"
                  style={styles.starIcon}
                />
              ))}
            </View>
          </View>

          {/* View Order Details Link */}
          <Pressable onPress={onPress}>
            <Text style={styles.linkText}>View Order Details</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const CustomExchangeandReturnCard = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <OrderCard onPress={onPress} />
    </View>
  );
};

export default CustomExchangeandReturnCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    padding: 16,
    width: '100%',
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
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  cancelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  cancelIcon: {
    marginRight: 6,
    height: 20,
    width: 20,
  },
  cancelText: {
    fontSize: 12.5,
    color: '#1C1B1F78',
  },
  linkText: {
    color: '#2E6074',
    textDecorationLine: 'underline',
    fontSize: 13,
    marginTop: 10,
  },
  feedbackContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  feedbackText: {
    fontSize: 15,
    color: '#333',
    marginBottom: 10,
    fontWeight: '600',
  },
  starRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    marginRight: 8,
  },
});
