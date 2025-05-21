import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomCommonHeader from '../../Components/Common/CustomCommonHeader';
import CustomCartProductCard from '../../Components/Cards/CustomCartProductCard';
import CustomSimilarProdcuts from '../../Components/CustomSimilarProdcuts';
import { SimilarProductData } from '../../Mock/Data/SimilarProductData';
import OrderPriceDetails from '../../Components/OrderPriceDetails';

const OrderTrackScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <CustomCommonHeader title="Order" />

      {/* Order ID & Product */}
      <View style={styles.section}>
        <Text style={styles.orderIdText}>ORDER ID: #A1827873463667378</Text>
        <CustomCartProductCard  label1={'Exchange/Return portal Closed on 24th May.'} enableExchangeSize={false}  enableExchangeStyle={false} enableReturn={false} enableReorder={false} label={'Delivered on 20th May'} />
      </View>

      {/* Rate & Review */}
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

      {/* Similar Products */}
      <View style={styles.section}>
        <Text style={styles.similarText}>Similar Products for You</Text>
        <CustomSimilarProdcuts data={SimilarProductData} />
      </View>

      {/* Order Price Summary */}
      <View style={styles.priceDetailsSection}>
        <OrderPriceDetails enableCOD={true} enableInvoice={true}/>
      </View>
    </ScrollView>
  );
};

export default OrderTrackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  orderIdText: {
    color: 'gray',
    fontWeight: '700',
    fontSize: 13,
    marginBottom: 10,
  },
  feedbackContainer: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
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
  similarText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#222',
  },
  priceDetailsSection: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    backgroundColor: '#fff',
  },
});
