import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import CustomHeader from '../../Components/CustomHeader';
import CustomSearchInput from '../../Components/CustomSearch';
import { Height, Width } from '../../constants/constants';
import CustomCasual from '../../Components/CustomCasual';
import CustomCategoryList from '../../Components/CustomCategoryList';
import Fashion from '../../Mock/Data/Fashion';
import CustomProductCard from '../../Components/CustomProductCard';
import Products from '../../Mock/Data/Prodcuts';
import ColorCustomSlider from '../../Components/ColorCustomSlider';
import FashionCatogory from '../../Mock/Data/FashionCatogory';
import FashionData from '../../Mock/Data/FashionData';
import CustomOfferCard from '../../Components/CustomOfferCard';
import offerData from '../../Mock/Data/offerData';
import OccationData from '../../Mock/Data/OccationData';

const Sliders = [
  { id: 1, image: require('../../../assets/Sliders/Slider1.png') },
  { id: 2, image: require('../../../assets/Sliders/Slider1.png') },
  { id: 3, image: require('../../../assets/Sliders/Slider1.png') },
];

const FashionScreen = ({ navigation }) => {
  const renderHeader = () => (
    <View style={styles.container}>
      <CustomHeader label="Fashion" />

      <View style={styles.searchContainer}>
        <CustomSearchInput WidthSize={Width(320)} />
      </View>

      <View style={styles.sectionSpacing}>
        <CustomCasual data={Sliders} />
      </View>

      <View style={styles.sectionSpacing}>
        <CustomCategoryList
          horizontal
          borderRadius={1}
          width={Width(70)}
          height={Height(35)}
          data={FashionCatogory}
          bgColor="#2E60742B"
          navigation={navigation}
          imageSize={Width(50)}
        />
      </View>

      <View style={styles.sectionSpacing}>
        <CustomProductCard
          bgColor="#D4DEF226"
          numColumns={3}
          width={Width(90)}
          height={Height(60)}
          horizontal={false}
          data={FashionData}
          imageSize={70}
          gap={20}
          navigation={navigation}
        />
      </View>

      <View style={styles.sectionSpacing}>
        <ColorCustomSlider data={Products} />
      </View>

      <View style={{ marginVertical: 20 }}>
        <CustomProductCard
          bgColor="#D4DEF226"
          numColumns={3}
          width={Width(90)}
          height={Height(60)}
          horizontal={false}
          data={FashionData}
          imageSize={70}
          gap={20}
          navigation={navigation}
        />
      </View>

      <View>
        <Text>SHOP BY OCASSION</Text>
        <CustomOfferCard
          enableBadg={false}
          enablePriceRow={false}
          item={OccationData}
        />
      </View>
    </View>
  );

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      data={[]} // No main list items – everything is in the header
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default FashionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: Width(16),
  },
  searchContainer: {
    marginTop: Height(16),
    alignItems: 'center',
  },
  sectionSpacing: {
    marginTop: 20,
  },
});
