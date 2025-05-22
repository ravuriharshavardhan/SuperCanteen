import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WishlistCard = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* Close Button */}
      <TouchableOpacity style={styles.closeBtn}>
        <Ionicons name="close" size={16} color="#777" />
      </TouchableOpacity>

      {/* Product Image */}
      <Image source={item.image} style={styles.image} />

      {/* Product Info */}
      <View style={styles.content}>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>

        {/* Rating */}
        <View style={styles.ratingRow}>
          <View style={styles.stars}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Ionicons
                key={i}
                name={
                  i < Math.floor(item.rating)
                    ? 'star'
                    : i < item.rating
                    ? 'star-half'
                    : 'star-outline'
                }
                size={13}
                color="#4CAF50"
              />
            ))}
          </View>
          <Text style={styles.reviewText}>
            {item.rating} | {item.reviews}
          </Text>
        </View>

        {/* CTA Button */}
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartButtonText}>Move to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.id?.toString() || index.toString()}
      numColumns={2}
      contentContainerStyle={styles.listContainer}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default WishlistCard;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 10,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    right: 6,
    top: 6,
    zIndex: 1,
    padding: 4,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
    alignSelf: 'center',
  },
  content: {
    flex: 1,
  },
  brand: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  title: {
    fontSize: 12,
    color: '#555',
    marginBottom: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  stars: {
    flexDirection: 'row',
    marginRight: 4,
  },
  reviewText: {
    fontSize: 11,
    color: '#666',
  },
  cartButton: {
    borderWidth: 1,
    borderColor: '#2E6074',
    borderRadius: 20,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  cartButtonText: {
    color: '#2E6074',
    fontWeight: '600',
    fontSize: 11,
  },
});
