import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';

const productDetails = [
  { label: 'Features', value: 'Reset Time' },
  { label: 'Strap Material', value: 'Stainless Steel' },
  { label: 'Make', value: 'Non-Swiss Made' },
  { label: 'Strap Closure', value: 'Foldover' },
  { label: 'Water Resistance', value: 'Water Resistant' },
  { label: 'Power Source', value: 'Battery' },
  { label: 'Display Type', value: 'Analogue' },
  { label: 'Warranty Period', value: '2 Year' },
];

const CustomProductDetailsData = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Product Details</Text>

      <View style={styles.grid}>
        {productDetails.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity>
        <Text style={styles.more}>More</Text>
      </TouchableOpacity>

      <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Ratings & Reviews</Text>
      <View style={styles.ratingRow}>
        <Text style={styles.ratingNumber}>4.9</Text>
        <FontAwesome name="star" size={18} color="#4CAF50" style={styles.icon} />
        <Text style={styles.grayText}>895 Ratings | 200 Reviews</Text>
        <FontAwesome name="certificate" size={18} color="#4CAF50" style={styles.icon} />
        <TouchableOpacity>
          <Text style={styles.viewMore}>View More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '48%',
    marginBottom: 16,
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
    color: '#333',
  },
  value: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  more: {
    color: '#5a9cae',
    textDecorationLine: 'underline',
    fontSize: 14,
    marginTop: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  ratingNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginRight: 4,
  },
  icon: {
    marginHorizontal: 4,
  },
  grayText: {
    color: '#666',
    fontSize: 14,
    marginRight: 8,
  },
  viewMore: {
    color: '#5a9cae',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});

export default CustomProductDetailsData;
