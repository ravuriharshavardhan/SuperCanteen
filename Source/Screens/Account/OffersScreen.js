import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import OfferCard from '../../Components/Cards/OfferCard';


const OffersScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', padding: 16 }}>
      <ScrollView>
        <OfferCard />
        <View style={{ height: 20 }} />
        <OfferCard
          amount="₹100 OFF"
          condition="On Orders Above ₹499"
          code="FEST100"
          expiry="10 Oct 2025"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OffersScreen;
