import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const OfferCardItem = ({ item, enableBadg, enablePriceRow }) => {
  const { image, title, price, mrp, discount } = item;

  return (
    <LinearGradient
      colors={['#D4E7F2', '#FFFFFF']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.card}
    >
      {enableBadg && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{discount}%{'\n'}OFF</Text>
        </View>
      )}

      <Image
        source={image}
        style={styles.image}
        resizeMode="contain"
        onError={(e) => {
          console.log('Image load error:', e.nativeEvent.error);
        }}
      />

      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>

        {enablePriceRow && (
          <View style={styles.priceRow}>
            <Text style={styles.price}>₹{price}</Text>
            <Text style={styles.mrp}>M.R.P ₹{mrp}</Text>
          </View>
        )}
      </View>
    </LinearGradient>
  );
};

const CustomOfferCard = ({ item, enableBadg = true, enablePriceRow = true }) => {
  return (
    <FlatList
      nestedScrollEnabled={true}
      horizontal
      data={item}
      keyExtractor={(offer) => offer.id}
      renderItem={({ item }) => (
        <OfferCardItem item={item} enableBadg={enableBadg} enablePriceRow={enablePriceRow} />
      )}
      contentContainerStyle={styles.list}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CustomOfferCard;

const styles = StyleSheet.create({
  list: {
    paddingLeft: 9,
    paddingTop: 30,
    paddingBottom: 20,
  },
  card: {
    width: 116,
    height: 185,
    marginRight: 12,
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  badge: {
    position: 'absolute',
    top: -15,
    left: -10,
    backgroundColor: '#8B0000',
    borderRadius: 999,
    width: 40,
    height: 40,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 100,
    marginTop: 10,
    borderRadius: 4,
  },
  details: {
    marginTop: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  price: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 6,
  },
  mrp: {
    fontSize: 9,
    color: '#888',
    textDecorationLine: 'line-through',
  },
});
