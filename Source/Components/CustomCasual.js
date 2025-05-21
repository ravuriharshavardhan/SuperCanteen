import React, { useRef, useState } from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { COLORS, Height, Width } from '../constants/constants';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomCasual = ({ data = [], cardWidth, cardHeight, cardRadius  ,paddingHorizontal}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef();

  const width = cardWidth || SCREEN_WIDTH - Width(40);
  const height = cardHeight || Height(180);
  const radius = cardRadius || Width(14);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  }).current;

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const renderItem = ({ item }) => (
    <View style={[styles.card, { width, borderRadius: radius }]}>
      <Image
        source={item.image}
        style={{ width: '100%', height, borderRadius: radius  ,borderWidth:1,    borderColor: '#E3E3E3',}}

      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        snapToAlignment="center"
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: paddingHorizontal  }}
        renderItem={renderItem}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfigRef.current}
      />

      <View style={styles.pagination}>
        {(data || []).map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: index === currentIndex ? '#ccc' : '#fff',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default CustomCasual;

const styles = StyleSheet.create({
  container: {
    marginTop: Height(10),
  },
  card: {
    marginRight: Width(12),

  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Height(18),
  },
  dot: {
    width: Width(10),
    height: Width(10),
    borderRadius: Width(5),
    marginHorizontal: Width(4),
    top: Height(-8),
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#E3E3E3',
  },
});
