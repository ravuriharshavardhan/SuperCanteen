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
        <Text style={styles.title}>{item.title}</Text>

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
                size={14}
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
      columnWrapperStyle={{ justifyContent: 'flex-start', gap: 18}}
    />
  );
};

export default WishlistCard;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  card: {
    width: 162,
    height: 230,
    marginLeft: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginBottom: 16,
    position: 'relative',
    padding: 8,
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
    marginBottom: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  brand: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 12,
    color: '#555',
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
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
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 4,
    height:20,
    width:90,
    marginHorizontal:50
  },
  cartButtonText: {
    color: '#2E6074',
    fontWeight: '600',
    fontSize: 8,
    paddingLeft:20
  },
});
