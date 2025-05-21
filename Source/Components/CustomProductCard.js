import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FontSize, Height, Width } from '../constants/constants';

const CustomProductCard = ({
  data = [],
  selected,
  onSelect = () => {},
  bgColor = '#D4E7F2',
  width = Width(45), // Adjusted for 2 columns
  height = Width(45),
  imageSize = Width(30),
  borderRadius = Width(16),
  selectedBorderColor = COLORS.primary,
  textColor = '#000',
  containerStyle,
  textStyle,
  horizontal = false,
  numColumns = 1,
  gap = Width(12),
  horizontalGap = Width(10),
  verticalGap = Height(14),
  onFavoritePress = () => {},
  navigation
}) => {
  return (
    <View style={[{ paddingVertical: Height(10) }, containerStyle]}>
      <FlatList
        data={data}
        horizontal={horizontal}
        numColumns={numColumns}
        keyExtractor={(item) => item.name}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{


        }}
        columnWrapperStyle={
          !horizontal
            ? {
                justifyContent: 'space-between',
                marginBottom: verticalGap,
              }
            : undefined
        }
        
        renderItem={({ item, index }) => {
          const isSelected = selected === item.name;
          const isLastItem = index === data.length - 1;

          return (
            <TouchableOpacity
            onPress={() => {
              onSelect(item.name); // ✅ update selected
              if (item.screen && navigation) {
                navigation.navigate(item.screen); // ✅ navigate if screen exists
              }
            }}
              style={[
                styles.card,
                {
                  marginRight: horizontal && !isLastItem ? horizontalGap : 0,
                  marginBottom: !horizontal ? verticalGap : 0,
                  width,
                },
              ]}
              
            >
              {/* Image Container */}
              <View
                style={[
                  styles.imageWrapper,
                  {
                    width,
                    height,
                    borderRadius,
                    backgroundColor: bgColor,
                    borderWidth: isSelected ? 2 : 0,
                    borderColor: isSelected ? selectedBorderColor : 'transparent',
                  },
                ]}
              >
                <Image
                  source={item.image}
                  style={{ width: imageSize, height: imageSize }}
                  resizeMode="contain"
                />
              </View>

              {/* Top Row: Label + Heart */}
              <View style={[styles.topRow, { width: width - 4 }]}>
                <Text style={styles.label}>{item.label || 'Label'}</Text>
                <TouchableOpacity onPress={() => onFavoritePress(item)}>
                  <Ionicons
                    name={item.isFavorite ? 'heart' : 'heart-outline'}
                    size={18}
                    color={item.isFavorite ? 'red' : COLORS.grey}
                  />
                </TouchableOpacity>
              </View>

              {/* Title */}
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={[styles.title, { width }]}
              >
                {item.title || item.name}
              </Text>

              {/* Price */}
              <Text style={[styles.price, { width }]}>
                {item.price ? `₹${item.price}` : ''}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CustomProductCard;

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
    marginTop: 6,
  },
  label: {
    fontSize: FontSize(10),
    color: COLORS.grey,
    fontWeight: '900',
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Height(6),
  },
  title: {
    fontSize: FontSize(12),
    color: '#545454',
    marginTop: 6,
  },
  price: {
    fontSize: FontSize(12),
    color: '#545454',
    marginTop: 2,
    textAlign: 'left',
    paddingLeft: 4,
  },
});
