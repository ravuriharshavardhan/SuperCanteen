import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';

const CustomCustomersPhotoCard = ({ cardHeight = 200, cardWidth = 160, data }) => {
  const renderItem = ({ item }) => {
    const fullStars = Math.floor(item.rating);
   
    return (
      <View style={[styles.card, { height: cardHeight, width: cardWidth }]}>
         <Image
        source={typeof item.image === 'string' ? { uri: item.image } : item.image}
        style={styles.image}
        resizeMode="contain"
      />
      
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
    />
  );
};

export default CustomCustomersPhotoCard;

const styles = StyleSheet.create({
  card: {

    borderRadius: 10,
    marginRight: 14,
    padding: 10,
   
  },
  image: {
    width: '100%',
    height: 130,
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
