import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React from 'react';
import CustomCommonHeader from '../../Components/Common/CustomCommonHeader';
import CustomCouponCard from '../../Components/Common/CustomCouponCard';

const categories = ['All', 'Trending', 'Biggest Discount', 'Expiring Soon', 'Recently Added'];

const CouponsScreen = () => {
  return (
    <View style={styles.container}>
      <CustomCommonHeader title={"Coupons"} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Categories */}
        <View style={styles.categoryContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((cat, index) => (
              <TouchableOpacity key={index} style={styles.categoryItem}>
                <Text style={styles.categoryText}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Label */}
        <Text style={styles.sectionTitle}>YOUR COUPONS</Text>

        {/* Coupons Grid */}
        <CustomCouponCard />
      </ScrollView>
    </View>
  );
};

export default CouponsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  categoryContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 16,
  },
  categoryItem: {
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 12,
    color: '#2E6074',
    fontWeight: '600',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
});
