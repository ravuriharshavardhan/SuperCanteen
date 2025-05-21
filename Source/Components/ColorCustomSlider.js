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
import { Height, Width, FontSize } from '../constants/constants';
import LinearGradient from 'react-native-linear-gradient';
import CustomFavoriteCard from './CustomFavoriteCard';

const ColorCustomSlider = ({ data }) => {
  const fallbackImage = require('../../assets/Icons/WatchIcon.png');

  return (
    <View style={styles.wrapper}>
      {/* Background Image */}
      <Image
        style={styles.background}
        source={require('../../assets/Background/SliderBg.png')}
      />

      {/* Title and Heart Icon */}
      <View style={styles.header}>
        <Text style={styles.title}>Your Closet Called — It Wants These</Text>
        <Ionicons name="heart" size={20} color="#B71C1C" />
      </View>

      <View style={{ marginHorizontal: 20 }} >
        <CustomFavoriteCard />

      </View>





    </View>
  );
};

export default ColorCustomSlider;

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    paddingBottom: Height(20),
  },
  background: {
    position: 'absolute',
    width: Width(330),
    height: Height(220),
    borderRadius: Width(18),
    alignSelf: 'center',
    top: 0,
  },
  header: {
    paddingHorizontal: Width(24),
    paddingTop: Height(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: FontSize(14),
    fontWeight: 'bold',
    width: Width(240),
  },
  listContent: {
    paddingHorizontal: Width(16),
    paddingTop: Height(10),
  },
  cardGradient: {
    width: Width(130),
    height: Height(166),
    borderRadius: Width(18),
    marginRight: Width(14),
    overflow: 'hidden',
  },
  cardContent: {
    flex: 1,
    borderRadius: Width(18),
  },
  image: {
    width: '100%',
    height: Height(90),
    borderTopLeftRadius: Width(18),
    borderTopRightRadius: Width(18),
  },
  cardBottom: {
    backgroundColor: '#092E3DE8',
    paddingVertical: Height(6),
    paddingHorizontal: Width(8),
    alignItems: 'center',
    justifyContent: 'center',
    height: Height(36),
    marginTop: 'auto',
  },
  productTitle: {
    fontSize: FontSize(12),
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
});
