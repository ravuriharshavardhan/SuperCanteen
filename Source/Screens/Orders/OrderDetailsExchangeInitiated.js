import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomCommonHeader from '../../Components/Common/CustomCommonHeader';
import CustomCartProductCard from '../../Components/Cards/CustomCartProductCard';
import CustomSimilarProdcuts from '../../Components/CustomSimilarProdcuts';
import { SimilarProductData } from '../../Mock/Data/SimilarProductData';
import OrderPriceDetails from '../../Components/OrderPriceDetails';

const OrderDetailsExchangeInitiated = () => {
  return (
    <ScrollView style={styles.container}>
      <CustomCommonHeader title="Order" />

      {/* Order ID & Product */}
      <View style={styles.section}>
        <Text style={styles.orderIdText}>ORDER ID: #A1827873463667378</Text>
        <View >
        <CustomCartProductCard  ExchangeStyletitle='Cancel'  ReturnTitle='Track' Reordertitle='c' ExchangeSizetitle='w' enableExchangeSize={false} enableReorder={false}  label={'Exchange will be picked and delivered on 22nd May'} />

        </View>

        <View style={{alignItems:"center",marginVertical:10}} >
            <Image source={require('../../../assets/Icons/ProcessBar.png')}/>
        </View>

      </View>

  

      {/* Similar Products */}
      <View style={styles.section}>
        <Text style={styles.similarText}>Similar Products for You</Text>
        <CustomSimilarProdcuts data={SimilarProductData} />
      </View>

      {/* Order Price Summary */}
      <View style={styles.priceDetailsSection}>
        <OrderPriceDetails enableCOD={false} enableInvoice={false}/>
      </View>
    </ScrollView>
  );
};

export default OrderDetailsExchangeInitiated;

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
