import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CustomCommonHeader from '../../Components/Common/CustomCommonHeader';
import CustomCartProductCard from '../../Components/Cards/CustomCartProductCard';
import CustomSimilarProdcuts from '../../Components/CustomSimilarProdcuts';
import { SimilarProductData } from '../../Mock/Data/SimilarProductData';
import OrderPriceDetails from '../../Components/OrderPriceDetails';

const OrderArrivingProduct = () => {
  return (
    <ScrollView style={styles.container}>
      <CustomCommonHeader title="Order" />

      {/* Order ID & Product */}
      <View style={styles.section}>
        <Text style={styles.orderIdText}>ORDER ID: #A1827873463667378</Text>
        <View style={styles.productCardWrapper}>
          <CustomCartProductCard
            ExchangeStyletitle="Cancel"
            ReturnTitle="Track"
            Reordertitle="Reorder"
            ExchangeSizetitle="Size"
            enableExchangeSize={false}
            enableReorder={false}
            label={'Arriving on 22nd May'}
          />
        </View>
      </View>

      {/* Similar Products */}
      <View style={styles.section}>
        <Text style={styles.similarText}>Similar Products for You</Text>
        <CustomSimilarProdcuts data={SimilarProductData} />
      </View>

      {/* Order Price Summary */}
      <View style={styles.priceDetailsSection}>
        <OrderPriceDetails enableCOD={true} enableInvoice={true} />
      </View>
    </ScrollView>
  );
};

export default OrderArrivingProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  orderIdText: {
    color: 'gray',
    fontWeight: '700',
    fontSize: 13,
    marginBottom: 16,
  },
  productCardWrapper: {
    marginBottom: 20,
  },
  similarText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#222',
  },
  priceDetailsSection: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    backgroundColor: '#fff',
  },
});
