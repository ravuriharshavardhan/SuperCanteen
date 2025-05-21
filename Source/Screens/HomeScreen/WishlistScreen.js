import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CustomCommonHeader from '../../Components/Common/CustomCommonHeader';
import CustomSearchInput from '../../Components/CustomSearch';
import WishlistCard from '../../Components/Cards/WishlistCard';

const categories = ['All', 'Watches', 'Shoes', 'Bags', 'Sunglasses', 'Smartwatch'];

const WishlistScreen = () => {
  const products = [
    {
      id: 1,
      image: require('../../../assets/MensWatch/m1b.png'),
      brand: 'Timex',
      title: 'Bella Analog Watch for Men',
      rating: 4.4,
      reviews: '2.3K',
    },
    {
      id: 2,
      image: require('../../../assets/MensWatch/m1b.png'),
      brand: 'Fossil',
      title: 'Grant Chronograph Leather Watch',
      rating: 4.7,
      reviews: '1.8K',
    },
    {
      id: 3,
      image: require('../../../assets/MensWatch/m1b.png'),
      brand: 'Fossil',
      title: 'Grant Chronograph Leather Watch',
      rating: 4.7,
      reviews: '1.8K',
    },
    {
      id: 4,
      image: require('../../../assets/MensWatch/m1b.png'),
      brand: 'Fossil',
      title: 'Grant Chronograph Leather Watch',
      rating: 4.7,
      reviews: '1.8K',
    },
    {
      id: 5,
      image: require('../../../assets/MensWatch/m1b.png'),
      brand: 'Fossil',
      title: 'Grant Chronograph Leather Watch',
      rating: 4.7,
      reviews: '1.8K',
    },
    {
      id: 6,
      image: require('../../../assets/MensWatch/m1b.png'),
      brand: 'Fossil',
      title: 'Grant Chronograph Leather Watch',
      rating: 4.7,
      reviews: '1.8K',
    },
  ];

  return (
    <View style={styles.container}>
      <CustomCommonHeader title="Wishlist" />
      <View style={{marginVertical:20}} >
      <CustomSearchInput />

      </View>


      {/* Horizontal Category Row */}
      <View style={styles.categoryContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((cat, index) => (
            <TouchableOpacity key={index} style={styles.categoryItem}>
              <Text style={styles.categoryText}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Wishlist Grid */}
      <WishlistCard key={products} data={products} />
    </View>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoryContainer: {
    paddingVertical: 10,
    paddingLeft: 12,
  },
  categoryItem: {

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
});
