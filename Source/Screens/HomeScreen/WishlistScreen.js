import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import CustomCommonHeader from '../../Components/Common/CustomCommonHeader';
import CustomSearchInput from '../../Components/CustomSearch';
import WishlistCard from '../../Components/Cards/WishlistCard';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 40) / 2; // Adjust spacing for 2 cards per row

const categories = ['All', 'Watches', 'Shoes', 'Bags', 'Sunglasses', 'Smartwatch'];

const products = [
  {
    id: '1',
    image: require('../../../assets/MensWatch/m1b.png'),
    brand: 'Timex',
    title: 'Bella Analog Watch for Men',
    rating: 4.4,
    reviews: '2.3K',
  },
  {
    id: '2',
    image: require('../../../assets/MensWatch/m1b.png'),
    brand: 'Fossil',
    title: 'Grant Chronograph Leather Watch',
    rating: 4.7,
    reviews: '1.8K',
  },
  // Add more...
];

const WishlistScreen = () => {
  const renderProduct = ({ item }) => (
    <View style={styles.cardWrapper}>
      <WishlistCard item={item} />
    </View>
  );

  return (
    <View style={styles.container}>
      <CustomCommonHeader title="Wishlist" />

      <View style={styles.searchWrapper}>
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

      {/* Virtualized Wishlist Grid */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderProduct}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        initialNumToRender={4}
        windowSize={10}
        removeClippedSubviews={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchWrapper: {
    marginTop: 20,
    marginHorizontal: 16,
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
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  cardWrapper: {
    width: CARD_WIDTH,
  },
});
