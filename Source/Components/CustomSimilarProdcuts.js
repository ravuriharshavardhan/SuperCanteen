import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CustomSimilarProdcuts = ({ cardHeight = 230, cardWidth = 160, data }) => {
  const renderItem = ({ item }) => {
    const fullStars = Math.floor(item.rating);
    const stars = [...Array(5)].map((_, i) => (
      <FontAwesome
        key={i}
        name="star"
        size={14}
        color={i < fullStars ? 'green' : 'lightgray'}
        style={{ marginRight: 2 }}
      />
    ));

    return (
      <View style={[styles.card, { height: cardHeight, width: cardWidth }]}>
        <Image
          source={ item.image }
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>
          <Text style={styles.bold}>Timex </Text>
          {item.name.length > 12 ? item.name.slice(0, 12) + '..' : item.name}
        </Text>
        <Text style={styles.price}>₹{item.price}</Text>
        <View style={styles.ratingRow}>
          {stars}
          <Text style={styles.reviews}>{item.reviews}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatListContent}
    />
  );
};

export default CustomSimilarProdcuts;

const styles = StyleSheet.create({
  flatListContent: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    marginRight: 14,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    
  },
  image: {
    width: '100%',
    height: 130,
    borderRadius: 4,
  },
  title: {
    fontSize: 14,
    color: '#333',
    marginTop: 6,
  },
  bold: {
    fontWeight: 'bold',
  },
  price: {
    fontSize: 15,
    fontWeight: '600',
    marginVertical: 4,
    color: '#000',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviews: {
    marginLeft: 6,
    color: 'gray',
    fontSize: 13,
  },
});
