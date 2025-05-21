import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const OrderCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../../../assets/fashion/FashionCatogory/fc3.png')}

          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.brand}>Timex</Text>
          <Text style={styles.productName}>Bella Analog Watch for Women</Text>

          <View style={styles.cancelRow}>
            <Image style={styles.cancelIcon} source={require('../../../assets/Icons/cancel.png')}/>
            <Text style={styles.cancelText}>Exchange Delivered on 16th April</Text>
          </View>

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
          

          <Text style={styles.linkText}>View Order Details</Text>
        </View>
      </View>
    </View>
  );
};

const CustomExchangeCard = () => {
  return (
    <View style={styles.container}>
      <OrderCard />
    </View>
  );
};

export default CustomExchangeCard;

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
    width: 80,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  icon: {
    width: 70,
    height: 60,
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
    height:20,
    width:20
  },
  cancelText: {
    fontSize: 14,
    color: '#1C1B1F78',
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
    color: '#000',
    fontSize: 14,
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
