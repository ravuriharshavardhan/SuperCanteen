import React from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const DATA = [
  {
    id: '1',
    title: 'Sonata',
    price: '₹ 4,000',
    image: require('../../assets/MensWatch/m1b.png'),
  },
  {
    id: '2',
    title: 'Sonata',
    price: '₹ 4,000',
    image: require('../../assets/MensWatch/m1b.png'),
  },
  {
    id: '3',
    title: 'Sonata',
    price: '₹ 4,000',
    image: require('../../assets/MensWatch/m1b.png'),
  },
];

const WatchCard = ({ item, useGradientBackground }) => {
  const CardWrapper = useGradientBackground ? LinearGradient : View;
  const wrapperProps = useGradientBackground
    ? {
        colors: ['#FFFFFF', '#7B868C'],
        start: { x: 0, y: 0 },
        end: { x: 0, y: 1 },
        style: styles.card,
      }
    : { style: [styles.card, { backgroundColor: '#fff' }] };

  return (
    <CardWrapper {...wrapperProps}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <View style={styles.footer}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={20} color="#0E2D42" />
        </TouchableOpacity>
      </View>
    </CardWrapper>
  );
};

export default function CustomFavoriteCard({ whiteBg = false }) {
  return (
    <FlatList
      data={DATA}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <WatchCard item={item} useGradientBackground={!whiteBg} />
      )}
      contentContainerStyle={styles.list}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingLeft: 9,
    marginTop: 48,
  },
  card: {
    width: 116,
    height: 176,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 12,
    padding: 8,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0E2D42',
  },
  price: {
    fontSize: 11,
    color: '#555',
  },
});
