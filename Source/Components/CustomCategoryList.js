import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { COLORS, FontSize, Height, Width } from '../constants/constants';

const CustomCategoryList = ({
  data = [],
  selected,
  onSelect = () => {},
  bgColor = '#D4E7F2',
  width = Width(40),
  height = Width(60),
  imageSize = Width(32),
  borderRadius = Width(25),
  selectedBorderColor = COLORS.primary,
  textColor = COLORS.text,
  containerStyle,
  textStyle,
  horizontal,
  numColumns = 1,
  gap = Width(14),
  navigation, // ✅ receive navigation prop
}) => {
  return (
    <View style={[containerStyle]}>
      <FlatList
      nestedScrollEnabled={true}
        numColumns={numColumns}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ paddingHorizontal: Width(10) }}
        renderItem={({ item }) => {
          const isSelected = selected === item.name;
          return (
            <TouchableOpacity
              onPress={() => {
                onSelect(item.name); // ✅ update selected
                if (item.screen && navigation) {
                  navigation.navigate(item.screen); // ✅ navigate if screen exists
                }
              }}
              style={[styles.categoryContainer, { marginRight: gap }]}
            >
              <View
                style={{
                  width: width,
                  height: height,
                  borderRadius: borderRadius,
                  backgroundColor: bgColor,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: Height(6),
                  // borderWidth: isSelected ? 2 : 0,
                  // borderColor: isSelected ? selectedBorderColor : 'transparent',
                }}
              >
                <Image
                  source={item.image}
                  style={{
                    width: imageSize,
                    height: imageSize,
                  }}
                  resizeMode="contain"
                />
              </View>
              <Text
                style={[
                  styles.categoryText,
                  textStyle,
                  { color: isSelected ? selectedBorderColor : textColor },
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CustomCategoryList;

const styles = StyleSheet.create({
  categoryContainer: {
    alignItems: 'center',
  },
  categoryText: {
    fontSize: FontSize(12),
    fontFamily: 'Inter_28pt-Medium',
    textAlign: 'center',
  },
});
